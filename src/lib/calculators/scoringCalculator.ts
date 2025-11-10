/**
 * University Admission Score Calculator
 * 
 * This module provides a structured, simplified approach to calculating university admission scores
 * based on programme-specific conditions. The calculator processes both required subjects (ENG, CHIN, MATH, CSD)
 * and elective subjects based on programme-specific conditions.
 * 
 * Key Features:
 * - Modular design with separate functions for different calculation phases
 * - Proper TypeScript typing throughout
 * - Support for complex constraint matching (categories, subcategories, subject exclusions)
 * - Comprehensive error handling and validation
 * - Conditions-only structure (no dependency on calculation.method)
 * 
 * Main Functions:
 * - calculateProgrammeScore(): Core calculation engine that works with any programme conditions
 * - runQuickTest(): Test function with sample data
 * - testNewCalculation(): Legacy compatibility function
 */

import {
    ProgrammeEntry,
    StudentSubject,
    University,
} from "../core/types";
import { subjectCodes } from "../data/subjects/subjects";
import { allUniversities } from "../data/universities";
import { scoreConversion } from "../data/universities/scoreConversion";
import { uuid } from "../helpers/uuid";

// Types for internal calculations
interface ProcessedSubject extends StudentSubject {
    calculatedScore: number;
    rawScore: number;
    isUsed: boolean;
    comments: Array<{ type: string; message: string }>;
    variable?: string;
}

interface CalculationResult {
    subjectScores: ProcessedSubject[];
    bestN: ProcessedSubject[];
    totalScore: number;
    csdStatus: "Attained" | "Not Attained" | "Not Required";
    breakdown: {
        requiredSubjects: number;
        electiveSubjects: number;
        finalScore: number;
    };
}

interface CalculationCondition {
    subject?: string;
    variable?: string;
    grade?: string;
    minGrade?: string;
    multiplier?: number;
    includeCategories?: string[];
    excludeCategories?: string[];
    includeSubCategories?: string[];
    excludeSubCategories?: string[];
    includeSubjects?: string[];
    excludeSubjects?: string[];
    includeAdditionalSubjects?: string[];
}

/**
 * Get score for a subject based on university's conversion table
 */
function getSubjectScore(studentSubject: StudentSubject, university: University): number {
    const category = studentSubject.category.toUpperCase();
    const universityConversion = scoreConversion[university];

    if (!universityConversion) {
        console.warn(`No score conversion found for university: ${university}`);
        return 0;
    }

    const categoryConversion = universityConversion[category] || universityConversion["others"];

    if (!categoryConversion) {
        console.warn(`No category conversion found for category: ${category} in university: ${university}`);
        return 0;
    }

    const abbreviationArray = Array.isArray(studentSubject.abbreviation)
        ? studentSubject.abbreviation
        : [studentSubject.abbreviation];

    const abbr = abbreviationArray.find((abbr) => abbr && abbr.toLowerCase() in categoryConversion);
    const subjectConversion = categoryConversion[abbr?.toLowerCase() || "others"];
    const gradeConversion = subjectConversion ? subjectConversion[studentSubject.grade] : 0;

    return gradeConversion || 0;
}

/**
 * Check if a subject is valid (exists in subject codes)
 */
function isValidSubject(subject: StudentSubject): boolean {
    return Array.isArray(subject.abbreviation)
        ? subject.abbreviation.some((abbr) => subjectCodes.includes(abbr))
        : subjectCodes.includes(subject.abbreviation);
}

/**
 * Check if subject matches a specific condition
 */
function subjectMatchesCondition(subject: StudentSubject, condition: CalculationCondition): boolean {
    // Check if it's a specific subject requirement
    if (condition.subject) {
        return Array.isArray(subject.abbreviation)
            ? subject.abbreviation.includes(condition.subject)
            : subject.abbreviation === condition.subject;
    }

    // For variable conditions, check constraints
    if (condition.variable) {
        return subjectMatchesConstraints(subject, condition);
    }

    return false;
}

/**
 * Check if subject matches variable constraints
 */
