// University data imports
import { hku } from './hku';
import { cuhk } from './cuhk';
import { polyu } from './polyu';
import { cityU } from './cityU';
import { hkbu } from './hkbu';
import { lingnan } from './lingnan';
import { eduHK } from './eduHK';
import { hkust } from './hkust';

// Export all university data
export const allUniversities = {
    hku,
    cuhk,
    polyu,
    cityU,
    hkbu,
    lingnan,
    eduHK,
    hkust
};

// Export individual universities for direct import
export { hku } from './hku';
export { cuhk } from './cuhk';
export { polyu } from './polyu';
export { cityU } from './cityU';
export { hkbu } from './hkbu';
export { lingnan } from './lingnan';
export { eduHK } from './eduHK';
export { hkust } from './hkust';

// Re-export types for convenience
export type { ProgrammeEntry, ScoringFormula, SubjectRequirement } from '../../core/types';