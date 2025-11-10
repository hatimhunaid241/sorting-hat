# Self-Exclusion Validation - Implementation Summary

## What Was Changed

### 1. **Updated `VariableToken` Type** (`types.ts`)

**Before:**

```typescript
export interface VariableToken extends BaseToken {
  valueType: "variable";
  includeCategories?: string[];
  excludeCategories?: string[];
  // ... other properties
  excludeSelf?: string[];
}
```

**After:**

```typescript
export interface VariableToken extends BaseToken {
  valueType: "variable";
  name: string; // ก็ NEW: Store variable name like ELEC1, ELEC2
  includeCategories?: string[];
  excludeCategories?: string[];
  // ... other properties
  excludeSelf?: string[];
}
```

**Why:** We need to store the variable name so we can track which variables exist in the formula and validate self-exclusion references.

---

### 2. **Updated Parser** (`parsers.ts`)

**Added variable name storage:**

```typescript
if (i < formula.length && formula[i] === "[") {
  const constraintsResult = parseConstraints(formula, i);
  return {
    token: {
      valueType: "variable",
      ...constraintsResult.constraints,
      name: subjectName.toUpperCase(), // ก็ NEW: Store the name
    },
    endIndex: constraintsResult.endIndex,
  };
}
```

**Updated type signature:**

```typescript
export function parseConstraints(
  formula: string,
  startIndex: number
): {
  constraints: Omit<VariableToken, "valueType" | "name">; // ก็ Exclude 'name' too
  endIndex: number;
};
```

**Why:** When parsing a variable like `ELEC1[...]`, we now store "ELEC1" as the variable's name.

---

### 3. **Added Validation Logic** (`validators.ts`)

**New function to collect variable names:**

```typescript
function collectVariableNames(tokens: Token[]): Set<string> {
  const variables = new Set<string>();

  function traverse(tokenArray: Token[]): void {
    for (const token of tokenArray) {
      if (Array.isArray(token)) {
        traverse(token);
      } else if (token.valueType === "variable") {
        variables.add(token.name.toUpperCase()); // ก็ Collect variable names
      } else if (token.valueType === "subject") {
        variables.add(token.subject.toUpperCase()); // ก็ Collect subject names
      }
    }
  }

  traverse(tokens);
  return variables;
}
```

**Added self-exclusion validation:**

```typescript
// Inside validateToken function, for VariableToken
if (token.excludeSelf && token.excludeSelf.length > 0) {
  for (const selfRef of token.excludeSelf) {
    const normalizedRef = selfRef.toUpperCase();
    if (!variableNames.has(normalizedRef)) {
      errors.push(
        `${path}Invalid self-exclusion: "${selfRef}". ` +
          `Referenced variable/subject not found in formula. ` +
          `Available: ${Array.from(variableNames).join(", ")}`
      );
    }
  }
}
```

**Why:** This validates that any variable/subject referenced in `!SELF:XXX` actually exists in the formula.

---

## How It Works

### Step 1: Parsing

When formula `(ELEC1[CATEGORY:A])+(ELEC2[!SELF:ELEC1])` is parsed:

```typescript
[
  {
    valueType: "variable",
    name: "ELEC1", // ก็ Name stored
    includeCategories: ["A"],
  },
  { valueType: "operator", operator: "+" },
  {
    valueType: "variable",
    name: "ELEC2", // ก็ Name stored
    excludeSelf: ["ELEC1"], // ก็ Reference to ELEC1
  },
];
```

### Step 2: Validation

```typescript
// 1. Collect all variable names
variableNames = Set(["ELEC1", "ELEC2"]);

// 2. For ELEC2's excludeSelf: ['ELEC1']
//    Check: Is 'ELEC1' in variableNames?
//    ? Yes! Validation passes.
```

### Step 3: Error Handling (if invalid)

```typescript
// Formula: (ELEC2[!SELF:UNKNOWN])
variableNames = Set(["ELEC2"]);

// Check: Is 'UNKNOWN' in variableNames?
// ? No! Error thrown:
// "Invalid self-exclusion: "UNKNOWN".
//  Referenced variable/subject not found in formula.
//  Available: ELEC2"
```

---

