import { ProgrammeEntry } from '../../core/types';

export const cuhk: ProgrammeEntry[] = [
    {
        programmeDetails: {
            id: "JS4006",
            name: "Anthropology",
            faculty: "Faculty of Arts",
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
        expectedScore: 22.5,
        otherRequirements: ["The programme will accept ¡°Attained with Distinction I or II¡± in Applied Learning subjects as extra elective subject for awarding bonus points. Please refer to https://www.cuhk.edu.hk/adm/jupas/ApL for details."]
    },
    {
        programmeDetails: {
            id: "JS4018",
            name: "Chinese Language and Literature",
            faculty: "Faculty of Arts",
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
            ],
            specificSubjectWeighting: {
                "CHIN": 1.2,
            }
        },
        expectedScore: 27,
        otherRequirements: ["The programme will accept ¡°Attained with Distinction I or II¡± in Applied Learning subjects as extra elective subject for awarding bonus points. Please refer to https://www.cuhk.edu.hk/adm/jupas/ApL for details.", "The programme does not accept application for waiver of Chinese Language requirement."]
    },
    {
        programmeDetails: {
            id: "JS4032",
            name: "English",
            faculty: "Faculty of Arts",
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
            ],
            specificSubjectWeighting: {
                "ENG": 1.5,
            }
        },
        expectedScore: 25,
        otherRequirements: ["Literature in English is preferred", "The programme will accept ¡°Attained with Distinction I or II¡± in Applied Learning subjects as extra elective subject for awarding bonus points. Please refer to https://www.cuhk.edu.hk/adm/jupas/ApL for details."]
    },
    {
        programmeDetails: {
            id: "JS4044",
            name: "Fine Arts",
            faculty: "Faculty of Arts",
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
        expectedScore: 21,
        otherRequirements: ["Visual Arts is preferred", "The programme will accept ¡°Attained with Distinction I or II¡± in Applied Learning subjects as extra elective subject for awarding bonus points. Please refer to https://www.cuhk.edu.hk/adm/jupas/ApL for details."]
    },
    {
        programmeDetails: {
            id: "JS4056",
            name: "History",
            faculty: "Faculty of Arts",
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
        expectedScore: 23.5,
        otherRequirements: ["The programme will accept ¡°Attained with Distinction I or II¡± in Applied Learning subjects as extra elective subject for awarding bonus points. Please refer to https://www.cuhk.edu.hk/adm/jupas/ApL for details."]
    },
];