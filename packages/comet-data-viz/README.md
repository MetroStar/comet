# Comet Data Viz

A set of Victory Chart components provided as a Comet wrapper.

## Getting Started

1. Add Comet Data Viz to your project:

```sh
# npm
npm i --save @metrostar/comet-data-viz
# or yarn
yarn add @metrostar/comet-data-viz
```

2. Add your first Comet Data Viz component:

```tsx
import { BarGraph } from '@metrostar/comet-data-viz';

const chart = {
  title: 'Bar graph',
  width: 400,
  height: 300,
};

const data = [
  { x: 'Cat', y: 2 },
  { x: 'Dog', y: 7 },
  { x: 'Fish', y: 3 },
  { x: 'Snake', y: 1 },
  { x: 'Rabbit', y: 2 },
];

<BarGraph chart={chart} alignment="start" color="#0d7ea2" barRatio={1} data={data} />;
```
