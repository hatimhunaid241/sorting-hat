import { ProgrammeEntry } from '../../core/types';

export const cuhk: ProgrammeEntry[] = [
    // FACULTY OF ARTS
    {
        programmeDetails: {
            id: "JS4006",
            name: "Anthropology",
            faculty: "Faculty of Arts",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {}
        },
        otherRequirements: ["The programme will accept 'Attained with Distinction I or II' in Applied Learning subjects as extra elective subject for awarding bonus points. Please refer to https://www.cuhk.edu.hk/adm/jupas/ApL for details."]
    },
    {
        programmeDetails: {
            id: "JS4018",
            name: "Chinese Language and Literature",
            faculty: "Faculty of Arts",
        },
        method: "Best 5 Subjects with WEIGHTING",
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
                "CHIN": 1.2
            }
        },
        otherRequirements: ["The programme will accept 'Attained with Distinction I or II' in Applied Learning subjects as extra elective subject for awarding bonus points. Please refer to https://www.cuhk.edu.hk/adm/jupas/ApL for details.", "The programme does not accept application for waiver of Chinese Language requirement."]
    },
    {
        programmeDetails: {
            id: "JS4032",
            name: "English",
            faculty: "Faculty of Arts",
        },
        method: "Best 5 Subjects with WEIGHTING",
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
                "ENG": 1.5
            }
        },
        otherRequirements: ["Literature in English is preferred", "The programme will accept 'Attained with Distinction I or II' in Applied Learning subjects as extra elective subject for awarding bonus points. Please refer to https://www.cuhk.edu.hk/adm/jupas/ApL for details."]
    },
    {
        programmeDetails: {
            id: "JS4044",
            name: "Fine Arts",
            faculty: "Faculty of Arts",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {}
        },
        otherRequirements: ["Visual Arts is preferred", "The programme will accept 'Attained with Distinction I or II' in Applied Learning subjects as extra elective subject for awarding bonus points. Please refer to https://www.cuhk.edu.hk/adm/jupas/ApL for details."]
    },
    {
        programmeDetails: {
            id: "JS4056",
            name: "History",
            faculty: "Faculty of Arts",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {}
        },
        otherRequirements: ["The programme will accept 'Attained with Distinction I or II' in Applied Learning subjects as extra elective subject for awarding bonus points. Please refer to https://www.cuhk.edu.hk/adm/jupas/ApL for details."]
    },
    {
        programmeDetails: {
            id: "JS4068",
            name: "Japanese Studies",
            faculty: "Faculty of Arts",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {}
        },
        otherRequirements: ["The programme will accept 'Attained with Distinction I or II' in Applied Learning subjects as extra elective subject for awarding bonus points. Please refer to https://www.cuhk.edu.hk/adm/jupas/ApL for details."]
    },
    {
        programmeDetails: {
            id: "JS4070",
            name: "Linguistics",
            faculty: "Faculty of Arts",
        },
        method: "Best 5 Subjects with WEIGHTING",
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
                "ENG": 1.2
            }
        },
        otherRequirements: ["The programme will accept 'Attained with Distinction I or II' in Applied Learning subjects as extra elective subject for awarding bonus points. Please refer to https://www.cuhk.edu.hk/adm/jupas/ApL for details."]
    },
    {
        programmeDetails: {
            id: "JS4082",
            name: "Music",
            faculty: "Faculty of Arts",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {}
        },
        otherRequirements: ["Music is preferred", "JUPAS applicants are strongly advised to state their academic interest and musical experience in the 'Additional Information' of their JUPAS application. As a reference, students should have attained a level of proficiency in their main instrument / voice at or above ABRSM/ Trinity College London Grade 8 (or equivalent). Audition video and written entrance test will be required. Students should include, if possible the following supporting documents: (a) letters of recommendation from music teachers / music professionals; (b) results and certificates of graded music examinations; (c) list of repertoire studied in the last 2 years; (d) composition portfolio (if available).", "The programme will accept 'Attained with Distinction I or II' in Applied Learning subjects as extra elective subject for awarding bonus points. Please refer to https://www.cuhk.edu.hk/adm/jupas/ApL for details."]
    },
    {
        programmeDetails: {
            id: "JS4094",
            name: "Philosophy",
            faculty: "Faculty of Arts",
        },
        method: "5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST3", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
            ],
            specificSubjectWeighting: {}
        },
        otherRequirements: ["Chinese and English must be included in the score calculation (i.e. Chi + Eng + Best 3 subjects)", "The programme will accept 'Attained with Distinction I or II' in Applied Learning subjects as extra elective subject for awarding bonus points. Please refer to https://www.cuhk.edu.hk/adm/jupas/ApL for details."]
    },
    {
        programmeDetails: {
            id: "JS4100",
            name: "Public Humanities",
            faculty: "Faculty of Arts",
        },
        method: "Best 5 Subjects with WEIGHTING",
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
                "CHIN": 1.5,
                "ENG": 1.5
            }
        },
        otherRequirements: ["The programme will accept 'Attained with Distinction I or II' in Applied Learning subjects as extra elective subject for awarding bonus points. Please refer to https://www.cuhk.edu.hk/adm/jupas/ApL for details.", "The programme does not accept application for waiver of Chinese Language requirement."]
    },
    {
        programmeDetails: {
            id: "JS4109",
            name: "Religious Studies",
            faculty: "Faculty of Arts",
        },
        method: "Best 5 Subjects with WEIGHTING",
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
                "ENG": 1.25
            }
        },
        otherRequirements: ["The programme will accept 'Attained with Distinction I or II' in Applied Learning subjects as extra elective subject for awarding bonus points. Please refer to https://www.cuhk.edu.hk/adm/jupas/ApL for details.", "The programme does not accept application for waiver of Chinese Language requirement."]
    },
    {
        programmeDetails: {
            id: "JS4111",
            name: "Theology",
            faculty: "Faculty of Arts",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {}
        },
        otherRequirements: ["The programme will accept 'Attained with Distinction I or II' in Applied Learning subjects as extra elective subject for awarding bonus points. Please refer to https://www.cuhk.edu.hk/adm/jupas/ApL for details."]
    },
    {
        programmeDetails: {
            id: "JS4123",
            name: "Translation",
            faculty: "Faculty of Arts",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {}
        },
        otherRequirements: ["The programme will accept 'Attained with Distinction I or II' in Applied Learning subjects as extra elective subject for awarding bonus points. Please refer to https://www.cuhk.edu.hk/adm/jupas/ApL for details."]
    },
    {
        programmeDetails: {
            id: "JS4136",
            name: "Chinese Studies",
            faculty: "Faculty of Arts",
        },
        method: "Best 5 Subjects with WEIGHTING",
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
                "ENG": 1.25
            }
        },
        otherRequirements: ["The programme will accept 'Attained with Distinction I or II' in Applied Learning subjects as extra elective subject for awarding bonus points. Please refer to https://www.cuhk.edu.hk/adm/jupas/ApL for details."]
    },

    // FACULTY OF BUSINESS ADMINISTRATION
    {
        programmeDetails: {
            id: "JS4202",
            name: "Integrated BBA",
            faculty: "Faculty of Business Administration",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {}
        },
        otherRequirements: ["The programme will accept 'Attained with Distinction I or II' in Applied Learning subjects as extra elective subject for awarding bonus points. Please refer to https://www.cuhk.edu.hk/adm/jupas/ApL for details."]
    },
    {
        programmeDetails: {
            id: "JS4214",
            name: "Global Business Studies",
            faculty: "Faculty of Business Administration",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "5" },
                { subject: "CHIN", minGrade: "4" },
                { subject: "MATH", minGrade: "3" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {}
        },
        otherRequirements: ["The programme will accept 'Attained with Distinction I or II' in Applied Learning subjects as extra elective subject for awarding bonus points. Please refer to https://www.cuhk.edu.hk/adm/jupas/ApL for details."]
    },
    {
        programmeDetails: {
            id: "JS4225",
            name: "Hospitality and Real Estate",
            faculty: "Faculty of Business Administration",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {}
        },
        otherRequirements: ["The programme will accept 'Attained with Distinction I or II' in Applied Learning subjects as extra elective subject for awarding bonus points. Please refer to https://www.cuhk.edu.hk/adm/jupas/ApL for details."]
    },
    {
        programmeDetails: {
            id: "JS4238",
            name: "Insurance, Financial and Actuarial Analysis",
            faculty: "Faculty of Business Administration",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "5" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: [] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "MATH": 1.5,
                "MATH-M1": 1.5,
                "MATH-M2": 1.5,
                "ENG": 1.25,
                "CHEM": 1.25,
                "ECON": 1.25,
                "ICT": 1.25,
                "PHYS": 1.25
            }
        },
        otherRequirements: ["Mathematics (Module 1 or 2) at Level 5 is required if Mathematics (Compulsory Part) is at Level 3 or 4", "The best one subject of Chemistry, Economics, ICT or Physics", "The programme will accept 'Attained with Distinction I or II' in Applied Learning subjects as extra elective subject for awarding bonus points. Please refer to https://www.cuhk.edu.hk/adm/jupas/ApL for details."]
    },
    {
        programmeDetails: {
            id: "JS4240",
            name: "Professional Accountancy",
            faculty: "Faculty of Business Administration",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "3" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {}
        },
        otherRequirements: ["The programme will accept 'Attained with Distinction I or II' in Applied Learning subjects as extra elective subject for awarding bonus points. Please refer to https://www.cuhk.edu.hk/adm/jupas/ApL for details."]
    },
    {
        programmeDetails: {
            id: "JS4252",
            name: "Quantitative Finance",
            faculty: "Faculty of Business Administration",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "5" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: [] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "ENG": 2,
                "MATH": 2,
                "CHEM": 1.5,
                "ECON": 1.5,
                "MATH-M1": 1.5,
                "MATH-M2": 1.5,
                "PHYS": 1.5
            }
        },
        otherRequirements: ["The best one subject of M1/M2, Chemistry, Economics or Physics", "The programme will accept 'Attained with Distinction I or II' in Applied Learning subjects as extra elective subject for awarding bonus points. Please refer to https://www.cuhk.edu.hk/adm/jupas/ApL for details."]
    },
    {
        programmeDetails: {
            id: "JS4254",
            name: "Interdisciplinary Major Programme in Global Economics and Finance",
            faculty: "Faculty of Business Administration",
        },
        method: "5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "5" },
                { subject: "CHIN", minGrade: "4" },
                { subject: "MATH", minGrade: "4" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST3", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
            ],
            specificSubjectWeighting: {}
        },
        otherRequirements: ["English must be included in the score calculation (i.e. Eng + Best 4 subjects)", "The programme will accept 'Attained with Distinction I or II' in Applied Learning subjects as extra elective subject for awarding bonus points. Please refer to https://www.cuhk.edu.hk/adm/jupas/ApL for details."]
    },
    {
        programmeDetails: {
            id: "JS4264",
            name: "BBA(BBA) – JD Double Degree Programme",
            faculty: "Faculty of Business Administration",
        },
        method: "5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "5" },
                { subject: "CHIN", minGrade: "4" },
                { subject: "MATH", minGrade: "3" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST3", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
            ],
            specificSubjectWeighting: {
                "ENG": 2
            }
        },
        otherRequirements: ["English (x 2)", "Chinese, English and Mathematics must be included in the score calculation (i.e. Chi + Eng + Math + Best 2 subjects)", "The programme will accept 'Attained with Distinction I or II' in Applied Learning subjects as extra elective subject for awarding bonus points. Please refer to https://www.cuhk.edu.hk/adm/jupas/ApL for details."]
    },
    {
        programmeDetails: {
            id: "JS4275",
            name: "Quantitative Finance and Risk Management Science",
            faculty: "Faculty of Business Administration",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "3" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: [] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "ENG": 2,
                "MATH": 2,
                "CHEM": 1.5,
                "ECON": 1.5,
                "MATH-M1": 1.5,
                "MATH-M2": 1.5,
                "PHYS": 1.5
            }
        },
        otherRequirements: ["The best one subject of M1/M2, Chemistry, Economics or Physics", "The programme will accept 'Attained with Distinction I or II' in Applied Learning subjects as extra elective subject for awarding bonus points. Please refer to https://www.cuhk.edu.hk/adm/jupas/ApL for details."]
    },
    {
        programmeDetails: {
            id: "JS4725",
            name: "Biotechnology, Entrepreneurship and Healthcare Management",
            faculty: "Faculty of Business Administration",
        },
        method: "5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "3" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST3", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
            ],
            specificSubjectWeighting: {
                "ENG": 1.5,
                "BIO": 1.5,
                "CHEM": 1.5
            }
        },
        otherRequirements: ["Biology or Chemistry: 3", "The best two subjects of English, Biology or Chemistry", "Best of Biology/Chemistry must be included in the score calculation (i.e. Best of Bio/Chem + Best 4 subjects)", "The programme will accept 'Attained with Distinction I or II' in Applied Learning subjects as extra elective subject for awarding bonus points. Please refer to https://www.cuhk.edu.hk/adm/jupas/ApL for details."]
    },
    {
        programmeDetails: {
            id: "JS4760",
            name: "Interdisciplinary Data Analytics & X Double Major Programme",
            faculty: "Faculty of Business Administration",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "3" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "MATH-M1": 2,
                "MATH-M2": 2,
                "MATH": 1.5,
                "ECON": 1.5,
                "ICT": 1.5
            }
        },
        otherRequirements: ["The following subjects are preferred: M1 / M2, Economics, ICT", "Taking M1 / M2 will be strongly recommended", "The programme will accept 'Attained with Distinction I or II' in Applied Learning subjects as extra elective subject for awarding bonus points. Please refer to https://www.cuhk.edu.hk/adm/jupas/ApL for details."]
    },

    // FACULTY OF EDUCATION
    {
        programmeDetails: {
            id: "JS4320",
            name: "Human Movement Science and Health Studies",
            faculty: "Faculty of Education",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {}
        },
        otherRequirements: ["Biology and Physics are preferred", "The programme will accept 'Attained with Distinction I or II' in Applied Learning subjects as extra elective subject for awarding bonus points. Please refer to https://www.cuhk.edu.hk/adm/jupas/ApL for details."]
    },
    {
        programmeDetails: {
            id: "JS4329",
            name: "Physical Education, Exercise Science and Health",
            faculty: "Faculty of Education",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {}
        },
        otherRequirements: ["The programme will accept 'Attained with Distinction I or II' in Applied Learning subjects as extra elective subject for awarding bonus points. Please refer to https://www.cuhk.edu.hk/adm/jupas/ApL for details."]
    },
    {
        programmeDetails: {
            id: "JS4331",
            name: "BA (Chinese Language Studies) and BEd (Chinese Language Education)",
            faculty: "Faculty of Education",
        },
        method: "5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "4" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST3", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
            ],
            specificSubjectWeighting: {
                "CHIN": 2
            }
        },
        otherRequirements: ["Chinese must be included in the score calculation (i.e. Chi + Best 4 subjects)", "The programme will accept 'Attained with Distinction I or II' in Applied Learning subjects as extra elective subject for awarding bonus points. Please refer to https://www.cuhk.edu.hk/adm/jupas/ApL for details.", "The programme does not accept application for waiver of Chinese Language requirement."]
    },
    {
        programmeDetails: {
            id: "JS4343",
            name: "BA (English Studies) and BEd (English Language Education)",
            faculty: "Faculty of Education",
        },
        method: "5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "4" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST3", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
            ],
            specificSubjectWeighting: {
                "ENG": 2
            }
        },
        otherRequirements: ["English must be included in the score calculation (i.e. Eng + Best 4 subjects)", "The programme will accept 'Attained with Distinction I or II' in Applied Learning subjects as extra elective subject for awarding bonus points. Please refer to https://www.cuhk.edu.hk/adm/jupas/ApL for details."]
    },
    {
        programmeDetails: {
            id: "JS4361",
            name: "BEd in Mathematics and Mathematics Education",
            faculty: "Faculty of Education",
        },
        method: "5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "4" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST3", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"], excludeSubjects: [] },
            ],
            specificSubjectWeighting: {
                "MATH": 2,
                "MATH-M1": 2,
                "MATH-M2": 2,
                "CHIN": 1.5,
                "ENG": 1.5,
                "ECON": 1.5,
                "ICT": 1.5,
                "PHYS": 1.5
            }
        },
        otherRequirements: ["M1 or M2", "Chinese or English", "The best one subject of Economics, ICT or Physics", "Mathematics and M1/M2 must be included in the score calculation (i.e. Math + M1/M2 + Best 3 subjects)", "The programme will accept 'Attained with Distinction I or II' in Applied Learning subjects as extra elective subject for awarding bonus points. Please refer to https://www.cuhk.edu.hk/adm/jupas/ApL for details."]
    },
    {
        programmeDetails: {
            id: "JS4372",
            name: "BEd in Early Childhood Education",
            faculty: "Faculty of Education",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {}
        },
        otherRequirements: ["The programme will accept 'Attained with Distinction I or II' in Applied Learning subjects as extra elective subject for awarding bonus points. Please refer to https://www.cuhk.edu.hk/adm/jupas/ApL for details.", "The programme does not accept application for waiver of Chinese Language requirement."]
    },
    {
        programmeDetails: {
            id: "JS4386",
            name: "BSc in Learning Design and Technology",
            faculty: "Faculty of Education",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "3" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "MATH": 1.5,
                "MATH-M1": 1.5,
                "MATH-M2": 1.5,
                "BIO": 1.5,
                "BAFS": 1.5,
                "CHEM": 1.5,
                "DAT": 1.5,
                "ECON": 1.5,
                "GEOG": 1.5,
                "ICT": 1.5,
                "PHYS": 1.5,
                "PST": 1.5
            }
        },
        otherRequirements: ["The following subjects are preferred: M1/M2, Biology, BAFS, Chemistry, DAT, Economics, Geography, ICT, Physics, Tech and Living (PST)", "The programme will accept 'Attained with Distinction I or II' in Applied Learning subjects as extra elective subject for awarding bonus points. Please refer to https://www.cuhk.edu.hk/adm/jupas/ApL for details."]
    },

    // FACULTY OF ENGINEERING
    {
        programmeDetails: {
            id: "JS4408",
            name: "Mechanical and Automation Engineering",
            faculty: "Faculty of Engineering",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "3" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: [] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "MATH": 1.5,
                "MATH-M1": 1.5,
                "MATH-M2": 1.5,
                "PHYS": 1.5,
                "BIO": 1.25,
                "CHEM": 1.25,
                "DAT": 1.25,
                "ICT": 1.25
            }
        },
        otherRequirements: ["One of the following: M1/M2, Biology, Chemistry, DAT, ICT, Physics", "The programme will accept 'Attained with Distinction I or II' in Applied Learning subjects as extra elective subject for awarding bonus points. Please refer to https://www.cuhk.edu.hk/adm/jupas/ApL for details."]
    },
    {
        programmeDetails: {
            id: "JS4412",
            name: "Computer Science and Engineering",
            faculty: "Faculty of Engineering",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "4" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: [] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "MATH-M1": 1.75,
                "MATH-M2": 1.75,
                "MATH": 1.5,
                "BIO": 1.5,
                "CHEM": 1.5,
                "DAT": 1.5,
                "ICT": 1.5,
                "PHYS": 1.5
            }
        },
        otherRequirements: ["One of the following: M1/M2, Biology, Chemistry, ICT, Physics", "The following subjects are preferred: M1/M2, Biology, Chemistry, DAT, ICT, Physics", "The programme will accept 'Attained with Distinction I or II' in Applied Learning subjects as extra elective subject for awarding bonus points. Please refer to https://www.cuhk.edu.hk/adm/jupas/ApL for details."]
    },
    {
        programmeDetails: {
            id: "JS4416",
            name: "Computational Data Science",
            faculty: "Faculty of Engineering",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "4" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "4" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "MATH": 2,
                "MATH-M1": 2,
                "MATH-M2": 2,
                "BIO": 1.5,
                "CHEM": 1.5,
                "ECON": 1.5,
                "ICT": 1.5,
                "PHYS": 1.5
            }
        },
        otherRequirements: ["The following subjects are preferred: M1/M2, Biology, Chemistry, Economics, ICT, Physics", "The programme will accept 'Attained with Distinction I or II' in Applied Learning subjects as extra elective subject for awarding bonus points. Please refer to https://www.cuhk.edu.hk/adm/jupas/ApL for details."]
    },
    {
        programmeDetails: {
            id: "JS4428",
            name: "Financial Technology",
            faculty: "Faculty of Engineering",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "4" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "MATH": 1.75,
                "MATH-M1": 1.75,
                "MATH-M2": 1.75,
                "ENG": 1.25,
                "CHIN": 1.25,
                "BIO": 1.5,
                "BAFS": 1.5,
                "CHEM": 1.5,
                "ECON": 1.5,
                "ICT": 1.5,
                "PHYS": 1.5
            }
        },
        otherRequirements: ["The following subjects are preferred: M1/M2, Biology, BAFS, Chemistry, Economics, ICT, Physics", "The programme will accept 'Attained with Distinction I or II' in Applied Learning subjects as extra elective subject for awarding bonus points. Please refer to https://www.cuhk.edu.hk/adm/jupas/ApL for details."]
    },
    {
        programmeDetails: {
            id: "JS4434",
            name: "Electronic Engineering",
            faculty: "Faculty of Engineering",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "3" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: [] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "MATH": 1.5,
                "MATH-M1": 1.5,
                "MATH-M2": 1.5,
                "PHYS": 1.5
            }
        },
        otherRequirements: ["One of the following: M1/M2, Biology, Chemistry, ICT, Physics", "The programme will accept 'Attained with Distinction I or II' in Applied Learning subjects as extra elective subject for awarding bonus points. Please refer to https://www.cuhk.edu.hk/adm/jupas/ApL for details."]
    },
    {
        programmeDetails: {
            id: "JS4446",
            name: "Information Engineering",
            faculty: "Faculty of Engineering",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "4" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: [] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "MATH": 2,
                "MATH-M1": 1.75,
                "MATH-M2": 1.75,
                "BIO": 1.5,
                "CHEM": 1.5,
                "DAT": 1.5,
                "ICT": 1.5,
                "PHYS": 1.5
            }
        },
        otherRequirements: ["One of the following: M1/M2, Biology, Chemistry, Physics", "The following subjects are preferred: M1/M2, Biology, Chemistry, DAT, ICT, Physics", "The programme will accept 'Attained with Distinction I or II' in Applied Learning subjects as extra elective subject for awarding bonus points. Please refer to https://www.cuhk.edu.hk/adm/jupas/ApL for details."]
    },
    {
        programmeDetails: {
            id: "JS4458",
            name: "Systems Engineering and Engineering Management",
            faculty: "Faculty of Engineering",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "3" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: [] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "MATH": 1.5,
                "MATH-M1": 1.5,
                "MATH-M2": 1.5,
                "BIO": 1.5,
                "BAFS": 1.5,
                "CHEM": 1.5,
                "ECON": 1.5,
                "ICT": 1.5,
                "PHYS": 1.5
            }
        },
        otherRequirements: ["The following subjects are preferred: M1/M2, Biology, BAFS, Chemistry, Economics, ICT, Physics", "The programme will accept 'Attained with Distinction I or II' in Applied Learning subjects as extra elective subject for awarding bonus points. Please refer to https://www.cuhk.edu.hk/adm/jupas/ApL for details."]
    },
    {
        programmeDetails: {
            id: "JS4460",
            name: "Biomedical Engineering",
            faculty: "Faculty of Engineering",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "3" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: [] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "ENG": 1.5,
                "MATH": 1.5,
                "MATH-M1": 1.5,
                "MATH-M2": 1.5,
                "BIO": 1.5,
                "CHEM": 1.5,
                "PHYS": 1.5
            }
        },
        otherRequirements: ["One of the following: M1/M2, Biology, Chemistry, Physics", "The best one subject of Mathematics or M1 / M2", "Biology, Chemistry, Physics", "The programme will accept 'Attained with Distinction I or II' in Applied Learning subjects as extra elective subject for awarding bonus points. Please refer to https://www.cuhk.edu.hk/adm/jupas/ApL for details."]
    },
    {
        programmeDetails: {
            id: "JS4462",
            name: "Energy and Environmental Engineering",
            faculty: "Faculty of Engineering",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "3" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: [] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "MATH": 1.5,
                "MATH-M1": 1.5,
                "MATH-M2": 1.5,
                "BIO": 1.5,
                "CHEM": 1.5,
                "DAT": 1.5,
                "ICT": 1.5,
                "PHYS": 1.5,
                "ECON": 1.2,
                "GEOG": 1.2
            }
        },
        otherRequirements: ["One of the following: M1/M2, Biology, Chemistry, DAT, ICT, Physics", "Economics, Geography", "The programme will accept 'Attained with Distinction I or II' in Applied Learning subjects as extra elective subject for awarding bonus points. Please refer to https://www.cuhk.edu.hk/adm/jupas/ApL for details."]
    },
    {
        programmeDetails: {
            id: "JS4468",
            name: "Artificial Intelligence: Systems and Technologies",
            faculty: "Faculty of Engineering",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "4" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "5" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "MATH": 1.75,
                "MATH-M1": 1.75,
                "MATH-M2": 1.75,
                "CHIN": 1.25,
                "ENG": 1.25,
                "BIO": 1.5,
                "CHEM": 1.5,
                "ICT": 1.5,
                "PHYS": 1.5
            }
        },
        otherRequirements: ["The following subjects are preferred: M1/M2, Biology, Chemistry, ICT, Physics", "Candidates with Level 4 in Mathematics (Compulsory Part) and good results in other HKDSE subjects will be exceptionally considered on a competitive basis", "The programme will accept 'Attained with Distinction I or II' in Applied Learning subjects as extra elective subject for awarding bonus points. Please refer to https://www.cuhk.edu.hk/adm/jupas/ApL for details."]
    },
    {
        programmeDetails: {
            id: "JS4470",
            name: "Materials Science and Engineering",
            faculty: "Faculty of Engineering",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "3" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: [] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "MATH": 1.25,
                "MATH-M1": 1.25,
                "MATH-M2": 1.25,
                "CHEM": 1.25,
                "PHYS": 1.25
            }
        },
        otherRequirements: ["One of the following: M1/M2, Biology, Chemistry, ICT, Physics", "The following subjects are preferred: M1/M2, Biology, Chemistry, ICT, Physics", "The programme will accept 'Attained with Distinction I or II' in Applied Learning subjects as extra elective subject for awarding bonus points. Please refer to https://www.cuhk.edu.hk/adm/jupas/ApL for details."]
    },
    {
        programmeDetails: {
            id: "JS4386",
            name: "BSc in Learning Design and Technology",
            faculty: "Faculty of Engineering",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "3" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "MATH": 1.5,
                "MATH-M1": 1.5,
                "MATH-M2": 1.5,
                "BIO": 1.5,
                "BAFS": 1.5,
                "CHEM": 1.5,
                "DAT": 1.5,
                "ECON": 1.5,
                "GEOG": 1.5,
                "ICT": 1.5,
                "PHYS": 1.5,
                "PST": 1.5
            }
        },
        otherRequirements: ["The following subjects are preferred: M1/M2, Biology, BAFS, Chemistry, DAT, Economics, Geography, ICT, Physics, Tech and Living (PST)", "The programme will accept 'Attained with Distinction I or II' in Applied Learning subjects as extra elective subject for awarding bonus points. Please refer to https://www.cuhk.edu.hk/adm/jupas/ApL for details."]
    },
    {
        programmeDetails: {
            id: "JS4733",
            name: "Mathematics and Information Engineering",
            faculty: "Faculty of Engineering",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "4" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "5" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "4", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: [] },
                { variable: "BEST5", minGrade: "5", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"], excludeSubjects: [] },
            ],
            specificSubjectWeighting: {
                "MATH": 2,
                "MATH-M1": 2,
                "MATH-M2": 2,
                "BIO": 1.5,
                "CHEM": 1.5,
                "ICT": 1.5,
                "PHYS": 1.5
            }
        },
        otherRequirements: ["M1/M2", "The following subjects are preferred: Biology, Chemistry, ICT, Physics", "The programme will accept 'Attained with Distinction I or II' in Applied Learning subjects as extra elective subject for awarding bonus points. Please refer to https://www.cuhk.edu.hk/adm/jupas/ApL for details."]
    },
    {
        programmeDetails: {
            id: "JS4750",
            name: "Aerospace Science and Earth Informatics & X Double Major Programme",
            faculty: "Faculty of Engineering",
        },
        method: "Best 5 Subjects with WEIGHTING",
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
                "MATH-M1": 2,
                "MATH-M2": 2,
                "MATH": 1.5,
                "GEOG": 2,
                "PHYS": 2
            }
        },
        otherRequirements: ["The following subjects are preferred: M1/M2, Geography, Physics", "The programme will accept 'Attained with Distinction I or II' in Applied Learning subjects as extra elective subject for awarding bonus points. Please refer to https://www.cuhk.edu.hk/adm/jupas/ApL for details."]
    },
    {
        programmeDetails: {
            id: "JS4760",
            name: "Interdisciplinary Data Analytics & X Double Major Programme",
            faculty: "Faculty of Engineering",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "3" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {
                "MATH-M1": 2,
                "MATH-M2": 2,
                "MATH": 1.5,
                "ECON": 1.5,
                "ICT": 1.5
            }
        },
        otherRequirements: ["The following subjects are preferred: M1/M2, Economics, ICT", "Taking M1 / M2 will be strongly recommended", "The programme will accept 'Attained with Distinction I or II' in Applied Learning subjects as extra elective subject for awarding bonus points. Please refer to https://www.cuhk.edu.hk/adm/jupas/ApL for details."]
    },

    // FACULTY OF LAW
    {
        programmeDetails: {
            id: "JS4903",
            name: "Bachelor of Laws",
            faculty: "Faculty of Law",
        },
        method: "5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "5" },
                { subject: "CHIN", minGrade: "4" },
                { subject: "MATH", minGrade: "3" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
            ],
            specificSubjectWeighting: {}
        },
        otherRequirements: ["English must be included in the score calculation (i.e. Eng + Best 4 subjects)", "The programme will accept 'Attained with Distinction I or II' in Applied Learning subjects as extra elective subject for awarding bonus points. Please refer to https://www.cuhk.edu.hk/adm/jupas/ApL for details."]
    },
    {
        programmeDetails: {
            id: "JS4898",
            name: "Diplomacy and International Studies",
            faculty: "Faculty of Law",
        },
        method: "Best 5 Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "3" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "2" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST4", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
                { variable: "BEST5", minGrade: "3", includeCategories: ["A", "C"], excludeSubCategories: ["CORE"] },
            ],
            specificSubjectWeighting: {}
        },
        otherRequirements: ["New programme to be introduced in 2026-27 is subject to confirmation of the University Senate", "The programme will accept 'Attained with Distinction I or II' in Applied Learning subjects as extra elective subject for awarding bonus points. Please refer to https://www.cuhk.edu.hk/adm/jupas/ApL for details.", "The programme does not accept application for waiver of Chinese Language requirement."]
    },

    // FACULTY OF MEDICINE
    {
        programmeDetails: {
            id: "JS4501",
            name: "Bachelor of Medicine and Bachelor of Surgery (MBChB)",
            faculty: "Faculty of Medicine",
        },
        method: "6 Graded Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "4" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "3" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST3", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
            ],
            specificSubjectWeighting: {}
        },
        otherRequirements: ["One of the following options - Option 1: Biology (Level 3) + 3rd elective (Level 3), Option 2: Chemistry (Level 3) + 3rd elective (Level 3)", "Chemistry is preferred", "Biology is preferred", "Taking a 3rd elective and/or M1/M2 will be strongly recommended", "Chinese, English, Mathematics and Best of Biology/Chemistry must be included in the score calculation (i.e. Chi + Eng + Math + Best of Bio/Chem + Best 2 subjects)", "The programme does not consider M1/M2 as one elective subject", "Please refer to the Grade Point Conversion tables", "The programme will accept 'Attained with Distinction I or II' in Applied Learning subjects as extra elective subject for awarding bonus points. Please refer to https://www.cuhk.edu.hk/adm/jupas/ApL for details."]
    },
    {
        programmeDetails: {
            id: "JS4502",
            name: "Bachelor of Medicine and Bachelor of Surgery – Global Physician-Leadership Stream (MBChB-GPS)",
            faculty: "Faculty of Medicine",
        },
        method: "6 Graded Subjects with WEIGHTING",
        calculation: {
            conditions: [
                { subject: "ENG", minGrade: "4" },
                { subject: "CHIN", minGrade: "3" },
                { subject: "MATH", minGrade: "3" },
                { subject: "CSD", grade: "Attained" },
                { variable: "BEST3", minGrade: "3", includeCategories: ["A"], excludeSubCategories: ["CORE"], excludeSubjects: ["MATH-M1", "MATH-M2"] },
            ],
            specificSubjectWeighting: {}
        },
        otherRequirements: ["One of the following options - Option 1: Biology (Level 3) + 3rd elective (Level 3), Option 2: Chemistry (Level 3) + 3rd elective (Level 3)", "Chemistry is preferred", "Biology is preferred", "Taking a 3rd elective and/or M1/M2 will be strongly recommended", "Additional requirement: Total score > 40 in 6 subjects with 5** in ANY 4 subjects", "Chinese, English, Mathematics and Best of Biology/Chemistry must be included in the score calculation (i.e. Chi + Eng + Math + Best of Bio/Chem + Best 2 subjects)", "The programme does not consider M1/M2 as one elective subject", "Please refer to the Grade Point Conversion tables", "The programme will accept 'Attained with Distinction I or II' in Applied Learning subjects as extra elective subject for awarding bonus points. Please refer to https://www.cuhk.edu.hk/adm/jupas/ApL for details."]
    }
];