import { ProgrammeEntry, SubjectRequirement } from '../core/types';

// Grade mappings
export const DSE_GRADE_MAPPING = {
    "5**": 7,
    "5*": 6,
    "5": 5,
    "4": 4,
    "3": 3,
    "2": 2,
    "1": 1,
    "U": 0
} as const;

export const CSD_GRADE_MAPPING = {
    "A": 3,
    "B": 2,
    "C": 1,
    "D": 0,
    "U": 0
} as const;

export type DSEGrade = keyof typeof DSE_GRADE_MAPPING;
export type CSDGrade = keyof typeof CSD_GRADE_MAPPING;

// Utility functions for grade conversion
export function getDSEScore(grade: DSEGrade): number {
    return DSE_GRADE_MAPPING[grade];
}

export function getCSDScore(grade: CSDGrade): number {
    return CSD_GRADE_MAPPING[grade];
}

// Subject categories
export const SUBJECT_CATEGORIES = {
    A: [
        "ENG", "CHIN", "MATH", "MATH-M1", "MATH-M2",
        "PHY", "CHEM", "BIO", "ICT", "ECON",
        "GEOG", "HIST", "LIT-ENG", "CHIN-LIT", "CHIN-HIST"
    ],
    B: [
        "BAFS", "THS", "VA", "PE", "MUSIC"
    ],
    C: [
        "FR", "GER", "JPN", "SPA", "HINDI", "URDU"
    ]
} as const;

export type SubjectCategory = "A" | "B" | "C";
export type CategoryASubject = typeof SUBJECT_CATEGORIES.A[number];
export type CategoryBSubject = typeof SUBJECT_CATEGORIES.B[number];
export type CategoryCSubject = typeof SUBJECT_CATEGORIES.C[number];

// Get category for a subject
export function getSubjectCategory(subject: string): SubjectCategory {
    if ((SUBJECT_CATEGORIES.A as readonly string[]).includes(subject)) return "A";
    if ((SUBJECT_CATEGORIES.B as readonly string[]).includes(subject)) return "B";
    if ((SUBJECT_CATEGORIES.C as readonly string[]).includes(subject)) return "C";
    throw new Error(`Unknown subject: ${subject}`);
}

// Validation functions
export function validateMinimumRequirements(
    studentGrades: Record<string, DSEGrade | CSDGrade>,
    requirements: SubjectRequirement[]
): { passed: boolean; failedRequirements: SubjectRequirement[] } {
    const failedRequirements: SubjectRequirement[] = [];

    for (const requirement of requirements) {
        const studentGrade = studentGrades[requirement.subject];
        if (!studentGrade) {
            // Check alternatives if available
            if (requirement.alternatives && requirement.alternatives.length > 0) {
                const alternativePassed = requirement.alternatives.some(alt => {
                    const altGrade = studentGrades[alt];
                    return altGrade && meetGradeRequirement(altGrade, requirement.minGrade);
                });
                if (!alternativePassed) {
                    failedRequirements.push(requirement);
                }
            } else {
                failedRequirements.push(requirement);
            }
        } else if (!meetGradeRequirement(studentGrade, requirement.minGrade)) {
            failedRequirements.push(requirement);
        }
    }

    return {
        passed: failedRequirements.length === 0,
        failedRequirements
    };
}

function meetGradeRequirement(grade: DSEGrade | CSDGrade, minGrade: string): boolean {
    // Handle CSD grades
    if (grade in CSD_GRADE_MAPPING && minGrade in CSD_GRADE_MAPPING) {
        return getCSDScore(grade as CSDGrade) >= getCSDScore(minGrade as CSDGrade);
    }

    // Handle DSE grades
    if (grade in DSE_GRADE_MAPPING && minGrade in DSE_GRADE_MAPPING) {
        return getDSEScore(grade as DSEGrade) >= getDSEScore(minGrade as DSEGrade);
    }

    return false;
}

// Helper to get all programmes from all universities
export function getAllProgrammes(universities: Record<string, ProgrammeEntry[]>): ProgrammeEntry[] {
    return Object.values(universities).flat();
}

// Filter programmes by criteria
export function filterProgrammes(
    programmes: ProgrammeEntry[],
    criteria: {
        faculty?: string;
        degree?: string;
        minExpectedScore?: number;
        maxExpectedScore?: number;
        interviewRequired?: boolean;
    }
): ProgrammeEntry[] {
    return programmes.filter(prog => {
        if (criteria.faculty && prog.programme.faculty && !prog.programme.faculty.toLowerCase().includes(criteria.faculty.toLowerCase())) {
            return false;
        }
        if (criteria.degree && prog.programme.degree !== criteria.degree) {
            return false;
        }
        if (criteria.minExpectedScore && prog.expectedScore && prog.expectedScore < criteria.minExpectedScore) {
            return false;
        }
        if (criteria.maxExpectedScore && prog.expectedScore && prog.expectedScore > criteria.maxExpectedScore) {
            return false;
        }
        if (criteria.interviewRequired !== undefined && prog.interviewRequired !== criteria.interviewRequired) {
            return false;
        }
        return true;
    });
}