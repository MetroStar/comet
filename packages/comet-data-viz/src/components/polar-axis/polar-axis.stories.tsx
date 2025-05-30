import React from 'react';
import { StoryFn, Meta } from '@storybook/react-vite';
import { PolarAxis } from '../../index';
import { PolarAxisProps } from './polar-axis';

const meta: Meta<typeof PolarAxis> = {
  title: 'Data Viz/Polar Axis',
  component: PolarAxis,
};
export default meta;

const Template: StoryFn<typeof PolarAxis> = (args: PolarAxisProps) => (
  <div
    style={{
      width: '400px',
      height: '400px',
    }}
  >
    <PolarAxis {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  chart: {
    title: 'Polar Axis',
    width: 400,
    height: 400,
  },
  color: '#0d7ea2',
  data: [1, 3, 5, 1, 2, 1, 5],
};
