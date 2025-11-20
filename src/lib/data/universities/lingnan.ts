import { ProgrammeEntry } from '../../core/types';

export const lingnan: ProgrammeEntry[] = [
    // Arts Programmes
    {
        programmeDetails: {
            id: "JS7101",
            name: "Bachelor of Arts (Honours) in Chinese",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "2", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
                { variable: "BEST5", minGrade: "2", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "ENG": 1.5,
                "CHIN": 1.5,
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
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "2", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
                { variable: "BEST5", minGrade: "2", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "CHIN": 1.5,
                "ENG": 1.5,
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
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "2", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
                { variable: "BEST5", minGrade: "2", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "CHIN": 1.5,
                "ENG": 2,
                "CHIN-LIT": 1.5,
                "LIT-ENG": 1.5
            }
        },
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "JS7503",
            name: "Bachelor of Arts (Honours) in English Studies",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "2", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
                { variable: "BEST5", minGrade: "2", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "CHIN": 1.5,
                "ENG": 2.5,
                "LIT-ENG": 1.5
            }
        },
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "JS7606",
            name: "Bachelor of Arts (Honours) in Cultural Studies",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "2", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
                { variable: "BEST5", minGrade: "2", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "CHIN": 1.5,
                "ENG": 2
            }
        },
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "JS7709",
            name: "Bachelor of Arts (Honours) in History",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "2", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
                { variable: "BEST5", minGrade: "2", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "CHIN": 1.5,
                "ENG": 2,
                "CHIN-HIST": 1.2,
                "HIST": 1.2
            }
        },
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "JS7802",
            name: "Bachelor of Arts (Honours) in Philosophy",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "2", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
                { variable: "BEST5", minGrade: "2", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "CHIN": 1.5,
                "ENG": 2,
                "MATH": 1.5
            }
        },
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "JS7905",
            name: "Bachelor of Arts (Honours) in Film and Visual Arts",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "2", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
                { variable: "BEST5", minGrade: "2", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "CHIN": 2,
                "ENG": 2,
                "ICT": 1.5,
                "VA": 1.5
            }
        },
        otherRequirements: []
    },
    // Business Administration Programmes
    {
        programmeDetails: {
            id: "JS7211",
            name: "Bachelor of Business Administration (Honours) - Accounting and Corporate Governance",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "2", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
                { variable: "BEST5", minGrade: "2", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "ENG": 2,
                "MATH": 2,
                "MATH-M1": 1.5,
                "MATH-M2": 1.5,
                "BAFS": 1.5
            }
        },
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "JS7212",
            name: "Bachelor of Business Administration (Honours) - Business Analytics & Innovation",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "2", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
                { variable: "BEST5", minGrade: "2", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "ENG": 2,
                "MATH": 2,
                "MATH-M1": 1.5,
                "MATH-M2": 1.5,
                "BAFS": 1.5,
                "ECO": 1.5,
                "ICT": 1.5
            }
        },
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "JS7213",
            name: "Bachelor of Business Administration (Honours) - Finance",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "2", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
                { variable: "BEST5", minGrade: "2", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "ENG": 2,
                "MATH": 2,
                "MATH-M1": 1.5,
                "MATH-M2": 1.5,
                "BAFS": 1.5,
                "ECO": 1.5,
                "ICT": 1.5
            }
        },
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "JS7214",
            name: "Bachelor of Business Administration (Honours) - Management and Analytics",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "2", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
                { variable: "BEST5", minGrade: "2", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "ENG": 2,
                "MATH": 2,
                "MATH-M1": 1.5,
                "MATH-M2": 1.5,
                "BAFS": 1.5,
                "ECO": 1.5,
                "ICT": 1.5
            }
        },
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "JS7215",
            name: "Bachelor of Business Administration (Honours) - Marketing and Social Media",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "2", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
                { variable: "BEST5", minGrade: "2", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "ENG": 2,
                "MATH": 2,
                "MATH-M1": 1.5,
                "MATH-M2": 1.5,
                "BAFS": 1.5,
                "ECO": 1.5,
                "ICT": 1.5
            }
        },
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "JS7216",
            name: "Bachelor of Business Administration (Honours) in Risk and Insurance Management",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "2", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
                { variable: "BEST5", minGrade: "2", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "ENG": 2,
                "MATH": 2,
                "MATH-M1": 1.5,
                "MATH-M2": 1.5,
                "BAFS": 1.5,
                "ECO": 1.5,
                "ICT": 1.5
            }
        },
        otherRequirements: []
    },
    // Social Sciences Programmes
    {
        programmeDetails: {
            id: "JS7301",
            name: "Bachelor of Social Sciences (Honours) - Economics",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "2", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
                { variable: "BEST5", minGrade: "2", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "ENG": 2,
                "MATH": 1.5,
                "MATH-M1": 1.5,
                "MATH-M2": 1.5,
                "ECO": 1.5
            }
        },
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "JS7302",
            name: "Bachelor of Social Sciences (Honours) - Government and International Affairs",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "2", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
                { variable: "BEST5", minGrade: "2", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "ENG": 2,
                "MATH": 1.5,
                "MATH-M1": 1.5,
                "MATH-M2": 1.5,
                "CHIN-HIST": 1.5,
                "GEOG": 1.5,
                "HIST": 1.5
            }
        },
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "JS7303",
            name: "Bachelor of Social Sciences (Honours) - Psychology",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "2", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
                { variable: "BEST5", minGrade: "2", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "ENG": 2,
                "MATH": 1.5
            }
        },
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "JS7304",
            name: "Bachelor of Social Sciences (Honours) in Sociology",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "2", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
                { variable: "BEST5", minGrade: "2", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "ENG": 2,
                "MATH": 1.5
            }
        },
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "JS7305",
            name: "Bachelor of Social Sciences (Honours) in Health and Social Services Management",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "2", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
                { variable: "BEST5", minGrade: "2", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "ENG": 1.5,
                "HMSC": 1.5
            }
        },
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "JS7306",
            name: "Bachelor of Social Sciences (Honours) in Social and Public Policy Studies",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "2", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
                { variable: "BEST5", minGrade: "2", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "ENG": 2,
                "MATH": 1.5,
                "MATH-M1": 1.5,
                "MATH-M2": 1.5
            }
        },
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "JS7307",
            name: "Bachelor of Social Sciences (Honours) - Social Data Science",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "2", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
                { variable: "BEST5", minGrade: "2", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "ENG": 2,
                "MATH": 1.5,
                "MATH-M1": 1.5,
                "MATH-M2": 1.5,
                "ICT": 1.5
            }
        },
        otherRequirements: []
    },
    // Liberal Arts Programme
    {
        programmeDetails: {
            id: "JS7123",
            name: "Bachelor of Liberal Arts (Honours) in Global Development and Sustainability",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "2", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
                { variable: "BEST5", minGrade: "2", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "ENG": 2,
                "MATH": 1.5,
                "MATH-M1": 1.5,
                "MATH-M2": 1.5,
                "BIO": 1.25,
                "BAFS": 1.25,
                "CHEM": 1.25,
                "DAT": 1.25,
                "ECO": 1.25,
                "GEOG": 1.25,
                "HMSC": 1.25,
                "ICT": 1.25,
                "PHY": 1.25,
                "TL": 1.25,
                "THS": 1.25
            }
        },
        otherRequirements: []
    },
    // Science Programme
    {
        programmeDetails: {
            id: "JS7225",
            name: "Bachelor of Science (Honours) in Data Science",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "3" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "2", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
                { variable: "BEST5", minGrade: "2", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "ENG": 2,
                "MATH": 2,
                "MATH-M1": 2,
                "MATH-M2": 2,
                "CHEM": 2,
                "ICT": 2,
                "PHY": 1.25
            }
        },
        otherRequirements: []
    }
];
