import { dirname, join } from 'path';
const path = require('path');
module.exports = {
  stories: [
    '../packages/comet-uswds/src/**/*.stories.@(tsx|mdx)',
    '../packages/comet-data-viz/src/**/*.stories.@(tsx|mdx)',
    '../packages/comet-extras/src/**/*.stories.@(tsx|mdx)',
  ],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-interactions'),
    getAbsolutePath('@storybook/addon-a11y'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-webpack5'),
    options: {},
  },
  docs: {
    autodocs: true,
  },
};
/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')));
}
