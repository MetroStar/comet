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

| Tool                    | Description                                            | Parameters                                                                                                          |
| ----------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| `init_project`          | Initialize a new Comet project (UI or API)             | `type`: Project type ("ui" or "api")<br>`name`: Project name and directory name                                     |
| `get_comet_version`     | Get the current version of Comet Packages and Versions | None                                                                                                                |
| `list_components`       | Get a list of all available Comet components           | `package`: Filter by package ("all", "comet-uswds", "comet-extras", "comet-data-viz") - optional, defaults to "all" |
| `get_component_details` | Get detailed information about a specific component    | `componentName`: The name of the component to get details for (required)                                            |

### Component Tools

The `list_components` tool provides a comprehensive list of all components available across the three main Comet packages:

- **@metrostar/comet-uswds**: Core USWDS-based components
- **@metrostar/comet-extras**: Additional utility components
- **@metrostar/comet-data-viz**: Data visualization components

The `get_component_details` tool provides detailed information about a specific component including:

- Package information
- Component description (from JSDoc comments)
- File path location
- Available props (extracted from TypeScript interfaces)
- Exported types and interfaces

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
