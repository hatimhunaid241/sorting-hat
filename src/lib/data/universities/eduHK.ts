import { ProgrammeEntry } from '../../core/types';

export const eduhk: ProgrammeEntry[] = [
    // Five-year Full-time Teacher Education Double Degree Programmes
    {
        programmeDetails: {
            id: "JS8001",
            name: "BA in Creative and Digital Arts and BEd (Music)",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "2", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "2", includeCategories: ["A", "B", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "MUSC": 1.5
            }
        },
        otherRequirements: ["Satisfactory performance in an audition is required. Applicants who obtain Level 4 or above in HKDSE Music will be exempted from the audition"]
    },
    {
        programmeDetails: {
            id: "JS8002",
            name: "BA in Creative and Digital Arts and BEd (Visual Arts)",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "2", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "2", includeCategories: ["A", "B", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "VAT1": 1.5
            }
        },
        otherRequirements: ["Satisfactory performance in a practical test is required. Applicants who obtain Level 4 or above in HKDSE Visual Arts will be exempted from the practical test"]
    },
    {
        programmeDetails: {
            id: "JS8003",
            name: "BA in Digital Chinese Culture and Communication and BEd (Chinese Language)",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "2", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "2", includeCategories: ["A", "B", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "CHIN": 1.5,
                "ENG": 1.5,
                "CHIN-LIT": 1.5,
                "ICT": 1.5
            }
        },
        otherRequirements: ["This programme requires high Chinese language proficiency. The HKDSE Chinese Language requirement cannot be substituted"]
    },
    {
        programmeDetails: {
            id: "JS8004",
            name: "BA in English Studies and Digital Communication and BEd (English Language)",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "2", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "2", includeCategories: ["A", "B", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "ENG": 1.5,
                "ICT": 1.5,
                "LIT-ENG": 1.5
            }
        },
        otherRequirements: ["This programme requires high English language proficiency. The HKDSE English Language requirement cannot be substituted"]
    },
    {
        programmeDetails: {
            id: "JS8005",
            name: "BA in Heritage Education and Arts Management and BEd (Chinese History)",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "2", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "2", includeCategories: ["A", "B", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "CHIN-HIST": 1.5,
                "HIST": 1.5
            }
        },
        otherRequirements: ["This programme requires high Chinese language proficiency. The HKDSE Chinese Language requirement cannot be substituted"]
    },
    {
        programmeDetails: {
            id: "JS8006",
            name: "BSocSc in Psychology and BEd (Early Childhood Education)",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "2", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "2", includeCategories: ["A", "B", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "CHIN": 1.5,
                "ENG": 1.5
            }
        },
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "JS8007",
            name: "BA in Personal Finance and BEd (Business, Accounting and Financial Studies)",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "2", includeCategories: ["A", "B", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "BAFS": 1.5,
                "ECON": 1.5
            }
        },
        otherRequirements: ["The best one subject of BAFS (Accounting/Business Management) or Economics"]
    },
    {
        programmeDetails: {
            id: "JS8008",
            name: "BSc in Artificial Intelligence and Educational Technology and BEd (Information and Communication Technology and Primary Science)",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "3" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "2", includeCategories: ["A", "B", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "MATH": 1.5,
                "MATH-M1": 1.5,
                "MATH-M2": 1.5,
                "ICT": 1.5,
                "BIO": 1.5,
                "CHEM": 1.5,
                "PHYS": 1.5,
                "CSCI": 1.5,
                "ISCI": 1.5
            }
        },
        otherRequirements: ["3 in ICT / Biology / Chemistry / Physics"]
    },
    {
        programmeDetails: {
            id: "JS8009",
            name: "BSc in Artificial Intelligence and Educational Technology and BEd (Primary Mathematics)",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "3" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "2", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: [] },
                { variable: "BEST5", minGrade: "2", includeCategories: ["A", "B", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "MATH": 1.5,
                "MATH-M1": 1.5,
                "MATH-M2": 1.5,
                "PHYS": 1.5
            }
        },
        otherRequirements: ["2 in ICT / Biology / Chemistry / Physics / M1 / M2"]
    },
    {
        programmeDetails: {
            id: "JS8010",
            name: "BSc in Sports Science and Coaching and BEd (Physical Education)",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "2", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "2", includeCategories: ["A", "B", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "PE": 1.5
            }
        },
        otherRequirements: ["Satisfactory performance in written examination, physical fitness test and aquatic test are also required. Priority consideration will be given to applicants who have taken HKDSE Physical Education"]
    },
    {
        programmeDetails: {
            id: "JS8011",
            name: "BSc in Integrated Environmental Management and BEd (Science) [Biology & Chemistry major will be offered in 2026/27]",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "2", includeCategories: ["A", "B", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "CHEM": 1.5,
                "BIO": 1.5,
                "PHYS": 1.2,
                "MATH": 1.1,
                "MATH-M1": 1.1,
                "MATH-M2": 1.1,
                "GEOG": 1.1
            }
        },
        otherRequirements: ["3 in Biology / Chemistry / Physics"]
    },
    {
        programmeDetails: {
            id: "JS8012",
            name: "BSocSc in Sociology and Community Studies and BEd (Geography)",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "2", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "2", includeCategories: ["A", "B", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "ENG": 1.5,
                "GEOG": 1.5
            }
        },
        otherRequirements: ["2 in Geography / Tourism and Hospitality Studies"]
    },
    {
        programmeDetails: {
            id: "JS8013",
            name: "BSocSc in Sociology and Community Studies and BEd (Primary Humanities)",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "2", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "2", includeCategories: ["A", "B", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "CHIN-HIST": 1.5,
                "ECON": 1.5,
                "GEOG": 1.5,
                "HIST": 1.5
            }
        },
        otherRequirements: ["The best one subject of Chinese History, Economics, Geography or History"]
    },
    
    // Four-year Full-time Non-Teacher Education Programmes
    {
        programmeDetails: {
            id: "JS8651",
            name: "BSocSc in Psychology",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "2", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "2", includeCategories: ["A", "B", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {}
        },
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "JS8663",
            name: "BA in Special Education",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "2", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "2", includeCategories: ["A", "B", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "CHIN": 1.5,
                "ENG": 1.5
            }
        },
        otherRequirements: ["Applicants who have obtained Level 2 or above in HKDSE Chinese Literature will have an advantage. This programme requires high Chinese language proficiency. The HKDSE Chinese Language requirement cannot be substituted"]
    },
    {
        programmeDetails: {
            id: "JS8674",
            name: "BA in Digital Chinese Culture and Communication",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "2", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "2", includeCategories: ["A", "B", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "CHIN": 1.5,
                "CHIN-LIT": 1.5,
                "ICT": 1.5
            }
        },
        otherRequirements: ["This programme requires high Chinese language proficiency. The HKDSE Chinese Language requirement cannot be substituted"]
    },
    {
        programmeDetails: {
            id: "JS8675",
            name: "BA in English Studies and Digital Communication",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "2", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "2", includeCategories: ["A", "B", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "ENG": 1.5,
                "ICT": 1.5,
                "LIT-ENG": 1.5
            }
        },
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "JS8685",
            name: "BA in Creative and Digital Arts (Music)",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "2", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "2", includeCategories: ["A", "B", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "MUSC": 1.5
            }
        },
        otherRequirements: ["Satisfactory performance in an audition is required. Applicants who obtain Level 4 or above in HKDSE Music will be exempted from the audition"]
    },
    {
        programmeDetails: {
            id: "JS8686",
            name: "BA in Creative and Digital Arts (Visual Arts)",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "2", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "2", includeCategories: ["A", "B", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "VAT1": 1.5
            }
        },
        otherRequirements: ["Satisfactory performance in a practical test is required. Applicants who obtain Level 4 or above in HKDSE Visual Arts will be exempted from the practical test"]
    },
    {
        programmeDetails: {
            id: "JS8687",
            name: "BA in Heritage Education and Arts Management",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "2", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "2", includeCategories: ["A", "B", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "CHIN": 1.5,
                "ENG": 1.5,
                "CHIN-HIST": 1.5,
                "DAT": 1.5,
                "HIST": 1.5,
                "VAT1": 1.5
            }
        },
        otherRequirements: ["Priority consideration will be given to applicants who have taken HKDSE History, Chinese History, Visual Arts, or Design and Applied Technology"]
    },
    {
        programmeDetails: {
            id: "JS8688",
            name: "BA in Personal Finance",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "2", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "2", includeCategories: ["A", "B", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "BIO": 1.6,
                "CHEM": 1.6
            }
        },
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "JS8702",
            name: "BSc in Integrated Environmental Management",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "2", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "2", includeCategories: ["A", "B", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "BIO": 1.6,
                "CHEM": 1.6,
                "GEOG": 1.2,
                "MATH": 1.2,
                "MATH-M1": 1.2,
                "MATH-M2": 1.2,
                "PHYS": 1.2
            }
        },
        otherRequirements: ["in Biology / Chemistry / Physics / Geography / Integrated Science"]
    },
    {
        programmeDetails: {
            id: "JS8714",
            name: "BSc in Artificial Intelligence and Educational Technology",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "3" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "2", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: [] },
                { variable: "BEST5", minGrade: "2", includeCategories: ["A", "B", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "MATH": 1.5,
                "MATH-M1": 1.5,
                "MATH-M2": 1.5,
                "BIO": 1.5,
                "CHEM": 1.5,
                "PHYS": 1.5,
                "DAT": 1.5,
                "ICT": 1.5,
                "CSCI": 1.5,
                "ISCI": 1.5
            }
        },
        otherRequirements: ["Priority consideration will be given to applicants who have taken more than one of the HKDSE subjects listed in Elective 1"]
    },
    {
        programmeDetails: {
            id: "JS8726",
            name: "BSc in Sports Science and Coaching",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "2", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "2", includeCategories: ["A", "B", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "BIO": 2,
                "PE": 2,
                "ENG": 1.5,
                "MATH": 1.5,
                "MATH-M1": 1.5,
                "MATH-M2": 1.5,
                "DAT": 1.5,
                "ICT": 1.5
            }
        },
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "JS8727",
            name: "BSc in Speech Pathology and Rehabilitation",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "2", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "2", includeCategories: ["A", "B", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "CHIN": 1.5,
                "ENG": 1.5
            }
        },
        otherRequirements: ["Applicants must be able to communicate effectively and fluently in both Cantonese and English"]
    },
    
    // Two-year Full-time Higher Diploma Programme
    {
        programmeDetails: {
            id: "JS8507",
            name: "HD in Early Childhood Education",
        },
        method: "Best 3 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "2" },
                { subject: "CHIN", minGrade: "2" },
                { variable: "BEST3", minGrade: "2", includeCategories: ["A", "B", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "CHIN": 1.5,
                "ENG": 1.5
            }
        },
        otherRequirements: ["The 'Attained' level for Citizenship and Social Development is accepted as satisfying level 2 of one of the three other subjects, but is excluded in the admissions score calculation"]
    }
];