import { ProgrammeEntry } from '../../core/types';

export const cityU: ProgrammeEntry[] = [
    {
        programme: {
            id: "1132",
            name: "Bachelor of Engineering in Computer Science",
            faculty: "College of Engineering",
            degree: "BEng"
        },
        scoringFormula: {
            type: "TIERED_WEIGHTED",
            parameters: {
                tieredWeights: {
                    // CityU gives extra weight for higher mathematics grades
                    "MATH": {
                        "5**": 2.0,
                        "5*": 1.8,
                        "5": 1.5,
                        "4": 1.2,
                        "3": 1.0
                    },
                    "MATH-M1": {
                        "5**": 2.0,
                        "5*": 1.8,
                        "5": 1.5,
                        "4": 1.2,
                        "3": 1.0
                    },
                    "PHY": {
                        "5**": 1.5,
                        "5*": 1.3,
                        "5": 1.2,
                        "4": 1.1,
                        "3": 1.0
                    }
                },
                mathsExtendedBonus: {
                    bonusPoints: 0.5, // Extra 0.5 points for M1/M2
                    minGrade: "3"
                },
                includedCategories: ["A", "B"],
                maxCategoryBCSubjects: 1
            },
            notes: [
                "Tiered weighting: Higher grades in MATH/PHY get additional multipliers",
                "M1/M2 subjects receive bonus points"
            ]
        },
        minimumRequirements: [
            { subject: "ENG", minGrade: "3" },
            { subject: "CHIN", minGrade: "3" },
            { subject: "MATH", minGrade: "3" },
            { subject: "CSD", minGrade: "A" },
            { subject: "PHY", minGrade: "3", alternatives: ["CHEM", "BIO", "MATH-M1", "MATH-M2"] },
            { subject: "ELECTIVE1", minGrade: "3" }
        ],
        expectedScore: 30,
        competitiveScore: 35
    },
    {
        programme: {
            id: "1110",
            name: "Bachelor of Business Administration",
            faculty: "College of Business",
            degree: "BBA"
        },
        scoringFormula: {
            type: "WEIGHTED",
            parameters: {
                weights: {
                    "ENG": 1.5,  // English more important for business
                    "CHIN": 1.2,
                    "MATH": 1.3,
                    "CSD": 1.0,
                    "ECO": 1.4,  // Economics bonus
                    "BAFS": 1.4, // Business subjects bonus
                    "GEO": 1.1,
                    "HIST": 1.1
                },
                languageBonus: {
                    subject: "FR", // Foreign language bonus
                    bonusPoints: 1.0,
                    minGrade: "3"
                },
                subjectCombinationBonus: [
                    {
                        requiredSubjects: ["ECO", "BAFS"],
                        bonusPoints: 2.0,
                        minGrades: { "ECO": "3", "BAFS": "3" }
                    }
                ],
                includedCategories: ["A", "B", "C"],
                maxCategoryBCSubjects: 2
            },
            notes: [
                "English and Mathematics carry extra weight",
                "Economics and Business subjects receive bonus",
                "Combination bonus for ECO + BAFS",
                "Foreign languages receive bonus points"
            ]
        },
        minimumRequirements: [
            { subject: "ENG", minGrade: "3" },
            { subject: "CHIN", minGrade: "3" },
            { subject: "MATH", minGrade: "2" },
            { subject: "CSD", minGrade: "A" },
            { subject: "ELECTIVE1", minGrade: "3" },
            { subject: "ELECTIVE2", minGrade: "3" }
        ],
        expectedScore: 28,
        competitiveScore: 32
    }
];