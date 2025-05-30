import React from 'react';
import { StoryFn, Meta } from '@storybook/react-vite';
import { BarGraph } from '../../index';
import { BarGraphProps } from './bar-graph';

const meta: Meta<typeof BarGraph> = {
  title: 'Data Viz/Bar Graph',
  component: BarGraph,
};
export default meta;

const Template: StoryFn<typeof BarGraph> = (args: BarGraphProps) => (
  <div
    style={{
      width: '400px',
      height: '300px',
    }}
  >
    <BarGraph {...args} />
  </div>
);

const data = [
  { x: 'Cat', y: 2 },
  { x: 'Dog', y: 7 },
  { x: 'Fish', y: 3 },
  { x: 'Snake', y: 1 },
  { x: 'Rabbit', y: 2 },
];

export const Default = Template.bind({});
Default.args = {
  chart: {
    title: 'Bar graph',
    width: 400,
    height: 300,
  },
  alignment: 'start',
  color: '#0d7ea2',
  barRatio: 1,
  data,
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  chart: {
    title: 'Bar graph',
    width: 400,
    height: 300,
    horizontal: true,
  },
  alignment: 'start',
  color: '#0d7ea2',
  barRatio: 1,
  data,
};
