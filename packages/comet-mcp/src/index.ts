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
import { log, getComponentsFromPackage, getComponentDetails } from './utils.js';

const execAsync = promisify(exec);

const server = new Server(
  {
    name: 'comet-mcp',
    version: '1.0.0',
  },
  {
    capabilities: {
      tools: {},
    },
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
  log('Comet MCP server running on stdio');
}

main().catch((error) => {
  log('Server failed to start:', error);
  process.exit(1);
});
