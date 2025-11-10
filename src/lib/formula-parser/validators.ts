/**
 * Token validation functions
 */

import type { Token, TokenGroup } from './types';
import { matchesNormalized, findActualSubject } from './utils';
import { categories, subCategories } from './data';

/**
 * Collect all variable names from the token group
 */
function collectVariableNames(tokens: Token[]): Set<string> {
    const variables = new Set<string>();

    function traverse(tokenArray: Token[]): void {
        for (const token of tokenArray) {
            if (Array.isArray(token)) {
                traverse(token);
            } else if (token.valueType === 'variable') {
                // Track variable names (ELEC1, ELEC2, etc.) for self-exclusion validation
                variables.add(token.name.toUpperCase());
            } else if (token.valueType === 'subject') {
                // Track subject names as they can be referenced in excludeSelf
                variables.add(token.subject.toUpperCase());
            }
        }
    }

    traverse(tokens);
    return variables;
}

/**
 * Validate parsed tokens and return them if valid
 * Throws an error if validation fails
 */
export function validateTokens(tokens: Token[]): TokenGroup {
    const errors: string[] = [];
    const variableNames = collectVariableNames(tokens);

    function validateToken(token: Token, path: string = ''): void {
        if (token.valueType === 'subject') {
            // Validate subject abbreviation exists (tokens now contain original values)
            // Validation should pass since parseSubject already looked up the actual value
            const subjectExists = findActualSubject(token.subject) !== null;

            if (!subjectExists) {
                errors.push(`${path}Invalid subject: "${token.subject}". Not found in subject abbreviations.`);
            }
        } else if (token.valueType === 'variable') {
            // Validate categories (use normalized comparison)
            if (token.includeCategories) {
                for (const category of token.includeCategories) {
                    if (!matchesNormalized(category, categories)) {
                        errors.push(`${path}Invalid include category: "${category}". Valid categories: ${categories.join(', ')}`);
                    }
                }
            }

            if (token.excludeCategories) {
                for (const category of token.excludeCategories) {
                    if (!matchesNormalized(category, categories)) {
                        errors.push(`${path}Invalid exclude category: "${category}". Valid categories: ${categories.join(', ')}`);
                    }
                }
            }

            // Validate sub-categories (use normalized comparison for spaces)
            if (token.includeSubCategories) {
                for (const subCategory of token.includeSubCategories) {
                    if (!matchesNormalized(subCategory, subCategories)) {
                        errors.push(`${path}Invalid include sub-category: "${subCategory}". Valid sub-categories: ${subCategories.join(', ')}`);
                    }
                }
            }

            if (token.excludeSubCategories) {
                for (const subCategory of token.excludeSubCategories) {
                    if (!matchesNormalized(subCategory, subCategories)) {
                        errors.push(`${path}Invalid exclude sub-category: "${subCategory}". Valid sub-categories: ${subCategories.join(', ')}`);
                    }
                }
            }

            // Validate subjects in constraints (use normalized comparison)
            if (token.includeSubjects) {
                for (const subject of token.includeSubjects) {
                    const subjectExists = findActualSubject(subject) !== null;

                    if (!subjectExists) {
                        errors.push(`${path}Invalid include subject: "${subject}". Not found in subject abbreviations.`);
                    }
                }
            }

            if (token.excludeSubjects) {
                for (const subject of token.excludeSubjects) {
                    const subjectExists = findActualSubject(subject) !== null;

                    if (!subjectExists) {
                        errors.push(`${path}Invalid exclude subject: "${subject}". Not found in subject abbreviations.`);
                    }
                }
            }

            // Validate excludeSelf references
            if (token.excludeSelf && token.excludeSelf.length > 0) {
                for (const selfRef of token.excludeSelf) {
                    const normalizedRef = selfRef.toUpperCase();
                    // Check if the referenced variable/subject exists in the token group
                    if (!variableNames.has(normalizedRef)) {
                        errors.push(`${path}Invalid self-exclusion: "${selfRef}". Referenced variable/subject not found in formula. Available: ${Array.from(variableNames).join(', ')}`);
                    }
                }
            }
        }
    }

    function validateTokenArray(tokenArray: Token[], path: string = ''): void {
        for (let i = 0; i < tokenArray.length; i++) {
            const token = tokenArray[i];

            if (Array.isArray(token)) {
                validateTokenArray(token, `${path}[${i}].`);
            } else {
                validateToken(token, `${path}[${i}].`);
            }
        }
    }

    // Validate all tokens
    validateTokenArray(tokens);

    // If there are errors, throw them
    if (errors.length > 0) {
        console.warn('Token validation warnings:');
        errors.forEach(error => console.warn(`  - ${error}`));
        throw new Error('Token validation failed. See warnings for details:\n' + errors.join('\n'));
    }

    return tokens;
}
