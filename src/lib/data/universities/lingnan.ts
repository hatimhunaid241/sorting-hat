import { ProgrammeEntry } from '../../core/types';

export const lingnan: ProgrammeEntry[] = [
    {
        programmeDetails: {
            id: "JS7101",
            name: "Bachelor of Arts (Honours) in Chinese",
        },
        method: "Best 5 Subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3", multiplier: 1.5 },
                { subject: "CHIN", minGrade: "3", multiplier: 1.5 },
                { subject: "MATH", minGrade: "2", multiplier: 1 },
                { subject: "CSD", grade: "Attained", multiplier: 1 },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "CHIN-HIST": 1.5,
                "CHIN-LIT": 1.5
            }
        },
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "JS7133",
            name: "Bachelor of Arts (Honours) in Animation and Digital Arts",
        },
        method: "Best 5 Subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3", multiplier: 1.5 },
                { subject: "CHIN", minGrade: "3", multiplier: 1.5 },
                { subject: "MATH", minGrade: "2", multiplier: 1 },
                { subject: "CSD", grade: "Attained", multiplier: 1 },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "ICT": 1.5,
                "VA": 1.5
            }
        },
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "JS7204",
            name: "Bachelor of Arts (Honours) in Translation",
        },
        method: "Best 5 Subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3", multiplier: 2 },
                { subject: "CHIN", minGrade: "3", multiplier: 1.5 },
                { subject: "MATH", minGrade: "2", multiplier: 1 },
                { subject: "CSD", grade: "Attained", multiplier: 1 },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "CHIN-LIT": 1.5,
                "LIT-ENG": 1.5,
            }
        },
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "JS7503",
            name: "Bachelor of Arts (Honours) in English Studies",
        },
        method: "Best 5 Subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "ENG": 2.5,
                "CHIN": 1.5,
                "LIT-ENG": 1.5,
            }
        },
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "JS7503",
            name: "Bachelor of Arts (Honours) in Cultural Studies",
        },
        method: "Best 5 Subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "ENG": 2,
                "CHIN": 1.5
            }
        },
        otherRequirements: []
    },
];