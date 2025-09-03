# Migration Guide: Comet CLI to Comet MCP

## Overview

The Comet CLI has been replaced with Comet MCP (Model Context Protocol) to provide enhanced integration with AI coding assistants like VS Code Copilot.

## What Changed

### Before (Comet CLI)
```bash
# Install globally
npm install -g @metrostar/comet-cli

# Create new project
comet init --type ui --name my-app

# Add component
comet add component MyButton

# Add page
comet add page HomePage
```

### After (Comet MCP)
```bash
# Install globally
npm install -g @metrostar/comet-mcp

# Configure with your MCP client
# Then use natural language with AI assistant:
# "Create a new Comet UI project called 'my-app'"
# "Add a component called MyButton"
# "Add a page called HomePage"
```

## Benefits of MCP

1. **Natural Language Interface**: Use conversational commands instead of CLI syntax
2. **AI Integration**: Works seamlessly with VS Code Copilot and other AI assistants
3. **Contextual Awareness**: AI can suggest appropriate names and structures
4. **Workflow Integration**: Part of your coding assistant's capabilities

## Migration Steps

1. **Install Comet MCP**: `npm install -g @metrostar/comet-mcp`
2. **Configure MCP Client**: Add Comet MCP to your MCP configuration
3. **Start Using Natural Language**: Interact through your AI coding assistant
4. **Uninstall CLI** (optional): `npm uninstall -g @metrostar/comet-cli`

## Tool Mapping

| CLI Command | MCP Tool | Example Natural Language |
|-------------|----------|---------------------------|
| `comet init --type ui --name app` | `init_project` | "Create a new Comet UI project called 'app'" |
| `comet add component Button` | `add_component` | "Add a component called Button" |
| `comet add page Home` | `add_page` | "Add a page called Home" |

## Backwards Compatibility

The CLI will remain available but is marked as deprecated. All functionality has been preserved in the MCP server with identical behavior.

For detailed setup instructions, see [VSCODE_INTEGRATION.md](VSCODE_INTEGRATION.md).