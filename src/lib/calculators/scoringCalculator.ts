import { ProgrammeEntry, ScoringFormula, SubjectRequirement } from '../core/types';

// Grade to score mapping for HKDSE
export const GRADE_TO_SCORE: Record<string, number> = {
    '5**': 7,
    '5*': 6,
    '5': 5,
    '4': 4,
    '3': 3,
    '2': 2,
    '1': 1,
    'U': 0,
    // CSD grades
    'A': 3,
    'B': 2,
    'C': 1,
    'D': 0
};

// Reverse mapping for minimum grade checking
export const SCORE_TO_GRADE: Record<number, string> = {
    7: '5**',
    6: '5*',
    5: '5',
    4: '4',
    3: '3',
    2: '2',
    1: '1',
    0: 'U'
};

export interface StudentSubject {
    subject: string; // Subject abbreviation
    grade: string;
    category: 'A' | 'B' | 'C';
}

export interface CalculationResult {
    totalScore: number;
    usedSubjects: StudentSubject[];
    meetRequirements: boolean;
    missingRequirements: string[];
    breakdown?: Record<string, number>;
}

export class ScoringCalculator {

    /**
     * Calculate JUPAS score for a programme based on student's subjects
     */
    static calculateScore(
        programme: ProgrammeEntry,
        studentSubjects: StudentSubject[]
    ): CalculationResult {
        // First check minimum requirements
        const requirementCheck = this.checkMinimumRequirements(
            programme.minimumRequirements,
            studentSubjects
        );

        if (!requirementCheck.meetRequirements) {
            return {
                totalScore: 0,
                usedSubjects: [],
                meetRequirements: false,
                missingRequirements: requirementCheck.missingRequirements
            };
        }

        // Calculate score based on formula type
        const result = this.applyScore(programme.scoringFormula, studentSubjects);

        return {
            ...result,
            meetRequirements: true,
            missingRequirements: []
        };
    }

    /**
     * Check if student meets minimum requirements
     */
    private static checkMinimumRequirements(
        requirements: SubjectRequirement[],
        studentSubjects: StudentSubject[]
    ): { meetRequirements: boolean; missingRequirements: string[] } {
        const missingRequirements: string[] = [];

        for (const req of requirements) {
            if (req.subject.startsWith('ELECTIVE')) {
                // Handle generic elective requirements
                const electiveCount = this.countElectives(studentSubjects, req.minGrade);
                const requiredElectives = req.subject === 'ELECTIVE1' ? 1 : 2;

                if (electiveCount < requiredElectives) {
                    missingRequirements.push(`Need ${requiredElectives} elective(s) with grade ${req.minGrade} or above`);
                }
            } else {
                // Handle specific subject requirements
                const hasSubject = this.hasRequiredSubject(studentSubjects, req);
                if (!hasSubject) {
                    const alternatives = req.alternatives ? ` (or ${req.alternatives.join(', ')})` : '';
                    missingRequirements.push(`${req.subject}${alternatives}: Grade ${req.minGrade} or above`);
                }
            }
        }

        return {
            meetRequirements: missingRequirements.length === 0,
            missingRequirements
        };
    }

    /**
     * Count number of electives meeting grade requirement
     */
    private static countElectives(studentSubjects: StudentSubject[], minGrade: string): number {
        const coreSubjects = ['ENG', 'CHIN', 'MATH', 'CSD'];
        const minScore = GRADE_TO_SCORE[minGrade] || 0;

        return studentSubjects.filter(subject => {
            if (coreSubjects.includes(subject.subject)) return false;
            return GRADE_TO_SCORE[subject.grade] >= minScore;
        }).length;
    }

    /**
     * Check if student has required subject with minimum grade
     */
    private static hasRequiredSubject(studentSubjects: StudentSubject[], req: SubjectRequirement): boolean {
        const minScore = GRADE_TO_SCORE[req.minGrade] || 0;
        const subjectsToCheck = [req.subject, ...(req.alternatives || [])];

        return studentSubjects.some(subject => {
            if (!subjectsToCheck.includes(subject.subject)) return false;
            return GRADE_TO_SCORE[subject.grade] >= minScore;
        });
    }

    /**
     * Apply scoring formula to calculate total score
     */
    private static applyScore(formula: ScoringFormula, studentSubjects: StudentSubject[]): CalculationResult {
        const validSubjects = this.filterValidSubjects(studentSubjects, formula);

        switch (formula.type) {
            case 'BEST_N':
                return this.calculateBestN(validSubjects, formula);
            case 'CORE_PLUS_BEST':
                return this.calculateCorePlusBest(validSubjects, formula);
            case 'WEIGHTED':
                return this.calculateWeighted(validSubjects, formula);
            case 'TIERED_WEIGHTED':
                return this.calculateTieredWeighted(validSubjects, formula);
            case 'CUSTOM':
                return this.calculateCustom(validSubjects, formula);
            default:
                throw new Error(`Unknown formula type: ${formula.type}`);
        }
    }

