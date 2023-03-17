import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PolarAxis } from '../../../index';
import { PolarAxisProps } from './polar-axis';

const meta: ComponentMeta<typeof PolarAxis> = {
  title: 'Components/Data Visualization/Polar Axis',
  component: PolarAxis,
};
export default meta;

const Template: ComponentStory<typeof PolarAxis> = (args: PolarAxisProps) => (
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
    width: 400,
    height: 400,
    domain: [0, 10],
  },
  colors: ['#0d7ea2', '#cd425b'],
  data: [
    [
      { x: 1, y: 8 },
      { x: 3, y: 8 },
      { x: 6, y: 8 },
      { x: 9, y: 8 },
    ],
    [
      { x: 0, y: 1 },
      { x: 1, y: 2 },
      { x: 2, y: 7 },
      { x: 3, y: 2 },
    ],
  ],
};
