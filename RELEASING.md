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
4. Navigate to the Actions GitHub page and click Publish Package from the left
5. Click the Run workflow dropdown, select the package to publish, and click Run workflow
6. Verify the Publish Package GitHub Action completes correctly
7. Verify a new release is available in NPM

```
npm run build:comet-data-viz
```

6. Publish the new package to NPM (example below):

```
npm run publish:comet-data-viz
```

7. Verify no errors in the terminal
8. Verify a new release is available on NPM
