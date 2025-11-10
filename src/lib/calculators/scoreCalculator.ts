/**
 * University Admission Score Calculator
 * 
 * Comprehensive scoring system that calculates admission scores for all universities and programmes
 * based on student subjects and programme-specific requirements.
 */

import { University, StudentSubject, ProgrammeEntry } from '../core/types';
import { allUniversities } from '../data/universities';
import { scoreConversion } from '../data/universities/scoreConversion';

// ==================== TYPES ====================

interface Comment {
    message: string;
    type: "error" | "warning" | "info";
}

interface SubjectBreakdown {
    subject: string;
    abbreviation: string;
    grade: string;
    rawScore: number;
    calculatedScore: number;
    variable?: string;
}

interface ProgrammeScore {
    programme: ProgrammeEntry;
    totalScore: number;
    csdStatus: "Attained" | "Not Attained" | "Not Required";
    breakdown: SubjectBreakdown[];
    comments: Comment[];
}

interface UniversityScores {
    [universityKey: string]: ProgrammeScore[];
}

interface VariableMatch {
    variable: string;
    matchingSubjects: Array<{
        studentSubject: StudentSubject;
        rawScore: number;
        calculatedScore: number;
    }>;
}

interface Condition {
    subject?: string;
    variable?: string;
    minGrade?: string;
    grade?: string;
    multiplier?: number;
    required?: boolean;
    includeCategories?: string[];
    excludeSubCategories?: string[];
    excludeSubjects?: string[];
    includeAdditionalSubjects?: string[];
}

// ==================== UTILITY FUNCTIONS ====================

/**
 * Normalize abbreviation for case-insensitive comparison
 */
function normalizeAbbr(abbr: string): string {
    return abbr.toUpperCase().trim();
}

/**
 * Check if student abbreviation matches target abbreviation
 */
function abbreviationsMatch(studentAbbr: string | string[], targetAbbr: string): boolean {
    const normalized = normalizeAbbr(targetAbbr);
    
    if (Array.isArray(studentAbbr)) {
        return studentAbbr.some(abbr => normalizeAbbr(abbr) === normalized);
    }
    
    return normalizeAbbr(studentAbbr) === normalized;
}

/**
 * Check if any student abbreviation is in the target list
 */
function anyAbbreviationInList(studentAbbr: string | string[], targetList: string[]): boolean {
    const normalizedList = targetList.map(normalizeAbbr);
    
    if (Array.isArray(studentAbbr)) {
        return studentAbbr.some(abbr => normalizedList.includes(normalizeAbbr(abbr)));
    }
    
    return normalizedList.includes(normalizeAbbr(studentAbbr));
}

/**
 * Get raw score from score conversion table
 */
function getRawScore(
    university: University,
    studentSubject: StudentSubject
): { score: number; found: boolean } {
    const category = studentSubject.category.toUpperCase();
    const grade = studentSubject.grade;
    
    const universityConversion = scoreConversion[university];
    if (!universityConversion) {
        return { score: 0, found: false };
    }
    
    const categoryConversion = universityConversion[category];
    if (!categoryConversion) {
        return { score: 0, found: false };
    }
    
    // Try to find score by abbreviation
    const abbreviations = Array.isArray(studentSubject.abbreviation) 
        ? studentSubject.abbreviation 
        : [studentSubject.abbreviation];
    
    for (const abbr of abbreviations) {
        const normalizedAbbr = normalizeAbbr(abbr);
        
        // Check if this abbreviation has specific conversion
        for (const [key, gradeConversion] of Object.entries(categoryConversion)) {
            if (normalizeAbbr(key) === normalizedAbbr) {
                const gradeMap = gradeConversion as Record<string, number>;
                const score = gradeMap[grade];
                if (score !== undefined) {
                    return { score, found: true };
                }
            }
        }
    }
    
    // Fall back to "others" if exists
    if (categoryConversion["others"]) {
        const gradeMap = categoryConversion["others"] as Record<string, number>;
        const score = gradeMap[grade];
        if (score !== undefined) {
            return { score, found: true };
        }
    }
    
    return { score: 0, found: false };
}

/**
 * Compare if student grade meets minimum grade requirement
 */
function meetsMinGrade(
    university: University,
    studentSubject: StudentSubject,
    minGrade: string
): boolean {
    const studentScoreResult = getRawScore(university, studentSubject);
    
    // Create a temporary subject with minGrade to get its score
    const minGradeSubject = { ...studentSubject, grade: minGrade };
    const minScoreResult = getRawScore(university, minGradeSubject);
    
    // If either score not found, cannot compare
    if (!studentScoreResult.found || !minScoreResult.found) {
        return false;
    }
    
    return studentScoreResult.score >= minScoreResult.score;
}

