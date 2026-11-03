// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from 'eslint-plugin-storybook';

import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import reactPlugin from '@eslint-react/eslint-plugin';
import hooksPlugin from 'eslint-plugin-react-hooks';

export default [
  // Flat Configs
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  reactPlugin.configs['recommended-typescript'],
  reactPlugin.configs['disable-conflict-eslint-plugin-react-hooks'],
  prettierRecommended, // Default Configs
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      'react-hooks': hooksPlugin,
    },
    rules: {
      // Base Warnings
      'no-console': 'warn',

      // Formatting
      'prettier/prettier': [
        'error',
        {
          semi: true,
          tabWidth: 2,
          singleQuote: true,
          trailingComma: 'all',
          bracketSpacing: true,
          useTabs: false,
        },
      ],

      // TypeScript
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unsafe-function-type': 'off',

      // React
      ...hooksPlugin.configs.recommended.rules,
      'react-hooks/exhaustive-deps': 'off',
      '@eslint-react/exhaustive-deps': 'off',
      '@eslint-react/rules-of-hooks': 'off',
      '@eslint-react/no-array-index-key': 'off',
      '@eslint-react/no-clone-element': 'off',
      '@eslint-react/no-children-map': 'off',
      '@eslint-react/no-unnecessary-use-prefix': 'off',
      '@eslint-react/set-state-in-effect': 'off',
    },
  }, // Storybook Configs
  {
    files: ['*.stories.tsx'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unsafe-function-type': 'error',
    },
  },
  ...storybook.configs['flat/recommended'],
];
