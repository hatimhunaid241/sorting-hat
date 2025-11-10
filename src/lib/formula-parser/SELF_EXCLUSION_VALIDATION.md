# Self-Exclusion Validation

## Overview

The formula parser now validates that self-exclusion references (`!SELF:VARIABLE`) point to variables that actually exist in the formula.

## How It Works

### 1. Variable Name Collection

The validator first collects all variable names from the token group:

```typescript
function collectVariableNames(tokens: Token[]): Set<string> {
  // Traverses all tokens and collects:
  // - Variable names (from VariableToken.name)
  // - Subject names (from SubjectToken.subject)
}
```

### 2. Self-Exclusion Validation

When validating a `VariableToken`, it checks that any `excludeSelf` references exist:

```typescript
if (token.excludeSelf && token.excludeSelf.length > 0) {
  for (const selfRef of token.excludeSelf) {
    if (!variableNames.has(normalizedRef)) {
      // Error: referenced variable not found
    }
  }
}
```

## Examples

### ? Valid: Self-exclusion references existing variable

**Formula:**

```
(ELEC1[CATEGORY:A])+(ELEC2[!SELF:ELEC1])
```

**Explanation:**

- `ELEC1` is defined with constraints
- `ELEC2` references `ELEC1` in its self-exclusion
- ? Validation passes because `ELEC1` exists

**Collected Variables:** `{ELEC1, ELEC2}`

---

### ? Valid: Multiple variables with cross-references

**Formula:**

```
(ELEC1[CATEGORY:A])+(ELEC2[!SELF:ELEC1])+(ELEC3[!SELF:ELEC1,!SELF:ELEC2])
```

**Explanation:**

- `ELEC1` is defined
- `ELEC2` excludes `ELEC1`
- `ELEC3` excludes both `ELEC1` and `ELEC2`
- ? All references are valid

**Collected Variables:** `{ELEC1, ELEC2, ELEC3}`

---

### ? Valid: Subject referenced in self-exclusion

**Formula:**

```
(ENG)+(CHIN)+(ELEC1[!SELF:ENG])
```

**Explanation:**

- `ENG` and `CHIN` are subjects (SubjectToken)
- `ELEC1` excludes `ENG` through self-exclusion
- ? Valid because `ENG` exists as a subject

**Collected Variables:** `{ENG, CHIN, ELEC1}`

---

### ? Invalid: Self-exclusion references non-existent variable

**Formula:**

```
(ELEC1[!SELF:UNKNOWN])
```

**Error:**

```
Invalid self-exclusion: "UNKNOWN". Referenced variable/subject not found in formula.
Available: ELEC1
```

**Explanation:**

- `ELEC1` tries to exclude `UNKNOWN`
- ? `UNKNOWN` doesn't exist in the formula
- Validation fails with helpful error message

---

### ? Invalid: Self-exclusion typo

**Formula:**

```
(ELEC1[CATEGORY:A])+(ELEC2[!SELF:ELEC3])
```

**Error:**

```
Invalid self-exclusion: "ELEC3". Referenced variable/subject not found in formula.
Available: ELEC1, ELEC2
```

**Explanation:**

- `ELEC2` tries to exclude `ELEC3`
- ? `ELEC3` doesn't exist (likely a typo)
- Error message shows available variables

---

### ? Invalid: Forward reference

**Formula:**

```
(ELEC1[!SELF:ELEC2])+(ELEC2[CATEGORY:A])
```

**Status:** Currently **VALID** ?

**Explanation:**

- The current implementation collects ALL variables first, then validates
- So forward references are allowed
- `ELEC1` can reference `ELEC2` even though `ELEC2` appears later
- This might be intentional for flexibility

**Note:** If you want to disallow forward references, we'd need to validate during parsing instead of after.

---

## Real-World Example

### HKU Architecture Formula

```
(1*CSD)*((ENG)+(CHIN)+(MATH)+(ELEC1[CATEGORY:A,!SUB-CATEGORY:CORE])+(ELEC2[!SELF:ELEC1]))
```

**Variable Collection:**

1. `CSD` (subject)
2. `ENG` (subject)
3. `CHIN` (subject)
4. `MATH` (subject)
5. `ELEC1` (variable)
6. `ELEC2` (variable)

**Self-Exclusion Check:**

- `ELEC2` has `excludeSelf: ["ELEC1"]`
- Check: Does `ELEC1` exist? ? Yes
- Validation passes

---

## Implementation Details

### Variable Storage

Variables now store their name in the token:

```typescript
{
    valueType: 'variable',
    name: 'ELEC1',  // ก็ Stored for reference
    includeCategories: ['A'],
    excludeSubCategories: ['Core']
}
```

### Case-Insensitive Matching

All comparisons are case-insensitive:

```typescript
// These are all equivalent:
!SELF:ELEC1
!SELF:elec1
!SELF:Elec1
```

### Error Messages

Error messages include:

- The invalid reference
- All available variables in the formula
- Helpful context for debugging

Example:

```
Invalid self-exclusion: "ELEC3".
Referenced variable/subject not found in formula.
Available: ELEC1, ELEC2
```

---

## Benefits

### 1. **Catch Typos Early**

```
(ELEC1[!SELF:EELC2])  // Typo: EELC2 instead of ELEC2
? Error caught during parsing
```

### 2. **Prevent Invalid References**

```
(ELEC2[!SELF:NONEXISTENT])
? Error: NONEXISTENT not found
```

### 3. **Helpful Error Messages**

Shows you what variables ARE available, making debugging easier

### 4. **Type Safety**

TypeScript enforces that variables have names, preventing runtime errors

---

## Testing

Add this test case to verify the validation:

```typescript
// Test Case: Invalid self-exclusion
{
    name: "Unknown self variable",
    formula: "(ELEC1[!SELF:UNKNOWN])",
    expectedError: "Invalid self-exclusion: \"UNKNOWN\""
}
```

This should now properly fail with a validation error! ?
