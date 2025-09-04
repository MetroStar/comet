import { describe, test, expect, vi, beforeEach, afterEach } from 'vitest';
import { getFriendlyDirectoryName, getComponentsFromPackage } from './utils';
import fs from 'fs';
import path from 'path';

// Mock fs and path modules
vi.mock('fs');
vi.mock('path');

const mockedFs = vi.mocked(fs);
const mockedPath = vi.mocked(path);

describe('MCP Utils', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Mock path.join to return predictable paths
    mockedPath.join.mockImplementation((...args) => args.join('/'));
    // Mock process.cwd() to return a consistent value for testing
    vi.spyOn(process, 'cwd').mockReturnValue('/mock/project/root');
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test('getFriendlyDirectoryName should convert PascalCase to kebab-case', () => {
    expect(getFriendlyDirectoryName('MyComponent')).toBe('my-component');
    expect(getFriendlyDirectoryName('SimpleButton')).toBe('simple-button');
    expect(getFriendlyDirectoryName('DataTable')).toBe('data-table');
  });

  describe('getComponentsFromPackage', () => {
    test('should extract components from comet-uswds package', () => {
      // Mock file system
      mockedFs.existsSync.mockReturnValue(true);
      mockedFs.readFileSync.mockReturnValue(`
        export { default as Accordion, AccordionItem } from './accordion';
        export type { AccordionItemProps } from './accordion';
        export { default as Alert } from './alert';
        export { default as Button } from './button';
        export { default as Card, CardFooter, CardBody } from './card';
      `);

      const components = getComponentsFromPackage('@metrostar/comet-uswds');

      expect(components).toEqual([
        'Accordion',
        'AccordionItem',
        'Alert',
        'Button',
        'Card',
        'CardBody',
        'CardFooter',
      ]);
      expect(mockedFs.existsSync).toHaveBeenCalledWith(
        '/mock/project/root/node_modules/@metrostar/comet-uswds',
      );
      expect(mockedFs.existsSync).toHaveBeenCalledWith(
        '/mock/project/root/node_modules/@metrostar/comet-uswds/dist/index.d.ts',
      );
    });

    test('should extract components from comet-extras package', () => {
      mockedFs.existsSync.mockReturnValue(true);
      mockedFs.readFileSync.mockReturnValue(`
        export { default as DataTable } from './data-table';
        export { default as Spinner } from './spinner';
        export { default as Tabs, TabPanel } from './tabs';
      `);

      const components = getComponentsFromPackage('@metrostar/comet-extras');

      expect(components).toEqual(['DataTable', 'Spinner', 'TabPanel', 'Tabs']);
    });

    test('should extract components from comet-data-viz package', () => {
      mockedFs.existsSync.mockReturnValue(true);
      mockedFs.readFileSync.mockReturnValue(`
        export { default as BarGraph } from './bar-graph';
        export { default as LineGraph } from './line-graph';
        export { default as PieChart } from './pie-chart';
      `);

      const components = getComponentsFromPackage('@metrostar/comet-data-viz');

      expect(components).toEqual(['BarGraph', 'LineGraph', 'PieChart']);
    });

    test('should return empty array when package directory does not exist', () => {
      mockedFs.existsSync.mockReturnValueOnce(false);

      const components = getComponentsFromPackage('@metrostar/comet-nonexistent');

      expect(components).toEqual([]);
      expect(mockedFs.existsSync).toHaveBeenCalledWith(
        '/mock/project/root/node_modules/@metrostar/comet-nonexistent',
      );
    });

    test('should return empty array when components index file does not exist', () => {
      mockedFs.existsSync.mockReturnValueOnce(true).mockReturnValueOnce(false);

      const components = getComponentsFromPackage('@metrostar/comet-uswds');

      expect(components).toEqual([]);
      expect(mockedFs.existsSync).toHaveBeenCalledWith(
        '/mock/project/root/node_modules/@metrostar/comet-uswds',
      );
      expect(mockedFs.existsSync).toHaveBeenCalledWith(
        '/mock/project/root/node_modules/@metrostar/comet-uswds/dist/index.d.ts',
      );
    });

    test('should handle readFileSync errors gracefully', () => {
      mockedFs.existsSync.mockReturnValue(true);
      mockedFs.readFileSync.mockImplementation(() => {
        throw new Error('File read error');
      });

      const components = getComponentsFromPackage('@metrostar/comet-uswds');

      expect(components).toEqual([]);
    });

    test('should handle complex export patterns', () => {
      mockedFs.existsSync.mockReturnValue(true);
      mockedFs.readFileSync.mockReturnValue(`
        export { default as Button } from './button';
        export { default as ButtonGroup } from './button-group';
        export { default as Card, CardFooter, CardBody, CardHeader, CardMedia } from './card';
        export type { CardProps } from './card';
        export { default as Checkbox, CheckboxGroup } from './checkbox';
        export type { CheckboxData } from './checkbox';
      `);

      const components = getComponentsFromPackage('@metrostar/comet-uswds');

      expect(components).toEqual([
        'Button',
        'ButtonGroup',
        'Card',
        'CardBody',
        'CardFooter',
        'CardHeader',
        'CardMedia',
        'Checkbox',
        'CheckboxGroup',
      ]);
    });

    test('should remove duplicates and sort components', () => {
      mockedFs.existsSync.mockReturnValue(true);
      mockedFs.readFileSync.mockReturnValue(`
        export { default as Button } from './button';
        export { default as Alert } from './alert';
        export { default as Button } from './button-duplicate';
        export { default as Card } from './card';
      `);

      const components = getComponentsFromPackage('@metrostar/comet-uswds');

      expect(components).toEqual(['Alert', 'Button', 'Card']);
    });

    test('should use PROJECT_ROOT environment variable when available', () => {
      const originalEnv = process.env.PROJECT_ROOT;
      const customRoot = '/custom/root';
      process.env.PROJECT_ROOT = customRoot;

      mockedFs.existsSync.mockReturnValue(true);
      mockedFs.readFileSync.mockReturnValue(`
        export { default as Button } from './button';
      `);

      getComponentsFromPackage('@metrostar/comet-uswds');

      expect(mockedPath.join).toHaveBeenCalledWith(
        `${customRoot}/node_modules/@metrostar/comet-uswds`,
        'dist',
        'index.d.ts',
      );

      process.env.PROJECT_ROOT = originalEnv;
    });
  });
});
