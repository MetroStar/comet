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
import { log } from './utils.js';

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
