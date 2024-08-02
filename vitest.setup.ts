import '@testing-library/jest-dom/vitest';
import { toHaveNoViolations } from 'jest-axe';
expect.extend(toHaveNoViolations);
