/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    '../packages/comet-uswds/src/**/*.@(mdx|stories.@(tsx))',
    '../packages/comet-data-viz/src/**/*.@(mdx|stories.@(tsx))',
    '../packages/comet-extras/src/**/*.@(mdx|stories.@(tsx))',
    '../packages/comet-uswds/src/**/*.mdx',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  core: {
    builder: '@storybook/builder-vite',
  },
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: true,
  },
};
export default config;
