<p>
  <picture>
    <img alt="Comet Component Library" src="https://raw.githubusercontent.com/MetroStar/comet/main/images/comet-logo.png" width="400px">
  </picture>
</p>

[![GitHub license](https://img.shields.io/github/license/metrostar/comet.svg)](https://github.com/metrostar/comet/blob/main/LICENSE.md)
[![Build Status](https://img.shields.io/github/actions/workflow/status/metrostar/comet/build-and-deploy.yaml?branch=main)](https://github.com/metrostar/comet/actions)
[![Coverage Status](https://img.shields.io/codecov/c/github/metrostar/comet.svg)](https://codecov.io/gh/metrostar/comet)
[![npm downloads](https://img.shields.io/npm/dm/@metrostar/comet-uswds.svg)](https://www.npmjs.com/package/@metrostar/comet-uswds)
[![node version](https://img.shields.io/node/v/@metrostar/comet-uswds)](https://www.npmjs.com/package/@metrostar/comet-uswds)
[![uswds version](https://img.shields.io/github/package-json/dependency-version/metrostar/comet/@uswds/uswds?filename=packages%2Fcomet-uswds%2Fpackage.json)](https://www.npmjs.com/package/@uswds/uswds)
<br/>
[![Comet USWDS](https://img.shields.io/npm/v/@metrostar/comet-uswds.svg?label=comet-uswds)](https://www.npmjs.com/package/@metrostar/comet-uswds)
[![Comet Extras](https://img.shields.io/npm/v/@metrostar/comet-extras.svg?label=comet-extras)](https://www.npmjs.com/package/@metrostar/comet-extras)
[![Comet Data Viz](https://img.shields.io/npm/v/@metrostar/comet-data-viz.svg?label=comet-data-viz)](https://www.npmjs.com/package/@metrostar/comet-data-viz)
[![Comet MCP](https://img.shields.io/npm/v/@metrostar/comet-mcp.svg?label=comet-mcp)](https://www.npmjs.com/package/@metrostar/comet-mcp)

Comet is a React with TypeScript Component Library based on the [U.S. Web Design System (USWDS)](https://designsystem.digital.gov/).

What started as a USWDS implementation has evolved into a comprehensive toolkit for building modern government and enterprise applications. Comet provides modular packages that accelerate developer productivity and simplify the adoption of design systems, particularly USWDS. Whether you need core USWDS components, data visualizations, or custom UI elements, Comet has you covered.

## ✨ Key Features

- **🎨 Complete USWDS Implementation** - All USWDS components built with React and TypeScript
- **📊 Data Visualization** - Chart components powered by Victory.js
- **🔧 Custom Components** - Additional UI elements not provided by USWDS
- **🤖 AI-Powered Workflow** - Model Context Protocol (MCP) server for enhanced development
- **⚡ Developer Experience** - TypeScript support, Storybook documentation, and comprehensive testing
- **🚀 Quick Start** - Starter templates and CLI tools to get up and running fast

## Table of Contents

1. [Overview](#overview)
2. [Packages](#packages)
3. [Getting Started](#getting-started)
4. [Running the Project Locally](#running-the-project-locally)
5. [Documentation & Demo](#documentation--demo)
6. [Want to help?](#want-to-help)

## Overview

Comet is built around the [U.S. Web Design System (USWDS)](https://designsystem.digital.gov/), the design system for the federal government. USWDS provides a comprehensive set of design principles, components, and patterns to help government agencies build accessible, mobile-friendly websites and applications.

Comet takes USWDS to the next level by providing:

- **Modern React Implementation** - All USWDS components as reusable React components with TypeScript support
- **Enhanced Developer Experience** - Comprehensive documentation, testing, and development tools
- **Extended Functionality** - Additional components and features beyond the core USWDS specification

## Packages

Comet consists of multiple packages, each providing specific functionality. These packages can be used independently or together, depending on your use case:

### Core Packages

| Package                                                                                    | Description                                                                                                                                                 | NPM                                                                                                                           |
| ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| **[comet-uswds](https://github.com/MetroStar/comet/tree/main/packages/comet-uswds)**       | Complete USWDS component library implemented in React with TypeScript. Includes all standard USWDS components like buttons, forms, navigation, and layouts. | [![npm](https://img.shields.io/npm/v/@metrostar/comet-uswds.svg)](https://www.npmjs.com/package/@metrostar/comet-uswds)       |
| **[comet-extras](https://github.com/MetroStar/comet/tree/main/packages/comet-extras)**     | Custom components that fill gaps where USWDS doesn't provide implementations. Includes advanced UI elements like tabs, modals, and complex form controls.   | [![npm](https://img.shields.io/npm/v/@metrostar/comet-extras.svg)](https://www.npmjs.com/package/@metrostar/comet-extras)     |
| **[comet-data-viz](https://github.com/MetroStar/comet/tree/main/packages/comet-data-viz)** | Data visualization components built on Victory.js, providing charts, graphs, and data display components with USWDS styling.                                | [![npm](https://img.shields.io/npm/v/@metrostar/comet-data-viz.svg)](https://www.npmjs.com/package/@metrostar/comet-data-viz) |

### Development Tools

| Package                                                                          | Description                                                                                                                                 | NPM                                                                                                                 |
| -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| **[comet-mcp](https://github.com/MetroStar/comet/tree/main/packages/comet-mcp)** | Model Context Protocol server for AI-enhanced development workflow. Provides intelligent code assistance and automation for Comet projects. | [![npm](https://img.shields.io/npm/v/@metrostar/comet-mcp.svg)](https://www.npmjs.com/package/@metrostar/comet-mcp) |

## Getting Started

### Option 1: Comet Starter App (Recommended)

The quickest way to get started is with our starter app, which includes pre-configured tooling and examples:

1. **Clone the starter repository:**

   ```bash
   git clone https://github.com/MetroStar/comet-starter.git my-project
   cd my-project
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start development:**
   ```bash
   npm run dev
   ```

The starter app includes:

- Pre-configured USWDS setup and styling
- Example components and pages
- Testing framework setup
- Build and deployment configurations
- TypeScript and linting configurations

### Option 2: Adding to Existing Project

If you have an existing React project, you can add Comet packages individually. See each package's README for detailed setup instructions:

- **[comet-uswds](https://github.com/MetroStar/comet/tree/main/packages/comet-uswds#getting-started)**
- **[comet-extras](https://github.com/MetroStar/comet/tree/main/packages/comet-extras#getting-started)**
- **[comet-data-viz](https://github.com/MetroStar/comet/tree/main/packages/comet-data-viz#getting-started)**

## Running the Project Locally

To contribute to Comet or run the project locally for development:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/MetroStar/comet.git
   cd comet
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start Storybook for component development:**

   ```bash
   npm run storybook
   ```

4. **Run tests:**

   ```bash
   npm test
   ```

5. **Build packages:**
   ```bash
   npm run build:comet-uswds
   npm run build:comet-extras
   npm run build:comet-data-viz
   ```

## Documentation & Demo

- **📚 [Component Documentation & Examples](https://metrostar.github.io/comet/)** - Interactive Storybook with all components, usage examples, and documentation
- **🚀 [Live Demo App](https://metrostar.github.io/comet-starter/)** - See Comet in action with a full application example
- **📖 [USWDS Documentation](https://designsystem.digital.gov/)** - Official U.S. Web Design System documentation

## Want to help?

Interested in contributing to any of the packages in this project? Review our contributing info here: [Contributing](https://github.com/MetroStar/comet/blob/main/CONTRIBUTING.md).
