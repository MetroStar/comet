import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { StackGraph } from '../../index';
import { StackGraphProps } from './stack-graph';

const meta: Meta<typeof StackGraph> = {
  title: 'Data Viz/Stack Graph',
  component: StackGraph,
  argTypes: {
    smooth: { control: 'boolean' },
  },
};
export default meta;

const Template: StoryFn<typeof StackGraph> = (args: StackGraphProps) => (
  <div
    style={{
      width: '600px',
      height: '400px',
    }}
  >
    <StackGraph {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  chart: {
    width: 600,
    height: 400,
  },
  colors: ['#0d7ea2', '#cd425b'],
  data: [
    [
      { x: 0, y: 3 },
      { x: 1, y: 9 },
      { x: 2, y: 5 },
      { x: 3, y: 12 },
      { x: 4, y: 6 },
      { x: 5, y: 10 },
    ],
    [
      { x: 0, y: 1 },
      { x: 1, y: 4 },
      { x: 2, y: 7 },
      { x: 3, y: 2 },
      { x: 4, y: 5 },
      { x: 5, y: 7 },
    ],
  ],
  smooth: false,
};
