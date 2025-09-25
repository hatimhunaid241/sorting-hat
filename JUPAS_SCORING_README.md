# JUPAS Scoring System

A robust, type-safe TypeScript implementation of JUPAS (Joint University Programmes Admissions System) scoring calculations for Hong Kong universities.

## Features

- **Standardized Data Structure**: Consistent format across all universities
- **Multiple Scoring Methods**: Support for different university calculation methods
- **Type Safety**: Full TypeScript support with comprehensive type definitions
- **Flexible Requirements**: Handle minimum grade requirements and alternatives
- **Weighted Calculations**: Support for subject-specific weightings
- **Category Limits**: Proper handling of Category A, B, C subject limits

## Data Structure Overview

### Programme Entry Structure

```typescript
interface ProgrammeEntry {
  programme: {
    id: string; // Programme code (e.g., "6004")
    name: string; // Programme name
    faculty?: string; // Faculty name
    degree?: string; // Degree type (e.g., "BEng")
  };
  scoringFormula: ScoringFormula;
  minimumRequirements: SubjectRequirement[];
  expectedScore?: number;
  competitiveScore?: number;
  otherRequirements?: string[];
  interviewRequired?: boolean;
  portfolioRequired?: boolean;
  aptitudeTestRequired?: boolean;
}
```

### Scoring Formula Types

#### 1. BEST_N Formula

Takes the best N subjects with optional category limits.

```typescript
{
    type: "BEST_N",
    parameters: {
        n: 6,                                    // Number of subjects
        includedCategories: ["A", "B", "C"],     // Allowed categories
        maxFromCategory: { "A": 6, "B": 2, "C": 1 }, // Category limits
        maxCategoryBCSubjects: 2                 // Combined B+C limit
    }
}
```

#### 2. CORE_PLUS_BEST Formula

Requires specific core subjects plus best of remaining subjects.

```typescript
{
    type: "CORE_PLUS_BEST",
    parameters: {
        coreSubjects: ["ENG", "CHIN", "MATH", "CSD"], // Required subjects
        additionalBest: 2,                            // Additional subjects
        includedCategories: ["A"]                     // Categories for additional
    }
}
```

#### 3. WEIGHTED Formula

Applies different weights to different subjects.

```typescript
{
    type: "WEIGHTED",
    parameters: {
        weights: {
            "MATH": 1.5,    // Mathematics weighted 1.5x
            "PHY": 1.2,     // Physics weighted 1.2x
            "ENG": 1.0      // English normal weight
        }
    }
}
```

#### 4. CUSTOM Formula

For complex university-specific calculations.

```typescript
{
    type: "CUSTOM",
    parameters: {
        customCalculation: "university_specific_method"
    }
}
```

## Usage Examples

### Basic Score Calculation

```typescript
import { ScoringCalculator, StudentSubject } from "./lib/utils/scoringCalculator";
import { hku } from "./lib/constants/hku";

// Student's HKDSE results
const studentSubjects: StudentSubject[] = [
  { subject: "ENG", grade: "4", category: "A" },
  { subject: "CHIN", grade: "4", category: "A" },
  { subject: "MATH", grade: "5", category: "A" },
  { subject: "CSD", grade: "A", category: "A" },
  { subject: "PHY", grade: "5*", category: "A" },
  { subject: "CHEM", grade: "5", category: "A" },
];

// Calculate score for HKU Architecture
const result = ScoringCalculator.calculateScore(hku[0], studentSubjects);

console.log(`Total Score: ${result.totalScore}`);
console.log(`Eligible: ${result.meetRequirements}`);
console.log(`Used Subjects: ${result.usedSubjects.map((s) => s.subject).join(", ")}`);
```

### Calculate All University Options

```typescript
import { JUPASCalculator } from "./lib/examples/jupasExample";

// Get all eligible programmes ranked by score
const eligibleProgrammes = JUPASCalculator.getEligibleProgrammes(studentSubjects);

// Get competitive matches within score range
const competitiveMatches = JUPASCalculator.getCompetitiveMatches(studentSubjects, 3);

// Display results
eligibleProgrammes.forEach((item, index) => {
  console.log(`${index + 1}. ${item.university} - ${item.programme.programme.name}`);
  console.log(`   Score: ${item.result.totalScore}`);
});
```

## Grade Conversion

The system uses the standard HKDSE grade-to-score mapping:

- 5\*\* = 7 points
- 5\* = 6 points
- 5 = 5 points
- 4 = 4 points
- 3 = 3 points
- 2 = 2 points
- 1 = 1 point
- U = 0 points

For CSD (Citizenship and Social Development):

- A = 3 points
- B = 2 points
- C = 1 point
- D = 0 points

## Subject Abbreviations

Common subject abbreviations used:

- **Core Subjects**: ENG, CHIN, MATH, CSD
- **Sciences**: PHY, CHEM, BIO
- **Mathematics**: MATH-M1, MATH-M2
- **Humanities**: HIST, GEO, ECO
- **Languages**: FR, GER, JPN, KOR, SPA
- **Applied Learning**: Various Category B subjects
- **Other Languages**: Category C subjects

## Adding New Universities

To add a new university, create a new file following the pattern:

```typescript
// src/lib/constants/newUniversity.ts
import { ProgrammeEntry } from "./hku";

export const newUniversity: ProgrammeEntry[] = [
  {
    programme: {
      id: "XXXX",
      name: "Programme Name",
      faculty: "Faculty Name",
    },
    scoringFormula: {
      type: "BEST_N",
      parameters: {
        n: 6,
        includedCategories: ["A", "B", "C"],
      },
    },
    minimumRequirements: [
      { subject: "ENG", minGrade: "3" },
      { subject: "CHIN", minGrade: "3" },
      // ... other requirements
    ],
    expectedScore: 25,
  },
];
```

## Extending Scoring Methods

For complex university-specific calculations, extend the `ScoringCalculator` class:

```typescript
// Add to calculateCustom method
case "university_specific_method":
    return this.calculateUniversitySpecific(subjects, formula);

private static calculateUniversitySpecific(
    subjects: StudentSubject[],
    formula: ScoringFormula
): CalculationResult {
    // Implement custom logic
    // Return CalculationResult
}
```

## Testing

Run the example to see the system in action:

```typescript
import { exampleUsage } from "./lib/examples/jupasExample";
exampleUsage();
```

This will display calculated scores for all universities and programmes with detailed breakdown.

## License

MIT License - See LICENSE file for details.
