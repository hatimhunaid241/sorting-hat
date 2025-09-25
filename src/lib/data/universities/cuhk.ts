import { ProgrammeEntry } from '../../core/types';

export const cuhk: ProgrammeEntry[] = [
    {
        programme: {
            id: "4002",
            name: "Medicine",
            faculty: "Faculty of Medicine",
            degree: "MBChB"
        },
        scoringFormula: {
            type: "BEST_N",
            parameters: {
                n: 6,
                includedCategories: ["A"],
                // CUHK typically doesn't count Category B/C for Medicine
            },
            notes: ["Best 6 Category A subjects including 4 core subjects"]
        },
        minimumRequirements: [
            { subject: "ENG", minGrade: "4" },
            { subject: "CHIN", minGrade: "3" },
            { subject: "MATH", minGrade: "3" },
            { subject: "CSD", minGrade: "A" },
            { subject: "CHEM", minGrade: "4" },
            { subject: "BIO", minGrade: "4" }
        ],
        expectedScore: 36,
        competitiveScore: 39,
        interviewRequired: true
    },
    {
        programme: {
            id: "4005",
            name: "Quantitative Finance and Risk Management Science",
            faculty: "Faculty of Science",
            degree: "BSc"
        },
        scoringFormula: {
            type: "WEIGHTED",
            parameters: {
                weights: {
                    "MATH": 2.0,    // Double weight for Mathematics
                    "MATH-M1": 2.0, // Double weight for M1
                    "MATH-M2": 2.0, // Double weight for M2
                    "ENG": 1.0,
                    "CHIN": 1.0,
                    "CSD": 1.0
                },
                includedCategories: ["A", "B", "C"],
                maxCategoryBCSubjects: 1
            },
            notes: [
                "Mathematics subjects carry double weight",
                "Best 6 subjects with Mathematics emphasis"
            ]
        },
        minimumRequirements: [
            { subject: "ENG", minGrade: "3" },
            { subject: "CHIN", minGrade: "3" },
            { subject: "MATH", minGrade: "3" },
            { subject: "CSD", minGrade: "A" },
            { subject: "MATH-M1", minGrade: "3", alternatives: ["MATH-M2"] }
        ],
        expectedScore: 30,
        competitiveScore: 35
    },
    {
        programme: {
            id: "4110",
            name: "Business Administration",
            faculty: "Faculty of Business Administration",
            degree: "BBA"
        },
        scoringFormula: {
            type: "BEST_N",
            parameters: {
                n: 6,
                includedCategories: ["A", "B", "C"],
                maxCategoryBCSubjects: 2
            },
            notes: ["Best 6 subjects including core subjects"]
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
        competitiveScore: 31
    }
];