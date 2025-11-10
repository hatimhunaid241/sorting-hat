# Formula Parser Module

A modular system for parsing and validating JUPAS scoring formulas.

## Structure

The formula parser is organized into separate, focused modules:

```
src/lib/formula-parser/
戍式式 index.ts           # Main exports
戍式式 types.ts           # Token type definitions
戍式式 data.ts            # Reference data (categories, subjects, etc.)
戍式式 utils.ts           # Utility functions (normalization, matching)
戍式式 parsers.ts         # Parsing functions (tokenization)
戌式式 validators.ts      # Validation functions
```

## Modules

### `types.ts`

Defines the token type system:

- `TokenType` - Union type for token types
- `NumberToken` - Represents numeric values
- `OperatorToken` - Represents operators (+, -, \*, /)
- `SubjectToken` - Represents specific subjects
- `VariableToken` - Represents variables with constraints
- `Token` - Union of all token types
- `TokenGroup` - Array of tokens (can be nested)

### `data.ts`

Contains reference data for validation:

- `categories` - Valid category values (A, B, C)
- `subCategories` - Valid sub-category values (Core, Extended Module, Language)
- `subjectAbbreviations` - Valid subject abbreviations (ENG, CHIN, MATH, etc.)

### `utils.ts`

Utility functions for string matching:

- `normalizeForComparison(str)` - Removes spaces and converts to uppercase
- `matchesNormalized(value, validValues)` - Case/space-insensitive matching
- `findActualValue(input, validValues)` - Finds original DB value from normalized input
- `findActualSubject(input)` - Specialized function for finding subject abbreviations

### `parsers.ts`

Core parsing functions:

- `tokenizeFormula(formula)` - Main entry point, converts formula string to tokens
- `parseGroup(formula, startIndex)` - Parses parenthesized groups
- `parseNumber(formula, startIndex)` - Parses numeric values
- `parseSubject(formula, startIndex)` - Parses subjects and variables
- `parseConstraints(formula, startIndex)` - Parses constraint blocks ([...])

### `validators.ts`

Validation functions:

- `validateTokens(tokens)` - Validates parsed tokens against reference data

## Usage

### Basic Parsing

```typescript
import { tokenizeFormula } from "@/lib/formula-parser";

const formula = "(1*CSD)*((ENG)+(CHIN)+(MATH))";
const tokens = tokenizeFormula(formula);
```

### With Constraints

```typescript
const formula = "(ELEC1[CATEGORY:A,!SUB-CATEGORY:Core])";
const tokens = tokenizeFormula(formula);
```

### Custom Validation

```typescript
import { tokenizeFormula, validateTokens } from "@/lib/formula-parser";

const formula = "(ENG)+(CHIN)";
const tokens = tokenizeFormula(formula);
const validatedTokens = validateTokens(tokens);
```

## Features

### Normalized Matching

The parser uses normalized matching for all constraint values:

- **Case-insensitive**: `"eng"` matches `"ENG"`
- **Space-insensitive**: `"extendedmodule"` matches `"Extended Module"`
- **Original values preserved**: Tokens always contain the original database values

### Constraint Types

Variables can have multiple constraint types:

- `CATEGORY:A` - Include specific categories
- `!CATEGORY:B` - Exclude specific categories
- `SUB-CATEGORY:Core` - Include sub-categories
- `!SUB-CATEGORY:Language` - Exclude sub-categories
- `SUBJECT:PHY` - Include specific subjects
- `!SUBJECT:MATH-M1` - Exclude specific subjects
- `!SELF` - Exclude self-reference

### Nested Structures

Supports nested parentheses for complex formulas:

```typescript
"(1*CSD)*(((ENG)+(CHIN))+((MATH)+(PHY)))";
```

## Example Formulas

```typescript
// Simple arithmetic
"(ENG)+(CHIN)+(MATH)";

// With multiplier
"(1*CSD)*((ENG)+(CHIN)+(MATH))";

// With constraints
"(ELEC1[CATEGORY:A,!SUB-CATEGORY:Core])";

// Complex formula (HKU Architecture)
"(1*CSD)*((ENG)+(CHIN)+(MATH)+(ELEC1[CATEGORY:A,!SUB-CATEGORY:Core])+(ELEC2[CATEGORY:A,CATEGORY:C,!SELF]))";
```

## Error Handling

The parser throws descriptive errors for:

- Invalid constraint types
- Unknown categories/subjects
- Unmatched parentheses/brackets
- Invalid syntax

## Testing

Test cases are available in:

- `src/lib/calculators/scoringCalculator.ts` - Full test suite with 48+ test cases
- Results saved to `formula-parser-test-results.txt`

## Migration from Old Structure

If you're migrating from the old `formulaParser.ts`:

```typescript
// Old import
import { tokenizeFormula } from "./helpers/formulaParser";

// New import
import { tokenizeFormula } from "@/lib/formula-parser";
```

All exports remain the same - only the internal structure has changed.
