/**
 * Utility functions for formula parsing
 */

import { subjectAbbreviations } from './data';

/**
 * Normalize strings for comparison (removes spaces, converts to uppercase)
 * Used for case-insensitive and space-insensitive matching
 */
export function normalizeForComparison(str: string): string {
    return str.replace(/\s+/g, '').toUpperCase();
}

/**
 * Check if normalized value matches any in array
 */
export function matchesNormalized(value: string, validValues: readonly string[]): boolean {
    const normalized = normalizeForComparison(value);
    return validValues.some(valid => normalizeForComparison(valid) === normalized);
}

/**
 * Find actual value from database that matches normalized input
 * Returns the ORIGINAL value from the database, not normalized
 */
export function findActualValue(normalizedInput: string, validValues: readonly string[]): string | null {
    const normalized = normalizeForComparison(normalizedInput);
    const found = validValues.find(valid => normalizeForComparison(valid) === normalized);
    return found || null;
}

/**
 * Find actual subject abbreviation from database
 * Matches case-insensitively and returns the original database value
 */
export function findActualSubject(inputSubject: string): string | null {
    const normalized = normalizeForComparison(inputSubject);

    // Flatten subjectAbbreviations in case it contains arrays
    const flatAbbrevs = subjectAbbreviations.flat?.() ?? subjectAbbreviations as string[];

    for (const abbrev of flatAbbrevs) {
        if (normalizeForComparison(abbrev) === normalized) {
            return abbrev; // Return original abbreviation with original case
        }
    }

    return null;
}