function subjectMatchesConstraints(subject: StudentSubject, condition: CalculationCondition): boolean {
    // Check includeAdditionalSubjects first (specific subjects allowed)
    if (condition.includeAdditionalSubjects && condition.includeAdditionalSubjects.length > 0) {
        const hasIncludedSubject = condition.includeAdditionalSubjects.some((abbr: string) =>
            Array.isArray(subject.abbreviation)
                ? subject.abbreviation.includes(abbr)
                : subject.abbreviation === abbr
        );
        if (hasIncludedSubject) return true;
    }

    // Check category constraints
    if (condition.includeCategories && condition.includeCategories.length > 0) {
        if (!condition.includeCategories.includes(subject.category)) {
            return false;
        }
    }

    // Check subcategory exclusions
    if (condition.excludeSubCategories && condition.excludeSubCategories.length > 0) {
        if (condition.excludeSubCategories.includes(subject.subCategory)) {
            return false;
        }
    }

    // Check subject exclusions
    if (condition.excludeSubjects && condition.excludeSubjects.length > 0) {
        const isExcluded = condition.excludeSubjects.some((abbr: string) =>
            Array.isArray(subject.abbreviation)
                ? subject.abbreviation.includes(abbr)
                : subject.abbreviation === abbr
        );
        if (isExcluded) return false;
    }

    return true;
}

/**
 * Check if subject meets grade requirements
 */
function meetsGradeRequirements(subject: StudentSubject, condition: CalculationCondition, university: University): boolean {

    // Check specific grade requirement
    if (condition.grade && subject.grade !== condition.grade) {
        return false;
    }

    // Check minimum grade requirement
    if (condition.minGrade) {
        const score = getSubjectScore(subject, university);
        const minScore = getSubjectScore({ ...subject, grade: condition.minGrade }, university);
        if (score < minScore) {
            return false;
        }
    }

    return true;
}

/**
 * Process specific subject requirements (ENG, CHIN, MATH, CSD, etc.)
 */
function processRequiredSubjects(
    studentSubjects: StudentSubject[],
    conditions: CalculationCondition[],
    university: University
): { processedSubjects: ProcessedSubject[]; csdStatus: "Attained" | "Not Attained" | "Not Required"; totalScore: number } {
    const processedSubjects: ProcessedSubject[] = [];
    let csdStatus: "Attained" | "Not Attained" | "Not Required" = "Not Required";
    let totalScore = 0;

    const subjectConditions = conditions.filter(cond => cond.subject);

    for (const subject of studentSubjects) {
        if (!isValidSubject(subject)) {
            processedSubjects.push({
                ...subject,
                calculatedScore: 0,
                rawScore: 0,
                isUsed: false,
                comments: [{ type: "error", message: "Subject not found" }]
            });
            continue;
        }

        const matchingCondition = subjectConditions.find(cond =>
            subjectMatchesCondition(subject, cond)
        );

        if (matchingCondition) {
            const rawScore = getSubjectScore(subject, university);
            const meetsRequirements = meetsGradeRequirements(subject, matchingCondition, university);
            const calculatedScore = meetsRequirements ? rawScore * (matchingCondition.multiplier || 1) : 0;
            const comments: Array<{ type: string; message: string }> = [];

            // Handle CSD special case
            if (matchingCondition.subject === "CSD") {
                if (matchingCondition.grade === "Attained" && subject.grade === "Attained") {
                    csdStatus = "Attained";
                } else if (matchingCondition.grade === "Attained" && subject.grade !== "Attained") {
                    csdStatus = "Not Attained";
                    comments.push({ type: "error", message: "CSD not attained" });
                }
                // Don't add CSD to total score calculation
            } else if (meetsRequirements) {
                totalScore += calculatedScore;
            }

            if (!meetsRequirements && matchingCondition.subject !== "CSD") {
                comments.push({
                    type: "error",
                    message: matchingCondition.grade
                        ? `Required grade: ${matchingCondition.grade}, got: ${subject.grade}`
                        : `Minimum grade: ${matchingCondition.minGrade}, got: ${subject.grade}`
                });
            }

            const processedSubject: ProcessedSubject = {
                ...subject,
                calculatedScore,
                rawScore,
                isUsed: meetsRequirements,
                comments
            };

            processedSubjects.push(processedSubject);
        }
    }

    return { processedSubjects, csdStatus, totalScore };
}

/**
 * Process variable/elective subject requirements (ELEC1, ELEC2, etc.)
 */
