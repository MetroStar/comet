import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { PieChart } from '../../index';
import { PieChartProps } from './pie-chart';

const meta: Meta<typeof PieChart> = {
  title: 'Data Viz/Pie Chart',
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
    {
      x: 'snake',
      y: 3,
    },
    {
      x: 'rabbit',
      y: 4,
    },
  ],
  colors: 'warm',
  innerRadius: 0,
};

export const DonutChart = Template.bind({});
DonutChart.args = {
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
  colors: 'warm',
  innerRadius: 100,
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
  innerRadius: 0,
};
