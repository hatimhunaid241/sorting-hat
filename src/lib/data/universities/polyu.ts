import { ProgrammeEntry } from '../../core/types';

export const polyu: ProgrammeEntry[] = [
    {
        programme: {
            id: "3011",
            name: "Nursing",
            faculty: "Faculty of Health and Social Sciences",
            degree: "BN"
        },
        scoringFormula: {
            type: "CORE_PLUS_BEST",
            parameters: {
                coreSubjects: ["ENG", "CHIN", "MATH", "CSD"],
                additionalBest: 1,
                includedCategories: ["A", "B"],
                // Preference for science subjects
            },
            notes: [
                "Best 5 subjects including 4 core subjects and 1 elective",
                "Science subjects preferred for elective"
            ]
        },
        minimumRequirements: [
            { subject: "ENG", minGrade: "3" },
            { subject: "CHIN", minGrade: "3" },
            { subject: "MATH", minGrade: "2" },
            { subject: "CSD", minGrade: "A" },
            { subject: "BIO", minGrade: "3", alternatives: ["CHEM", "PHY"] }
        ],
        expectedScore: 25,
        competitiveScore: 28,
        interviewRequired: true
    },
    {
        programme: {
            id: "3012",
            name: "Occupational Therapy",
            faculty: "Faculty of Health and Social Sciences",
            degree: "BSc"
        },
        scoringFormula: {
            type: "BEST_N",
            parameters: {
                n: 5,
                includedCategories: ["A", "B"],
                maxCategoryBCSubjects: 1
            },
            notes: ["Best 5 subjects including core subjects"]
        },
        minimumRequirements: [
            { subject: "ENG", minGrade: "3" },
            { subject: "CHIN", minGrade: "3" },
            { subject: "MATH", minGrade: "2" },
            { subject: "CSD", minGrade: "A" },
            { subject: "BIO", minGrade: "3", alternatives: ["CHEM", "PHY"] }
        ],
        expectedScore: 25,
        competitiveScore: 28,
        interviewRequired: true
    },
    {
        programme: {
            id: "3580",
            name: "Computing",
            faculty: "Faculty of Engineering",
            degree: "BSc"
        },
        scoringFormula: {
            type: "WEIGHTED",
            parameters: {
                weights: {
                    "MATH": 1.5,
                    "MATH-M1": 1.5,
                    "MATH-M2": 1.5,
                    "PHY": 1.2,
                    "ICT": 1.2,
                    "ENG": 1.0,
                    "CHIN": 1.0,
                    "CSD": 1.0
                },
                includedCategories: ["A", "B"],
                maxCategoryBCSubjects: 1
            },
            notes: [
                "Mathematics and technical subjects carry additional weight",
                "Best 6 subjects calculation"
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
        expectedScore: 30,
        competitiveScore: 33
    }
];