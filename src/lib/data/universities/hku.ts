import type { ProgrammeEntry } from '../../core/types';

export const hku: ProgrammeEntry[] = [
    {
        programme: {
            id: "6004",
            name: "Bachelor of Arts in Architectural Studies",
            faculty: "Faculty of Architecture",
            degree: "BArch"
        },
        scoringFormula: {
            type: "BEST_N",
            parameters: {
                n: 5,
                includedCategories: ["A", "B", "C"],
                maxFromCategory: { "A": 5, "B": 1, "C": 1 },
                categoryBCAsElective: true,
                maxCategoryBCSubjects: 1
            },
            notes: ["Best 5 subjects including 4 core subjects and 1 elective"]
        },
        minimumRequirements: [
            { subject: "ENG", minGrade: "3" },
            { subject: "CHIN", minGrade: "3" },
            { subject: "MATH", minGrade: "2" },
            { subject: "CSD", minGrade: "A" },
            { subject: "ELECTIVE1", minGrade: "3" }, // Any Category A elective
            { subject: "ELECTIVE2", minGrade: "3" }  // Any Category A elective or Category B/C
        ],
        expectedScore: 26,
        competitiveScore: 28,
        aptitudeTestRequired: true,
        otherRequirements: [
            "Candidates are required to take part in the Aptitude Exercise. Instructions for taking part in the Aptitude Exercise will be sent to all potential candidates via e-mail and posted on the programme website."
        ]
    },
    {
        programme: {
            id: "6363",
            name: "Bachelor of Business Administration",
            faculty: "Faculty of Business and Economics",
            degree: "BBA"
        },
        scoringFormula: {
            type: "BEST_N",
            parameters: {
                n: 6,
                includedCategories: ["A", "B", "C"],
                maxFromCategory: { "A": 6, "B": 2, "C": 2 },
                categoryBCAsElective: true,
                maxCategoryBCSubjects: 2
            },
            notes: ["Best 6 subjects including 4 core subjects and 2 electives"]
        },
        minimumRequirements: [
            { subject: "ENG", minGrade: "3" },
            { subject: "CHIN", minGrade: "3" },
            { subject: "MATH", minGrade: "2" },
            { subject: "CSD", minGrade: "A" },
            { subject: "ELECTIVE1", minGrade: "3" },
            { subject: "ELECTIVE2", minGrade: "3" }
        ],
        expectedScore: 30,
        competitiveScore: 33
    },
    {
        programme: {
            id: "6069",
            name: "Bachelor of Medicine and Bachelor of Surgery",
            faculty: "Li Ka Shing Faculty of Medicine",
            degree: "MBBS"
        },
        scoringFormula: {
            type: "CORE_PLUS_BEST",
            parameters: {
                coreSubjects: ["ENG", "CHIN", "MATH", "CSD"],
                additionalBest: 2,
                includedCategories: ["A"],
                excludedSubjects: ["MATH-M1", "MATH-M2"] // Usually prefer science subjects
            },
            notes: [
                "Best 6 subjects with emphasis on science subjects",
                "Chemistry and Biology strongly preferred for electives"
            ]
        },
        minimumRequirements: [
            { subject: "ENG", minGrade: "4" },
            { subject: "CHIN", minGrade: "4" },
            { subject: "MATH", minGrade: "4" },
            { subject: "CSD", minGrade: "A" },
            { subject: "CHEM", minGrade: "4" },
            { subject: "BIO", minGrade: "4", alternatives: ["PHY"] }
        ],
        expectedScore: 36,
        competitiveScore: 40,
        interviewRequired: true
    },
    {
        programme: {
            id: "6468",
            name: "Bachelor of Engineering",
            faculty: "Faculty of Engineering",
            degree: "BEng"
        },
        scoringFormula: {
            type: "WEIGHTED",
            parameters: {
                weights: {
                    "ENG": 1.0,
                    "CHIN": 1.0,
                    "MATH": 1.5,  // Mathematics weighted more heavily
                    "CSD": 1.0,
                    "PHY": 1.2,   // Physics weighted more heavily
                    "CHEM": 1.1   // Chemistry slightly weighted
                },
                includedCategories: ["A", "B", "C"],
                maxCategoryBCSubjects: 1
            },
            notes: [
                "Mathematics and Physics carry additional weight",
                "Best 6 subjects with weighting applied"
            ]
        },
        minimumRequirements: [
            { subject: "ENG", minGrade: "3" },
            { subject: "CHIN", minGrade: "3" },
            { subject: "MATH", minGrade: "3" },
            { subject: "CSD", minGrade: "A" },
            { subject: "PHY", minGrade: "3", alternatives: ["CHEM", "BIO"] },
            { subject: "ELECTIVE1", minGrade: "3" }
        ],
        expectedScore: 32,
        competitiveScore: 35
    }
]