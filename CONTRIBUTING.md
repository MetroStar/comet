# Contributing to Comet

## General Process

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature_a`)
3. Commit your Changes (`git commit -m 'Added new feature_a'`)
4. Push to the Branch (`git push origin feature_a`)
5. Open a Pull Request

## Running the Project Locally

After cloning the project to your machine, to install the dependencies, run:

```sh
npm install
```

To run storybook, run:

```sh
npm run start
```

## Running Unit Tests

To make sure your changes do not break any unit tests, run the following:

```sh
npm run test
```

Ensure to review the coverage directory for code coverage details.

## Running Code Quality Checks

To make sure your changes adhere to additional code quality standards, run the following:

```sh
npm run lint
npm run format
```

## Publishing to NPM

To publish a package to NPM, run the following:

```sh
npm run build:[SOME PACKAGE]
npm publish
```
