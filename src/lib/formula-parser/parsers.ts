/**
 * Formula parsing functions
 */

import type { Token, TokenGroup, SubjectToken, VariableToken } from './types';
import { findActualValue, findActualSubject } from './utils';
import { categories, subCategories, subjectAbbreviations } from './data';
import { validateTokens } from './validators';

/**
 * Main tokenization function
 * Converts a formula string into structured tokens
 */
export function tokenizeFormula(formula: string): TokenGroup {
    const cleanFormula = formula.replace(/\s+/g, '');
    const tokens: Token[] = [];
    let i = 0;

    // Parse the entire formula, not just the first group
    while (i < cleanFormula.length) {
        const char = cleanFormula[i];

        // Handle operators at top level
        if (['+', '-', '*', '/'].includes(char)) {
            tokens.push({
                valueType: 'operator',
                operator: char as '+' | '-' | '*' | '/'
            });
            i++;
            continue;
        }

        // Handle groups (parentheses)
        if (char === '(') {
            const groupResult = parseGroup(cleanFormula, i);
            tokens.push(groupResult.tokens as never);
            i = groupResult.endIndex;
            continue;
        }

        // Handle numbers at top level
        if (char >= '0' && char <= '9') {
            const numberResult = parseNumber(cleanFormula, i);
            tokens.push({
                valueType: 'number',
                value: numberResult.value
            });
            i = numberResult.endIndex;
            continue;
        }

        // Handle subjects/variables at top level
        if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) {
            const subjectResult = parseSubject(cleanFormula, i);
            tokens.push(subjectResult.token);
            i = subjectResult.endIndex;
            continue;
        }

        throw new Error(`Unexpected character '${char}' at position ${i}`);
    }

    return validateTokens(tokens);
}

/**
 * Parse a group enclosed in parentheses
 */
export function parseGroup(formula: string, startIndex: number): { tokens: Token[], endIndex: number } {
    const tokens: Token[] = []
    let i = startIndex;

    if (formula[i] === '(') {
        i++;
    }

    while (i < formula.length) {
        const char = formula[i];
        if (char === ')') {
            i++;
            break;
        }
        if (['+', '-', '*', '/'].includes(char)) {
            tokens.push({ valueType: 'operator', operator: char as '+' | '-' | '*' | '/' });
            i++;
            continue;
        }
        if (char === '(') {
            const nestedResult = parseGroup(formula, i);
            tokens.push(nestedResult.tokens as never);
            i = nestedResult.endIndex;
            continue;
        }
        if (char >= '0' && char <= '9') {
            const numberResult = parseNumber(formula, i);
            tokens.push({
                valueType: 'number',
                value: numberResult.value
            });
            i = numberResult.endIndex;
            continue;
        }
        if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) {
            const subjectResult = parseSubject(formula, i);
            tokens.push(subjectResult.token);
            i = subjectResult.endIndex;
            continue;
        }

        i++;
    }
    return { tokens, endIndex: i };
}

/**
 * Parse a number from the formula
 */
export function parseNumber(formula: string, startIndex: number): { value: number; endIndex: number } {
    let i = startIndex;
    let numberStr = '';

    // Collect all digits and decimal points
    while (i < formula.length && (
        (formula[i] >= '0' && formula[i] <= '9') ||
        formula[i] === '.'
    )) {
        numberStr += formula[i];
        i++;
    }

    return {
        value: parseFloat(numberStr),
        endIndex: i
    };
}

/**
 * Parse a subject or variable (with optional constraints)
 */
export function parseSubject(formula: string, startIndex: number): { token: SubjectToken | VariableToken; endIndex: number } {
    let i = startIndex;
    let subjectName = '';

    while (i < formula.length && (
        (formula[i] >= 'A' && formula[i] <= 'Z') ||
        (formula[i] >= 'a' && formula[i] <= 'z') ||
        (formula[i] >= '0' && formula[i] <= '9') ||
        formula[i] === '-' ||
        formula[i] === '_'
    )) {
        subjectName += formula[i];
        i++;
    }

    if (i < formula.length && formula[i] === '[') {
        // This is a variable with constraints
        const constraintsResult = parseConstraints(formula, i);
        return {
            token: {
                valueType: 'variable',
                ...constraintsResult.constraints,
                name: subjectName.toUpperCase() // Store the variable name (ELEC1, ELEC2, etc.)
            },
            endIndex: constraintsResult.endIndex
        };
    }

    // Find the actual subject abbreviation from the database
    const actualSubject = findActualSubject(subjectName);

    return {
        token: {
            valueType: 'subject',
            subject: actualSubject || subjectName.toUpperCase() // Use actual or fallback to normalized
        },
        endIndex: i
    };
}

