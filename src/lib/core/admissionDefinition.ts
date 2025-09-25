type SubjectCode =
    | "CHI" | "ENG" | "MATH" | "CSD"
    | "M1" | "M2"
    | "BIO" | "CHEM" | "PHYS"
    | "ICT" | "ECON" | "HIST" | "GEOG"
// ... add all DSE subjects

interface SubjectWeight {
    subject: SubjectCode;
    weight: number;
    required?: boolean;       // if the subject must be taken
}

interface ScoreFormula {
    type: "best5" | "best5+bonus" | "core+2elective" | "custom";
    subjectWeights: SubjectWeight[];
    bonusRules?: string;       // free text to describe any extra rules
}

export interface Programme {
    jupasCode: string;
    name: string;
    faculty: string;
    university: string;       // e.g. "HKU", "CUHK", "CityU"
    expectedScore: number | [number, number]; // can be range
    scoreFormula: ScoreFormula;
}

export type UniversityProgrammes = Record<string, Programme[]>;
