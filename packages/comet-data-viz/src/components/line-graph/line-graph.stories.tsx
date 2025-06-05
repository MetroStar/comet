import React from 'react';
import { Meta } from '@storybook/react-vite';
import { LineGraph } from '../../index';
import { LineGraphProps } from './line-graph';

const meta: Meta<typeof LineGraph> = {
  title: 'Data Viz/Line Graph',
  component: LineGraph,
  argTypes: {
    smooth: { control: 'boolean' },
  },
};
export default meta;

export const Default = {
  args: {
    chart: {
      title: 'Line graph',
      width: 400,
      height: 400,
    },
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
    smooth: false,
  },
  render: (args: LineGraphProps) => (
    <div
      style={{
        width: '400px',
        height: '400px',
      }}
    >
      <LineGraph {...args} />
    </div>
  ),
};
