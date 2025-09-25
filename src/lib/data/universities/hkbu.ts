import { ProgrammeEntry } from '../../core/types';

export const hkbu: ProgrammeEntry[] = [
    {
        programme: {
            id: "2330",
            name: "Bachelor of Arts (Honours) in Translation",
            faculty: "Faculty of Arts",
            degree: "BA"
        },
        scoringFormula: {
            type: "WEIGHTED",
            parameters: {
                weights: {
                    "ENG": 2.0,    // Double weight for English
                    "CHIN": 2.0,   // Double weight for Chinese
                    "MATH": 1.0,
                    "CSD": 1.0,
                    "LIT-ENG": 1.5, // Literature bonus
                    "CHIN-LIT": 1.5,
                    "HIST": 1.2,
                    "CHIN-HIST": 1.2
                },
                languageBonus: {
                    subject: "FR",
                    bonusPoints: 2.0,
                    minGrade: "4" // Higher requirement for language bonus
                },
                subjectCombinationBonus: [
                    {
                        requiredSubjects: ["ENG", "CHIN", "LIT-ENG"],
                        bonusPoints: 3.0,
                        minGrades: { "ENG": "4", "CHIN": "4", "LIT-ENG": "4" }
                    }
                ],
                includedCategories: ["A", "C"], // Emphasizes languages
                scoreCaps: {
                    "MATH": 5, // Math capped at level 5 equivalent
                }
            },
            notes: [
                "English and Chinese carry double weight",
                "Literature subjects receive bonus weighting",
                "Strong language combination receives significant bonus",
                "Mathematics contribution is capped"
            ]
        },
        minimumRequirements: [
            { subject: "ENG", minGrade: "4" }, // Higher English requirement
            { subject: "CHIN", minGrade: "4" }, // Higher Chinese requirement  
            { subject: "MATH", minGrade: "2" },
            { subject: "CSD", minGrade: "A" },
            { subject: "ELECTIVE1", minGrade: "3" },
            { subject: "ELECTIVE2", minGrade: "3" }
        ],
        expectedScore: 32,
        competitiveScore: 38,
        interviewRequired: true
    }
];