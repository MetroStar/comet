# Comet MCP

Comet MCP provides a set of tools that can be used by AI coding assistants like VS Code Copilot to streamline Comet application development. This replaces the standalone Comet CLI with a more integrated development experience.

## Getting Started

Create an MCP configuration file to connect VS Code Copilot to the Comet MCP server:

### Example MCP Client Configuration

```json
{
  "mcpServers": {
    "comet": {
      "command": "npx",
      "args": ["@metrostar/comet-mcp"],
      "env": {
        "PROJECT_ROOT": "/ABSOLUTE/PATH/TO/YOUR/CURRENT/PROJECT"
      }
    }
  }
}
```

### Manual Installation

```sh
npm install -g @metrostar/comet-mcp
```

## Available Tools

| Tool                | Description                                            | Parameters                                                                      |
| ------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------- |
| `get_comet_version` | Get the current version of Comet Packages and Versions | None                                                                            |
| `init_project`      | Initialize a new Comet project (UI or API)             | `type`: Project type ("ui" or "api")<br>`name`: Project name and directory name |

## Running the Project Locally

The MCP server is built using the official TypeScript MCP SDK and follows the existing Comet project structure and patterns.

### Build the Server

```sh
npm run build:comet-mcp
```

### Configuring MCP Client for your server

```json
{
  "mcpServers": {
    "comet": {
      "command": "node",
      "args": ["/ABSOLUTE/PATH/TO/YOUR/COMET/PROJECT/packages/comet-mcp/dist/index.js"],
      "env": {
        "PROJECT_ROOT": "/ABSOLUTE/PATH/TO/YOUR/CURRENT/PROJECT"
      }
    }
  }
}
```
