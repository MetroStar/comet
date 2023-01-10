# WarpSpeed USWDS Component Library

### Develop

To install all dependencies, run `yarn`.

Once your deps are installed, you can use yarn to run any of the following scripts:

 - `yarn rollup`: Use rollup to build the library
 - `yarn test`: Run Jest tests
 - `yarn lint`: Run ESLint on the Typescript code.
 - `yarn prettier`: Enforce code style with Prettier
 - `yarn storybook`: Run the storybook server locally.

To pubish a version, first update the `version` tag in package.json, then make sure you've done a `yarn rollup` to compile the release. Once all
that is done, run `npm publish` to make your updates avaiable from npm install.