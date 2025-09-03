import { describe, test, expect } from 'vitest';
import { getFriendlyDirectoryName, getComponentTemplate, getPageTemplate } from './utils';

describe('MCP Utils', () => {
  test('getFriendlyDirectoryName should convert PascalCase to kebab-case', () => {
    expect(getFriendlyDirectoryName('MyComponent')).toBe('my-component');
    expect(getFriendlyDirectoryName('SimpleButton')).toBe('simple-button');
    expect(getFriendlyDirectoryName('DataTable')).toBe('data-table');
  });

  test('getComponentTemplate should generate valid React component', () => {
    const template = getComponentTemplate('MyComponent');
    expect(template).toContain('export const MyComponent');
    expect(template).toContain('React.ReactElement');
    expect(template).toContain('<div></div>');
  });

  test('getPageTemplate should generate valid React page component', () => {
    const template = getPageTemplate('HomePage');
    expect(template).toContain('export const HomePage');
    expect(template).toContain('React.ReactElement');
    expect(template).toContain('grid-container');
    expect(template).toContain('<h1>HomePage</h1>');
  });
});
