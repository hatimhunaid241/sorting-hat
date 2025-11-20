import type { ProgrammeEntry } from '../../core/types';

export const hku: ProgrammeEntry[] = [
    {
        programmeDetails: {
            id: "6004",
            name: "Bachelor of Arts in Architectural Studies",
            faculty: "Faculty of Architecture",
        },
        method: "Best 5 Subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST1", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"] },
                { variable: "BEST2", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"] },
                { variable: "BEST3", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"] },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
        },
        expectedScore: 28,
        otherRequirements: ["Candidates are required to take part in the Aptitude Exercise. Instructions for taking part in the Aptitude Exercise will be sent to all potential candidates via e-mail and posted on the programme website."]
    },
    {
        programmeDetails: {
            id: "6016",
            name: "Bachelor of Science in Surveying",
            faculty: "Faculty of Architecture",
        },
        method: "Best 5 Subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST1", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"] },
                { variable: "BEST2", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"] },
                { variable: "BEST3", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"] },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ]
        },
        expectedScore: 28,
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "6028",
            name: "Bachelor of Arts in Landscape Studies",
            faculty: "Faculty of Architecture",
        },
        method: "Best 5 Subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST1", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"] },
                { variable: "BEST2", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"] },
                { variable: "BEST3", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"] },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ]
        },
        expectedScore: 31,
        otherRequirements: ["Candidates are required to take part in the Creative Design Response. Instructions for taking part in the Creative Design Response will be sent to all potential candidates via e-mail and posted on the programme website.", "Candidates are strongly encouraged to show a portfolio of creative work (which may include drawing, painting, collage, sculpture, creative writing, video, multi-media work) during the interview."]
    },
    {
        programmeDetails: {
            id: "6042",
            name: "Bachelor of Arts in Urban Studies",
            faculty: "Faculty of Architecture",
        },
        method: "Best 5 Subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST1", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"] },
                { variable: "BEST2", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"] },
                { variable: "BEST3", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"] },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ]
        },
        expectedScore: 27,
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "6236",
            name: "Bachelor of Arts and Sciences in Design+",
            faculty: "Faculty of Architecture",
        },
        method: "Best 5 Subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "4" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST1", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"] },
                { variable: "BEST2", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"] },
                { variable: "BEST3", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"] },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ]
        },
        expectedScore: 30,
        otherRequirements: [
            "Candidates with level 4 in English Language, if admitted, will be required to take 6 additional credits in Core University English to complete their degree studies.",
            "Candidates are required to submit at least one example of a creative work (fine art, writing, or other forms of creative output) for consideration."
        ]
    },
    {
        programmeDetails: {
            id: "6054",
            name: "Bachelor of Arts",
            faculty: "Faculty of Arts",
        },
        method: "2x Eng + Best 4 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST1", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"] },
                { variable: "BEST2", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"] },
                { variable: "BEST3", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"] },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "ENG": 2,
                "CHIN": 1.5
            }
        },
        expectedScore: 34,
        otherRequirements: [
            "Non-school candidates and candidates who have obtained level 3 in HKDSE English Language may be interviewed and will be considered on a case-by-case basis.",
        ]
    },
    {
        programmeDetails: {
            id: "6274",
            name: "Bachelor of Arts in Global Creative Industries",
            faculty: "Faculty of Arts",
        },
        method: "2x Eng + Best 4 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "4" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "3" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "ENG": 2,
                "CHIN": 1.5
            }
        },
        expectedScore: 32,
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "6286",
            name: "Bachelor of Arts in Humanities and Digital Technologies",
            faculty: "Faculty of Arts",
        },
        method: "2x Eng + Best 4 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "ENG": 2,
                "CHIN": 1.5
            }
        },
        expectedScore: 35,
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "6298",
            name: "Bachelor of Arts and Bachelor of Engineering in Artificial Intelligence and Data Science",
            faculty: "Faculty of Arts",
        },
        method: "2x Eng + 1.5x Math + Best 2 Subjects with WEIGHTING + Best Subject",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "3" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST2", minGrade: "3", includeAdditionalSubjects: ["BIO", "CHEM", "ECO", "ICT", "PHY"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "ENG": 2,
                "MATH": 1.5
            }
        },
        expectedScore: 42,
        otherRequirements: [
            "Level 3 or above in one of the following subjects: Biology, Chemistry, Economics, Information and Communication Technology, or Physics."
        ]
    },
    {
        programmeDetails: {
            id: "6755",
            name: "Bachelor of Business Administration",
            faculty: "HKU Business School",
        },
        method: "1.5x Eng + 1.5x Math + Best 3 Subjects + 0.2x 6th Best Subject",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "4" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "3" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST3", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"] },
                { variable: "BEST6", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "ENG": 1.5,
                "MATH": 1.5
            }
        },
        expectedScore: 36,
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "6767",
            name: "Bachelor of Economics / Bachelor of Economics and Finance",
            faculty: "HKU Business School",
        },
        method: "1.5x Eng + 1.5x Math + Best 3 Subjects + 0.2x 6th Best Subject",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "4" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "3" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST3", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"] },
                { variable: "BEST6", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "ENG": 1.5,
                "MATH": 1.5
            }
        },
        expectedScore: 39,
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "6781",
            name: "Bachelor of Business Administration in Accounting and Finance / Bachelor of Business Administration in Accounting Data Analytics",
            faculty: "HKU Business School",
        },
        method: "1.5x Eng + 1.5x Math + Best 3 Subjects + 0.2x 6th Best Subject",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "4" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "3" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST3", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"] },
                { variable: "BEST6", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "ENG": 1.5,
                "MATH": 1.5
            }
        },
        expectedScore: 34,
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "6793",
            name: "Bachelor of Business Administration (Business Analytics)",
            faculty: "HKU Business School",
        },
        method: "1.5x Eng + 1.5x Math + Best 3 Subjects + 0.2x 6th Best Subject",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "4" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "3" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST3", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"] },
                { variable: "BEST6", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "ENG": 1.5,
                "MATH": 1.5
            }
        },
        expectedScore: 34,
        otherRequirements: [
            "Level 3 or above in one of the following subjects: Biology, Chemistry, Information and Communication Technology, or Physics.",
            "Level 3 or above in Mathematics Extended Part (Module 1 or 2) is preferred."
        ]
    },
    {
        programmeDetails: {
            id: "6808",
            name: "Bachelor of Business Administration (Law) and Bachelor of Laws",
            faculty: "HKU Business School",
        },
        method: "1.5x Eng + 1.5x Math + Best 4 Subjects + 0.2x 7th Best Subject",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "5" },
                { subject: "CHIN", minGrade: "4" },
                { subject: "MATH", minGrade: "4" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"] },
                { variable: "BEST7", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "ENG": 1.5,
                "MATH": 1.5
            }
        },
        expectedScore: 45,
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "6846",
            name: "Bachelor of Economics",
            faculty: "HKU Business School",
        },
        method: "1.5x Eng + 1.5x Math + Best 3 Subjects + 0.2x 6th Best Subject",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "4" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "3" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST3", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"] },
                { variable: "BEST6", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "ENG": 1.5,
                "MATH": 1.5
            }
        },
        expectedScore: 36,
        otherRequirements: [
            "Level 3 or above in one of the following subjects: Biology, Business, Accounting and Financial Studies, Economics, Information and Communication Technology, or Physics.",
            "Level 3 or above in Mathematics Extended Part (Module 1 or 2) is preferred."
        ]
    },
    {
        programmeDetails: {
            id: "6860",
            name: "Bachelor of Economics and Finance",
            faculty: "HKU Business School",
        },
        method: "1.5x Eng + 1.5x Math + Best 3 Subjects + 0.2x 6th Best Subject",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "4" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "3" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST3", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"] },
                { variable: "BEST6", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "ENG": 1.5,
                "MATH": 1.5
            }
        },
        expectedScore: 37,
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "6884",
            name: "Bachelor of Finance",
            faculty: "HKU Business School",
        },
        method: "1.5x Eng + 1.5x Math + Best 3 Subjects + 0.2x 6th Best Subject",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "4" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "3" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST3", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"] },
                { variable: "BEST6", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "ENG": 1.5,
                "MATH": 1.5
            }
        },
        expectedScore: 36,
        otherRequirements: [
            "Level 3 or above in Mathematics Extended Part (Module 1 or 2)."
        ]
    },
    {
        programmeDetails: {
            id: "6896",
            name: "Bachelor of Business Administration (International Business and Global Management)",
            faculty: "HKU Business School",
        },
        method: "1.5x Eng + 1.5x Math + Best 3 Subjects + 0.2x 6th Best Subject",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "4" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "3" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST3", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"] },
                { variable: "BEST6", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "ENG": 1.5,
                "MATH": 1.5
            }
        },
        expectedScore: 32,
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "6107",
            name: "Bachelor of Dental Surgery",
            faculty: "Faculty of Dentistry",
        },
        method: "Best of Biology or Chemistry with WEIGHTING + Best 5 Subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "4" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "3" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "BIO": 1.3,
                "CHEM": 1.3
            }
        },
        expectedScore: 41,
        otherRequirements: [
            "Candidates are strongly advised to include their personal statement in English in the \"Additional Information\" of their JUPAS application.",
            "Candidates are encouraged to enter details about their other learning experiences or extra-curricular activities.",
            "Supporting documents should be uploaded to the appropriate sections of CEA or SLP."
        ]
    },
    {
        programmeDetails: {
            id: "6080",
            name: "Bachelor of Arts and Bachelor of Education in Language Education - Chinese",
            faculty: "Faculty of Education",
        },
        method: "1.5x Chin + Best 4 Subjects",
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
                "CHIN": 1.5
            }
        },
        expectedScore: 35,
        otherRequirements: [
            "Candidates should have knowledge of Cantonese and Putonghua, and traditional Chinese characters.",
            "Candidates are strongly advised to include their personal statement in English in the \"Additional Information\" of their JUPAS application.",
            "Candidates are encouraged to enter details about their other learning experiences or extra-curricular activities.",
            "Supporting documents should be uploaded to the appropriate sections of CEA or SLP."
        ]
    },
    {
        programmeDetails: {
            id: "6092",
            name: "Bachelor of Education in Early Childhood Education and Special Education",
            faculty: "Faculty of Education",
        },
        method: "1.5x Eng + Best 4 Subjects",
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
        expectedScore: 27,
        otherRequirements: [
            "Candidates are strongly advised to include their personal statement in English in the \"Additional Information\" of their JUPAS application.",
            "Candidates are encouraged to enter details about their other learning experiences or extra-curricular activities.",
            "Supporting documents should be uploaded to the appropriate sections of CEA or SLP."
        ]
    },
    {
        programmeDetails: {
            id: "6119",
            name: "Bachelor of Education and Bachelor of Science",
            faculty: "Faculty of Education",
        },
        method: "Eng + 1.5x Math + 1.5x Best Sci Subject + Best 2 Subjects with weightings",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST2", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "MATH": 1.5,
                "BIO": 1.5,
                "CHEM": 1.5,
                "PHY": 1.5
            }
        },
        expectedScore: 44,
        otherRequirements: [
            "Level 3 or above in one of the following subjects: Biology, Chemistry, or Physics."
        ]
    },
    {
        programmeDetails: {
            id: "6157",
            name: "Bachelor of Science in Speech-Language Pathology",
            faculty: "Faculty of Education",
        },
        method: "Best 5 Subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "4" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ]
        },
        expectedScore: 34,
        otherRequirements: [
            "Candidates must be able to communicate effectively and fluently in both Cantonese and English."
        ]
    },
    {
        programmeDetails: {
            id: "6303",
            name: "Bachelor of Engineering Elite Stream",
            faculty: "Faculty of Engineering",
        },
        method: "Eng + Math + Best 3 Subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "4" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "4" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST3", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "BIO": 1.5,
                "CHEM": 1.5,
                "MATH-M1": 1.5,
                "MATH-M2": 1.5,
                "PHY": 1.5
            }
        },
        expectedScore: 36,
        otherRequirements: [
            "Level 3 or above in one of the following subjects: Biology, Chemistry, Combined Science, or Physics.",
            "Level 3 or above in Mathematics Extended Part (Module 1 or 2) is preferred."
        ]
    },
    {
        programmeDetails: {
            id: "6315",
            name: "Bachelor of Engineering in Data and Computer Science",
            faculty: "Faculty of Engineering",
        },
        method: "Eng + Math + Best 3 Subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "3" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST3", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "BIO": 1.5,
                "CHEM": 1.5,
                "MATH-M1": 1.5,
                "MATH-M2": 1.5,
                "PHY": 1.5
            }
        },
        expectedScore: 26,
        otherRequirements: [
            "Level 3 or above in one of the following subjects: Biology, Chemistry, Combined Science, or Physics.",
            "Level 3 or above in Mathematics Extended Part (Module 1 or 2) is preferred."
        ]
    },
    {
        programmeDetails: {
            id: "6339",
            name: "Bachelor of Engineering in Mechanical Engineering",
            faculty: "Faculty of Engineering",
        },
        method: "Eng + Math + Best 3 Subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "3" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST3", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "BIO": 1.5,
                "CHEM": 1.5,
                "MATH-M1": 1.5,
                "MATH-M2": 1.5,
                "PHY": 1.5
            }
        },
        expectedScore: 27,
        otherRequirements: [
            "Level 3 or above in one of the following subjects: Biology, Chemistry, Combined Science, or Physics.",
            "Level 3 or above in Mathematics Extended Part (Module 1 or 2) is preferred."
        ]
    },
    {
        programmeDetails: {
            id: "6353",
            name: "Bachelor of Engineering in Civil Engineering",
            faculty: "Faculty of Engineering",
        },
        method: "Eng + Math + Best 3 Subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "3" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST3", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "BIO": 1.5,
                "CHEM": 1.5,
                "MATH-M1": 1.5,
                "MATH-M2": 1.5,
                "PHY": 1.5
            }
        },
        expectedScore: 28,
        otherRequirements: [
            "Level 3 or above in one of the following subjects: Biology, Chemistry, Combined Science, or Physics.",
            "Level 3 or above in Mathematics Extended Part (Module 1 or 2) is preferred."
        ]
    },
    {
        programmeDetails: {
            id: "6377",
            name: "Bachelor of Engineering and Master of Science in Engineering (Biomedical Engineering)",
            faculty: "Faculty of Engineering",
        },
        method: "Eng + Math + Best 3 Subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "4" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "4" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST3", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "BIO": 1.5,
                "CHEM": 1.5,
                "MATH-M1": 1.5,
                "MATH-M2": 1.5,
                "PHY": 1.5
            }
        },
        expectedScore: 33,
        otherRequirements: [
            "Level 3 or above in one of the following subjects: Biology, Chemistry, Combined Science, or Physics.",
            "Level 3 or above in Mathematics Extended Part (Module 1 or 2) is preferred."
        ]
    },
    {
        programmeDetails: {
            id: "6057",
            name: "Global Engineering and Business Programme",
            faculty: "Faculty of Engineering",
        },
        method: "Eng + Math + Best 3 Subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "4" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "4" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST3", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "BIO": 1.5,
                "CHEM": 1.5,
                "MATH-M1": 1.5,
                "MATH-M2": 1.5,
                "PHY": 1.5
            }
        },
        expectedScore: 32,
        otherRequirements: [
            "Level 3 or above in one of the following subjects: Biology, Chemistry, and Physics.",
            "Level 3 or above in Mathematics Extended Part (Module 1 or 2) is preferred."
        ]
    },
    {
        programmeDetails: {
            id: "6987",
            name: "Bachelor of Engineering in Computer Engineering / Electrical Engineering / Electronic Engineering",
            faculty: "Faculty of Engineering",
        },
        method: "Eng + Math + Best 3 Subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "3" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST3", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "BIO": 1.5,
                "CHEM": 1.5,
                "MATH-M1": 1.5,
                "MATH-M2": 1.5,
                "PHY": 1.5
            }
        },
        expectedScore: 29,
        otherRequirements: [
            "Level 3 or above in one of the following subjects: Biology, Chemistry, Combined Science, or Physics.",
            "Level 3 or above in Mathematics Extended Part (Module 1 or 2) is preferred."
        ]
    },
    {
        programmeDetails: {
            id: "6078",
            name: "Bachelor of Arts and Bachelor of Laws",
            faculty: "Faculty of Law",
        },
        method: "Eng + Best 5 Subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "5" },
                { subject: "CHIN", minGrade: "4" },
                { subject: "MATH", minGrade: "3" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ]
        },
        expectedScore: 38,
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "6406",
            name: "Bachelor of Laws",
            faculty: "Faculty of Law",
        },
        method: "Eng + Best 5 Subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "5" },
                { subject: "CHIN", minGrade: "4" },
                { subject: "MATH", minGrade: "3" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ]
        },
        expectedScore: 35,
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "6250",
            name: "Bachelor of Arts and Sciences in Global Health and Development",
            faculty: "Li Ka Shing Faculty of Medicine",
        },
        method: "Best 5 Subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "4" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ]
        },
        expectedScore: 29,
        otherRequirements: [
            "Candidates with level 4 in English Language, if admitted, will be required to take 6 additional credits in Core University English to complete their degree studies."
        ]
    },
    {
        programmeDetails: {
            id: "6419",
            name: "Bachelor of Advanced Leadership Track",
            faculty: "Li Ka Shing Faculty of Medicine",
        },
        method: "Best 5 Subjects + 0.5x 6th Best Subject",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST6", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ]
        },
        expectedScore: 37,
        otherRequirements: [
            "A good working knowledge of Cantonese is required.",
            "Chemistry or Combined Science with Chemistry component is required for the pre-medicine pathway to Medicine."
        ]
    },
    {
        programmeDetails: {
            id: "6459",
            name: "Bachelor of Medicine and Bachelor of Surgery",
            faculty: "Li Ka Shing Faculty of Medicine",
        },
        method: "Best 6 Subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "4" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST6", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ]
        },
        expectedScore: 44,
        otherRequirements: [
            "Level 3 or above in one of the following subjects: Biology or Chemistry.",
            "A good working knowledge of Cantonese is required."
        ]
    },
    {
        programmeDetails: {
            id: "6468",
            name: "Bachelor of Nursing",
            faculty: "Li Ka Shing Faculty of Medicine",
        },
        method: "Best 5 Subjects + 0.5x 6th Best Subject",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST6", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ]
        },
        expectedScore: 27,
        otherRequirements: [
            "A good working knowledge of Cantonese is required."
        ]
    },
    {
        programmeDetails: {
            id: "6482",
            name: "Bachelor of Chinese Medicine",
            faculty: "Li Ka Shing Faculty of Medicine",
        },
        method: "Best 5 Subjects + 0.5x 6th Best Subject",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST6", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ]
        },
        expectedScore: 33,
        otherRequirements: [
            "Level 3 or above in one of the following subjects: Biology, Chemistry, or Physics.",
            "A good command of written and spoken Chinese (Cantonese and Putonghua) is required."
        ]
    },
    {
        programmeDetails: {
            id: "6404",
            name: "Bachelor of Pharmacy",
            faculty: "Li Ka Shing Faculty of Medicine",
        },
        method: "Best 6 Subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "4" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST6", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ]
        },
        expectedScore: 39,
        otherRequirements: [
            "Level 3 or above in Chemistry.",
            "A good working knowledge of Cantonese is required."
        ]
    },
    {
        programmeDetails: {
            id: "6626",
            name: "Bachelor of Medicine and Bachelor of Surgery (Distinguished Medical Scholar)",
            faculty: "Li Ka Shing Faculty of Medicine",
        },
        method: "Best 6 Subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "4" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST6", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ]
        },
        expectedScore: null,
        otherRequirements: [
            "Level 3 or above in one of the following subjects: Biology or Chemistry.",
            "A good working knowledge of Cantonese is required."
        ]
    },
    {
        programmeDetails: {
            id: "6949",
            name: "Bachelor of Biomedical Sciences",
            faculty: "Li Ka Shing Faculty of Medicine",
        },
        method: "Best 6 Subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "4" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST6", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ]
        },
        expectedScore: 40,
        otherRequirements: [
            "Level 3 or above in one of the following subjects: Biology or Chemistry."
        ]
    },
    {
        programmeDetails: {
            id: "6668",
            name: "Science Master Class",
            faculty: "Faculty of Science",
        },
        method: "Eng + 1.3x Math + 1.3x Best 2 from Biology/Chemistry/M1/M2/Physics + Best Remaining Subject with weightings",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "4" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST2", minGrade: "3", includeAdditionalSubjects: ["BIO", "CHEM", "MATH-M1", "MATH-M2", "PHY"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "MATH": 1.3,
                "BIO": 1.3,
                "CHEM": 1.3,
                "MATH-M1": 1.3,
                "MATH-M2": 1.3,
                "PHY": 1.3
            }
        },
        expectedScore: 34,
        otherRequirements: [
            "Level 3 or above in two of the following subjects: Biology, Chemistry, Mathematics Extended Part (Module 1), Mathematics Extended Part (Module 2)."
        ]
    },
    {
        programmeDetails: {
            id: "6858",
            name: "Bachelor of Science and Bachelor of Laws",
            faculty: "Faculty of Science",
        },
        method: "2x Eng + 2x Math / M1 / M2 + 2x Best Sci Subject + Best 3 Subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "5" },
                { subject: "CHIN", minGrade: "4" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST3", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "ENG": 2,
                "MATH": 2,
                "MATH-M1": 2,
                "MATH-M2": 2,
                "BIO": 2,
                "CHEM": 2,
                "PHY": 2
            }
        },
        expectedScore: 54,
        otherRequirements: [
            "Level 3 or above in one of the following subjects: Biology, Chemistry, or Physics."
        ]
    },
    {
        programmeDetails: {
            id: "6901",
            name: "Bachelor of Science",
            faculty: "Faculty of Science",
        },
        method: "Eng + 1.5x Math + 1.5x Best Sci Subject + Best 2 Subjects with weightings",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST2", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "MATH": 1.5,
                "BIO": 1.5,
                "CHEM": 1.5,
                "MATH-M1": 1.5,
                "MATH-M2": 1.5,
                "PHY": 1.5
            }
        },
        expectedScore: 37,
        otherRequirements: [
            "Level 3 or above in one of the following subjects: Biology, Chemistry, or Physics."
        ]
    },
    {
        programmeDetails: {
            id: "6705",
            name: "Bachelor of Psychology",
            faculty: "Faculty of Social Sciences",
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
            ]
        },
        expectedScore: 31,
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "6717",
            name: "Bachelor of Social Sciences",
            faculty: "Faculty of Social Sciences",
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
            ]
        },
        expectedScore: 34,
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "6731",
            name: "Bachelor of Social Work",
            faculty: "Faculty of Social Sciences",
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
            ]
        },
        expectedScore: 28,
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "6810",
            name: "Bachelor of Social Sciences (Government and Law) and Bachelor of Laws",
            faculty: "Faculty of Social Sciences",
        },
        method: "Best 6 Subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "5" },
                { subject: "CHIN", minGrade: "4" },
                { subject: "MATH", minGrade: "3" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST6", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ]
        },
        expectedScore: 39,
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "6827",
            name: "Bachelor of Journalism, Media and Artificial Intelligence",
            faculty: "Faculty of Social Sciences",
        },
        method: "1.5x Eng + Best 4 Subjects",
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
        expectedScore: 35,
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "6925",
            name: "Bachelor of Engineering in Biomedical Engineering",
            faculty: "School of Biomedical Engineering",
        },
        method: "Eng + Math + Best 3 Subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "3" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST3", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ]
        },
        expectedScore: 31,
        otherRequirements: [
            "Level 3 or above in one of the following subjects: Biology, Chemistry, Combined Science, or Physics.",
            "Level 3 or above in Mathematics Extended Part (Module 1 or 2) is preferred."
        ]
    },
    {
        programmeDetails: {
            id: "6240",
            name: "Computing and Data Science (DelftX)",
            faculty: "School of Computing and Data Science",
        },
        method: "Eng + Math + Best 3 Subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "3" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST3", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ]
        },
        expectedScore: null,
        otherRequirements: [
            "Level 3 or above in one of the following subjects: Biology, Chemistry, Economics, Information and Communication Technology, or Physics.",
            "Level 3 or above in Mathematics Extended Part (Module 1 or 2) is preferred."
        ]
    },
    {
        programmeDetails: {
            id: "6234",
            name: "Bachelor of Arts and Sciences in Applied Artificial Intelligence",
            faculty: "School of Computing and Data Science",
        },
        method: "Eng + Math + Best 3 Subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "4" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "3" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST3", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ]
        },
        expectedScore: 57,
        otherRequirements: [
            "Level 3 or above in Mathematics Extended Part (Module 1 or 2) is preferred.",
            "2x Eng + 2x Math + 2x M1/M2 + Best 2 Subjects with WEIGHTING"
        ]
    },
    {
        programmeDetails: {
            id: "6248",
            name: "Bachelor of Arts and Sciences in Financial Technology",
            faculty: "School of Computing and Data Science",
        },
        method: "Eng + Math + Best 3 Subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "4" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "3" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST3", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ]
        },
        expectedScore: 35,
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "6729",
            name: "Bachelor of Science in Actuarial Science",
            faculty: "School of Computing and Data Science",
        },
        method: "1.2x Eng + 1.2x Math + 1.2x M1/M2 + Best 2 Subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "4" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST2", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "ENG": 1.2,
                "MATH": 1.2,
                "MATH-M1": 1.2,
                "MATH-M2": 1.2
            }
        },
        expectedScore: 36,
        otherRequirements: [
            "Level 4 or above in Mathematics Extended Part (Module 1 or 2)."
        ]
    },
    {
        programmeDetails: {
            id: "6779",
            name: "Statistical Decision Sciences",
            faculty: "School of Computing and Data Science",
        },
        method: "1.5x Math + Best 4 Subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "4" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "MATH": 1.5
            }
        },
        expectedScore: 33,
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "6909",
            name: "Computing and Data Science",
            faculty: "School of Computing and Data Science",
        },
        method: "Eng + Math + Best 3 Subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "3" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST3", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ]
        },
        expectedScore: 44,
        otherRequirements: [
            "Level 3 or above in one of the following subjects: Biology, Chemistry, Economics, Information and Communication Technology, or Physics.",
            "Level 3 or above in Mathematics Extended Part (Module 1 or 2) is preferred.",
            "Eng + 1.5x Math + Best 2 Subjects with WEIGHTING + Best Subject"
        ]
    },
    {
        programmeDetails: {
            id: "6602",
            name: "Bachelor of Science in Innovation and Design",
            faculty: "School of Innovation",
        },
        method: "2x Eng + 2x Math + Best 3 Subjects with WEIGHTING 9",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "3" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST3", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST6", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "ENG": 2,
                "MATH": 2,
                "BIO": 2,
                "CHEM": 2,
                "CS": 2,
                "DAT": 2,
                "ICT": 2,
                "IS": 2,
                "PHY": 2,
                "TL": 2,
                "MATH-M1": 2,
                "MATH-M2": 2,
                "OTHERS": 1.5
            }
        },
        expectedScore: 58,
        otherRequirements: [
            "Level 4 or above in one of the following subjects: Biology, Chemistry, Combined Science, Design and Applied Technology, Information and Communication Technology, Integrated Science, Physics, or Technology and Living."
        ]
    },
]