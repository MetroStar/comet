import { dirname, join } from 'path';
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
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-interactions'),
    getAbsolutePath('@storybook/addon-a11y'),
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

/*global require*/
/*eslint no-undef: "error"*/

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')));
}
