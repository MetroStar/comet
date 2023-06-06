import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { MemorableDate } from '../../index';
import { MemorableDateProps } from './memorable-date';

const meta: Meta<typeof MemorableDate> = {
  title: 'USWDS/Forms/Memorable Date',
  component: MemorableDate,
};
export default meta;

const Template: StoryFn<typeof MemorableDate> = (args: MemorableDateProps) => (
  <MemorableDate {...args} />
);

export const Standard = Template.bind({});
Standard.args = {
  id: '1',
};

export const DefaultValue = Template.bind({});
DefaultValue.args = {
  id: '2',
  defaultMonthValue: 12,
  defaultDayValue: 30,
  defaultYearValue: 2000,
};
