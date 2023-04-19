import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { SummaryBox, SummaryBoxProps } from './summary-box';

const meta: Meta<typeof SummaryBox> = {
  title: 'USWDS/Summary Box',
  component: SummaryBox,
};
export default meta;

const items = ['Item 1', 'Item 2', 'Item 3'];
const Template: StoryFn<typeof SummaryBox> = (args: SummaryBoxProps) => <SummaryBox {...args} />;
export const Default = Template.bind({});
Default.args = {
  id: 'summary-1',
  heading: 'Key information',
  className: '',
  items,
};

export const CustomClass = Template.bind({});
CustomClass.args = {
  id: 'summary-2',
  heading: 'Key information',
  className: 'bg-base-lightest',
  items,
};