/**
 * Parse constraints inside square brackets [...]
 */
export function parseConstraints(formula: string, startIndex: number): {
    constraints: Omit<VariableToken, 'valueType' | 'name'>;
    endIndex: number
} {
    if (formula[startIndex] !== '[') {
        throw new Error('Expected opening bracket for constraints');
    }

    let i = startIndex + 1;
    let constraintStr = '';

    // Find the closing bracket
    while (i < formula.length && formula[i] !== ']') {
        constraintStr += formula[i];
        i++;
    }

    if (formula[i] !== ']') {
        throw new Error('Expected closing bracket for constraints');
    }

    i++; // Move past the closing bracket

    // Parse the constraint string
    const constraints: Omit<VariableToken, 'valueType' | 'name'> = {
        includeCategories: [],
        excludeCategories: [],
        includeSubCategories: [],
        excludeSubCategories: [],
        includeSubjects: [],
        excludeSubjects: [],
        excludeSelf: []
    };

    // Split by comma for multiple constraints
    const parts = constraintStr.split(',').map(p => p.trim());

    for (const part of parts) {
        // Check for exclusion (!prefix)
        const isExclusion = part.startsWith('!');
        const cleanPart = isExclusion ? part.slice(1) : part;

        // CATEGORY constraint
        if (cleanPart.toUpperCase().startsWith('CATEGORY:')) {
            const categoryValues = cleanPart.slice('CATEGORY:'.length).split('|').map(v => {
                const trimmed = v.trim();
                // Find actual category from database
                const actualCategory = findActualValue(trimmed, categories);
                if (!actualCategory) {
                    throw new Error(`Unknown category: ${trimmed}`);
                }
                return actualCategory;
            });

            if (isExclusion) {
                constraints.excludeCategories?.push(...categoryValues);
            } else {
                constraints.includeCategories?.push(...categoryValues);
            }
        }
        // SUB-CATEGORY constraint
        else if (cleanPart.toUpperCase().startsWith('SUB-CATEGORY:')) {
            const subCategoryValues = cleanPart.slice('SUB-CATEGORY:'.length).split('|').map(v => {
                const trimmed = v.trim();
                // Find actual sub-category from database (handles spaces)
                const actualSubCategory = findActualValue(trimmed, subCategories);
                if (!actualSubCategory) {
                    throw new Error(`Unknown sub-category: ${trimmed}`);
                }
                return actualSubCategory;
            });

            if (isExclusion) {
                constraints.excludeSubCategories?.push(...subCategoryValues);
            } else {
                constraints.includeSubCategories?.push(...subCategoryValues);
            }
        }
        // SUBJECT constraint
        else if (cleanPart.toUpperCase().startsWith('SUBJECT:')) {
            const subjectValues = cleanPart.slice('SUBJECT:'.length).split('|').map(v => {
                const trimmed = v.trim();
                // Find actual subject from database
                const actualSubject = findActualValue(trimmed, subjectAbbreviations.flat?.() ?? subjectAbbreviations as string[]);
                if (!actualSubject) {
                    throw new Error(`Unknown subject: ${trimmed}`);
                }
                return actualSubject;
            });

            if (isExclusion) {
                constraints.excludeSubjects?.push(...subjectValues);
            } else {
                constraints.includeSubjects?.push(...subjectValues);
            }
        }
        // SELF constraint
        else if (cleanPart.toUpperCase().startsWith('SELF:')) {
            const selfValue = cleanPart.slice('SELF:'.length).trim().toUpperCase();
            if (isExclusion) {
                constraints.excludeSelf?.push(selfValue);
            } else {
                throw new Error('SELF constraint must be used with ! (exclusion)');
            }
        }
        else if (cleanPart === '') {
            // Ignore empty constraints
            continue;
        }
        else {
            throw new Error(`Unknown constraint type: ${cleanPart}`);
        }
    }

    return { constraints, endIndex: i };
}