function processElectiveSubjects(
    studentSubjects: StudentSubject[],
    conditions: CalculationCondition[],
    university: University,
    usedSubjects: Set<string>,
    remainingSlots: number
): { processedSubjects: ProcessedSubject[]; totalScore: number } {
    const processedSubjects: ProcessedSubject[] = [];
    let totalScore = 0;

    const variableConditions = conditions.filter(cond => cond.variable);

    if (variableConditions.length === 0 || remainingSlots <= 0) {
        return { processedSubjects, totalScore };
    }

    // Collect all eligible elective subjects
    const eligibleElectives: Array<ProcessedSubject & { conditionIndex: number }> = [];

    for (const subject of studentSubjects) {
        if (!isValidSubject(subject)) continue;

        // Skip if already used as required subject
        const subjectKey = Array.isArray(subject.abbreviation)
            ? subject.abbreviation[0]
            : subject.abbreviation;

        if (usedSubjects.has(subjectKey)) continue;

        // Check if subject matches any variable condition
        for (let i = 0; i < variableConditions.length; i++) {
            const condition = variableConditions[i];

            if (subjectMatchesConstraints(subject, condition) &&
                meetsGradeRequirements(subject, condition, university)) {

                const rawScore = getSubjectScore(subject, university);
                const calculatedScore = rawScore * (condition.multiplier || 1);

                eligibleElectives.push({
                    ...subject,
                    calculatedScore,
                    rawScore,
                    isUsed: false,
                    comments: [],
                    variable: condition.variable,
                    conditionIndex: i
                });
                break; // Subject matches one condition, don't duplicate
            }
        }
    }

    // Select best electives up to remaining slots
    const bestElectives = eligibleElectives
        .sort((a, b) => b.calculatedScore - a.calculatedScore)
        .slice(0, remainingSlots)
        .map(elective => ({
            ...elective,
            isUsed: true
        }));

    // Add selected electives to results
    for (const elective of bestElectives) {
        processedSubjects.push(elective);
        totalScore += elective.calculatedScore;

        const subjectKey = Array.isArray(elective.abbreviation)
            ? elective.abbreviation[0]
            : elective.abbreviation;
        usedSubjects.add(subjectKey);
    }

    return { processedSubjects, totalScore };
}

/**
 * Mark unused subjects
 */
function markUnusedSubjects(
    studentSubjects: StudentSubject[],
    usedSubjects: Set<string>,
    university: University
): ProcessedSubject[] {
    const unusedSubjects: ProcessedSubject[] = [];

    for (const subject of studentSubjects) {
        if (!isValidSubject(subject)) continue;

        const subjectKey = Array.isArray(subject.abbreviation)
            ? subject.abbreviation[0]
            : subject.abbreviation;

        if (!usedSubjects.has(subjectKey)) {
            unusedSubjects.push({
                ...subject,
                calculatedScore: 0,
                rawScore: getSubjectScore(subject, university),
                isUsed: false,
                comments: [{ type: "warning", message: "Subject not required for this programme" }]
            });
        }
    }

    return unusedSubjects;
}

/**
 * Main calculation function - works with any programme calculation structure
 * Automatically determines how many subjects to use based on conditions
 */
function calculateProgrammeScore(
    university: University,
    programme: ProgrammeEntry,
    studentSubjects: StudentSubject[]
): CalculationResult {
    const conditions = programme.calculation?.conditions || [];

    // Step 1: Process required subjects
    const { processedSubjects: requiredSubjects, csdStatus, totalScore: requiredScore } =
        processRequiredSubjects(studentSubjects, conditions, university);

    // Step 2: Track used subjects
    const usedSubjects = new Set<string>();
    for (const subject of requiredSubjects) {
        if (subject.isUsed) {
            const key = Array.isArray(subject.abbreviation)
                ? subject.abbreviation[0]
                : subject.abbreviation;
            usedSubjects.add(key);
        }
    }

    // Step 3: Determine how many total subjects needed
    // Count specific subjects + variable subjects in conditions
    const totalSubjectsNeeded = conditions.length;
    const remainingSlots = Math.max(0, totalSubjectsNeeded - requiredSubjects.filter(s => s.isUsed).length);

    // Step 4: Process elective subjects
    const { processedSubjects: electiveSubjects, totalScore: electiveScore } =
        processElectiveSubjects(studentSubjects, conditions, university, usedSubjects, remainingSlots);

    // Step 5: Mark unused subjects
    const unusedSubjects = markUnusedSubjects(studentSubjects, usedSubjects, university);

    // Step 6: Compile results
    const allProcessedSubjects = [...requiredSubjects, ...electiveSubjects, ...unusedSubjects];
    const usedSubjectsOnly = allProcessedSubjects.filter(s => s.isUsed);

    // Use all qualifying subjects (not limited to a specific N)
    const bestSubjects = usedSubjectsOnly.sort((a, b) => b.calculatedScore - a.calculatedScore);

    // Step 7: Calculate final score (no CSD multiplier applied)
    const finalScore = requiredScore + electiveScore;

    return {
        subjectScores: allProcessedSubjects,
        bestN: bestSubjects,
        totalScore: finalScore,
        csdStatus,
        breakdown: {
            requiredSubjects: requiredSubjects.filter(s => s.isUsed).length,
            electiveSubjects: electiveSubjects.length,
            finalScore
        }
    };
}

