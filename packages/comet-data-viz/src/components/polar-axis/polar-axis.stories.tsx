import React from 'react';
import { Meta } from '@storybook/react-vite';
import { PolarAxis } from '../../index';
import { PolarAxisProps } from './polar-axis';

const meta: Meta<typeof PolarAxis> = {
  title: 'Data Viz/Polar Axis',
  component: PolarAxis,
};
export default meta;

export const Default = {
  args: {
    chart: {
      title: 'Polar Axis',
      width: 400,
      height: 400,
    },
    color: '#0d7ea2',
    data: [1, 3, 5, 1, 2, 1, 5],
  },
  render: (args: PolarAxisProps) => (
    <div
      style={{
        width: '400px',
        height: '400px',
      }}
    >
      <PolarAxis {...args} />
    </div>
  ),
};
