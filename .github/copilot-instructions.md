# Comet Starter Project

This project is a React with TypeScript Component Library based on USWDS. It is designed to provide a set of modular tools to accelerate developer productivity and simplify the use of Design Systems, particularly USWDS.

## Project Structure

This project is built with the following tools and libraries:

- React with TypeScript
- Vite for managing React Development and Bundling
- Vitest for unit testing, do not use Jest
- USWDS for the primary Component Library
- Storybook code examples and documentation

## Development Guidelines

- Use TypeScript for type safety.
- All components should include an `id` prop.
- Use arrow functions for components and hooks.
- Use functional components instead of class components.
- Components should return `React.ReactElement`.
- Use default exports for components.
- Use PascalCase for component names.
- Use kebab-case for file names and directories.
- New components should be added to their own directory and should include at least: component, stories, test, figma file, and index.
- New components should be exported from an `index.ts` file in their directory.
- New components should be exported from the main `index.ts` file in the package.
- New components should include jsdoc comments.

## Styling Guidelines

- Use CSS for styling.
- Component level styling should be in a `.css` file with the same name as the component.

## Unit Testing

- Use Vitest for unit testing, never use Jest.
- Use React Testing Library for testing React components.
- Use 'test' instead of 'it' for test names.

## Code Quality

- Use ESLint for code analysis.
- Use Prettier for code formatting.

## Accessibility

- Ensure HTML is WCAG 2.1 AA and Section 508 compliant.
- Ensure HTML meets accessibility best practices for screen readers, keyboard navigation, and color contrast.
- Use semantic HTML and ARIA roles appropriately.
