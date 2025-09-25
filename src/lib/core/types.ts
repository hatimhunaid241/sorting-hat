// Core types for the JUPAS scoring system

export interface SubjectRequirement {
    subject: string; // Subject abbreviation (e.g., "ENG", "CHIN", "MATH")
    minGrade: string; // Minimum grade required (e.g., "3", "4", "5", "A", "D")
    weight?: number; // Optional weight for weighted scoring (default 1.0)
    alternatives?: string[]; // Alternative subjects that can fulfill this requirement
}

export interface ScoringFormula {
    type: "BEST_N" | "CORE_PLUS_BEST" | "WEIGHTED" | "CUSTOM" | "TIERED_WEIGHTED";
    parameters: {
        // For BEST_N: take best N subjects
        n?: number;

        // For CORE_PLUS_BEST: required core subjects + best of remaining
        coreSubjects?: string[]; // Required subject abbreviations
        additionalBest?: number; // Number of additional best subjects

        // For WEIGHTED: different weights for different subjects
        weights?: Record<string, number>; // Subject abbreviation -> weight

        // For TIERED_WEIGHTED: Different weights based on performance levels
        tieredWeights?: {
            [subject: string]: {
                [grade: string]: number; // Grade -> multiplier
            };
        };

        // For all types: subject pools and constraints
        includedCategories?: ("A" | "B" | "C")[]; // Which categories can be included
        excludedSubjects?: string[]; // Subjects that cannot be counted
        maxFromCategory?: Record<"A" | "B" | "C", number>; // Max subjects from each category

        // Special rules
        allowM1M2Both?: boolean; // Can count both M1 and M2
        categoryBCAsElective?: boolean; // Can Category B/C count as electives
        maxCategoryBCSubjects?: number; // Max subjects from Categories B & C combined

        // Advanced scoring rules (missing from current implementation)
        languageBonus?: {
            subject: string;
            bonusPoints: number;
            minGrade: string;
        }; // Extra points for language subjects

        mathsExtendedBonus?: {
            bonusPoints: number; // Extra points for M1/M2
            minGrade: string;
        };

        scienceGroupBonus?: {
            subjects: string[]; // Science subjects that get bonus together
            bonusPoints: number;
            minSubjects: number; // Minimum science subjects needed
        };

        subjectCombinationBonus?: {
            requiredSubjects: string[];
            bonusPoints: number;
            minGrades?: Record<string, string>;
        }[];

        // Grade conversion adjustments (some unis have different mappings)
        customGradeMapping?: Record<string, number>;

        // Minimum score requirements (beyond just grades)
        minimumTotalScore?: number;

        // Score capping (some subjects capped at certain scores)
        scoreCaps?: Record<string, number>;

        // Subject-specific requirements for scoring
        mandatorySubjectsForScoring?: string[]; // Must be included in calculation

        // Custom calculation function name for complex formulas
        customCalculation?: string;
    };
    notes?: string[];
}

export interface ProgrammeEntry {
    programme: {
        id: string;
        name: string;
        faculty?: string;
        degree?: string;
    };
    scoringFormula: ScoringFormula;
    minimumRequirements: SubjectRequirement[];
    expectedScore?: number;
    competitiveScore?: number; // Typical score for competitive admission
    otherRequirements?: string[];
    interviewRequired?: boolean;
    portfolioRequired?: boolean;
    aptitudeTestRequired?: boolean;
}