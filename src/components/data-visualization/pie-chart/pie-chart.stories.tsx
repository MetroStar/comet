import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { PieChart } from '../../../index';
import { PieChartProps } from './pie-chart';

const meta: Meta<typeof PieChart> = {
  title: 'Components/Data Visualization/Pie Chart',
  component: PieChart,
};
export default meta;

const Template: StoryFn<typeof PieChart> = (args: PieChartProps) => (
  <div
    style={{
      width: '400px',
      height: '400px',
    }}
  >
    <PieChart {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  data: [
    {
      x: 'dogs',
      y: 8,
    },
    {
      x: 'cats',
      y: 5,
    },
    {
      x: 'fish',
      y: 1,
    },
  ],
};

export const CustomAngle = Template.bind({});
CustomAngle.args = {
  data: [
    {
      x: 'dogs',
      y: 8,
    },
    {
      x: 'cats',
      y: 5,
    },
    {
      x: 'fish',
      y: 1,
    },
  ],
  angle: {
    start: 90,
    end: -90,
  },
};

export const CustomColors = Template.bind({});
CustomColors.args = {
  data: [
    {
      x: 'dogs',
      y: 8,
    },
    {
      x: 'cats',
      y: 5,
    },
    {
      x: 'fish',
      y: 1,
    },
  ],
  colors: ['#0d7ea2', '#cd425b', '#00a871'],
};