/**
 * Check if student subject matches variable condition constraints
 */
function matchesVariableConstraints(
    studentSubject: StudentSubject,
    condition: Condition
): boolean {
    // If includeAdditionalSubjects is specified, ONLY match those subjects (ignore categories)
    if (condition.includeAdditionalSubjects && condition.includeAdditionalSubjects.length > 0) {
        return anyAbbreviationInList(studentSubject.abbreviation, condition.includeAdditionalSubjects);
    }
    
    // Otherwise, use category-based matching with exclusions
    const category = studentSubject.category.toUpperCase();
    
    // Check includeCategories
    if (condition.includeCategories && condition.includeCategories.length > 0) {
        if (!condition.includeCategories.includes(category)) {
            return false;
        }
    }
    
    // Check excludeSubCategories - this refers to excluding by subCategory
    if (condition.excludeSubCategories && condition.excludeSubCategories.length > 0) {
        if (studentSubject.subCategory) {
            const normalizedSubCategory = studentSubject.subCategory.toUpperCase();
            const normalizedExcludes = condition.excludeSubCategories.map(s => s.toUpperCase());
            if (normalizedExcludes.includes(normalizedSubCategory)) {
                return false;
            }
        }
    }
    
    // Check excludeSubjects
    if (condition.excludeSubjects && condition.excludeSubjects.length > 0) {
        if (anyAbbreviationInList(studentSubject.abbreviation, condition.excludeSubjects)) {
            return false;
        }
    }
    
    return true;
}

// ==================== MAIN CALCULATION FUNCTIONS ====================

/**
 * Process subject-based conditions (ENG, CHIN, MATH, CSD, etc.)
 */
function processSubjectConditions(
    studentSubjects: StudentSubject[],
    conditions: Condition[],
    university: University,
    specificSubjectWeighting: { [subject: string]: number } = {}
): {
    breakdown: SubjectBreakdown[];
    comments: Comment[];
    usedSubjects: Set<string>;
    csdStatus: "Attained" | "Not Attained" | "Not Required";
    totalScore: number;
} {
    const breakdown: SubjectBreakdown[] = [];
    const comments: Comment[] = [];
    const usedSubjects = new Set<string>();
    let csdStatus: "Attained" | "Not Attained" | "Not Required" = "Not Required";
    let totalScore = 0;
    
    // Get all subject-based conditions
    const subjectConditions = conditions.filter(c => c.subject);
    
    for (const condition of subjectConditions) {
        const subjectAbbr = condition.subject!;
        
        // Find matching student subject
        const matchingSubject = studentSubjects.find(s => 
            abbreviationsMatch(s.abbreviation, subjectAbbr)
        );
        
        if (!matchingSubject) {
            comments.push({
                message: `${subjectAbbr} not taken`,
                type: "error"
            });
            continue;
        }
        
        // Get raw score
        const { score: rawScore, found } = getRawScore(university, matchingSubject);
        
        if (!found) {
            comments.push({
                message: `${subjectAbbr}: No score conversion found`,
                type: "warning"
            });
        }
        
        // Handle CSD special case
        if (normalizeAbbr(subjectAbbr) === "CSD") {
            if (condition.grade && normalizeAbbr(condition.grade) === "ATTAINED") {
                if (normalizeAbbr(matchingSubject.grade) === "ATTAINED") {
                    csdStatus = "Attained";
                } else {
                    csdStatus = "Not Attained";
                    comments.push({
                        message: `CSD: Required "Attained", got "${matchingSubject.grade}"`,
                        type: "error"
                    });
                }
            }
            
            // Add to breakdown but with 0 calculated score
            breakdown.push({
                subject: matchingSubject.subject,
                abbreviation: Array.isArray(matchingSubject.abbreviation) 
                    ? matchingSubject.abbreviation[0] 
                    : matchingSubject.abbreviation,
                grade: matchingSubject.grade,
                rawScore,
                calculatedScore: 0
            });
            
            usedSubjects.add(matchingSubject.uuid);
            continue;
        }
        
        // Check grade requirements
        let meetsRequirement = true;
        
        if (condition.grade) {
            // Exact grade match
            if (matchingSubject.grade !== condition.grade) {
                meetsRequirement = false;
                comments.push({
                    message: `${subjectAbbr}: Required grade "${condition.grade}", got "${matchingSubject.grade}"`,
                    type: "error"
                });
            }
        } else if (condition.minGrade) {
            // Minimum grade requirement
            if (!meetsMinGrade(university, matchingSubject, condition.minGrade)) {
                meetsRequirement = false;
                comments.push({
                    message: `${subjectAbbr}: Minimum grade "${condition.minGrade}", got "${matchingSubject.grade}"`,
                    type: "error"
                });
            }
        }
        
        // Calculate score with weighting
        const weighting = specificSubjectWeighting[normalizeAbbr(subjectAbbr)] !== undefined 
            ? specificSubjectWeighting[normalizeAbbr(subjectAbbr)] 
            : 1;
        const calculatedScore = meetsRequirement ? rawScore * weighting : 0;
        
        breakdown.push({
            subject: matchingSubject.subject,
            abbreviation: Array.isArray(matchingSubject.abbreviation) 
                ? matchingSubject.abbreviation[0] 
                : matchingSubject.abbreviation,
            grade: matchingSubject.grade,
            rawScore,
            calculatedScore
        });
        
        usedSubjects.add(matchingSubject.uuid);
        totalScore += calculatedScore;
    }
    
    return { breakdown, comments, usedSubjects, csdStatus, totalScore };
}