    /**
     * Filter subjects based on formula parameters
     */
    private static filterValidSubjects(studentSubjects: StudentSubject[], formula: ScoringFormula): StudentSubject[] {
        let filtered = [...studentSubjects];

        // Filter by included categories
        if (formula.parameters.includedCategories) {
            filtered = filtered.filter(subject =>
                formula.parameters.includedCategories!.includes(subject.category)
            );
        }

        // Exclude specified subjects
        if (formula.parameters.excludedSubjects) {
            filtered = filtered.filter(subject =>
                !formula.parameters.excludedSubjects!.includes(subject.subject)
            );
        }

        // Handle M1/M2 constraint
        if (!formula.parameters.allowM1M2Both) {
            const hasM1 = filtered.find(s => s.subject === 'MATH-M1');
            const hasM2 = filtered.find(s => s.subject === 'MATH-M2');

            if (hasM1 && hasM2) {
                // Keep the one with higher score
                const m1Score = GRADE_TO_SCORE[hasM1.grade];
                const m2Score = GRADE_TO_SCORE[hasM2.grade];

                if (m1Score >= m2Score) {
                    filtered = filtered.filter(s => s.subject !== 'MATH-M2');
                } else {
                    filtered = filtered.filter(s => s.subject !== 'MATH-M1');
                }
            }
        }

        return filtered;
    }

    /**
     * Calculate Best N subjects score
     */
    private static calculateBestN(subjects: StudentSubject[], formula: ScoringFormula): CalculationResult {
        const n = formula.parameters.n || 6;
        const maxFromCategory = formula.parameters.maxFromCategory;
        const maxCategoryBCSubjects = formula.parameters.maxCategoryBCSubjects;

        let selectedSubjects: StudentSubject[] = [];

        if (maxFromCategory || maxCategoryBCSubjects) {
            // Apply category limits
            selectedSubjects = this.selectWithCategoryLimits(subjects, n, maxFromCategory, maxCategoryBCSubjects);
        } else {
            // Simple best N
            selectedSubjects = subjects
                .map(s => ({ ...s, score: GRADE_TO_SCORE[s.grade] }))
                .sort((a, b) => b.score - a.score)
                .slice(0, n);
        }

        const totalScore = selectedSubjects.reduce((sum, subject) => sum + GRADE_TO_SCORE[subject.grade], 0);

        return {
            totalScore,
            usedSubjects: selectedSubjects,
            meetRequirements: true,
            missingRequirements: []
        };
    }

    /**
     * Calculate Core + Best Additional subjects score
     */
    private static calculateCorePlusBest(subjects: StudentSubject[], formula: ScoringFormula): CalculationResult {
        const coreSubjects = formula.parameters.coreSubjects || [];
        const additionalBest = formula.parameters.additionalBest || 2;

        // Get core subjects
        const coreSelected = subjects.filter(s => coreSubjects.includes(s.subject));

        // Get best additional subjects
        const nonCoreSubjects = subjects.filter(s => !coreSubjects.includes(s.subject));
        const additionalSelected = nonCoreSubjects
            .map(s => ({ ...s, score: GRADE_TO_SCORE[s.grade] }))
            .sort((a, b) => b.score - a.score)
            .slice(0, additionalBest);

        const usedSubjects = [...coreSelected, ...additionalSelected];
        const totalScore = usedSubjects.reduce((sum, subject) => sum + GRADE_TO_SCORE[subject.grade], 0);

        return {
            totalScore,
            usedSubjects,
            meetRequirements: true,
            missingRequirements: []
        };
    }

    /**
     * Calculate Weighted score
     */
    private static calculateWeighted(subjects: StudentSubject[], formula: ScoringFormula): CalculationResult {
        const weights = formula.parameters.weights || {};
        const customGradeMapping = formula.parameters.customGradeMapping || GRADE_TO_SCORE;
        const scoreCaps = formula.parameters.scoreCaps || {};

        const breakdown: Record<string, number> = {};
        let totalScore = 0;

        for (const subject of subjects) {
            const baseScore = customGradeMapping[subject.grade] || GRADE_TO_SCORE[subject.grade];
            const weight = weights[subject.subject] || 1.0;
            let weightedScore = baseScore * weight;

            // Apply score caps if specified
            if (scoreCaps[subject.subject]) {
                weightedScore = Math.min(weightedScore, scoreCaps[subject.subject]);
            }

            breakdown[subject.subject] = weightedScore;
            totalScore += weightedScore;
        }

        // Apply bonuses
        totalScore += this.calculateBonuses(subjects, formula);

        return {
            totalScore: Math.round(totalScore * 100) / 100, // Round to 2 decimal places
            usedSubjects: subjects,
            meetRequirements: true,
            missingRequirements: [],
            breakdown
        };
    }

