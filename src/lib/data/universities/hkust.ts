import { ProgrammeEntry } from "@/lib/core/types"

export const hkust: ProgrammeEntry[] = [
    {
        programmeDetails: {
            id: "JS5101",
            name: "International Research Enrichment",
            faculty: "School of Science"
        },
        method: "English + Math + Best 2 from Biology / Chemistry / Physics / M1 / M2 + Best 1 other subject",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "SCIENCE1", minGrade: "3", includeAdditionalSubjects: ["BIO", "CHEM", "PHY", "MATH-M1", "MATH-M2"] },
                { variable: "SCIENCE2", minGrade: "3", includeAdditionalSubjects: ["BIO", "CHEM", "PHY", "MATH-M1", "MATH-M2"] },
                { variable: "OTHER1", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
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
        expectedScore: 33,
        otherRequirements: ["Interview is compulsory."]
    },
    {
        programmeDetails: {
            id: "JS5102",
            name: "Science (Group A)",
            faculty: "School of Science"
        },
        method: "English x 1.5 + Math + Best from Biology / Chemistry / Physics / M1 / M2 + Best 2 other subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "SCIENCE1", minGrade: "3", includeAdditionalSubjects: ["BIO", "CHEM", "PHY", "MATH-M1", "MATH-M2"] },
                { variable: "OTHER1", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
                { variable: "OTHER2", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
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
        otherRequirements: ["The highest score of at most TWO weighted electives will be taken in the Best 5 score calculation."]
    },
    {
        programmeDetails: {
            id: "JS5103",
            name: "Science (Group B)",
            faculty: "School of Science"
        },
        method: "English x 1.5 + Math + Best from Biology / Chemistry / Physics / M1 / M2 + Best 2 other subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "SCIENCE1", minGrade: "3", includeAdditionalSubjects: ["BIO", "CHEM", "PHY", "MATH-M1", "MATH-M2"] },
                { variable: "OTHER1", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
                { variable: "OTHER2", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
            ],
            specificSubjectWeighting: {
                "ENG": 1.5,
                "CHIN": 0,
                "BIO": 2,
                "CHEM": 2,
                "PHY": 1.5,
                "MATH-M1": 1.5,
                "MATH-M2": 1.5
            }
        },
        expectedScore: 27,
        otherRequirements: ["The highest score of at most TWO weighted electives will be taken in the Best 5 score calculation."]
    },
    {
        programmeDetails: {
            id: "JS5118",
            name: "BSc in Biomedical and Health Sciences",
            faculty: "School of Science"
        },
        method: "English x 1.5 + Math + Best from Biology / Chemistry / Physics / M1 / M2 + Best 2 other subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "SCIENCE1", minGrade: "3", includeAdditionalSubjects: ["BIO", "CHEM", "PHY", "MATH-M1", "MATH-M2"] },
                { variable: "OTHER1", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
                { variable: "OTHER2", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
            ],
            specificSubjectWeighting: {
                "ENG": 1.5,
                "CHIN": 0,
                "BIO": 2,
                "CHEM": 2,
                "PHY": 1.5,
                "MATH-M1": 1.5,
                "MATH-M2": 1.5
            }
        },
        expectedScore: 27,
        otherRequirements: ["Interview is compulsory.", "The highest score of at most TWO weighted electives will be taken in the Best 5 score calculation."]
    },
    {
        programmeDetails: {
            id: "JS5181",
            name: "Science (Group A) with Extended Major in Artificial Intelligence",
            faculty: "School of Science"
        },
        method: "English x 1.5 + Math + Best from Biology / Chemistry / Physics / M1 / M2 + Best 2 other subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "SCIENCE1", minGrade: "3", includeAdditionalSubjects: ["BIO", "CHEM", "PHY", "MATH-M1", "MATH-M2"] },
                { variable: "OTHER1", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
                { variable: "OTHER2", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
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
        otherRequirements: ["The highest score of at most TWO weighted electives will be taken in the Best 5 score calculation."]
    },
    {
        programmeDetails: {
            id: "JS5212",
            name: "BEng in Computer Engineering",
            faculty: "School of Engineering"
        },
        method: "English x 2 + Math x 2 + Best from Biology / Chemistry / Physics / ICT + Best 2 other subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "3" },
                { subject: "CSD", grade: "Attained" },
                { variable: "SCIENCE1", minGrade: "3", includeAdditionalSubjects: ["BIO", "CHEM", "PHY", "ICT"] },
                { variable: "OTHER1", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
                { variable: "OTHER2", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
            ],
            specificSubjectWeighting: {
                "ENG": 2,
                "MATH": 2,
                "CHIN": 0,
                "PHY": 2,
                "ICT": 1.5,
                "BIO": 1,
                "CHEM": 1,
                "MATH-M1": 2,
                "MATH-M2": 2
            }
        },
        expectedScore: 26,
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "JS5220",
            name: "Department of Chemical & Biological Engineering",
            faculty: "School of Engineering"
        },
        method: "English x 2 + Math x 2 + Best from Biology / Chemistry / Physics / ICT + Best 2 other subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "3" },
                { subject: "CSD", grade: "Attained" },
                { variable: "SCIENCE1", minGrade: "3", includeAdditionalSubjects: ["BIO", "CHEM", "PHY", "ICT"] },
                { variable: "OTHER1", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
                { variable: "OTHER2", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
            ],
            specificSubjectWeighting: {
                "ENG": 2,
                "MATH": 2,
                "CHIN": 0,
                "BIO": 2,
                "CHEM": 2,
                "PHY": 2,
                "ICT": 1.5,
                "MATH-M1": 2,
                "MATH-M2": 2
            }
        },
        expectedScore: 25,
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "JS5230",
            name: "Department of Civil & Environmental Engineering",
            faculty: "School of Engineering"
        },
        method: "English x 2 + Math x 2 + Best from Biology / Chemistry / Physics / ICT + Best 2 other subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "3" },
                { subject: "CSD", grade: "Attained" },
                { variable: "SCIENCE1", minGrade: "3", includeAdditionalSubjects: ["BIO", "CHEM", "PHY", "ICT"] },
                { variable: "OTHER1", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
                { variable: "OTHER2", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
            ],
            specificSubjectWeighting: {
                "ENG": 2,
                "MATH": 2,
                "CHIN": 0,
                "CHEM": 2,
                "PHY": 2,
                "ICT": 1.5,
                "BIO": 1,
                "MATH-M1": 2,
                "MATH-M2": 2
            }
        },
        expectedScore: 25,
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "JS5240",
            name: "Department of Computer Science & Engineering",
            faculty: "School of Engineering"
        },
        method: "English x 2 + Math x 2 + Best from Biology / Chemistry / Physics / ICT + Best 2 other subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "3" },
                { subject: "CSD", grade: "Attained" },
                { variable: "SCIENCE1", minGrade: "3", includeAdditionalSubjects: ["BIO", "CHEM", "PHY", "ICT"] },
                { variable: "OTHER1", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
                { variable: "OTHER2", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
            ],
            specificSubjectWeighting: {
                "ENG": 2,
                "MATH": 2,
                "CHIN": 0,
                "PHY": 2,
                "ICT": 1.5,
                "BIO": 1,
                "CHEM": 1,
                "MATH-M1": 2,
                "MATH-M2": 2
            }
        },
        expectedScore: 26,
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "JS5250",
            name: "Department of Electronic & Computer Engineering",
            faculty: "School of Engineering"
        },
        method: "English x 2 + Math x 2 + Best from Biology / Chemistry / Physics / ICT + Best 2 other subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "3" },
                { subject: "CSD", grade: "Attained" },
                { variable: "SCIENCE1", minGrade: "3", includeAdditionalSubjects: ["BIO", "CHEM", "PHY", "ICT"] },
                { variable: "OTHER1", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
                { variable: "OTHER2", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
            ],
            specificSubjectWeighting: {
                "ENG": 2,
                "MATH": 2,
                "CHIN": 0,
                "PHY": 2,
                "ICT": 1.5,
                "BIO": 1,
                "CHEM": 1,
                "MATH-M1": 2,
                "MATH-M2": 2
            }
        },
        expectedScore: 26,
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "JS5260",
            name: "Department of Industrial Engineering & Decision Analytics",
            faculty: "School of Engineering"
        },
        method: "English x 2 + Math x 2 + Best from Biology / Chemistry / Physics / ICT + Best 2 other subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "3" },
                { subject: "CSD", grade: "Attained" },
                { variable: "SCIENCE1", minGrade: "3", includeAdditionalSubjects: ["BIO", "CHEM", "PHY", "ICT"] },
                { variable: "OTHER1", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
                { variable: "OTHER2", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
            ],
            specificSubjectWeighting: {
                "ENG": 2,
                "MATH": 2,
                "CHIN": 0,
                "PHY": 2,
                "ICT": 1.5,
                "BIO": 1,
                "CHEM": 1,
                "MATH-M1": 2,
                "MATH-M2": 2
            }
        },
        expectedScore: 25,
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "JS5270",
            name: "Department of Mechanical & Aerospace Engineering",
            faculty: "School of Engineering"
        },
        method: "English x 2 + Math x 2 + Best from Biology / Chemistry / Physics / ICT + Best 2 other subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "3" },
                { subject: "CSD", grade: "Attained" },
                { variable: "SCIENCE1", minGrade: "3", includeAdditionalSubjects: ["BIO", "CHEM", "PHY", "ICT"] },
                { variable: "OTHER1", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
                { variable: "OTHER2", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
            ],
            specificSubjectWeighting: {
                "ENG": 2,
                "MATH": 2,
                "CHIN": 0,
                "BIO": 2,
                "CHEM": 2,
                "PHY": 2,
                "ICT": 1,
                "MATH-M1": 1.5,
                "MATH-M2": 1.5
            }
        },
        expectedScore: 25,
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "JS5282",
            name: "Engineering with Extended Major in Artificial Intelligence",
            faculty: "School of Engineering"
        },
        method: "English x 2 + Math x 2 + Best from Biology / Chemistry / Physics / ICT + Best 2 other subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "3" },
                { subject: "CSD", grade: "Attained" },
                { variable: "SCIENCE1", minGrade: "3", includeAdditionalSubjects: ["BIO", "CHEM", "PHY", "ICT"] },
                { variable: "OTHER1", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
                { variable: "OTHER2", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
            ],
            specificSubjectWeighting: {
                "ENG": 2,
                "MATH": 2,
                "CHIN": 0,
                "BIO": 2,
                "CHEM": 2,
                "PHY": 2,
                "ICT": 1.5,
                "MATH-M1": 1.5,
                "MATH-M2": 1.5
            }
        },
        expectedScore: 26,
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "JS5300",
            name: "Business and Management",
            faculty: "School of Business and Management"
        },
        method: "English x 2 + Math x 2 + Best 3 other subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "OTHER1", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
                { variable: "OTHER2", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
                { variable: "OTHER3", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
            ],
            specificSubjectWeighting: {
                "ENG": 2,
                "MATH": 2,
                "CHIN": 0
            }
        },
        expectedScore: 30,
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "JS5311",
            name: "BBA in Economics",
            faculty: "School of Business and Management"
        },
        method: "English x 2 + Math x 2 + Best 3 other subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "OTHER1", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
                { variable: "OTHER2", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
                { variable: "OTHER3", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
            ],
            specificSubjectWeighting: {
                "ENG": 2,
                "MATH": 2,
                "CHIN": 0
            }
        },
        expectedScore: 30,
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "JS5312",
            name: "BBA in Finance",
            faculty: "School of Business and Management"
        },
        method: "English x 2 + Math x 2 + Better of Best 3 other subjects (Chemistry / Economics / Physics / M1 / M2 x 1.5)",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "OTHER1", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
                { variable: "OTHER2", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
                { variable: "OTHER3", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
            ],
            specificSubjectWeighting: {
                "ENG": 2,
                "MATH": 2,
                "CHIN": 0,
                "CHEM": 1.5,
                "ECON": 1.5,
                "PHY": 1.5,
                "MATH-M1": 1.5,
                "MATH-M2": 1.5
            }
        },
        expectedScore: 30,
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "JS5313",
            name: "BBA in Global Business",
            faculty: "School of Business and Management"
        },
        method: "English x 2 + Math x 2 + Best 3 other subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "OTHER1", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
                { variable: "OTHER2", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
                { variable: "OTHER3", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
            ],
            specificSubjectWeighting: {
                "ENG": 2,
                "MATH": 2,
                "CHIN": 0
            }
        },
        expectedScore: 30,
        otherRequirements: ["Interview is compulsory."]
    },
    {
        programmeDetails: {
            id: "JS5314",
            name: "BBA in Information Systems",
            faculty: "School of Business and Management"
        },
        method: "English x 2 + Math x 2 + Best 3 other subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "OTHER1", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
                { variable: "OTHER2", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
                { variable: "OTHER3", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
            ],
            specificSubjectWeighting: {
                "ENG": 2,
                "MATH": 2,
                "CHIN": 0
            }
        },
        expectedScore: 30,
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "JS5315",
            name: "BBA in Management",
            faculty: "School of Business and Management"
        },
        method: "English x 2 + Math x 2 + Best 3 other subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "OTHER1", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
                { variable: "OTHER2", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
                { variable: "OTHER3", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
            ],
            specificSubjectWeighting: {
                "ENG": 2,
                "MATH": 2,
                "CHIN": 0
            }
        },
        expectedScore: 30,
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "JS5316",
            name: "BBA in Marketing",
            faculty: "School of Business and Management"
        },
        method: "English x 2 + Math x 2 + Best 3 other subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "OTHER1", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
                { variable: "OTHER2", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
                { variable: "OTHER3", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
            ],
            specificSubjectWeighting: {
                "ENG": 2,
                "MATH": 2,
                "CHIN": 0
            }
        },
        expectedScore: 30,
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "JS5317",
            name: "BBA in Operations Management",
            faculty: "School of Business and Management"
        },
        method: "English x 2 + Math x 2 + Best 3 other subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "OTHER1", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
                { variable: "OTHER2", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
                { variable: "OTHER3", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
            ],
            specificSubjectWeighting: {
                "ENG": 2,
                "MATH": 2,
                "CHIN": 0
            }
        },
        expectedScore: 30,
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "JS5318",
            name: "BBA in Professional Accounting",
            faculty: "School of Business and Management"
        },
        method: "English x 2 + Math x 2 + Best 3 other subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "OTHER1", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
                { variable: "OTHER2", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
                { variable: "OTHER3", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
            ],
            specificSubjectWeighting: {
                "ENG": 2,
                "MATH": 2,
                "CHIN": 0
            }
        },
        expectedScore: 30,
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "JS5331",
            name: "BSc in Economics and Finance",
            faculty: "School of Business and Management"
        },
        method: "English x 2 + Math x 2 + Better of Best 3 other subjects (Chemistry / Economics / Physics / M1 / M2 x 1.5)",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "OTHER1", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
                { variable: "OTHER2", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
                { variable: "OTHER3", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
            ],
            specificSubjectWeighting: {
                "ENG": 2,
                "MATH": 2,
                "CHIN": 0,
                "CHEM": 1.5,
                "ECON": 1.5,
                "PHY": 1.5,
                "MATH-M1": 1.5,
                "MATH-M2": 1.5
            }
        },
        expectedScore: 30,
        otherRequirements: ["Interview is compulsory."]
    },
    {
        programmeDetails: {
            id: "JS5332",
            name: "BSc in Quantitative Finance",
            faculty: "School of Business and Management"
        },
        method: "English x 2 + Math x 2 + Better of Best 3 other subjects (Chemistry / Economics / Physics / M1 / M2 x 1.5)",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "OTHER1", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
                { variable: "OTHER2", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
                { variable: "OTHER3", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
            ],
            specificSubjectWeighting: {
                "ENG": 2,
                "MATH": 2,
                "CHIN": 0,
                "CHEM": 1.5,
                "ECON": 1.5,
                "PHY": 1.5,
                "MATH-M1": 1.5,
                "MATH-M2": 1.5
            }
        },
        expectedScore: 30,
        otherRequirements: ["Interview is compulsory."]
    },
    {
        programmeDetails: {
            id: "JS5411",
            name: "BSc in Global China Studies",
            faculty: "School of Humanities and Social Science"
        },
        method: "English x 2 + Chinese x 1.5 + Best 3 other subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "OTHER1", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
                { variable: "OTHER2", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
                { variable: "OTHER3", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
            ],
            specificSubjectWeighting: {
                "ENG": 2,
                "CHIN": 1.5,
                "MATH": 1
            }
        },
        expectedScore: 28,
        otherRequirements: ["Category C subjects may be used once in the score calculation."]
    },
    {
        programmeDetails: {
            id: "JS5412",
            name: "BSc in Quantitative Social Analysis",
            faculty: "School of Humanities and Social Science"
        },
        method: "English x 2 + Math x 2 + Best 3 other subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "OTHER1", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
                { variable: "OTHER2", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
                { variable: "OTHER3", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
            ],
            specificSubjectWeighting: {
                "ENG": 2,
                "MATH": 2,
                "CHIN": 0,
                "MATH-M1": 1.5,
                "MATH-M2": 1.5
            }
        },
        expectedScore: 28,
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "JS5711",
            name: "BSc in Innovation, Design and Technology",
            faculty: "Academy of Interdisciplinary Studies"
        },
        method: "English x 2 + Math x 2 + Best from Biology / Chemistry / Physics / Design and Applied Technology / ICT + Best 2 other subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "SCIENCE1", minGrade: "3", includeAdditionalSubjects: ["BIO", "CHEM", "PHY", "DT", "ICT"] },
                { variable: "OTHER1", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
                { variable: "OTHER2", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
            ],
            specificSubjectWeighting: {
                "ENG": 2,
                "MATH": 2,
                "CHIN": 0,
                "BIO": 2,
                "CHEM": 2,
                "PHY": 2,
                "DT": 2,
                "ICT": 1,
                "MATH-M1": 1.5,
                "MATH-M2": 1.5
            }
        },
        expectedScore: 28,
        otherRequirements: ["Interview is compulsory."]
    },
    {
        programmeDetails: {
            id: "JS5812",
            name: "BSc in Environmental Management and Technology",
            faculty: "Academy of Interdisciplinary Studies"
        },
        method: "English x 2 + Math x 2 + Best 3 other subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "OTHER1", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
                { variable: "OTHER2", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
                { variable: "OTHER3", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
            ],
            specificSubjectWeighting: {
                "ENG": 2,
                "MATH": 2,
                "CHIN": 0
            }
        },
        expectedScore: 28,
        otherRequirements: ["Category C subjects may be used once in the score calculation."]
    },
    {
        programmeDetails: {
            id: "JS5901",
            name: "BEng / BSc & BBA Dual Degree Program in Technology and Management",
            faculty: "Academy of Interdisciplinary Studies"
        },
        method: "English x 2 + Math x 2 + Best from Biology / Chemistry / Physics / ICT + Best 2 other subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "SCIENCE1", minGrade: "3", includeAdditionalSubjects: ["BIO", "CHEM", "PHY", "ICT"] },
                { variable: "OTHER1", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
                { variable: "OTHER2", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
            ],
            specificSubjectWeighting: {
                "ENG": 2,
                "MATH": 2,
                "CHIN": 0,
                "BIO": 2,
                "CHEM": 2,
                "PHY": 2,
                "ICT": 1,
                "MATH-M1": 1.5,
                "MATH-M2": 1.5
            }
        },
        expectedScore: 30,
        otherRequirements: ["Interview is compulsory.", "The program duration is five years with the fifth year (i.e. the 9th and 10th regular terms) on a self-financing basis."]
    },
    {
        programmeDetails: {
            id: "JS5811",
            name: "BSc in Biotechnology and Business",
            faculty: "Joint Programs"
        },
        method: "English x 2 + Math x 2 + Best of Biology / Chemistry x 1.5 + Best 2 other subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "SCIENCE1", minGrade: "3", includeAdditionalSubjects: ["BIO", "CHEM"] },
                { variable: "OTHER1", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
                { variable: "OTHER2", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
            ],
            specificSubjectWeighting: {
                "ENG": 2,
                "MATH": 2,
                "CHIN": 0,
                "BIO": 1.5,
                "CHEM": 1.5
            }
        },
        expectedScore: 28,
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "JS5813",
            name: "BSc in Mathematics and Economics",
            faculty: "Joint Programs"
        },
        method: "English x 2 + Math x 2 + Best from Biology / Chemistry / Physics / Economics / M1 / M2 + Best 2 other subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "SCIENCE1", minGrade: "3", includeAdditionalSubjects: ["BIO", "CHEM", "PHY", "ECON", "MATH-M1", "MATH-M2"] },
                { variable: "OTHER1", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
                { variable: "OTHER2", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
            ],
            specificSubjectWeighting: {
                "ENG": 2,
                "MATH": 2,
                "CHIN": 0,
                "MATH-M1": 2,
                "MATH-M2": 2,
                "BIO": 1.5,
                "CHEM": 1.5,
                "PHY": 1.5,
                "ECON": 1.5
            }
        },
        expectedScore: 28,
        otherRequirements: []
    },
    {
        programmeDetails: {
            id: "JS5814",
            name: "BSc in Risk Management and Business Intelligence",
            faculty: "Joint Programs"
        },
        method: "English x 2 + Math x 2 + Best 3 other subjects",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "OTHER1", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
                { variable: "OTHER2", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
                { variable: "OTHER3", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
            ],
            specificSubjectWeighting: {
                "ENG": 2,
                "MATH": 2,
                "CHIN": 0,
                "MATH-M1": 1.5,
                "MATH-M2": 1.5
            }
        },
        expectedScore: 28,
        otherRequirements: ["Interview is compulsory."]
    },
    {
        programmeDetails: {
            id: "JS5822",
            name: "BSc in Sustainable and Green Finance",
            faculty: "Joint Programs"
        },
        method: "English x 2 + Math x 2 + Better of Best 3 other subjects (Chemistry / Economics / Physics / M1 / M2 x 1.5)",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "OTHER1", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
                { variable: "OTHER2", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
                { variable: "OTHER3", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["CSD"] },
            ],
            specificSubjectWeighting: {
                "ENG": 2,
                "MATH": 2,
                "CHIN": 0,
                "CHEM": 1.5,
                "ECON": 1.5,
                "PHY": 1.5,
                "MATH-M1": 1.5,
                "MATH-M2": 1.5
            }
        },
        expectedScore: 28,
        otherRequirements: ["Interview is compulsory."]
    },
]
