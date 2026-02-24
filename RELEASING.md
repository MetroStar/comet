# Releasing new versions of packages

_Note: packages are published to NPM using automated GitHub Actions. See below for steps to publish each package._

## Releasing a new version of comet-uswds

1. Determine the next appropriate semantic version for the release
2. Create a new release branch in the form of `comet-uswds-release-[MAJOR.MINOR.PATCH]`
3. Update the version in the comet-uswds package.json
4. Run an npm install (from the root)
5. Commit changes and create a PR into main (should only include package.json and package-lock.json)
6. Once approved, merge the PR into main
7. Navigate to the Releases GitHub page and create a new Draft release
   - Set tag and title to the version number (ex: 3.8.1)
   - Click the Generate release notes button (update as needed)
   - Click Save draft
8. Publish when ready
9. Verify the Publish Package GitHub Action completes correctly
10. Verify a new release is available in NPM

## Releasing a new version of comet-data-viz, comet-extras, etc

1. Determine the next appropriate semantic version for the release
2. Create a new release branch in the form of `comet-data-viz-release-[MAJOR.MINOR.PATCH]`
3. Update the version in the appropriate package.json
4. Run an npm install (from the root)
5. Commit changes and create a PR into main (should only include package.json and package-lock.json)
6. Once approved, merge the PR into main
7. Navigate to the Actions GitHub page and click Publish Package from the left
8. Click the Run workflow dropdown, select the package to publish, and click Run workflow
9. Verify the Publish Package GitHub Action completes correctly
10. Verify a new release is available in NPM
