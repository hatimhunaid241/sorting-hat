// Core types for the JUPAS scoring system

export type University = "cuhk" | "hku" | "hkust" | "cityu" | "polyu" | "hkbu" | "lingnan" | "eduhk";

export interface SubjectRequirement {
    subject: string; // Subject abbreviation (e.g., "ENG", "CHIN", "MATH")
    minGrade: string; // Minimum grade required (e.g., "3", "4", "5", "A", "D")
    weight?: number; // Optional weight for weighted scoring (default 1.0)
    alternatives?: string[]; // Alternative subjects that can fulfill this requirement
}

export interface ProgrammeDetails {
    id: string;
    name: string;
    faculty?: string;
    degree?: string;
    degreeType?: string; // e.g., "Single Degree Programme", "Double Degree Programme"
    studyPeriod?: number; // Duration in years
    description?: string;
}

export interface ProgrammeEntry {
    programmeDetails: ProgrammeDetails;
    method?: string;
    expectedScore?: number;
    otherRequirements?: string[];
    calculation?: {
        conditions: {
            subject?: string;
            variable?: string;
            minGrade?: string;
            multiplier?: number;
            grade?: string;
            required?: boolean;
            includeCategories?: string[];
            excludeSubCategories?: string[];
            excludeSubjects?: string[];
            includeAdditionalSubjects?: string[];
        }[];
        specificSubjectWeighting?: {
            [subject: string]: number;
        };
    }
}

export type ScoreConversion = {
    [university in University]: {
        [category: string]: {
            [subject: string]: {
                [grade: string]: number; // Grade -> score
            };
        };
    };
};

export interface StudentSubject {
    id?: number;
    uuid: string;
    category: string;
    subCategory: string;
    subject: string;
    abbreviation: string | string[];
    grade: string;
}

export interface ScoreBreakdown {
    subject: string;
    score: number;
}

export interface ProgrammeScore {
    programme: ProgrammeDetails;
    university: University;
    score: number;
    scoreBreakdown: ScoreBreakdown[];
}