# Comet MCP

Model Context Protocol (MCP) server for Comet development workflow integration.

## Overview

Comet MCP provides a set of tools that can be used by AI coding assistants like VS Code Copilot to streamline Comet application development. This replaces the standalone Comet CLI with a more integrated development experience.

## Getting Started

### Installation

```sh
npm install -g @metrostar/comet-mcp
```

### Usage with VS Code Copilot

The MCP server can be integrated with VS Code Copilot to provide enhanced development tools. Configure your MCP client to connect to the Comet MCP server.

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

#### `add_component`
Add a new React component to the Comet project

**Parameters:**
- `name`: Component name in PascalCase

**Example:**
```json
{
  "name": "add_component",
  "arguments": {
    "name": "MyButton"
  }
}
```

#### `add_page`
Add a new React page component to the Comet project

**Parameters:**
- `name`: Page component name in PascalCase

**Example:**
```json
{
  "name": "add_page",
  "arguments": {
    "name": "HomePage"
  }
}
```

## Migration from Comet CLI

This MCP server provides equivalent functionality to the previous Comet CLI:

- `comet init --type ui --name my-app` → `init_project` tool with `{"type": "ui", "name": "my-app"}`
- `comet add component MyButton` → `add_component` tool with `{"name": "MyButton"}`
- `comet add page HomePage` → `add_page` tool with `{"name": "HomePage"}`

## Development

The MCP server is built using the official TypeScript MCP SDK and follows the existing Comet project structure and patterns.

### Building

```sh
npm run build:comet-mcp
```

### Testing

```sh
npm run test:unit
```

## License

Apache-2.0