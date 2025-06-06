import '../node_modules/@uswds/uswds/dist/css/uswds.min.css';
import './global.css';

/** @type { import('@storybook/react-vite').Preview } */
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

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },

  tags: ['autodocs'],
};
export default preview;
