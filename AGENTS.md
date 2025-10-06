# Comet - React Component Library for USWDS

## Overview

Comet is a comprehensive React with TypeScript Component Library based on the U.S. Web Design System (USWDS). What started as a USWDS implementation has evolved into a complete toolkit for building modern government and enterprise applications.

**Repository**: https://github.com/MetroStar/comet  
**License**: GitHub License: Apache-2.0
**Documentation**: https://metrostar.github.io/comet/

## Key Features

- **🎨 Complete USWDS Implementation** - All USWDS components built with React and TypeScript
- **📊 Data Visualization** - Chart components powered by Victory.js
- **🔧 Custom Components** - Additional UI elements not provided by USWDS
- **🤖 AI-Powered Workflow** - Model Context Protocol (MCP) server for enhanced development
- **⚡ Developer Experience** - TypeScript support, Storybook documentation, and comprehensive testing
- **🚀 Quick Start** - Starter templates and CLI tools to get up and running fast

## Packages

Comet consists of multiple packages that can be used independently or together:

### Core Packages

#### @metrostar/comet-uswds

Complete USWDS component library implemented in React with TypeScript.

**Includes:**

- All standard USWDS components
- Buttons and form controls
- Navigation components
- Layout components
- Typography components
- Alert and notification components
- Table and data display components

**Installation:**

```bash
npm install @metrostar/comet-uswds
```

#### @metrostar/comet-extras

Custom components that fill gaps where USWDS doesn't provide implementations.

**Includes:**

- Advanced tabs component
- Modal dialogs
- Complex form controls
- Advanced UI patterns
- Custom interactions

**Installation:**

```bash
npm install @metrostar/comet-extras
```

#### @metrostar/comet-data-viz

Data visualization components built on Victory.js with USWDS styling.

**Includes:**

- Line charts
- Bar charts
- Pie charts
- Area charts
- Scatter plots
- Custom data display components

**Installation:**

```bash
npm install @metrostar/comet-data-viz
```

### Development Tools

#### @metrostar/comet-mcp

Model Context Protocol server for AI-enhanced development workflow.

**Features:**

- Intelligent code assistance
- Automation for Comet projects
- Integration with AI development tools
- Context-aware suggestions

**Installation:**

```bash
npm install @metrostar/comet-mcp
```

## Getting Started

### Option 1: Comet Starter App (Recommended)

The quickest way to get started with a pre-configured setup:

1. Clone the starter repository:

   ```bash
   git clone https://github.com/MetroStar/comet-starter.git my-project
   cd my-project
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start development:
   ```bash
   npm run dev
   ```

**The starter app includes:**

- Pre-configured USWDS setup and styling
- Example components and pages
- Testing framework setup
- Build and deployment configurations
- TypeScript and linting configurations

### Option 2: Adding to Existing Project

Add Comet packages individually to an existing React project.

**Basic Setup:**

1. Install the core package:

   ```bash
   npm install @metrostar/comet-uswds
   ```

2. Import and use components:

   ```typescript
   import { Button, Alert, Card } from "@metrostar/comet-uswds";

   function MyComponent() {
     return (
       <div>
         <Alert type="success">Operation completed!</Alert>
         <Button onClick={() => console.log("Clicked")}>Click Me</Button>
       </div>
     );
   }
   ```

## USWDS Background

Comet is built around the U.S. Web Design System (USWDS), the design system for the federal government. USWDS provides:

- Comprehensive design principles
- Accessibility-first components
- Mobile-friendly patterns
- Consistent user experience across government websites
- Section 508 compliance
- WCAG 2.1 AA standards

Comet enhances USWDS by providing:

- Modern React implementation
- TypeScript support for type safety
- Enhanced developer experience
- Additional components and features
- Comprehensive documentation and examples

## Component Categories

### Layout Components

- Grid system
- Containers
- Flex layouts
- Responsive utilities

### Form Components

- Text inputs
- Textareas
- Select dropdowns
- Checkboxes and radios
- Date pickers
- File uploads
- Form validation

### Navigation Components

- Header/navigation bars
- Breadcrumbs
- Side navigation
- Footer
- Pagination

### Data Display

- Tables
- Cards
- Lists
- Tags/badges
- Icons

### Feedback Components

- Alerts
- Modals
- Tooltips
- Loading indicators
- Progress bars

### Interactive Components

- Buttons
- Accordions
- Tabs (comet-extras)
- Dropdowns
- Search

## Development Workflow

### Running Locally for Development

1. Clone the repository:

   ```bash
   git clone https://github.com/MetroStar/comet.git
   cd comet
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start Storybook for component development:

   ```bash
   npm run storybook
   ```