/**
 * Find all possible matches for variable conditions
 */
function findVariableMatches(
    studentSubjects: StudentSubject[],
    conditions: Condition[],
    university: University,
    usedSubjects: Set<string>,
    specificSubjectWeighting: { [subject: string]: number } = {}
): VariableMatch[] {
    const variableMatches: VariableMatch[] = [];
    const variableConditions = conditions.filter(c => c.variable);
    
    for (const condition of variableConditions) {
        const matches: Array<{
            studentSubject: StudentSubject;
            rawScore: number;
            calculatedScore: number;
        }> = [];
        
        for (const studentSubject of studentSubjects) {
            // Skip if already used
            if (usedSubjects.has(studentSubject.uuid)) {
                continue;
            }
            
            // Check if matches constraints
            if (!matchesVariableConstraints(studentSubject, condition)) {
                continue;
            }
            
            // Check minimum grade if specified
            if (condition.minGrade) {
                if (!meetsMinGrade(university, studentSubject, condition.minGrade)) {
                    continue;
                }
            }
            
            // Get scores
            const { score: rawScore, found } = getRawScore(university, studentSubject);
            
            if (!found || rawScore === 0) {
                continue;
            }
            
            // Apply weighting
            const abbreviations = Array.isArray(studentSubject.abbreviation) 
                ? studentSubject.abbreviation 
                : [studentSubject.abbreviation];
            
            let weighting = 1;
            for (const abbr of abbreviations) {
                const w = specificSubjectWeighting[normalizeAbbr(abbr)];
                if (w !== undefined) {
                    weighting = w;
                    break;
                }
            }
            
            const calculatedScore = rawScore * weighting;
            
            matches.push({
                studentSubject,
                rawScore,
                calculatedScore
            });
        }
        
        // Sort by calculated score descending
        matches.sort((a, b) => b.calculatedScore - a.calculatedScore);
        
        variableMatches.push({
            variable: condition.variable!,
            matchingSubjects: matches
        });
    }
    
    return variableMatches;
}

/**
 * Optimize variable allocation to maximize total score
 */
function optimizeVariableAllocation(
    variableMatches: VariableMatch[],
    usedSubjects: Set<string>
): Map<string, { studentSubject: StudentSubject; rawScore: number; calculatedScore: number }> {
    const allocation = new Map<string, { studentSubject: StudentSubject; rawScore: number; calculatedScore: number }>();
    const localUsed = new Set(usedSubjects);
    
    // Greedy approach: repeatedly pick the best available match across all variables
    let improved = true;
    
    while (improved) {
        improved = false;
        let bestVariable: string | null = null;
        let bestMatch: { studentSubject: StudentSubject; rawScore: number; calculatedScore: number } | null = null;
        let bestScore = -1;
        
        for (const varMatch of variableMatches) {
            // Skip if already allocated
            if (allocation.has(varMatch.variable)) {
                continue;
            }
            
            // Find best available subject for this variable
            for (const match of varMatch.matchingSubjects) {
                if (!localUsed.has(match.studentSubject.uuid)) {
                    if (match.calculatedScore > bestScore) {
                        bestScore = match.calculatedScore;
                        bestVariable = varMatch.variable;
                        bestMatch = match;
                    }
                    break; // Only consider top match per variable
                }
            }
        }
        
        if (bestVariable && bestMatch) {
            allocation.set(bestVariable, bestMatch);
            localUsed.add(bestMatch.studentSubject.uuid);
            improved = true;
        }
    }
    
    return allocation;
}