## Test Cases

### ? Should Pass

```typescript
// Valid self-exclusion
"(ELEC1[CATEGORY:A])+(ELEC2[!SELF:ELEC1])";

// Multiple valid exclusions
"(ELEC1[CATEGORY:A])+(ELEC2[!SELF:ELEC1])+(ELEC3[!SELF:ELEC1,!SELF:ELEC2])";

// Subject self-exclusion
"(ENG)+(CHIN)+(ELEC1[!SELF:ENG])";

// Forward reference (currently allowed)
"(ELEC1[!SELF:ELEC2])+(ELEC2[CATEGORY:A])";
```

### ? Should Fail

```typescript
// Unknown variable
"(ELEC1[!SELF:UNKNOWN])";
// Error: Referenced variable/subject not found

// Typo
"(ELEC1[CATEGORY:A])+(ELEC2[!SELF:EELC1])";
// Error: EELC1 not found. Available: ELEC1, ELEC2

// Self-reference to non-existent
"(ELEC2[!SELF:ELEC3])";
// Error: ELEC3 not found. Available: ELEC2
```

---

## Benefits

### ? **Catch Errors Early**

Instead of failing during evaluation, invalid self-exclusions are caught during parsing.

### ? **Better Error Messages**

The error message tells you:

- What reference is invalid
- What variables ARE available
- Where in the formula the error occurred

### ?? **Type Safety**

TypeScript enforces that variables have names, preventing undefined references.

### ? **Self-Documenting**

Variable names make the formula more readable and maintainable.

---

## Examples from Your Test Suite

### Test Case: "Self-exclusion"

```typescript
{
    name: "Self-exclusion",
    formula: "(ELEC2[CATEGORY:A,CATEGORY:C,!SELF:ELEC1])"
}
```

**Status:** ? Will fail (ELEC1 not defined)

**Fix:** Add ELEC1 first:

```typescript
"(ELEC1[CATEGORY:A])+(ELEC2[CATEGORY:A,CATEGORY:C,!SELF:ELEC1])";
```

### Test Case: "HKU Architecture"

```typescript
{
    name: "HKU Architecture",
    formula: "(1*CSD)*((ENG)+(CHIN)+(MATH)+(ELEC1[CATEGORY:A])+(ELEC2[!SELF:ELEC1]))"
}
```

**Status:** ? Will pass (ELEC1 is defined before ELEC2 references it)

### Test Case: "Unknown self variable"

```typescript
{
    name: "Unknown self variable",
    formula: "(ELEC1[!SELF:UNKNOWN])"
}
```

**Status:** ? Will fail (UNKNOWN not defined)
**This is the expected behavior!** ?

---

## Migration Impact

### No Breaking Changes for Valid Formulas

If your formulas were already correct (self-exclusions reference existing variables), they continue to work exactly as before.

### Will Now Catch Invalid Formulas

Formulas that had invalid self-exclusion references will now fail during parsing with a clear error message.

### Action Required

Review any formulas that use `!SELF:` and ensure:

1. The referenced variable exists in the formula
2. The name is spelled correctly
3. The name matches the variable definition (case-insensitive)

---

## What's Next

### Potential Enhancements

1. **Order Validation** (Optional)

   - Currently allows forward references: `ELEC1[!SELF:ELEC2]` before `ELEC2` is defined
   - Could add a flag to enforce that excluded variables must be defined earlier

2. **Circular Reference Detection**

   - Detect cases like: `ELEC1[!SELF:ELEC2]` + `ELEC2[!SELF:ELEC1]`
   - Currently allowed, might want to warn about complexity

3. **Self-Self Detection**

   - Detect silly cases like: `ELEC1[!SELF:ELEC1]`
   - Currently not validated (a variable excluding itself)

4. **IDE Integration**
   - Add LSP support for autocomplete on self-exclusion references
   - Suggest available variables when typing `!SELF:`

---

## Summary

? **Completed:**

- Variable names are now stored in tokens
- Self-exclusion references are validated
- Clear error messages for invalid references
- All modules compile without errors

? **Result:**
Your formula parser now catches invalid self-exclusion references early with helpful error messages, making formulas more reliable and easier to debug!
