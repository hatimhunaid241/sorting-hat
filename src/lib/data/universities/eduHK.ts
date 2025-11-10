import { ProgrammeEntry } from '../../core/types';

export const eduhk: ProgrammeEntry[] = [
    {
        programmeDetails: {
            id: "JS8001",
            name: "BA in Creative and Digital Arts and BEd (Music)",
        },
        method: "Best 5 Subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3", multiplier: 2 },
                { subject: "CHIN", minGrade: "3", multiplier: 1 },
                { subject: "MATH", minGrade: "2", multiplier: 1 },
                { subject: "CSD", grade: "Attained", multiplier: 1 },
                { variable: "BEST4", minGrade: "2", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "2", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "MUS": 1.5
            }
        },
        otherRequirements: ["Satisfactory performance in an audition is required. Applicants who obtain Level 4 or above in HKDSE Music will be exempted from the audition"]
    },
    {
        programmeDetails: {
            id: "JS8002",
            name: "BA in Creative and Digital Arts and BEd (Visual Arts)",
        },
        method: "Best 5 Subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3", multiplier: 2 },
                { subject: "CHIN", minGrade: "3", multiplier: 1 },
                { subject: "MATH", minGrade: "2", multiplier: 1 },
                { subject: "CSD", grade: "Attained", multiplier: 1 },
                { variable: "BEST4", minGrade: "2", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "2", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "VA": 1.5
            }
        },
        otherRequirements: ["Satisfactory performance in a practical test is required. Applicants who obtain Level 4 or above in HKDSE Visual Arts will be exempted from the practical test."]
    },
    {
        programmeDetails: {
            id: "JS8003",
            name: "BA in Digital Chinese Culture and Communication and BEd (Chinese Language)",
        },
        method: "Best 5 Subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3", multiplier: 1.5 },
                { subject: "CHIN", minGrade: "3", multiplier: 1.5 },
                { subject: "MATH", minGrade: "2", multiplier: 1 },
                { subject: "CSD", grade: "Attained", multiplier: 1 },
                { variable: "BEST4", minGrade: "2", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "2", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "CHIN-LIT": 1.5,
                "ICT": 1.5
            }
        },
        otherRequirements: ["This programme requires high Chinese language proficiency. The HKDSE Chinese Language requirement cannot be substituted."]
    },
    {
        programmeDetails: {
            id: "JS8004",
            name: "BA in English Studies and Digital Communication and BEd (English Language)",
        },
        method: "Best 5 Subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "2", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "2", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "ENG": 1.5,
                "LIT-ENG": 1.5,
                "ICT": 1.5
            }
        },
        otherRequirements: ["This programme requires high English language proficiency. The HKDSE English Language requirement cannot be substituted."]
    },
    {
        programmeDetails: {
            id: "JS8005",
            name: "BA in in Heritage Education and Arts Management and BEd (Chinese History)",
        },
        method: "Best 5 Subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "2", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "2", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "CHIN-HIST": 1.5,
                "HIST": 1.5
            }
        },
        otherRequirements: ["This programme requires high Chinese language proficiency. The HKDSE Chinese Language requirement cannot be substituted."]
    },
];