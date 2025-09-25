import { Programme } from "../../core/admissionDefinition"

export const hkust: Programme[] = [
    {
        "jupasCode": "JS5312",
        "name": "BBA in Finance",
        "faculty": "Business School",
        "university": "HKUST",
        "expectedScore": 43.5,
        "scoreFormula": {
            "type": "best5",
            "subjectWeights": [
                { "subject": "ENG", "weight": 2 },
                { "subject": "MATH", "weight": 2 },
                { "subject": "CHEM", "weight": 1.5 },
                { "subject": "ECON", "weight": 1.5 },
                { "subject": "PHYS", "weight": 1.5 },
                { "subject": "M1", "weight": 1.5 },
                { "subject": "M2", "weight": 1.5 }
            ],
            "bonusRules": "Best 3 others, or best of Chem/Econ/Phys/M1/M2 x 1.5 + best 2 others"
        }
    }
]