# VS Code Copilot Integration Guide

This guide shows how to integrate Comet MCP with VS Code Copilot for enhanced development workflows.

## MCP Configuration

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

## Usage Examples

Once configured, you can use natural language with VS Code Copilot to invoke Comet tools:

### Creating a New Project
```
"Create a new Comet UI project called 'dashboard-app'"
```
This will invoke the `init_project` tool with:
```json
{
  "type": "ui",
  "name": "dashboard-app"
}
```

### Adding Components
```
"Add a new React component called 'UserProfile'"
```
This will invoke the `add_component` tool with:
```json
{
  "name": "UserProfile"
}
```

### Adding Pages
```
"Add a new page component called 'SettingsPage'"
```
This will invoke the `add_page` tool with:
```json
{
  "name": "SettingsPage"
}
```

## Benefits over CLI

- **Contextual Integration**: Works seamlessly within VS Code
- **Natural Language**: Use conversational commands instead of remembering CLI syntax
- **AI-Powered**: Copilot can suggest appropriate component names and structures
- **Workflow Integration**: Part of your coding assistant's capabilities