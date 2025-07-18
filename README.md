<p>
  <picture>
    <img alt="Comet Component Library" src="https://raw.githubusercontent.com/MetroStar/comet/main/images/comet-logo.png" width="400px">
  </picture>
</p>

[![GitHub license](https://img.shields.io/github/license/metrostar/comet.svg)](https://github.com/metrostar/comet/blob/main/LICENSE)
[![Build Status](https://img.shields.io/github/actions/workflow/status/metrostar/comet/build-and-deploy.yaml?branch=main)](https://github.com/metrostar/comet/actions)
[![Coverage Status](https://img.shields.io/codecov/c/github/metrostar/comet.svg)](https://codecov.io/gh/metrostar/comet)
[![npm downloads](https://img.shields.io/npm/dm/@metrostar/comet-uswds.svg)](https://www.npmjs.com/package/metrostar/comet-uswds)
[![node version](https://img.shields.io/node/v/@metrostar/comet-uswds)](https://www.npmjs.com/package/@metrostar/comet-uswds)
[![uswds version](https://img.shields.io/github/package-json/dependency-version/metrostar/comet/@uswds/uswds?filename=packages%2Fcomet-uswds%2Fpackage.json)](https://www.npmjs.com/package/@uswds/uswds)
<br/>
[![Comet USWDS](https://img.shields.io/npm/v/@metrostar/comet-uswds.svg?label=comet-uswds)](https://www.npmjs.com/package/@metrostar/comet-uswds)
[![Comet Extras](https://img.shields.io/npm/v/@metrostar/comet-extras.svg?label=comet-extras)](https://www.npmjs.com/package/@metrostar/comet-extras)
[![Comet Data Viz](https://img.shields.io/npm/v/@metrostar/comet-data-viz.svg?label=comet-data-viz)](https://www.npmjs.com/package/@metrostar/comet-data-viz)
[![Comet CLI](https://img.shields.io/npm/v/@metrostar/comet-cli.svg?label=comet-cli)](https://www.npmjs.com/package/@metrostar/comet-cli)

Comet is a React with TypeScript Component Library based on USWDS.

In the beginning, Comet was built with a primary focus of USWDS. Today however, it has become more of a framework for React Apps which require USWDS, as well as other functionality (charts, custom components, etc). In the end, we hope to provide a set of modular tools to accelerate developer productivity and simplify the use of Design Systems, particularly USWDS.

## Table of Contents

1. [Overview](#overview)
2. [Getting Started](#getting-started)
3. [Running the Project Locally](#running-the-project-locally)
4. [Want to help?](#want-to-help)

## Overview

Comet consists of multiple packages, each providing specific functionality. These packages can be used independently or all together, depending on your use case. See below for more details on each package:

- [comet-uswds](https://github.com/MetroStar/comet/tree/main/packages/comet-uswds) - The base USWDS component library implemented in React with TypeScript.
- [comet-data-viz](https://github.com/MetroStar/comet/tree/main/packages/comet-data-viz) - A set of Victory Chart components provided as a Comet wrapper.
- [comet-extras](https://github.com/MetroStar/comet/tree/main/packages/comet-extras) - A set of custom components, intended to fill in the gaps where USWDS does not provide an implementation.
- [comet-cli](https://github.com/MetroStar/comet/tree/main/packages/comet-cli) - A CLI for creating Comet Apps.

## Getting Started

In order to simplify the process of getting started, we have provided a starter app which includes our components. This app also provides some additional opinionated tools to further accelerate the process of getting started. These additions are not required. The starter app repo can be found here: [Comet Starter App](https://github.com/MetroStar/comet-starter).

See each package directory for additional information on getting started.

## Running the Project Locally

1. To install dependencies, run the following:

```sh
npm install
```

2. To start storybook, run the following:

```sh
npm run storybook
```

## Want to help?

Interested in contributing to any of the packages in this project? Review our contributing info here: [Contributing](https://github.com/MetroStar/comet/blob/main/CONTRIBUTING.md).
