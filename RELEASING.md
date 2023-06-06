# Releasing new versions of packages

Note: currently full releases are tied to the main `comet-uswds` package.

## Releasing a new version of comet-uswds

1. Create a new release branch in the form of `comet-uswds-release-[MAJOR.MINOR.PATCH]`
2. Create a PR into main (should only include package.json and package-lock.json)
3. Once approved, merge the PR into main
4. Navigate to the Releases GitHub page and create a new Draft release
   - Set tag and title to the version number
   - Click the Generate release notes button (update as needed)
   - Click Save draft
5. Publish when ready
6. Verify the Publish Package GitHub Action completes correctly
7. Verify a new release is available in NPM

## Releasing a new version of comet-data-viz, comet-extras, etc

1. Create a new release branch in the form of `comet-data-viz-release-[MAJOR.MINOR.PATCH]`
2. Create a PR into main (should only include package.json and package-lock.json)
3. Once approved, merge the PR into main
4. Open a terminal on your local machine and navigate to the root of the project
5. Run a build for the specific package (example below):

```
npm run build:comet-data-viz
```

6. Publish the new package to NPM (example below):

```
npm run publish:comet-data-viz
```

7. Verify no errors in the terminal
8. Verify a new release is available on NPM
