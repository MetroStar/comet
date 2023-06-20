import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { ScatterGraph } from '../../index';
import { ScatterGraphProps } from './scatter-graph';

const meta: Meta<typeof ScatterGraph> = {
  title: 'Data Viz/Scatter Graph',
  component: ScatterGraph,
  argTypes: {
    size: { control: 'number' },
  },
};
export default meta;

const Template: StoryFn<typeof ScatterGraph> = (args: ScatterGraphProps) => (
  <div
    style={{
      width: '400px',
      height: '400px',
    }}
  >
    <ScatterGraph {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  chart: {
    title: 'Scatter graph',
    width: 400,
    height: 400,
  },
  size: 7,
  colors: ['#0d7ea2', '#cd425b'],
  data: [
    [
      { x: 0, y: 3 },
      { x: 1, y: 9 },
      { x: 2, y: 5 },
      { x: 3, y: 12 },
    ],
    [
      { x: 0, y: 1 },
      { x: 1, y: 2 },
      { x: 2, y: 7 },
      { x: 3, y: 2 },
    ],
  ],
};
