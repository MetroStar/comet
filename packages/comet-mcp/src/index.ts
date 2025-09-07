#! /usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  CallToolRequest,
} from '@modelcontextprotocol/sdk/types.js';
import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';

import { API_REPO_URL, PROJECT_TYPES, UI_REPO_URL } from './constants.js';
import {
  log,
  getComponentsFromPackage,
  getComponentDetails,
  fetchUrl,
  parseSitemapForUrls,
  extractUSWDSContent,
  USWDSDocContent,
} from './utils.js';

const execAsync = promisify(exec);

const server = new Server(
  {
    name: 'comet-mcp',
    version: '1.3.0',
  },
  {
    capabilities: {},
  },
);

// Tool definitions
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: 'get_comet_version',
        description: 'Get version information for Comet packages from package.json',
        inputSchema: {
          type: 'object',
          properties: {},
        },
      },
      {
        name: 'init_project',
        description: 'Initialize a new Comet project (UI or API)',
        inputSchema: {
          type: 'object',
          properties: {
            type: {
              type: 'string',
              enum: ['ui', 'api'],
              description: 'Type of project to create (ui or api)',
            },
            name: {
              type: 'string',
              description: 'Project name and directory name',
            },
          },
          required: ['type', 'name'],
        },
      },
      {
        name: 'list_components',
        description:
          'Get a list of all available Comet components from comet-uswds, comet-extras, and comet-data-viz packages',
        inputSchema: {
          type: 'object',
          properties: {
            package: {
              type: 'string',
              enum: ['all', 'comet-uswds', 'comet-extras', 'comet-data-viz'],
              description: 'Filter components by package (default: all)',
            },
          },
        },
      },
      {
        name: 'get_component_details',
        description: 'Get detailed information about a specific Comet component',
        inputSchema: {
          type: 'object',
          properties: {
            componentName: {
              type: 'string',
              description: 'The name of the component to get details for',
            },
          },
          required: ['componentName'],
        },
      },
      {
        name: 'get_env_variables',
        description: 'Get current Node.js environment variables',
        inputSchema: {
          type: 'object',
          properties: {
            filter: {
              type: 'string',
              description:
                'Optional filter to search for specific environment variables (case-insensitive)',
            },
          },
        },
      },
      {
        name: 'add_comet',
        description: 'Add comet packages and configurations to an existing app',
        inputSchema: {
          type: 'object',
          properties: {},
        },
      },
      {
        name: 'search_uswds',
        description:
          'Search USWDS design system documentation for utilities, classes, design tokens, and other information from https://designsystem.digital.gov/',
        inputSchema: {
          type: 'object',
          properties: {
            query: {
              type: 'string',
              description: 'Search query for USWDS documentation (utilities, design tokens, etc.)',
            },
            limit: {
              type: 'number',
              description: 'Maximum number of results to return (default: 5)',
              minimum: 1,
              maximum: 20,
            },
          },
          required: ['query'],
        },
      },
    ],
  };
});

