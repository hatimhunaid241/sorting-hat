import { ProgrammeEntry } from '../../core/types';

export const eduHK: ProgrammeEntry[] = [
    {
        programme: {
            id: "A2A001",
            name: "Bachelor of Education (Honours) (Primary) - General Studies",
            faculty: "Faculty of Education and Human Development",
            degree: "BEd"
        },
        scoringFormula: {
            type: "CUSTOM",
            parameters: {
                customCalculation: "eduHK_primary_general",
                includedCategories: ["A", "B", "C"],
                maxCategoryBCSubjects: 2
            },
            notes: [
                "Special calculation: Best 5 subjects with bonus points",
                "Bonus for relevant subjects like Geography, History, Economics",
                "Additional consideration for Category B subjects in education"
            ]
        },
        minimumRequirements: [
            { subject: "ENG", minGrade: "3" },
            { subject: "CHIN", minGrade: "3" },
            { subject: "MATH", minGrade: "2" },
            { subject: "CSD", minGrade: "A" },
            { subject: "ELECTIVE1", minGrade: "3" }
        ],
        expectedScore: 25,
        competitiveScore: 28,
        interviewRequired: true
    },
    {
        programme: {
            id: "A2A012",
            name: "Bachelor of Education (Honours) (Secondary) - Mathematics",
            faculty: "Faculty of Education and Human Development",
            degree: "BEd"
        },
        scoringFormula: {
            type: "WEIGHTED",
            parameters: {
                weights: {
                    "MATH": 2.0,
                    "MATH-M1": 2.0,
                    "MATH-M2": 2.0,
                    "PHY": 1.2,
                    "CHEM": 1.1,
                    "ENG": 1.0,
                    "CHIN": 1.0,
                    "CSD": 1.0
                },
                includedCategories: ["A", "B"],
                maxCategoryBCSubjects: 1
            },
            notes: [
                "Mathematics subjects carry double weight",
                "Science subjects receive bonus weighting"
            ]
        },
        minimumRequirements: [
            { subject: "ENG", minGrade: "3" },
            { subject: "CHIN", minGrade: "3" },
            { subject: "MATH", minGrade: "4" },
            { subject: "CSD", minGrade: "A" },
            { subject: "MATH-M1", minGrade: "3", alternatives: ["MATH-M2"] }
        ],
        expectedScore: 30,
        competitiveScore: 35,
        interviewRequired: true
    }
];