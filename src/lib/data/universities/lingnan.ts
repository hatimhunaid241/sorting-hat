import { ProgrammeEntry } from '../../core/types';

export const lingnan: ProgrammeEntry[] = [
    {
        programme: {
            id: "LN01",
            name: "Bachelor of Business Administration (Honours)",
            faculty: "Faculty of Business",
            degree: "BBA"
        },
        scoringFormula: {
            type: "CUSTOM",
            parameters: {
                customCalculation: "lingnan_bba_weighting",
                // Lingnan uses a complex weighting system per their PDF
                weights: {
                    "ENG": 1.5,
                    "CHIN": 1.0,
                    "MATH": 1.5,
                    "CSD": 1.0,
                    "ECO": 2.0,    // Economics heavily weighted
                    "BAFS": 2.0,   // Business heavily weighted
                    "MATH-M1": 1.8,
                    "MATH-M2": 1.8
                },
                scienceGroupBonus: {
                    subjects: ["PHY", "CHEM", "BIO"],
                    bonusPoints: 1.0,
                    minSubjects: 2
                },
                includedCategories: ["A"],
                minimumTotalScore: 20 // Minimum total after weighting
            },
            notes: [
                "Economics and BAFS subjects carry double weight",
                "Mathematics and English receive 1.5x weighting",
                "Science subjects receive group bonus",
                "Minimum weighted score of 20 required"
            ]
        },
        minimumRequirements: [
            { subject: "ENG", minGrade: "3" },
            { subject: "CHIN", minGrade: "3" },
            { subject: "MATH", minGrade: "3" },
            { subject: "CSD", minGrade: "A" },
            { subject: "ELECTIVE1", minGrade: "3" },
            { subject: "ELECTIVE2", minGrade: "3" }
        ],
        expectedScore: 25,
        competitiveScore: 30
    }
];