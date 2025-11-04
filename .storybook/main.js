import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    '../packages/comet-uswds/src/**/*.@(mdx|stories.@(tsx))',
    '../packages/comet-data-viz/src/**/*.@(mdx|stories.@(tsx))',
    '../packages/comet-extras/src/**/*.@(mdx|stories.@(tsx))',
    '../packages/comet-uswds/src/**/*.mdx',
  ],

  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@storybook/addon-vitest'),
  ],

  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },

  docs: {},

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};
export default config;

function getAbsolutePath(value) {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
}
