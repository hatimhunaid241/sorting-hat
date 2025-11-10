import { subjects } from "../data/subjects/subjects";

/**
 * Reference data for formula validation
 */

export const categories = subjects.map(subject => subject.category);

export const subCategories = subjects.map(subject => subject.subCategory);

export const subjectAbbreviations = subjects.map(subject => subject.abbreviation);