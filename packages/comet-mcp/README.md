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

| Tool                    | Description                                              | Parameters                                                                                                          |
| ----------------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `init_project`          | Initialize a new Comet project (UI or API)               | `type`: Project type ("ui" or "api")<br>`name`: Project name and directory name                                     |
| `add_comet`             | Add Comet packages and configurations to an existing app | None                                                                                                                |
| `get_comet_version`     | Get the current version of Comet Packages and Versions   | None                                                                                                                |
| `list_components`       | Get a list of all available Comet components             | `package`: Filter by package ("all", "comet-uswds", "comet-extras", "comet-data-viz") - optional, defaults to "all" |
| `get_component_details` | Get detailed information about a specific component      | `componentName`: The name of the component to get details for (required)                                            |
| `get_env_variables`     | Get current Node.js environment variables                | `filter`: Optional filter to search for specific variables (case-insensitive)                                       |

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

### Add Comet Tool

The `add_comet` tool helps integrate Comet packages into existing applications by:

1. **Checking existing installation**: Detects if Comet packages are already installed and configured
2. **Prerequisites verification**: Ensures required dependencies (Vite and SCSS) are present
3. **Setup guidance**: Provides complete step-by-step installation instructions when prerequisites are met

**Key Features:**

- **Smart detection**: Automatically checks for existing Comet packages to avoid duplicate setup
- **Dependency validation**: Verifies that Vite and SCSS/Sass are properly configured
- **Complete installation guide**: Provides detailed instructions following the official Comet USWDS documentation
- **Ready-to-use configurations**: Includes all necessary Vite config updates, SCSS setup, and example component usage

**When to use:**

- Adding Comet to an existing React/TypeScript project
- Migrating from custom components to Comet USWDS components
- Setting up Comet in a project that already has Vite and SCSS configured

The tool follows the official "Getting Started with a Custom App (NOT pre-configured for USWDS)" documentation and ensures all USWDS-specific configurations are properly applied.

### Environment Variables Tool

The `get_env_variables` tool helps inspect the current Node.js environment variables:

- **Filtering**: Use the `filter` parameter to search for specific variables by name (case-insensitive)
- **Truncation**: Long values are truncated to 100 characters for readability

This tool is useful for debugging environment configuration, checking if required variables are set, and understanding the runtime environment.

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
