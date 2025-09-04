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
      "env": {}
    }
  }
}
```

### Manual Installation

```sh
npm install -g @metrostar/comet-mcp
```

### Available Tools

#### `init_project`

Initialize a new Comet project (UI or API)

**Parameters:**

- `type`: Project type - either "ui" or "api"
- `name`: Project name and directory name

**Example:**

```json
{
  "name": "init_project",
  "arguments": {
    "type": "ui",
    "name": "my-comet-app"
  }
}
```

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
      "args": ["/ABSOLUTE/PATH/TO/YOUR/COMET/PROJECT/packages/comet-mcp/dist/index.js"]
    }
  }
}
```
