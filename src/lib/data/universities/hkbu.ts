import { ProgrammeEntry } from '../../core/types';

export const hkbu: ProgrammeEntry[] = [
    // Faculty of ARTS and SOCIAL SCIENCES
    {
        programmeDetails: {
            id: "JS2020",
            name: "Bachelor of Arts (Hons) (Chinese Language and Literature / Creative and Professional Writing / English Language and Literature / Humanities / Translation)",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {}
        },
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "JS2025",
            name: "Bachelor of Arts (Hons) in Religion, Philosophy and Ethics",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {}
        },
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "JS2610",
            name: "Bachelor of Arts (Hons) / Bachelor of Social Sciences (Hons) (European Studies [French/German Stream] / Geography / Global and China Studies / Government and International Studies / History / Sociology)",
        },
        method: "Best 5 Subjects with WEIGHTING",
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
                "ENG": 2
            }
        },
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "JS2620",
            name: "Bachelor of Arts (Hons) in Physical Education and Recreation Management",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {}
        },
        otherRequirements: ["Subjects related to Physical Education"]
    },
    {
        programmeDetails: {
            id: "JS2660",
            name: "Bachelor of Social Work (Hons)",
        },
        method: "Best 5 Subjects with WEIGHTING",
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
                "HMSC": 1.1
            }
        },
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "JS2940",
            name: "Bachelor of Social Sciences (Hons) / Bachelor of Science (Hons) in Innovation in Health and Social Well-Being",
        },
        method: "Best 5 Subjects with WEIGHTING",
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
                "MATH": 1.5,
                "MAT1": 1.5,
                "HMSC": 1.5
            }
        },
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "JS2960",
            name: "Bachelor of Arts and Science (Hons) in Digital Futures and Humanities",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {}
        },
        otherRequirements: []
    },
    // School of BUSINESS
    {
        programmeDetails: {
            id: "JS2110",
            name: "Bachelor of Business Administration (Hons) - Accounting Concentration",
        },
        method: "Best 5 Subjects with WEIGHTING",
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
                "ENG": 1.5
            }
        },
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "JS2120",
            name: "Bachelor of Business Administration (Hons)",
        },
        method: "Best 5 Subjects with WEIGHTING",
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
                "ENG": 1.5
            }
        },
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "JS2910",
            name: "Bachelor of Science (Hons) in Business Computing and Data Analytics",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {}
        },
        otherRequirements: []
    },
    // School of CHINESE MEDICINE
    {
        programmeDetails: {
            id: "JS2410",
            name: "Bachelor of Chinese Medicine and Bachelor of Science (Hons) in Biomedical Science",
        },
        method: "Best 5 Subjects with WEIGHTING",
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
                "CHIN": 1.5,
                "ENG": 1.5,
                "BIO": 1.5,
                "CHEM": 1.25
            }
        },
        otherRequirements: ["One elective subject must be Biology or Chemistry"]
    },
    {
        programmeDetails: {
            id: "JS2420",
            name: "Bachelor of Pharmacy (Hons) in Chinese Medicine",
        },
        method: "Best 5 Subjects with WEIGHTING",
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
                "ENG": 1.5,
                "MATH": 1.25,
                "BIO": 1.25,
                "CHEM": 1.5
            }
        },
        otherRequirements: ["One elective subject must be Chemistry"]
    },
    // School of COMMUNICATION
    {
        programmeDetails: {
            id: "JS2310",
            name: "Bachelor of Communication (Hons) (Journalism and Digital Media / Public Relations and Advertising)",
        },
        method: "Best 5 Subjects with WEIGHTING",
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
                "CHIN": 1.25,
                "ENG": 1.25
            }
        },
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "JS2370",
            name: "Bachelor of Communication (Hons) in Game Design and Animation",
        },
        method: "Best 5 Subjects with WEIGHTING",
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
                "ENG": 1.25,
                "MATH": 1.1,
                "VAT1": 1.15
            }
        },
        otherRequirements: []
    },
    // School of CREATIVE ARTS
    {
        programmeDetails: {
            id: "JS2060",
            name: "Bachelor of Arts (Hons) / Bachelor of Music (Hons) (Music / Creative Industries)",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {}
        },
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "JS2330",
            name: "Bachelor of Arts (Hons) in Film and Television",
        },
        method: "Best 5 Subjects with WEIGHTING",
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
                "CHIN": 1.25,
                "ENG": 1.25
            }
        },
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "JS2340",
            name: "Bachelor of Fine Arts (Hons) in Acting for Global Screen",
        },
        method: "Best 5 Subjects with WEIGHTING",
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
                "ENG": 1.5,
                "MUSC": 1.2,
                "VAT1": 1.2
            }
        },
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "JS2810",
            name: "Bachelor of Arts (Hons) in Visual Arts",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {}
        },
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "JS2920",
            name: "Bachelor of Arts and Science (Hons) in Arts and Technology",
        },
        method: "Best 5 Subjects with WEIGHTING",
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
                "MATH": 1.2
            }
        },
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "JS2930",
            name: "Bachelor of Arts (Hons) in Business Administration (Global Entertainment)",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {}
        },
        otherRequirements: []
    },
    // Faculty of SCIENCE
    {
        programmeDetails: {
            id: "JS2510",
            name: "Bachelor of Science (Hons)",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {}
        },
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "JS2910",
            name: "Bachelor of Science (Hons) in Business Computing and Data Analytics",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {}
        },
        otherRequirements: []
    },
    // Transdisciplinary Programmes
    {
        programmeDetails: {
            id: "JS2920",
            name: "Bachelor of Arts and Science (Hons) in Arts and Technology",
        },
        method: "Best 5 Subjects with WEIGHTING",
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
                "MATH": 1.2
            }
        },
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "JS2930",
            name: "Bachelor of Arts (Hons) in Business Administration (Global Entertainment)",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {}
        },
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "JS2940",
            name: "Bachelor of Social Sciences (Hons) / Bachelor of Science (Hons) in Innovation in Health and Social Well-Being",
        },
        method: "Best 5 Subjects with WEIGHTING",
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
                "MATH": 1.5,
                "MAT1": 1.5,
                "HMSC": 1.5
            }
        },
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "JS2950",
            name: "Bachelor of Arts, Science and Technology (Hons) in Individualised Major",
        },
        method: "Best 5 Subjects with WEIGHTING",
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
                "CHIN": 1.25,
                "ENG": 1.25
            }
        },
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "JS2960",
            name: "Bachelor of Arts and Science (Hons) in Digital Futures and Humanities",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {}
        },
        otherRequirements: []
    }
];