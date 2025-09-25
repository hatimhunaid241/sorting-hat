import { ScoringCalculator, StudentSubject } from '../calculators/scoringCalculator';
import { hku } from '../data/universities/hku';
import { cuhk } from '../data/universities/cuhk';
import { polyu } from '../data/universities/polyu';
import { eduHK } from '../data/universities/eduHK';

// Example: Calculate scores for a sample student
export function exampleUsage() {
    // Sample student's HKDSE results
    const studentSubjects: StudentSubject[] = [
        { subject: "ENG", grade: "4", category: "A" },
        { subject: "CHIN", grade: "4", category: "A" },
        { subject: "MATH", grade: "5", category: "A" },
        { subject: "CSD", grade: "A", category: "A" },
        { subject: "PHY", grade: "5*", category: "A" },
        { subject: "CHEM", grade: "5", category: "A" },
        { subject: "BIO", grade: "4", category: "A" },
        { subject: "ECO", grade: "3", category: "A" },
        { subject: "BAFS", grade: "4", category: "A" }
    ];

    // Combine all universities
    const allProgrammes = [
        ...hku,
        ...cuhk,
        ...polyu,
        ...eduHK
    ];

    console.log("=== JUPAS Score Calculator Results ===\n");
    console.log("Student's Subjects:");
    studentSubjects.forEach(subject => {
        console.log(`  ${subject.subject}: ${subject.grade}`);
    });
    console.log("\n");

    // Calculate scores for all programmes
    const results = allProgrammes.map(programme => {
        const result = ScoringCalculator.calculateScore(programme, studentSubjects);

        return {
            university: getUniversityFromId(programme.programme.id),
            programmeId: programme.programme.id,
            programmeName: programme.programme.name,
            ...result
        };
    });

    // Sort by total score (descending)
    results.sort((a, b) => b.totalScore - a.totalScore);

    // Display results
    console.log("Programme Rankings (by calculated score):\n");

    results.forEach((result, index) => {
        const status = result.meetRequirements ? "✅ Eligible" : "❌ Not Eligible";
        const competitive = getCompetitiveStatus(result.totalScore, findProgramme(result.programmeId, allProgrammes));

        console.log(`${index + 1}. ${result.university} - ${result.programmeName}`);
        console.log(`   Programme ID: ${result.programmeId}`);
        console.log(`   Calculated Score: ${result.totalScore}`);
        console.log(`   Status: ${status}`);
        console.log(`   Competitiveness: ${competitive}`);

        if (!result.meetRequirements && result.missingRequirements.length > 0) {
            console.log(`   Missing Requirements:`);
            result.missingRequirements.forEach(req => {
                console.log(`   - ${req}`);
            });
        }

        if (result.usedSubjects.length > 0) {
            console.log(`   Subjects Used: ${result.usedSubjects.map(s => `${s.subject}(${s.grade})`).join(', ')}`);
        }

        if (result.breakdown) {
            console.log(`   Score Breakdown:`);
            Object.entries(result.breakdown).forEach(([subject, score]) => {
                console.log(`   - ${subject}: ${score}`);
            });
        }

        console.log("");
    });

    return results;
}

function getUniversityFromId(programmeId: string): string {
    const prefix = programmeId.charAt(0);
    switch (prefix) {
        case '6': return 'HKU';
        case '4': return 'CUHK';
        case '3': return 'PolyU';
        case '5': return 'HKUST';
        case 'A': return 'EdUHK';
        default: return 'Unknown';
    }
}

function findProgramme(programmeId: string, allProgrammes: typeof hku) {
    return allProgrammes.find(p => p.programme.id === programmeId);
}

function getCompetitiveStatus(score: number, programme: typeof hku[0] | undefined): string {
    if (!programme) return "Unknown";

    const expected = programme.expectedScore || 0;
    const competitive = programme.competitiveScore || expected;

    if (score >= competitive) return "🔥 Highly Competitive";
    if (score >= expected) return "⭐ Competitive";
    if (score >= expected - 3) return "📈 Possible";
    return "📉 Challenging";
}

// Export utility functions for use in the main application
export class JUPASCalculator {
    static calculateAllScores(studentSubjects: StudentSubject[]) {
        const allProgrammes = [
            ...hku,
            ...cuhk,
            ...polyu,
            ...eduHK
        ];

        return allProgrammes.map(programme => ({
            university: getUniversityFromId(programme.programme.id),
            programme,
            result: ScoringCalculator.calculateScore(programme, studentSubjects)
        }));
    }

    static getEligibleProgrammes(studentSubjects: StudentSubject[]) {
        return this.calculateAllScores(studentSubjects)
            .filter(item => item.result.meetRequirements)
            .sort((a, b) => b.result.totalScore - a.result.totalScore);
    }

    static getCompetitiveMatches(studentSubjects: StudentSubject[], tolerance: number = 3) {
        return this.getEligibleProgrammes(studentSubjects)
            .filter(item => {
                const expected = item.programme.expectedScore || 0;
                return Math.abs(item.result.totalScore - expected) <= tolerance;
            });
    }
}