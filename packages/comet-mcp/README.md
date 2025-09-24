# Comet MCP

Comet MCP provides a set of tools that can be used by AI coding assistants like VS Code Copilot to streamline Comet application development. This replaces the standalone Comet CLI with a more integrated development experience.

## Getting Started

Add the following to your mcp.json to connect VS Code Copilot to the Comet MCP server:

### Workspace Configuration (Recommended)

```json
{
  "servers": {
    "comet": {
      "command": "npx",
      "args": ["@metrostar/comet-mcp"]
    }
  }
}
```

### Profile Configuration

```json
{
  "servers": {
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

## Available Tools

| Tool                    | Description                                              | Parameters                                                                                                               |
| ----------------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `init_project`          | Initialize a new Comet project (UI or API)               | `type`: Project type ("ui" or "api")<br>`name`: Project name and directory name                                          |
| `add_comet`             | Add Comet packages and configurations to an existing app | None                                                                                                                     |
| `get_comet_version`     | Get the current version of Comet Packages and Versions   | None                                                                                                                     |
| `list_components`       | Get a list of all available Comet components             | `package`: Filter by package ("all", "comet-uswds", "comet-extras", "comet-data-viz") - optional, defaults to "all"      |
| `get_component_details` | Get detailed information about a specific component      | `componentName`: The name of the component to get details for (required)                                                 |
| `search_uswds`          | Search USWDS design system documentation                 | `query`: Search query for utilities, design tokens, etc. (required)<br>`limit`: Max results to return (1-20, default: 5) |
| `get_env_variables`     | Get current Node.js environment variables                | `filter`: Optional filter to search for specific variables (case-insensitive)                                            |

### Init Project Tool

The `init_project` tool helps you quickly bootstrap new Comet applications with the proper structure and configurations:

**Parameters:**

- `type`: Project type - either "ui" or "api"
- `name`: Project name and directory name

**Key Features:**

- **Project Type Selection**: Choose between UI (React/TypeScript) or API (Node.js) project templates
- **Complete Setup**: Creates a fully configured project with all necessary dependencies
- **USWDS Integration**: UI projects come pre-configured with Comet USWDS components
- **Best Practices**: Follows Comet project structure and development guidelines
- **Ready to Develop**: Generated projects include build tools, testing setup, and development scripts

**UI Project Includes:**

- React with TypeScript configuration
- Vite for development and building
- Comet USWDS component library pre-installed
- SCSS setup for styling
- Vitest for testing
- ESLint and Prettier for code quality
- Storybook for component documentation

**API Project Includes:**

- Node.js with TypeScript configuration
- Express.js framework setup
- Environment configuration
- Testing framework
- Build and development scripts

**When to use:**

- Starting a new Comet application from scratch
- Creating a prototype or proof of concept
- Setting up a new microservice or component library

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

### Get Comet Version Tool

The `get_comet_version` tool provides information about Comet packages and their versions in your current project:

**Key Features:**

- **Package Detection**: Automatically scans your project's `package.json` to find installed Comet packages
- **Version Information**: Shows current versions of all Comet packages in your project
- **Dependency Analysis**: Identifies both direct dependencies and devDependencies
- **Package Overview**: Provides a comprehensive list of all Comet-related packages

**Supported Packages:**

- `@metrostar/comet-uswds` - Core USWDS components
- `@metrostar/comet-extras` - Additional utility components
- `@metrostar/comet-data-viz` - Data visualization components
- `@metrostar/comet-cli` - Command line interface tools
- `@metrostar/comet-mcp` - Model Context Protocol server

**Use Cases:**

- **Version Auditing**: Check which versions of Comet packages are installed
- **Dependency Management**: Understand your project's Comet dependencies
- **Troubleshooting**: Verify package versions when debugging issues
- **Upgrade Planning**: Identify which packages may need updates
- **Documentation**: Generate reports of current Comet package usage

**Example Output:**
The tool returns information about installed packages, their versions, and installation type (dependency vs devDependency), helping you maintain and manage your Comet-based applications effectively.

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

### USWDS Search Tool

The `search_uswds` tool provides direct access to the official USWDS design system documentation from https://designsystem.digital.gov/:

- **Comprehensive Search**: Searches across utilities and design tokens documentation
- **Real-time Data**: Fetches current documentation directly from the USWDS website
- **Rich Results**: Returns detailed information including:
  - Page titles and content excerpts
  - Code examples and usage patterns
  - CSS utility classes and design tokens
  - Direct links to official documentation

**Key Features:**

- **Utilities Search**: Find CSS utility classes for spacing, typography, colors, layout, and more
- **Design Tokens**: Discover design tokens for colors, spacing, typography scales, and other design properties
- **Code Examples**: Get actual code snippets showing how to use USWDS utilities and tokens
- **Smart Parsing**: Extracts relevant class names and utilities from documentation content

**Example Queries:**

- `"margin spacing"` - Find margin-related utility classes
- `"color tokens"` - Discover available color design tokens
- `"typography"` - Search for typography utilities and tokens
- `"grid layout"` - Find grid and layout-related utilities

This tool is essential for developers working with USWDS who need quick access to the latest utility classes, design tokens, and implementation patterns without leaving their development environment.

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