4. Run tests:

   ```bash
   npm test
   ```

5. Build packages:
   ```bash
   npm run build:comet-uswds
   npm run build:comet-extras
   npm run build:comet-data-viz
   ```

### Testing

Comet includes comprehensive testing setup:

- Unit tests for all components
- Integration tests
- Accessibility tests
- Visual regression tests
- Code coverage reporting

### Code Quality

- **TypeScript** for type safety
- **ESLint** for code quality
- **Prettier** for code formatting
- **Storybook** for component documentation
- **Jest** for testing
- **React Testing Library** for component testing

## Documentation & Resources

### Interactive Documentation

- **Component Documentation**: https://metrostar.github.io/comet/
- **Live Demo App**: https://metrostar.github.io/comet-starter/
- **USWDS Official Docs**: https://designsystem.digital.gov/

### Package Documentation

Each package has detailed documentation in its README:

- [comet-uswds README](https://github.com/MetroStar/comet/tree/main/packages/comet-uswds)
- [comet-extras README](https://github.com/MetroStar/comet/tree/main/packages/comet-extras)
- [comet-data-viz README](https://github.com/MetroStar/comet/tree/main/packages/comet-data-viz)
- [comet-mcp README](https://github.com/MetroStar/comet/tree/main/packages/comet-mcp)

## Version Information

### Package Versions

- **comet-uswds**: Check npm for latest version
- **comet-extras**: Check npm for latest version
- **comet-data-viz**: Check npm for latest version
- **comet-mcp**: Check npm for latest version

### Dependencies

- **Node.js**: Check package.json for required version
- **USWDS**: Version specified in comet-uswds package.json
- **React**: Compatible with modern React versions
- **TypeScript**: Full TypeScript support

## Use Cases

### Government Applications

- Federal agency websites
- State and local government portals
- Public-facing services
- Internal government tools

### Enterprise Applications

- Corporate websites
- Internal business applications
- Customer portals
- Data dashboards

### Benefits for Government Projects

- Built-in accessibility compliance
- Consistent with federal design standards
- Reduced development time
- Well-documented and tested
- Active community support

## Contributing

Contributions are welcome! Review the contributing guide:

- [Contributing Guide](https://github.com/MetroStar/comet/blob/main/CONTRIBUTING.md)

### How to Contribute

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Write/update tests
5. Update documentation
6. Submit a pull request

### Development Guidelines

- Follow existing code patterns
- Write comprehensive tests
- Update Storybook documentation
- Follow accessibility best practices
- Use TypeScript for type safety

## Architecture

### Design Principles

- **Accessibility First**: All components meet WCAG 2.1 AA standards
- **Component-Based**: Modular, reusable components
- **Type Safety**: Full TypeScript support
- **Testing**: Comprehensive test coverage
- **Documentation**: Clear examples and API documentation

### Technical Stack

- **React**: Modern React with hooks
- **TypeScript**: Static typing for better DX
- **Storybook**: Component development and documentation
- **Jest**: Testing framework
- **Victory.js**: Data visualization (comet-data-viz)
- **USWDS**: Foundation design system

## Support & Community

- **GitHub Issues**: Report bugs and request features
- **Discussions**: Ask questions and share ideas
- **Documentation**: Comprehensive guides and examples
- **Storybook**: Interactive component explorer

---

Built with ❤️ by MetroStar for the government and enterprise community
