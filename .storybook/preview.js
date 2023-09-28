import '../node_modules/@uswds/uswds/dist/css/uswds.min.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Welcome', 'Style Guide', 'USWDS', 'Extras', 'Data Viz'],
    },
  },
};
