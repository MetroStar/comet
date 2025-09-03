#! /usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  CallToolRequest,
} from '@modelcontextprotocol/sdk/types.js';
import fs from 'fs';
import { exec } from 'child_process';
import { promisify } from 'util';

import { API_REPO_URL, PROJECT_TYPES, UI_REPO_URL } from './constants.js';
import {
  addPageRoute,
  error,
  getComponentTemplate,
  getComponentTestTemplate,
  getFriendlyDirectoryName,
  getPageTemplate,
  getPageTestTemplate,
  log,
} from './utils.js';

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
        name: 'add_component',
        description: 'Add a new React component to the Comet project',
        inputSchema: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              description: 'Component name in PascalCase',
            },
          },
          required: ['name'],
        },
      },
      {
        name: 'add_page',
        description: 'Add a new React page component to the Comet project',
        inputSchema: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              description: 'Page component name in PascalCase',
            },
          },
          required: ['name'],
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

      case 'add_component': {
        const { name: componentName } = args as { name: string };

        log(`Adding a new component with name ${componentName}`);
        const dirName = getFriendlyDirectoryName(componentName);

        if (fs.existsSync(`src/components/${dirName}`)) {
          throw new Error('Directory already exists!');
        }

        const rootDir = 'src/components';
        const componentTemplate = getComponentTemplate(componentName);
        const testTemplate = getComponentTestTemplate(componentName, dirName);

        // Create new directory and files
        fs.mkdirSync(`${rootDir}/${dirName}`, { recursive: true });
        fs.writeFileSync(`${rootDir}/${dirName}/${dirName}.tsx`, componentTemplate);
        fs.writeFileSync(`${rootDir}/${dirName}/${dirName}.test.tsx`, testTemplate);

        log(`Component added successfully!`);

        return {
          content: [
            {
              type: 'text',
              text: `Successfully added component: ${componentName} at ${rootDir}/${dirName}`,
            },
          ],
        };
      }

      case 'add_page': {
        const { name: pageName } = args as { name: string };

        log(`Adding a new page with name ${pageName}`);
        const dirName = getFriendlyDirectoryName(pageName);

        if (fs.existsSync(`src/pages/${dirName}`)) {
          throw new Error('Directory already exists!');
        }

        const rootDir = 'src/pages';
        const pageTemplate = getPageTemplate(pageName);
        const testTemplate = getPageTestTemplate(pageName, dirName);

        // Create new directory and files
        fs.mkdirSync(`${rootDir}/${dirName}`, { recursive: true });
        fs.writeFileSync(`${rootDir}/${dirName}/${dirName}.tsx`, pageTemplate);
        fs.writeFileSync(`${rootDir}/${dirName}/${dirName}.test.tsx`, testTemplate);

        // Add route to App.tsx
        addPageRoute(pageName, dirName);

        // Ensure no formatting issues after insert
        try {
          await execAsync('npm run format');
        } catch (err) {
          error(`Error formatting: ${err}`);
        }

        log(`Page added successfully!`);

        return {
          content: [
            {
              type: 'text',
              text: `Successfully added page: ${pageName} at ${rootDir}/${dirName} and updated routing`,
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
  // eslint-disable-next-line no-console
  console.error('Comet MCP server running on stdio');
}

main().catch((error) => {
  // eslint-disable-next-line no-console
  console.error('Server failed to start:', error);
  process.exit(1);
});
