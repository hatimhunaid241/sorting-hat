// University data imports
import { hku } from './hku';
import { cuhk } from './cuhk';
import { polyu } from './polyu';
import { cityu } from './cityU';
import { hkbu } from './hkbu';
import { lingnan } from './lingnan';
import { eduhk } from './eduHK';
import { hkust } from './hkust';
import { University } from '@/lib/core/types';

// Export all university data
export const allUniversities = {
    hku,
    cuhk,
    polyu,
    cityu,
    hkbu,
    lingnan,
    eduhk,
    hkust
};

export const universities: University[] = ["hku", "cuhk", "polyu", "cityu", "hkbu", "lingnan", "eduhk", "hkust"];

// Export individual universities for direct import
export { hku } from './hku';
export { cuhk } from './cuhk';
export { polyu } from './polyu';
export { cityu } from './cityU';
export { hkbu } from './hkbu';
export { lingnan } from './lingnan';
export { eduhk } from './eduHK';
export { hkust } from './hkust';
