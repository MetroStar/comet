/* eslint-disable no-console */

import fs from 'fs';
import path from 'path';

export const log = console.error; // Use stderr for logging in MCP servers
export const error = console.error;

export const getFriendlyDirectoryName = (name: string) => {
  return name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
};

/**
 * Gets components from a Comet package by reading its source files
 * @param packageName - The package name (e.g., '@metrostar/comet-uswds')
 * @returns Array of component names found in the package
 */
export const getComponentsFromPackage = (packageName: string): string[] => {
  try {
    const currentDir = process.env.PROJECT_ROOT || process.cwd();

    // Try to find the package in the monorepo structure
    const packagePath = path.join(currentDir, 'node_modules', packageName);

    if (!fs.existsSync(packagePath)) {
      log(`Package ${packageName} not found at ${packagePath}`);
      return [];
    }

    // Read the source index.ts file to get component exports
    const sourceIndexPath = path.join(packagePath, 'dist', 'index.d.ts');

    if (!fs.existsSync(sourceIndexPath)) {
      log(`Source index file not found for ${packageName}: ${sourceIndexPath}`);
      return [];
    }

    // Read the source index file and extract export statements
    const indexContent = fs.readFileSync(sourceIndexPath, 'utf8');
    const components: string[] = [];

    // Match export patterns like "export { default as ComponentName }"
    const defaultExportMatches = indexContent.match(/export\s*{\s*default\s+as\s+(\w+)/g) || [];
    defaultExportMatches.forEach((match) => {
      const componentName = match.match(/as\s+(\w+)/)?.[1];
      if (componentName) {
        components.push(componentName);
      }
    });

    // Match export patterns like "export { ComponentName, OtherComponent }"
    const namedExportMatches = indexContent.match(/export\s*{\s*([^}]+)\s*}/g) || [];
    namedExportMatches.forEach((match) => {
      const exportContent = match.replace(/export\s*{\s*/, '').replace(/\s*}/, '');
      const exports = exportContent.split(',').map((exp) => {
        // Clean up the export name, handling "default as Name" patterns
        const cleaned = exp
          .trim()
          .replace(/default\s+as\s+/, '')
          .replace(/\s+as\s+\w+/, '');
        return cleaned;
      });
      components.push(...exports.filter(Boolean));
    });

    return [...new Set(components)].sort();
  } catch (error) {
    log(`Error reading package ${packageName}:`, error);
    return [];
  }
};

/**
 * Component details interface
 */
export interface ComponentDetails {
  name: string;
  package: string;
  description?: string;
  props?: string[];
  types?: string[];
  filePath?: string;
}

/**
 * Gets detailed information about a specific Comet component
 * @param componentName - The component name to search for
 * @returns Component details or null if not found
 */
export const getComponentDetails = (componentName: string): ComponentDetails | null => {
  try {
    const currentDir = process.env.PROJECT_ROOT || process.cwd();
    const packages = [
      '@metrostar/comet-uswds',
      '@metrostar/comet-extras',
      '@metrostar/comet-data-viz',
    ];

    for (const packageName of packages) {
      const components = getComponentsFromPackage(packageName);

      if (components.includes(componentName)) {
        const packageShortName = packageName.replace('@metrostar/', '');

        // Try to find the component in the monorepo structure
        let packagePath = path.join(currentDir, 'node_modules', packageName);
        let isLocalDev = false;

        if (!fs.existsSync(packagePath)) {
          packagePath = path.join(currentDir, 'packages', packageShortName);
          isLocalDev = true;
        }

        if (!fs.existsSync(packagePath)) {
          continue;
        }

        // Look for component directory
        const componentDir = findComponentDirectory(packagePath, componentName, isLocalDev);

        if (!componentDir) {
          continue;
        }

        const details: ComponentDetails = {
          name: componentName,
          package: packageName,
          filePath: componentDir,
        };

        // Try to extract description and props from the component file
        const componentFile = findComponentFile(componentDir, componentName, isLocalDev);
        if (componentFile) {
          const fileContent = fs.readFileSync(componentFile, 'utf8');
          details.description = extractJSDocDescription(fileContent);
          details.props = extractProps(fileContent);
          details.types = extractTypes(fileContent);
        }

        return details;
      }
    }

    return null;
  } catch (error) {
    log(`Error getting component details for ${componentName}:`, error);
    return null;
  }
};

/**
 * Finds the component directory based on the component name
 */
export const findComponentDirectory = (
  packagePath: string,
  componentName: string,
  isLocalDev: boolean,
): string | null => {
  if (isLocalDev) {
    // In local development, look in src/components
    const componentsDir = path.join(packagePath, 'src', 'components');
    if (!fs.existsSync(componentsDir)) return null;

    const dirs = fs
      .readdirSync(componentsDir, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);

    // Look for exact match or kebab-case version
    const kebabName = componentName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    const matchingDir = dirs.find(
      (dir) => dir === kebabName || dir === componentName.toLowerCase() || dir === componentName,
    );

    return matchingDir ? path.join(componentsDir, matchingDir) : null;
  } else {
    // In node_modules, components might be in different structure
    return packagePath;
  }
};

/**
 * Finds the main component file
 */
export const findComponentFile = (
  componentDir: string,
  componentName: string,
  isLocalDev: boolean,
): string | null => {
  if (isLocalDev) {
    const possibleFiles = [
      path.join(componentDir, 'index.tsx'),
      path.join(componentDir, `${componentName}.tsx`),
      path.join(componentDir, `${componentName.toLowerCase()}.tsx`),
    ];

    for (const file of possibleFiles) {
      if (fs.existsSync(file)) {
        return file;
      }
    }
  }

  return null;
};