/**
 * Legacy test function maintained for backwards compatibility
 * Now simply calls the general calculateProgrammeScore function
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function testBestN(
    N: number,
    university: University,
    programme: ProgrammeEntry,
    studentSubjects: StudentSubject[]
): CalculationResult {
    // Ignore the N parameter since we now calculate based on conditions
    return calculateProgrammeScore(university, programme, studentSubjects);
}

/**
 * Test function for new calculation system
 */
export function testNewCalculation(
    preferredUniversities: University[],
    studentSubjects: StudentSubject[]
): void {
    const programmes = [allUniversities.hku[0]]; // Use first HKU programme

    for (const programme of programmes) {
        const result = calculateProgrammeScore("hku", programme, studentSubjects);
        console.log("Test Result:", result);
    }
}

/**
 * Quick test function with sample data
 */
export function runQuickTest(): CalculationResult {
    console.log("=== HKU JUPAS Calculation Test ===\n");

    const sampleStudent: StudentSubject[] = [
        { subject: "English Language", uuid: uuid(), abbreviation: "ENG", grade: "5*", category: "A", subCategory: "Core" },
        { subject: "Chinese Language", uuid: uuid(), abbreviation: "CHIN", grade: "5", category: "A", subCategory: "Core" },
        { subject: "Mathematics", uuid: uuid(), abbreviation: "MATH", grade: "5", category: "A", subCategory: "Core" },
        { subject: "Citizenship and Social Development", uuid: uuid(), abbreviation: "CSD", grade: "Attained", category: "A", subCategory: "Core" },
        { subject: "Physics", uuid: uuid(), abbreviation: "PHY", grade: "5**", category: "A", subCategory: "Science" },
        { subject: "Chemistry", uuid: uuid(), abbreviation: "CHEM", grade: "5*", category: "A", subCategory: "Science" },
        { subject: "Biology", uuid: uuid(), abbreviation: "BIO", grade: "5", category: "A", subCategory: "Science" },
        { subject: "History", uuid: uuid(), abbreviation: "HIST", grade: "5**", category: "B", subCategory: "Humanities" },
        { subject: "Economics", uuid: uuid(), abbreviation: "ECON", grade: "5*", category: "C", subCategory: "Business" },
        { subject: "Mathematics Extended Part Module 1", uuid: uuid(), abbreviation: "MATH-M1", grade: "5", category: "A", subCategory: "Extended Module" }
    ];

    const programme = allUniversities.hku[0]; // First HKU programme
    const result = calculateProgrammeScore('hku', programme, sampleStudent);

    console.log("Programme:", programme.programmeDetails.name);
    console.log("Expected Score:", programme.expectedScore);
    console.log("\nCalculated Result:");
    console.log("- Total Score:", result.totalScore);
    console.log("- CSD Status:", result.csdStatus);
    console.log("- Required Subjects:", result.breakdown.requiredSubjects);
    console.log("- Elective Subjects:", result.breakdown.electiveSubjects);

    console.log("\nBest Subjects Used:");
    result.bestN.forEach((subject: ProcessedSubject) => {
        console.log(`- ${subject.abbreviation}: ${subject.grade}`);
    });

    console.log("\nSubject Scores:");
    result.subjectScores.forEach((subject: ProcessedSubject) => {
        const status = subject.isUsed ? "Used" : "Not used";
        console.log(`- ${subject.abbreviation}: ${subject.grade} ${status}`);
        if (subject.comments.length > 0) {
            subject.comments.forEach((comment: { type: string; message: string }) => {
                console.log(`  -> ${comment.message}`);
            });
        }
    });

    return result;
}

// Export main calculation function
export { calculateProgrammeScore };