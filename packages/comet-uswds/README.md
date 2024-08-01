# Comet

Comet is a React with TypeScript Component Library based on USWDS 3.0.

In order to utilize Comet within your app, you must first ensure USWDS is pre-configured in your app. Please review the following for details specific to USWDS prior proceeding: [USWDS Documentation](https://designsystem.digital.gov/documentation/developers/).

## Getting started with the Comet Starter App (recommended)

1. Clone the comet starter repo here: [Comet Starter](https://github.com/MetroStar/comet-starter)

2. Follow the steps for "Running the Project Locally"

## Getting Started with a Custom App (pre-configured for USWDS)

1. Add Comet to your project:

```sh
# npm
npm i --save @metrostar/comet-uswds
# or yarn
yarn add @metrostar/comet-uswds
```

2. Add your first Comet component:

```tsx
import { Alert } from '@metrostar/comet-uswds';

<Alert id="alert-1" type="info">
  This is the alert body
</Alert>;
```

## Getting Started with a Custom App (NOT pre-configured for USWDS)

_Note: the below setup assumes your project is setup for Vite and SCSS._

1. Add USWDS and Comet to your project:

```sh
# npm
npm i --save @uswds/uswds @metrostar/comet-uswds

# or yarn
yarn add @uswds/uswds @metrostar/comet-uswds
```

2. Add uswds directory to your src folder
3. Add base USWDS file (uswds.scss) to the uswds directory, with the following:

```scss
// Include a USWDS settings file (required)
@forward './uswds-settings.scss';

// Point to the USWDS source code (required)
@forward '~uswds/packages/uswds';

// Include your project's custom Sass (optional)
// @forward "project-custom.scss";
```

4. Add base USWDS settings file (uswds-settings.scss) to the uswds directory, with the following:

```scss
@use 'uswds-core' with (
  // General settings
  $theme-show-notifications: false,
  $theme-font-path: '~uswds/dist/fonts',
  $theme-image-path: '~uswds/dist/img'
);
```

5. Add uswds to the top of your your SASS entry point (styles.scss), with the following:

```scss
@forward 'uswds/uswds.scss';
```

6. Update your Vite config file (vite.config.ts) as needed with the following USWDS specific configurations:

```ts
import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import EnvironmentPlugin from 'vite-plugin-environment';
import eslint from 'vite-plugin-eslint';
import tsconfigPaths from 'vite-tsconfig-paths';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), eslint(), EnvironmentPlugin('all')],
  resolve: {
    alias: {
      '~uswds': path.resolve(__dirname, 'node_modules/@uswds/uswds'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: ['node_modules/@uswds/uswds/packages'],
      },
    },
    postcss: {
      plugins: [autoprefixer],
    },
  },
});
```

7. Add your first Comet component:

```tsx
import { Alert } from '@metrostar/comet-uswds';

<Alert id="alert-1" type="info">
  This is the alert body
</Alert>;
```

For any further troubleshooting, please refer to the comet starter app linked above.