/**
 * Extracts JSDoc description from component file
 */
export const extractJSDocDescription = (content: string): string | undefined => {
  const jsdocMatch = content.match(/\/\*\*\s*\n\s*\*\s*([^\n*@]+)/);
  if (jsdocMatch) {
    const description = jsdocMatch[1].trim();
    return description.length > 0 ? description : undefined;
  }
  return undefined;
};

/**
 * Extracts prop names from TypeScript interface definitions
 */
export const extractProps = (content: string): string[] => {
  const props: string[] = [];

  // Look for interface definitions
  const interfaceMatches = content.match(/interface\s+\w*Props\s*{([^}]+)}/g) || [];

  interfaceMatches.forEach((match) => {
    const propsBlock = match.match(/{([^}]+)}/)?.[1];
    if (propsBlock) {
      const propLines = propsBlock.split('\n');
      propLines.forEach((line) => {
        const propMatch = line.trim().match(/^(\w+)[?:]?\s*:/);
        if (propMatch) {
          props.push(propMatch[1]);
        }
      });
    }
  });

  return [...new Set(props)].sort();
};

/**
 * Extracts exported type names from the file
 */
export const extractTypes = (content: string): string[] => {
  const types: string[] = [];

  // Look for exported types and interfaces
  const typeMatches = content.match(/export\s+(?:type|interface)\s+(\w+)/g) || [];

  typeMatches.forEach((match) => {
    const typeName = match.match(/(?:type|interface)\s+(\w+)/)?.[1];
    if (typeName) {
      types.push(typeName);
    }
  });

  return types.sort();
};

/**
 * HTTP utilities for fetching web content
 */

/**
 * Fetches content from a URL
 */
export const fetchUrl = async (url: string): Promise<string> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.text();
  } catch (error) {
    log(`Error fetching ${url}:`, error);
    throw error;
  }
};

/**
 * Parses sitemap XML and extracts URLs that match patterns
 */
export const parseSitemapForUrls = (sitemapContent: string, patterns: string[]): string[] => {
  const urls: string[] = [];

  // Simple XML parsing to extract <loc> tags
  const locMatches = sitemapContent.match(/<loc>(.*?)<\/loc>/g) || [];

  locMatches.forEach((match) => {
    const url = match.replace(/<\/?loc>/g, '');

    // Check if URL matches any of the patterns
    const matchesPattern = patterns.some((pattern) => url.includes(pattern.toLowerCase()));

    if (matchesPattern) {
      urls.push(url);
    }
  });

  return urls;
};

/**
 * Extracts relevant content from USWDS documentation HTML
 */
export const extractUSWDSContent = (html: string, url: string): USWDSDocContent => {
  // Remove script tags and other non-content elements
  const cleanHtml = html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<nav[^>]*>[\s\S]*?<\/nav>/gi, '')
    .replace(/<header[^>]*>[\s\S]*?<\/header>/gi, '')
    .replace(/<footer[^>]*>[\s\S]*?<\/footer>/gi, '');

  // Extract title
  const titleMatch = cleanHtml.match(/<title[^>]*>(.*?)<\/title>/i);
  const title = titleMatch ? titleMatch[1].replace(/\s+/g, ' ').trim() : '';

  // Extract main content - look for common content containers
  const contentMatchers = [
    /<main[^>]*>([\s\S]*?)<\/main>/i,
    /<article[^>]*>([\s\S]*?)<\/article>/i,
    /<div[^>]*class="[^"]*content[^"]*"[^>]*>([\s\S]*?)<\/div>/i,
    /<div[^>]*class="[^"]*main[^"]*"[^>]*>([\s\S]*?)<\/div>/i,
  ];

  let content = '';
  for (const matcher of contentMatchers) {
    const match = cleanHtml.match(matcher);
    if (match) {
      content = match[1];
      break;
    }
  }

  // If no main content found, use the whole body
  if (!content) {
    const bodyMatch = cleanHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    content = bodyMatch ? bodyMatch[1] : cleanHtml;
  }

  // Extract text content and clean it up
  const textContent = content
    .replace(/<[^>]*>/g, ' ') // Remove HTML tags
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim();

  // Extract code examples
  const codeMatches = html.match(/<code[^>]*>(.*?)<\/code>/gi) || [];
  const codeExamples = codeMatches.map((match) => match.replace(/<\/?code[^>]*>/gi, '').trim());

  // Extract class names and utilities mentioned
  const classMatches = textContent.match(/\b[a-z-]+:[a-z-]+\b|\b\.?[a-z-]+\b/gi) || [];
  const utilities = [...new Set(classMatches)].filter((item) =>
    item.match(/^\.?[a-z][a-z0-9-]*[a-z0-9]$|^[a-z]+:[a-z-]+$/i),
  );

  return {
    url,
    title,
    content: textContent.substring(0, 2000), // Limit content length
    codeExamples,
    utilities,
    type: determineContentType(url),
  };
};

/**
 * Determines the type of USWDS content based on URL
 */
export const determineContentType = (url: string): string => {
  if (url.includes('/utilities/')) return 'utility';
  if (url.includes('/design-tokens/')) return 'design-token';
  if (url.includes('/components/')) return 'component';
  if (url.includes('/patterns/')) return 'pattern';
  if (url.includes('/templates/')) return 'template';
  return 'other';
};

/**
 * Interface for USWDS documentation content
 */
export interface USWDSDocContent {
  url: string;
  title: string;
  content: string;
  codeExamples: string[];
  utilities: string[];
  type: string;
}
