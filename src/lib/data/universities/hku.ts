import type { ProgrammeEntry } from '../../core/types';

export const hku: ProgrammeEntry[] = [
    {
        programmeDetails: {
            id: "6004",
            name: "Bachelor of Arts in Architectural Studies",
            faculty: "Faculty of Architecture",
        },
        method: "Best 5 Subjects (May include M1/M2 or Category C subject whichever is higher)",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
        },
        expectedScore: 26,
        otherRequirements: ["Candidates are required to take part in the Aptitude Exercise. Instructions for taking part in the Aptitude Exercise will be sent to all potential candidates via e-mail and posted on the programme website."]
    },
    {
        programmeDetails: {
            id: "6016",
            name: "Bachelor of Science in Surveying",
            faculty: "Faculty of Architecture",
        },
        method: "Best 5 Subjects (May include M1/M2 or Category C subject whichever is higher)",
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
        expectedScore: 27,
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "6028",
            name: "Bachelor of Arts in Landscape Studies",
            faculty: "Faculty of Architecture",
        },
        method: "Best 5 Subjects (May include M1/M2 or Category C subject whichever is higher)",
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
        expectedScore: 24,
        otherRequirements: ["Candidates are required to take part in the Creative Design Response. Instructions for taking part in the Creative Design Response will be sent to all potential candidates via e-mail and posted on the programme website.", "Candidates are strongly encouraged to show a portfolio of creative work (which may include drawing, painting, collage, sculpture, creative writing, video, multi-media work) during the interview."]
    },
    {
        programmeDetails: {
            id: "6042",
            name: "Bachelor of Arts in Urban Studies",
            faculty: "Faculty of Architecture",
        },
        method: "Best 5 Subjects (May include M1/M2 or Category C subject whichever is higher)",
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
        expectedScore: 24,
        otherRequirements: ["Candidates are required to take part in the Creative Design Response. Instructions for taking part in the Creative Design Response will be sent to all potential candidates via e-mail and posted on the programme website.", "Candidates are strongly encouraged to show a portfolio of creative work (which may include drawing, painting, collage, sculpture, creative writing, video, multi-media work) during the interview."]
    },
    {
        programmeDetails: {
            id: "6236",
            name: "Bachelor of Arts and Sciences in Design+",
            faculty: "Faculty of Architecture",
        },
        method: "Best 5 Subjects (May include M1/M2 or Category C subject whichever is higher)",
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
        expectedScore: 27,
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
        method: "2x Eng + Best 4 Subjects (May include M1/M2 or Category C subject whichever is higher) with weightings (1.5x Chinese Language)",
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
                "CHIN": 1.5
            }
        },
        expectedScore: 28,
        otherRequirements: [
            "Non-school candidates and candidates who have obtained level 3 in HKDSE English Language may be interviewed and will be considered on a case-by-case basis.",
        ]
    },
]