    /**
     * Calculate Tiered Weighted score (different weights based on grade achieved)
     */
    private static calculateTieredWeighted(subjects: StudentSubject[], formula: ScoringFormula): CalculationResult {
        const tieredWeights = formula.parameters.tieredWeights || {};
        const customGradeMapping = formula.parameters.customGradeMapping || GRADE_TO_SCORE;

        const breakdown: Record<string, number> = {};
        let totalScore = 0;

        for (const subject of subjects) {
            const baseScore = customGradeMapping[subject.grade] || GRADE_TO_SCORE[subject.grade];

            // Check if there's a tiered weight for this subject and grade
            const subjectTiers = tieredWeights[subject.subject];
            let multiplier = 1.0;

            if (subjectTiers) {
                // Find the appropriate tier for this grade
                multiplier = subjectTiers[subject.grade] || 1.0;
            }

            const weightedScore = baseScore * multiplier;
            breakdown[subject.subject] = weightedScore;
            totalScore += weightedScore;
        }

        // Apply bonuses
        totalScore += this.calculateBonuses(subjects, formula);

        return {
            totalScore: Math.round(totalScore * 100) / 100,
            usedSubjects: subjects,
            meetRequirements: true,
            missingRequirements: [],
            breakdown
        };
    }

    /**
     * Calculate various bonus points
     */
    private static calculateBonuses(subjects: StudentSubject[], formula: ScoringFormula): number {
        let totalBonus = 0;

        // Language bonus
        if (formula.parameters.languageBonus) {
            const langBonus = formula.parameters.languageBonus;
            const langSubject = subjects.find(s => s.subject === langBonus.subject);
            if (langSubject && GRADE_TO_SCORE[langSubject.grade] >= GRADE_TO_SCORE[langBonus.minGrade]) {
                totalBonus += langBonus.bonusPoints;
            }
        }

        // Mathematics Extended bonus
        if (formula.parameters.mathsExtendedBonus) {
            const mathBonus = formula.parameters.mathsExtendedBonus;
            const mathExtended = subjects.find(s =>
                (s.subject === 'MATH-M1' || s.subject === 'MATH-M2') &&
                GRADE_TO_SCORE[s.grade] >= GRADE_TO_SCORE[mathBonus.minGrade]
            );
            if (mathExtended) {
                totalBonus += mathBonus.bonusPoints;
            }
        }

        // Science group bonus
        if (formula.parameters.scienceGroupBonus) {
            const scienceBonus = formula.parameters.scienceGroupBonus;
            const scienceSubjects = subjects.filter(s =>
                scienceBonus.subjects.includes(s.subject)
            );
            if (scienceSubjects.length >= scienceBonus.minSubjects) {
                totalBonus += scienceBonus.bonusPoints;
            }
        }

        // Subject combination bonuses
        if (formula.parameters.subjectCombinationBonus) {
            for (const combo of formula.parameters.subjectCombinationBonus) {
                const hasAllRequired = combo.requiredSubjects.every(reqSubject => {
                    const subject = subjects.find(s => s.subject === reqSubject);
                    if (!subject) return false;

                    // Check minimum grade if specified
                    if (combo.minGrades && combo.minGrades[reqSubject]) {
                        return GRADE_TO_SCORE[subject.grade] >= GRADE_TO_SCORE[combo.minGrades[reqSubject]];
                    }
                    return true;
                });

                if (hasAllRequired) {
                    totalBonus += combo.bonusPoints;
                }
            }
        }

        return totalBonus;
    }

    /**
     * Handle custom scoring calculations
     */
    private static calculateCustom(subjects: StudentSubject[], formula: ScoringFormula): CalculationResult {
        const customCalc = formula.parameters.customCalculation;

        switch (customCalc) {
            case "lingnan_bba_weighting":
                return this.calculateLingnanBBA(subjects, formula);
            case "eduHK_primary_general":
                return this.calculateEduHKPrimary(subjects, formula);
            case "polyu_bba_accounting":
                return this.calculatePolyUBBA(subjects, formula);
            default:
                // Fall back to weighted calculation
                return this.calculateWeighted(subjects, formula);
        }
    }

