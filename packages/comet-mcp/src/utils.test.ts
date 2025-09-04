import { describe, test, expect } from 'vitest';
import { getFriendlyDirectoryName } from './utils';

describe('MCP Utils', () => {
  test('getFriendlyDirectoryName should convert PascalCase to kebab-case', () => {
    expect(getFriendlyDirectoryName('MyComponent')).toBe('my-component');
    expect(getFriendlyDirectoryName('SimpleButton')).toBe('simple-button');
    expect(getFriendlyDirectoryName('DataTable')).toBe('data-table');
  });
});
