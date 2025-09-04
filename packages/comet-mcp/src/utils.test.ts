import { describe, test, expect, vi, beforeEach, afterEach } from 'vitest';
import {
  getFriendlyDirectoryName,
  getComponentsFromPackage,
  extractJSDocDescription,
  extractProps,
  extractTypes,
} from './utils';
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

  describe('extractJSDocDescription', () => {
    test('should extract description from single-line JSDoc comment', () => {
      const content = `
/**
 * This is a button component that renders a clickable element
 */
const Button = () => {
  return <button>Click me</button>;
};
      `;

      const result = extractJSDocDescription(content);
      expect(result).toBe('This is a button component that renders a clickable element');
    });

    test('should extract description from multi-line JSDoc comment with only first line', () => {
      const content = `
/**
 * A versatile card component for displaying content
 * @param title The title of the card
 * @param children The content to display in the card
 */
const Card = ({ title, children }) => {
  return <div className="card">{children}</div>;
};
      `;

      const result = extractJSDocDescription(content);
      expect(result).toBe('A versatile card component for displaying content');
    });

    test('should handle JSDoc comment with extra whitespace', () => {
      const content = `
/**
 *    This is a component with extra whitespace    
 */
const Component = () => {
  return <div>Content</div>;
};
      `;

      const result = extractJSDocDescription(content);
      expect(result).toBe('This is a component with extra whitespace');
    });

    test('should return undefined when no JSDoc comment is found', () => {
      const content = `
// This is a regular comment
const Button = () => {
  return <button>Click me</button>;
};
      `;

      const result = extractJSDocDescription(content);
      expect(result).toBeUndefined();
    });

    test('should return undefined when JSDoc comment is malformed', () => {
      const content = `
/*
 * This is not a proper JSDoc comment
 */
const Button = () => {
  return <button>Click me</button>;
};
      `;

      const result = extractJSDocDescription(content);
      expect(result).toBeUndefined();
    });

    test('should handle JSDoc comment with no description line', () => {
      const content = `
/**
 * @param props The component props
 */
const Button = (props) => {
  return <button>Click me</button>;
};
      `;

      const result = extractJSDocDescription(content);
      expect(result).toBeUndefined();
    });

    test('should extract description from JSDoc comment with different asterisk formatting', () => {
      const content = `
/**
 * Alert component for displaying important messages
 */
const Alert = () => {
  return <div className="alert">Alert message</div>;
};
      `;

      const result = extractJSDocDescription(content);
      expect(result).toBe('Alert component for displaying important messages');
    });

    test('should handle multiple JSDoc comments and extract from the first one', () => {
      const content = `
/**
 * First component description
 */
const FirstComponent = () => {
  return <div>First</div>;
};

/**
 * Second component description
 */
const SecondComponent = () => {
  return <div>Second</div>;
};
      `;

      const result = extractJSDocDescription(content);
      expect(result).toBe('First component description');
    });

    test('should handle empty content', () => {
      const result = extractJSDocDescription('');
      expect(result).toBeUndefined();
    });

    test('should handle content with only whitespace', () => {
      const result = extractJSDocDescription('   \n  \t  ');
      expect(result).toBeUndefined();
    });
  });

  describe('extractProps', () => {
    test('should extract props from a simple interface', () => {
      const content = `
interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}
      `;

      const result = extractProps(content);
      expect(result).toEqual(['disabled', 'label', 'onClick']);
    });

    test('should extract props from multiple interfaces', () => {
      const content = `
interface CardProps {
  title: string;
  children: React.ReactNode;
}

interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary';
}
      `;

      const result = extractProps(content);
      expect(result).toEqual(['children', 'label', 'title', 'variant']);
    });

    test('should handle props with different types', () => {
      const content = `
interface ComponentProps {
  id: string;
  count: number;
  isVisible: boolean;
  items: string[];
}
      `;

      const result = extractProps(content);
      expect(result).toEqual(['count', 'id', 'isVisible', 'items']);
    });

    test('should handle optional props with question mark', () => {
      const content = `
interface AlertProps {
  message: string;
  type?: 'info' | 'warning' | 'error';
  dismissible?: boolean;
  onClose?: () => void;
}
      `;

      const result = extractProps(content);
      expect(result).toEqual(['dismissible', 'message', 'onClose', 'type']);
    });

    test('should handle props with complex types and generics', () => {
      const content = `
interface DataTableProps {
  data: Array<Record<string, any>>;
  columns: Column<T>[];
  onRowClick?: (row: T) => void;
  renderCell?: (value: any, row: T) => React.ReactNode;
}
      `;

      const result = extractProps(content);
      expect(result).toEqual(['columns', 'data', 'onRowClick', 'renderCell']);
    });

    test('should ignore non-Props interfaces', () => {
      const content = `
interface User {
  name: string;
  email: string;
}

interface ButtonProps {
  label: string;
  onClick: () => void;
}

interface ApiResponse {
  data: any;
  success: boolean;
}
      `;

      const result = extractProps(content);
      expect(result).toEqual(['label', 'onClick']);
    });

    test('should handle interfaces with extends (current limitation)', () => {
      const content = `
interface ButtonProps extends BaseProps {
  label: string;
  variant: 'primary' | 'secondary';
}
      `;

      // The current regex doesn't handle 'extends' syntax properly
      const result = extractProps(content);
      expect(result).toEqual([]);
    });

    test('should handle simple nested interfaces and object properties', () => {
      const content = `
interface FormProps {
  fields: Array<FieldConfig>;
  onSubmit: FormSubmitHandler;
  validation?: ValidationConfig;
}
      `;

      const result = extractProps(content);
      expect(result).toEqual(['fields', 'onSubmit', 'validation']);
    });

    test('should handle props with comments', () => {
      const content = `
interface CardProps {
  // The title to display
  title: string;
  /** The content of the card */
  children: React.ReactNode;
  // Optional footer content
  footer?: React.ReactNode;
}
      `;

      const result = extractProps(content);
      expect(result).toEqual(['children', 'footer', 'title']);
    });

    test('should remove duplicates and sort props', () => {
      const content = `
interface FirstProps {
  title: string;
  count: number;
}

interface SecondProps {
  title: string;
  isVisible: boolean;
  count: number;
}
      `;

      const result = extractProps(content);
      expect(result).toEqual(['count', 'isVisible', 'title']);
    });

    test('should handle multiline prop definitions', () => {
      const content = `
interface ComponentProps {
  longPropertyName: 
    | 'option1' 
    | 'option2' 
    | 'option3';
  callback: CallbackFunction;
  config: ConfigObject;
}
      `;

      const result = extractProps(content);
      expect(result).toEqual(['callback', 'config', 'longPropertyName']);
    });

    test('should return empty array when no Props interfaces found', () => {
      const content = `
interface User {
  name: string;
  email: string;
}

interface Config {
  theme: string;
  debug: boolean;
}
      `;

      const result = extractProps(content);
      expect(result).toEqual([]);
    });

    test('should handle empty content', () => {
      const result = extractProps('');
      expect(result).toEqual([]);
    });

    test('should handle content with only whitespace', () => {
      const result = extractProps('   \n  \t  ');
      expect(result).toEqual([]);
    });

    test('should handle malformed interfaces gracefully', () => {
      const content = `
interface BrokenProps {
  validProp: string;
  // Missing type annotation
  invalidProp;
  anotherValidProp: number;
}
      `;

      const result = extractProps(content);
      expect(result).toEqual(['anotherValidProp', 'validProp']);
    });

    test('should handle interfaces with different naming patterns', () => {
      const content = `
interface ComponentProps {
  basic: string;
}

interface MyComponentProps {
  advanced: number;
}

interface Props {
  simple: boolean;
}
      `;

      const result = extractProps(content);
      expect(result).toEqual(['advanced', 'basic', 'simple']);
    });

    test('should extract properties from complex object definitions', () => {
      const content = `
interface FormProps {
  fields: {
    name: string;
    type: 'text' | 'email';
    required: boolean;
  }[];
}
      `;

      // The current implementation extracts nested properties when the regex matches object definitions
      const result = extractProps(content);
      expect(result).toEqual(['fields', 'name', 'required', 'type']);
    });
  });

  describe('extractTypes', () => {
    test('should extract exported type aliases', () => {
      const content = `
export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
export type Size = 'small' | 'medium' | 'large';
      `;

      const result = extractTypes(content);
      expect(result).toEqual(['ButtonVariant', 'Size']);
    });

    test('should extract exported interfaces', () => {
      const content = `
export interface User {
  id: string;
  name: string;
}

export interface Product {
  id: number;
  title: string;
}
      `;

      const result = extractTypes(content);
      expect(result).toEqual(['Product', 'User']);
    });

    test('should extract both types and interfaces', () => {
      const content = `
export type Theme = 'light' | 'dark';
export interface Config {
  theme: Theme;
  debug: boolean;
}
export type Status = 'loading' | 'success' | 'error';
      `;

      const result = extractTypes(content);
      expect(result).toEqual(['Config', 'Status', 'Theme']);
    });

    test('should ignore non-exported types and interfaces', () => {
      const content = `
type InternalType = string;
interface InternalInterface {
  value: string;
}
export type PublicType = number;
export interface PublicInterface {
  data: string;
}
      `;

      const result = extractTypes(content);
      expect(result).toEqual(['PublicInterface', 'PublicType']);
    });

    test('should handle different export syntax variations', () => {
      const content = `
export   type   SpacedType = string;
export	interface	TabbedInterface {
  value: number;
}
export type NormalType = boolean;
      `;

      const result = extractTypes(content);
      expect(result).toEqual(['NormalType', 'SpacedType', 'TabbedInterface']);
    });

    test('should handle generic types and interfaces', () => {
      const content = `
export type ApiResponse<T> = {
  data: T;
  success: boolean;
};

export interface Repository<T, K> {
  findById(id: K): T | null;
  save(entity: T): void;
}
      `;

      const result = extractTypes(content);
      expect(result).toEqual(['ApiResponse', 'Repository']);
    });

    test('should handle complex type definitions', () => {
      const content = `
export type EventHandler = (event: Event) => void;
export type ComponentProps = {
  id: string;
  children?: React.ReactNode;
};
export interface FormFieldConfig {
  name: string;
  type: 'text' | 'email' | 'password';
  validation?: ValidationRule[];
}
      `;

      const result = extractTypes(content);
      expect(result).toEqual(['ComponentProps', 'EventHandler', 'FormFieldConfig']);
    });

    test('should handle types and interfaces with extends', () => {
      const content = `
export interface BaseEntity {
  id: string;
  createdAt: Date;
}

export interface User extends BaseEntity {
  name: string;
  email: string;
}

export type ExtendedConfig = Config & {
  version: string;
};
      `;

      const result = extractTypes(content);
      expect(result).toEqual(['BaseEntity', 'ExtendedConfig', 'User']);
    });

    test('should handle multiline type definitions', () => {
      const content = `
export type ComplexUnion = 
  | 'option1'
  | 'option2'
  | 'option3';

export interface MultilineInterface 
  extends BaseInterface {
  property: string;
}
      `;

      const result = extractTypes(content);
      expect(result).toEqual(['ComplexUnion', 'MultilineInterface']);
    });

    test('should handle types and interfaces with comments', () => {
      const content = `
// This is a type comment
export type CommentedType = string;

/**
 * This is an interface comment
 */
export interface CommentedInterface {
  value: number;
}

/* Another comment style */
export type AnotherType = boolean;
      `;

      const result = extractTypes(content);
      expect(result).toEqual(['AnotherType', 'CommentedInterface', 'CommentedType']);
    });

    test('should handle mixed exports with other items', () => {
      const content = `
export const CONSTANT = 'value';
export type MyType = string;
export function myFunction() {}
export interface MyInterface {
  prop: string;
}
export class MyClass {}
export enum MyEnum {
  A, B, C
}
      `;

      const result = extractTypes(content);
      expect(result).toEqual(['MyInterface', 'MyType']);
    });

    test('should return empty array when no exported types found', () => {
      const content = `
const localVar = 'value';
type InternalType = string;
interface InternalInterface {
  prop: string;
}
function normalFunction() {}
      `;

      const result = extractTypes(content);
      expect(result).toEqual([]);
    });

    test('should handle empty content', () => {
      const result = extractTypes('');
      expect(result).toEqual([]);
    });

    test('should handle content with only whitespace', () => {
      const result = extractTypes('   \n  \t  ');
      expect(result).toEqual([]);
    });

    test('should handle malformed export statements gracefully', () => {
      const content = `
export type ValidType = string;
export type // malformed
export interface ValidInterface {
  prop: string;
}
export type AnotherValidType = number;
      `;

      const result = extractTypes(content);
      expect(result).toEqual(['AnotherValidType', 'ValidInterface', 'ValidType']);
    });

    test('should remove duplicates and sort results', () => {
      const content = `
export type TypeB = string;
export interface InterfaceA {
  prop: string;
}
export type TypeA = number;
export interface InterfaceB {
  prop: number;
}
      `;

      const result = extractTypes(content);
      expect(result).toEqual(['InterfaceA', 'InterfaceB', 'TypeA', 'TypeB']);
    });

    test('should handle re-exported types', () => {
      const content = `
export { type ExistingType } from './other-module';
export type NewType = string;
export { type AnotherType, interface SomeInterface } from './another-module';
      `;

      const result = extractTypes(content);
      // Current implementation only catches direct export type/interface declarations
      expect(result).toEqual(['NewType']);
    });
  });
});