    /**
     * Lingnan BBA specific calculation
     */
    private static calculateLingnanBBA(subjects: StudentSubject[], formula: ScoringFormula): CalculationResult {
        // Lingnan uses a complex system with subject weightings and minimum score requirements
        const result = this.calculateWeighted(subjects, formula);

        // Apply minimum total score check
        if (formula.parameters.minimumTotalScore && result.totalScore < formula.parameters.minimumTotalScore) {
            return {
                totalScore: 0,
                usedSubjects: [],
                meetRequirements: false,
                missingRequirements: [`Minimum weighted score of ${formula.parameters.minimumTotalScore} not met`]
            };
        }

        return result;
    }

    /**
     * EdUHK Primary Education specific calculation
     */
    private static calculateEduHKPrimary(subjects: StudentSubject[], formula: ScoringFormula): CalculationResult {
        // EdUHK gives bonuses for education-relevant subjects
        const baseResult = this.calculateBestN(subjects, { ...formula, parameters: { ...formula.parameters, n: 5 } });

        // Add bonuses for education-relevant subjects
        const educationRelevantSubjects = ['GEO', 'HIST', 'BIO', 'CHEM', 'PHY'];
        const relevantCount = subjects.filter(s =>
            educationRelevantSubjects.includes(s.subject) &&
            GRADE_TO_SCORE[s.grade] >= 3
        ).length;

        const bonusPoints = Math.min(relevantCount * 0.5, 2.0); // Max 2 bonus points

        return {
            ...baseResult,
            totalScore: baseResult.totalScore + bonusPoints,
            breakdown: {
                ...baseResult.breakdown,
                'Education Relevance Bonus': bonusPoints
            }
        };
    }

    /**
     * PolyU BBA Accounting specific calculation
     */
    private static calculatePolyUBBA(subjects: StudentSubject[], formula: ScoringFormula): CalculationResult {
        // PolyU BBA Accounting from their specific PDF requirements
        const result = this.calculateWeighted(subjects, formula);

        // Additional bonus for accounting-related subjects combination
        const hasBAFS = subjects.some(s => s.subject === 'BAFS' && GRADE_TO_SCORE[s.grade] >= 4);
        const hasECO = subjects.some(s => s.subject === 'ECO' && GRADE_TO_SCORE[s.grade] >= 4);
        const hasMath = subjects.some(s => s.subject === 'MATH' && GRADE_TO_SCORE[s.grade] >= 4);

        let bonusPoints = 0;
        if (hasBAFS && hasECO && hasMath) {
            bonusPoints = 3.0; // Triple subject bonus
        } else if ((hasBAFS && hasECO) || (hasBAFS && hasMath) || (hasECO && hasMath)) {
            bonusPoints = 1.5; // Double subject bonus
        }

        return {
            ...result,
            totalScore: result.totalScore + bonusPoints,
            breakdown: {
                ...result.breakdown,
                'Accounting Combination Bonus': bonusPoints
            }
        };
    }

    /**
     * Select subjects with category limits
     */
    private static selectWithCategoryLimits(
        subjects: StudentSubject[],
        totalN: number,
        maxFromCategory?: Record<'A' | 'B' | 'C', number>,
        maxCategoryBCSubjects?: number
    ): StudentSubject[] {
        const selected: StudentSubject[] = [];
        const subjectsByScore = subjects
            .map(s => ({ ...s, score: GRADE_TO_SCORE[s.grade] }))
            .sort((a, b) => b.score - a.score);

        const categoryCounts = { A: 0, B: 0, C: 0 };
        let bcCount = 0;

        for (const subject of subjectsByScore) {
            if (selected.length >= totalN) break;

            // Check category limits
            if (maxFromCategory && categoryCounts[subject.category] >= maxFromCategory[subject.category]) {
                continue;
            }

            // Check B+C combined limit
            if (maxCategoryBCSubjects && (subject.category === 'B' || subject.category === 'C')) {
                if (bcCount >= maxCategoryBCSubjects) continue;
                bcCount++;
            }

            selected.push(subject);
            categoryCounts[subject.category]++;
        }

        return selected;
    }

    /**
     * Get readable grade requirements text
     */
    static getGradeRequirementText(requirements: SubjectRequirement[]): string[] {
        return requirements.map(req => {
            if (req.subject.startsWith('ELECTIVE')) {
                return `Any elective subject: Grade ${req.minGrade} or above`;
            }

            const alternatives = req.alternatives ? ` (or ${req.alternatives.join(', ')})` : '';
            return `${req.subject}${alternatives}: Grade ${req.minGrade} or above`;
        });
    }
}