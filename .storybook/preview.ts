import '../node_modules/@uswds/uswds/dist/css/uswds.min.css';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: [
          'Welcome',
          'Style Guide',
          ['Colors', 'Typography', 'Icons'],
          'USWDS',
          'Extras',
          'Data Viz',
        ],
      },
    },
  },
};
export default preview;