/**
 * Process variable conditions with optimal allocation
 */
function processVariableConditions(
    studentSubjects: StudentSubject[],
    conditions: Condition[],
    university: University,
    usedSubjects: Set<string>,
    specificSubjectWeighting: { [subject: string]: number } = {}
): {
    breakdown: SubjectBreakdown[];
    comments: Comment[];
    totalScore: number;
} {
    const breakdown: SubjectBreakdown[] = [];
    const comments: Comment[] = [];
    let totalScore = 0;
    
    // Find all possible matches
    const variableMatches = findVariableMatches(
        studentSubjects,
        conditions,
        university,
        usedSubjects,
        specificSubjectWeighting
    );
    
    // Optimize allocation
    const allocation = optimizeVariableAllocation(variableMatches, usedSubjects);
    
    // Build breakdown from allocation
    for (const [variable, match] of allocation.entries()) {
        breakdown.push({
            subject: match.studentSubject.subject,
            abbreviation: Array.isArray(match.studentSubject.abbreviation) 
                ? match.studentSubject.abbreviation[0] 
                : match.studentSubject.abbreviation,
            grade: match.studentSubject.grade,
            rawScore: match.rawScore,
            calculatedScore: match.calculatedScore,
            variable
        });
        
        usedSubjects.add(match.studentSubject.uuid);
        totalScore += match.calculatedScore;
    }
    
    // Check for unallocated variables
    const variableConditions = conditions.filter(c => c.variable);
    for (const condition of variableConditions) {
        if (!allocation.has(condition.variable!)) {
            comments.push({
                message: `${condition.variable}: No suitable subject found`,
                type: "warning"
            });
        }
    }
    
    return { breakdown, comments, totalScore };
}

/**
 * Calculate score for a single programme
 */
function calculateProgrammeScore(
    university: University,
    programme: ProgrammeEntry,
    studentSubjects: StudentSubject[]
): ProgrammeScore {
    const conditions = programme.calculation?.conditions || [];
    const specificSubjectWeighting = programme.calculation?.specificSubjectWeighting || {};
    
    // Step 1: Process subject-based conditions
    const {
        breakdown: subjectBreakdown,
        comments: subjectComments,
        usedSubjects,
        csdStatus,
        totalScore: subjectScore
    } = processSubjectConditions(studentSubjects, conditions, university, specificSubjectWeighting);
    
    // Step 2: Process variable conditions
    const {
        breakdown: variableBreakdown,
        comments: variableComments,
        totalScore: variableScore
    } = processVariableConditions(studentSubjects, conditions, university, usedSubjects, specificSubjectWeighting);
    
    // Step 3: Combine results
    const breakdown = [...subjectBreakdown, ...variableBreakdown];
    const comments = [...subjectComments, ...variableComments];
    const totalScore = subjectScore + variableScore;
    
    return {
        programme,
        totalScore,
        csdStatus,
        breakdown,
        comments
    };
}

// ==================== MAIN EXPORT FUNCTION ====================

/**
 * Calculate admission scores for all universities and programmes
 * 
 * @param universities - Array of universities to calculate scores for (empty = all)
 * @param studentSubjects - Array of student subjects with grades
 * @returns Object with university keys and programme scores
 */
export function calculateUniversityScores(
    universities: University[] = [],
    studentSubjects: StudentSubject[]
): UniversityScores {
    const result: UniversityScores = {};
    
    // Determine which universities to process
    const universitiesToProcess = universities.length > 0 
        ? universities 
        : Object.keys(allUniversities) as University[];
    
    // Process each university
    for (const university of universitiesToProcess) {
        const programmes = allUniversities[university];
        
        if (!programmes || programmes.length === 0) {
            continue;
        }
        
        result[university] = [];
        
        // Process each programme
        for (const programme of programmes) {
            const score = calculateProgrammeScore(university, programme, studentSubjects);
            result[university].push(score);
        }
    }
    
    return result;
}

// Export utility functions for testing
export {
    calculateProgrammeScore,
    getRawScore,
    meetsMinGrade,
    matchesVariableConstraints
};
