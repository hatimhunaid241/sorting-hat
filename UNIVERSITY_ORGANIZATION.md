# University Data Organization

The university data has been reorganized for better maintainability and modularity.

## File Structure

### University Data Files (Individual)

- `hku.ts` - Contains HKU programmes and core type definitions
- `cuhk.ts` - Contains CUHK programmes
- `polyu.ts` - Contains PolyU programmes
- `cityU.ts` - Contains CityU programmes with advanced scoring features
- `hkbu.ts` - Contains HKBU programmes with language emphasis
- `lingnan.ts` - Contains Lingnan programmes with custom calculations
- `eduHK.ts` - Contains EdUHK programmes
- `hkust.ts` - Contains HKUST programmes (legacy format)

### Utility Files

- `index.ts` - Centralized exports of all universities and types
- `utils/universityUtils.ts` - Common utility functions, grade mappings, validation
- `utils/scoringCalculator.ts` - Main scoring calculation engine

## Usage Examples

### Import Individual Universities

```typescript
import { hku } from "./constants/hku";
import { cityU } from "./constants/cityU";
```

### Import All Universities

```typescript
import { allUniversities } from "./constants/index";
// Access as: allUniversities.hku, allUniversities.cityU, etc.
```

### Import Types

```typescript
import { ProgrammeEntry, ScoringFormula } from "./constants/index";
```

### Import Utilities

```typescript
import {
  getDSEScore,
  validateMinimumRequirements,
  filterProgrammes,
} from "./utils/universityUtils";
import { ScoringCalculator } from "./utils/scoringCalculator";
```

## Benefits of New Organization

1. **Separation of Concerns**: Each university has its own file
2. **Better Maintainability**: Easier to update specific university data
3. **Reduced Conflicts**: Multiple developers can work on different universities
4. **Cleaner Imports**: Import only what you need
5. **Type Safety**: Centralized type definitions
6. **Utility Functions**: Shared functions in dedicated utility files

## Migration Notes

- The old `additionalUniversities.ts` file has been removed
- All university data is now in individual files
- Use the centralized `index.ts` for importing multiple universities
- Utility functions have been moved to `utils/` directory