// Tool implementations
server.setRequestHandler(CallToolRequestSchema, async (request: CallToolRequest) => {
  const { name, arguments: args } = request.params;

  try {
    switch (name) {
      case 'get_comet_version': {
        const currentDir = process.env.PROJECT_ROOT || process.cwd();
        const packageJsonPath = path.join(currentDir, 'package.json');

        if (!fs.existsSync(packageJsonPath)) {
          throw new Error(`No package.json found in current directory: ${currentDir}`);
        }

        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };

        const cometPackages = [
          '@metrostar/comet-uswds',
          '@metrostar/comet-extras',
          '@metrostar/comet-data-viz',
        ];

        const versionInfo: Record<string, string> = {};
        let foundPackages = 0;

        cometPackages.forEach((pkg) => {
          if (dependencies[pkg]) {
            versionInfo[pkg] = dependencies[pkg];
            foundPackages++;
          }
        });

        if (foundPackages === 0) {
          return {
            content: [
              {
                type: 'text',
                text: `No Comet packages found in package.json dependencies in directory: ${currentDir}`,
              },
            ],
          };
        }

        const versionText = Object.entries(versionInfo)
          .map(([pkg, version]) => `${pkg}: ${version}`)
          .join('\n');

        return {
          content: [
            {
              type: 'text',
              text: `Comet package versions (from ${currentDir}):\n${versionText}`,
            },
          ],
        };
      }

      case 'init_project': {
        const { type, name: projectName } = args as { type: string; name: string };

        log(`Creating a new Comet app with type: ${type} and name: ${projectName}`);

        if (fs.existsSync(projectName)) {
          throw new Error('Directory already exists!');
        }

        if (!PROJECT_TYPES.includes(type)) {
          throw new Error('Invalid project type!');
        }

        log('Initializing project directory...');
        fs.mkdirSync(projectName);
        log('Cloning starter app into project...');

        const command =
          type === 'ui'
            ? `git clone ${UI_REPO_URL} ${projectName}`
            : `git clone ${API_REPO_URL} ${projectName}`;

        await execAsync(command);

        // Remove existing .git directory and initialize a fresh repo
        const gitCleanupCommand = `cd ${projectName} && rm -rf .git && git init && git add . && git commit -m "Initial commit"`;
        await execAsync(gitCleanupCommand);

        log('Project initialized successfully with fresh git history!');

        return {
          content: [
            {
              type: 'text',
              text: `Successfully created new ${type} project: ${projectName}`,
            },
          ],
        };
      }

      case 'list_components': {
        const { package: packageFilter = 'all' } = args as { package?: string };

        const cometUswdsComponents = getComponentsFromPackage('@metrostar/comet-uswds');
        const cometExtrasComponents = getComponentsFromPackage('@metrostar/comet-extras');
        const cometDataVizComponents = getComponentsFromPackage('@metrostar/comet-data-viz');

        let result = '';

        if (packageFilter === 'all' || packageFilter === 'comet-uswds') {
          result += `## @metrostar/comet-uswds (${cometUswdsComponents.length} components)\n`;
          result += cometUswdsComponents.map((component) => `- ${component}`).join('\n');
          result += '\n\n';
        }

        if (packageFilter === 'all' || packageFilter === 'comet-extras') {
          result += `## @metrostar/comet-extras (${cometExtrasComponents.length} components)\n`;
          result += cometExtrasComponents.map((component) => `- ${component}`).join('\n');
          result += '\n\n';
        }

        if (packageFilter === 'all' || packageFilter === 'comet-data-viz') {
          result += `## @metrostar/comet-data-viz (${cometDataVizComponents.length} components)\n`;
          result += cometDataVizComponents.map((component) => `- ${component}`).join('\n');
          result += '\n\n';
        }

        if (packageFilter === 'all') {
          const totalComponents =
            cometUswdsComponents.length +
            cometExtrasComponents.length +
            cometDataVizComponents.length;
          result = `# Comet Components (${totalComponents} total)\n\n${result}`;
        }

        return {
          content: [
            {
              type: 'text',
              text: result.trim(),
            },
          ],
        };
      }

      case 'get_component_details': {
        const { componentName } = args as { componentName: string };

        const details = getComponentDetails(componentName);

        if (!details) {
          return {
            content: [
              {
                type: 'text',
                text: `Component "${componentName}" not found in any Comet package.`,
              },
            ],
          };
        }

        let result = `# ${details.name}\n\n`;
        result += `**Package:** ${details.package}\n\n`;

        if (details.description) {
          result += `**Description:** ${details.description}\n\n`;
        }

        if (details.filePath) {
          result += `**File Path:** ${details.filePath}\n\n`;
        }

        if (details.props && details.props.length > 0) {
          result += `**Props:** (${details.props.length})\n`;
          result += details.props.map((prop) => `- ${prop}`).join('\n');
          result += '\n\n';
        }

        if (details.types && details.types.length > 0) {
          result += `**Exported Types:** (${details.types.length})\n`;
          result += details.types.map((type) => `- ${type}`).join('\n');
          result += '\n\n';
        }

        return {
          content: [
            {
              type: 'text',
              text: result.trim(),
            },
          ],
        };
      }

      case 'add_comet': {
        const currentDir = process.env.PROJECT_ROOT || process.cwd();
        const packageJsonPath = path.join(currentDir, 'package.json');

        if (!fs.existsSync(packageJsonPath)) {
          throw new Error(`No package.json found in current directory: ${currentDir}`);
        }

        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };

        // Step 1: Check if comet packages are already added
        const cometPackages = [
          '@metrostar/comet-uswds',
          '@metrostar/comet-extras',
          '@metrostar/comet-data-viz',
        ];

        const installedCometPackages = cometPackages.filter((pkg) => dependencies[pkg]);

        if (installedCometPackages.length > 0) {
          return {
            content: [
              {
                type: 'text',
                text: `Comet packages are already configured in this project:\n${installedCometPackages
                  .map((pkg) => `- ${pkg}: ${dependencies[pkg]}`)
                  .join('\n')}\n\nNothing more to do.`,
              },
            ],
          };
        }

        // Step 2: Check for Vite and SCSS
        const hasVite =
          'vite' in dependencies ||
          '@vitejs/plugin-react' in dependencies ||
          '@vitejs/plugin-react-swc' in dependencies;
        const hasScss =
          'sass' in dependencies || 'scss' in dependencies || 'node-sass' in dependencies;

        let result = '# Comet Setup Analysis\n\n';
        result += '## Status\n';
        result += 'Comet packages are not yet configured in this project.\n\n';

        result += '## Prerequisites Check\n';
        result += `- **Vite**: ${hasVite ? '✅ Found' : '❌ Not found'}\n`;
        result += `- **SCSS**: ${hasScss ? '✅ Found' : '❌ Not found'}\n\n`;

        if (!hasVite || !hasScss) {
          result += '## Required Dependencies\n';
          if (!hasVite) {
            result +=
              '- Vite is required for Comet packages. Install with: `npm install --save-dev vite @vitejs/plugin-react`\n';
          }
          if (!hasScss) {
            result +=
              '- SCSS/Sass is required for Comet styling. Install with: `npm install --save-dev sass`\n';
          }
          result += '\nPlease install the required dependencies before adding Comet packages.\n';
        } else {
          // All prerequisites are met, proceed with installation
          result += '## Installation Steps\n';
          result +=
            'All prerequisites are met! Follow these steps to add Comet to your project:\n\n';

          result += '### 1. Add Comet to your project:\n';
          result += '```sh\n';
          result += '# npm\n';
          result += 'npm i --save @uswds/uswds @metrostar/comet-uswds\n\n';
          result += '# or yarn\n';
          result += 'yarn add @uswds/uswds @metrostar/comet-uswds\n';
          result += '```\n\n';

          result += '### 2. Add uswds directory to your src folder\n\n';

          result += '### 3. Add base USWDS file (uswds.scss) to the uswds directory:\n';
          result += '```scss\n';
          result += '// Include a USWDS settings file (required)\n';
          result += "@forward './uswds-settings.scss';\n\n";
          result += '// Point to the USWDS source code (required)\n';
          result += "@forward '~uswds/packages/uswds';\n\n";
          result += "// Include your project's custom Sass (optional)\n";
          result += '// @forward "project-custom.scss";\n';
          result += '```\n\n';

          result +=
            '### 4. Add base USWDS settings file (uswds-settings.scss) to the uswds directory:\n';
          result += '```scss\n';
          result += "@use 'uswds-core' with (\n";
          result += '  // General settings\n';
          result += '  $theme-show-notifications: false,\n';
          result += "  $theme-font-path: '~uswds/dist/fonts',\n";
          result += "  $theme-image-path: '~uswds/dist/img'\n";
          result += ');\n';
          result += '```\n\n';

          result += '### 5. Add uswds to the top of your SASS entry point (styles.scss):\n';
          result += '```scss\n';
          result += "@forward 'uswds/uswds.scss';\n";
          result += '```\n\n';

          result +=
            '### 6. Update your Vite config file (vite.config.ts) with USWDS configurations:\n';
          result += '```ts\n';
          result += "import react from '@vitejs/plugin-react';\n";
          result += "import autoprefixer from 'autoprefixer';\n";
          result += "import path from 'path';\n";
          result += "import { fileURLToPath } from 'url';\n";
          result += "import { defineConfig } from 'vite';\n";
          result += "import EnvironmentPlugin from 'vite-plugin-environment';\n";
          result += "import eslint from 'vite-plugin-eslint';\n";
          result += "import tsconfigPaths from 'vite-tsconfig-paths';\n\n";
          result += 'const __filename = fileURLToPath(import.meta.url);\n';
          result += 'const __dirname = path.dirname(__filename);\n\n';
          result += '// https://vitejs.dev/config/\n';
          result += 'export default defineConfig({\n';
          result += "  plugins: [react(), tsconfigPaths(), eslint(), EnvironmentPlugin('all')],\n";
          result += '  resolve: {\n';
          result += '    alias: {\n';
          result += "      '~uswds': path.resolve(__dirname, 'node_modules/@uswds/uswds'),\n";
          result += '    },\n';
          result += '  },\n';
          result += '  css: {\n';
          result += '    preprocessorOptions: {\n';
          result += '      scss: {\n';
          result += "        api: 'legacy',\n";
          result += "        includePaths: ['node_modules/@uswds/uswds/packages'],\n";
          result += '        // Silence warnings coming from USWDS SCSS\n';
          result += '        quietDeps: true,\n';
          result += '        logger: {\n';
          result += '          warn: (msg) => {\n';
          result += "            if (msg.includes('legacy-js-api')) {\n";
          result += '              return;\n';
          result += '            }\n';
          result += '            console.warn(msg);\n';
          result += '          },\n';
          result += '        },\n';
          result += '      },\n';
          result += '    },\n';
          result += '    postcss: {\n';
          result += '      plugins: [autoprefixer],\n';
          result += '    },\n';
          result += '  },\n';
          result += '});\n';
          result += '```\n\n';

          result +=
            'For additional troubleshooting, refer to the [Comet Starter](https://github.com/MetroStar/comet-starter) app.\n';
        }

        return {
          content: [
            {
              type: 'text',
              text: result,
            },
          ],
        };
      }

      case 'get_env_variables': {
        const { filter } = args as {
          filter?: string;
        };

        const envVars = process.env;
        const filteredVars: Record<string, string> = {};

        Object.keys(envVars).forEach((key) => {
          const value = envVars[key];

          // Skip undefined values
          if (value === undefined) return;

          // Filter by search term if provided
          if (filter && !key.toLowerCase().includes(filter.toLowerCase())) {
            return;
          }

          filteredVars[key] = value;
        });

        const sortedKeys = Object.keys(filteredVars).sort();

        if (sortedKeys.length === 0) {
          const filterText = filter ? ` matching "${filter}"` : '';
          return {
            content: [
              {
                type: 'text',
                text: `No environment variables found${filterText}.`,
              },
            ],
          };
        }

        let result = `# Environment Variables (${sortedKeys.length} found)\n\n`;

        if (filter) {
          result += `**Filter:** "${filter}"\n\n`;
        }

        sortedKeys.forEach((key) => {
          const value = filteredVars[key];
          // Truncate very long values for readability
          const displayValue = value.length > 100 ? `${value.substring(0, 100)}...` : value;
          result += `**${key}:** \`${displayValue}\`\n\n`;
        });

        return {
          content: [
            {
              type: 'text',
              text: result.trim(),
            },
          ],
        };
      }

      case 'search_uswds': {
        const { query, limit = 5 } = args as {
          query: string;
          limit?: number;
        };

        try {
          // Always search both utilities and design-tokens
          const patterns = ['/utilities/', '/design-tokens/'];

          // Fetch sitemap
          const sitemapUrl = 'https://designsystem.digital.gov/sitemap.xml';
          log(`Fetching sitemap from: ${sitemapUrl}`);
          const sitemapContent = await fetchUrl(sitemapUrl);

          // Parse sitemap for relevant URLs
          const relevantUrls = parseSitemapForUrls(sitemapContent, patterns);
          log(`Found ${relevantUrls.length} relevant URLs`);

          if (relevantUrls.length === 0) {
            return {
              content: [
                {
                  type: 'text',
                  text: 'No USWDS documentation found',
                },
              ],
            };
          }

          // Fetch content from relevant URLs and search for query
          const searchResults: USWDSDocContent[] = [];
          const searchLimit = Math.min(limit, relevantUrls.length);

          for (let i = 0; i < searchLimit && searchResults.length < limit; i++) {
            const url = relevantUrls[i];
            try {
              log(`Fetching content from: ${url}`);
              const htmlContent = await fetchUrl(url);
              const docContent = extractUSWDSContent(htmlContent, url);

              // Check if content matches the search query
              const queryLower = query.toLowerCase();
              const matchesQuery =
                docContent.title.toLowerCase().includes(queryLower) ||
                docContent.content.toLowerCase().includes(queryLower) ||
                docContent.utilities.some((util) => util.toLowerCase().includes(queryLower)) ||
                docContent.codeExamples.some((code) => code.toLowerCase().includes(queryLower));

              if (matchesQuery) {
                searchResults.push(docContent);
              }
            } catch (error) {
              log(`Error fetching ${url}:`, error);
              // Continue with next URL
            }
          }

          // If we have fewer results than the limit, try searching more URLs
          if (searchResults.length < limit && searchLimit < relevantUrls.length) {
            for (
              let i = searchLimit;
              i < relevantUrls.length && searchResults.length < limit;
              i++
            ) {
              const url = relevantUrls[i];
              try {
                log(`Fetching additional content from: ${url}`);
                const htmlContent = await fetchUrl(url);
                const docContent = extractUSWDSContent(htmlContent, url);

                const queryLower = query.toLowerCase();
                const matchesQuery =
                  docContent.title.toLowerCase().includes(queryLower) ||
                  docContent.content.toLowerCase().includes(queryLower) ||
                  docContent.utilities.some((util) => util.toLowerCase().includes(queryLower)) ||
                  docContent.codeExamples.some((code) => code.toLowerCase().includes(queryLower));

                if (matchesQuery) {
                  searchResults.push(docContent);
                }
              } catch (error) {
                log(`Error fetching ${url}:`, error);
                // Continue with next URL
              }
            }
          }

          if (searchResults.length === 0) {
            return {
              content: [
                {
                  type: 'text',
                  text: `No USWDS documentation found matching "${query}"`,
                },
              ],
            };
          }

          // Format results
          let result = `# USWDS Search Results\n\n`;
          result += `**Query:** "${query}"\n`;
          result += `**Results:** ${searchResults.length}\n\n`;

          searchResults.forEach((doc, index) => {
            result += `## ${index + 1}. ${doc.title}\n\n`;
            result += `**Type:** ${doc.type}\n`;
            result += `**URL:** ${doc.url}\n\n`;

            if (doc.content) {
              result += `**Content:**\n${doc.content}\n\n`;
            }

            if (doc.utilities.length > 0) {
              result += `**Utilities/Classes:** ${doc.utilities.slice(0, 10).join(', ')}\n\n`;
            }

            if (doc.codeExamples.length > 0) {
              result += `**Code Examples:**\n`;
              doc.codeExamples.slice(0, 3).forEach((code) => {
                result += `\`\`\`\n${code}\n\`\`\`\n\n`;
              });
            }

            result += '---\n\n';
          });

          return {
            content: [
              {
                type: 'text',
                text: result.trim(),
              },
            ],
          };
        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : String(error);
          return {
            content: [
              {
                type: 'text',
                text: `Error searching USWDS documentation: ${errorMessage}`,
              },
            ],
            isError: true,
          };
        }
      }

      default:
        throw new Error(`Unknown tool: ${name}`);
    }
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    return {
      content: [
        {
          type: 'text',
          text: `Error: ${errorMessage}`,
        },
      ],
      isError: true,
    };
  }
});

// Start the server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  log('Comet MCP server running on stdio'); // Now uses stderr via updated log function
}

main().catch((error) => {
  log('Server failed to start:', error);
  process.exit(1);
});
