# Contributing to Comet

## General Process

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature_a`)
3. Commit your Changes (`git commit -m 'Added new feature_a'`)
4. Push to the Branch (`git push origin feature_a`)
5. Open a Pull Request

## Running the Project Locally

1. To install dependencies, run the following:

```sh
npm install
```

2. To start storybook, run the following:

```sh
npm run storybook
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

## Releasing packages

See the following for creating a new release: [Releasing](https://github.com/MetroStar/comet/blob/main/RELEASING.md)
