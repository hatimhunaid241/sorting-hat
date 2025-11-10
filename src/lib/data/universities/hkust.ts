import { ProgrammeEntry } from "@/lib/core/types"

export const hkust: ProgrammeEntry[] = [
    {
        programmeDetails: {
            id: "JS5101",
            name: "International Research Enrichment",
            faculty: "Science"
        },
        method: "Best 5 Subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST3", minGrade: "3", includeAdditionalSubjects: ["BIO", "CHEM", "PHY", "MATH-M1", "MATH-M2"] },
                { variable: "BEST4", minGrade: "3", includeAdditionalSubjects: ["BIO", "CHEM", "PHY", "MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["BIO", "CHEM", "PHY", "MATH-M1", "MATH-M2"] },
            ],
            specificSubjectWeighting: {
                "CHIN": 0,
            }
        },
        expectedScore: 33,
        otherRequirements: ["Interview is compulsory."]
    },
    {
        programmeDetails: {
            id: "JS5102",
            name: "BSc in Mathematics",
            faculty: "Science (Group A)"
        },
        method: "Best 5 Subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST3", minGrade: "3", includeAdditionalSubjects: ["BIO", "CHEM", "PHY", "MATH-M1", "MATH-M2"] },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["BIO", "CHEM", "PHY", "MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["BIO", "CHEM", "PHY", "MATH-M1", "MATH-M2"] },
            ],
            specificSubjectWeighting: {
                "ENG": 1.5,
                "CHIN": 0,
                "PHY": 2,
                "MATH-M1": 2,
                "MATH-M2": 2,
                "BIO": 1.5,
                "CHEM": 1.5
            }
        },
        expectedScore: 27,
        otherRequirements: ["Students of these programs may opt for an Extended Major in Artificial Intelligence.", "Students of these programs may opt for an Extended Major in Digital Media and Creative Arts."]
    },
    {
        programmeDetails: {
            id: "JS5102",
            name: "BSc in Chemistry",
            faculty: "Science (Group A)"
        },
        method: "Best 5 Subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST3", minGrade: "3", includeAdditionalSubjects: ["BIO", "CHEM", "PHY", "MATH-M1", "MATH-M2"] },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["BIO", "CHEM", "PHY", "MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["BIO", "CHEM", "PHY", "MATH-M1", "MATH-M2"] },
            ],
            specificSubjectWeighting: {
                "ENG": 1.5,
                "CHIN": 0,
                "PHY": 2,
                "MATH-M1": 2,
                "MATH-M2": 2,
                "BIO": 1.5,
                "CHEM": 1.5
            }
        },
        expectedScore: 27,
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "JS5102",
            name: "BSc in Data Analytics and Artificial Intelligence in Science",
            faculty: "Science (Group A)"
        },
        method: "Best 5 Subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST3", minGrade: "3", includeAdditionalSubjects: ["BIO", "CHEM", "PHY", "MATH-M1", "MATH-M2"] },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["BIO", "CHEM", "PHY", "MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["BIO", "CHEM", "PHY", "MATH-M1", "MATH-M2"] },
            ],
            specificSubjectWeighting: {
                "ENG": 1.5,
                "CHIN": 0,
                "PHY": 2,
                "MATH-M1": 2,
                "MATH-M2": 2,
                "BIO": 1.5,
                "CHEM": 1.5
            }
        },
        expectedScore: 27,
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "JS5102",
            name: "BSc in Data Science and Technology",
            faculty: "Science (Group A)"
        },
        method: "Best 5 Subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST3", minGrade: "3", includeAdditionalSubjects: ["BIO", "CHEM", "PHY", "MATH-M1", "MATH-M2"] },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["BIO", "CHEM", "PHY", "MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["BIO", "CHEM", "PHY", "MATH-M1", "MATH-M2"] },
            ],
            specificSubjectWeighting: {
                "ENG": 1.5,
                "CHIN": 0,
                "PHY": 2,
                "MATH-M1": 2,
                "MATH-M2": 2,
                "BIO": 1.5,
                "CHEM": 1.5
            }
        },
        expectedScore: 27,
        otherRequirements: ["Jointly offered by the School of Science and School of Engineering."]
    },
    {
        programmeDetails: {
            id: "JS5102",
            name: "BSc in Physics",
            faculty: "Science (Group A)"
        },
        method: "Best 5 Subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST3", minGrade: "3", includeAdditionalSubjects: ["BIO", "CHEM", "PHY", "MATH-M1", "MATH-M2"] },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["BIO", "CHEM", "PHY", "MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["BIO", "CHEM", "PHY", "MATH-M1", "MATH-M2"] },
            ],
            specificSubjectWeighting: {
                "ENG": 1.5,
                "CHIN": 0,
                "PHY": 2,
                "MATH-M1": 2,
                "MATH-M2": 2,
                "BIO": 1.5,
                "CHEM": 1.5
            }
        },
        expectedScore: 27,
        otherRequirements: ["Students of these programs may opt for an Extended Major in Artificial Intelligence."]
    },
    {
        programmeDetails: {
            id: "JS5102",
            name: "BSc in Ocean Science and Technology",
            faculty: "Science (Group A)"
        },
        method: "Best 5 Subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST3", minGrade: "3", includeAdditionalSubjects: ["BIO", "CHEM", "PHY", "MATH-M1", "MATH-M2"] },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["BIO", "CHEM", "PHY", "MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["BIO", "CHEM", "PHY", "MATH-M1", "MATH-M2"] },
            ],
            specificSubjectWeighting: {
                "ENG": 1.5,
                "CHIN": 0,
                "PHY": 2,
                "MATH-M1": 2,
                "MATH-M2": 2,
                "BIO": 1.5,
                "CHEM": 1.5
            }
        },
        expectedScore: 27,
        otherRequirements: ["Students of these programs may opt for an Extended Major in Artificial Intelligence.", "Students of these programs may opt for an Extended Major in Digital Media and Creative Arts."]
    },
]