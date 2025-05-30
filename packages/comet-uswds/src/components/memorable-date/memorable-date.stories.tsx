import React from 'react';
import { StoryFn, Meta } from '@storybook/react-vite';
import { MemorableDate } from '../../index';
import { MemorableDateProps } from './memorable-date';

const meta: Meta<typeof MemorableDate> = {
  title: 'USWDS/Forms/Memorable Date',
  component: MemorableDate,
  argTypes: {
    required: { control: 'boolean' },
  },
};
export default meta;

const Template: StoryFn<typeof MemorableDate> = (args: MemorableDateProps) => (
  <MemorableDate {...args} />
);

export const Standard = Template.bind({});
Standard.args = {
  id: '1',
  required: false,
  label: 'Date of Birth',
  helperText: 'For example: January 19 2000',
};

export const DefaultValue = Template.bind({});
DefaultValue.args = {
  id: '2',
  required: false,
  label: 'Date of Birth',
  helperText: 'For example: January 19 2000',
  defaultMonthValue: 12,
  defaultDayValue: 30,
  defaultYearValue: 2000,
};
