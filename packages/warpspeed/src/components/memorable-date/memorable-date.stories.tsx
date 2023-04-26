import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { MemorableDate } from '../../index';
import { MemorableDateProps } from './memorable-date';

const meta: Meta<typeof MemorableDate> = {
  title: 'USWDS/Forms/Memorable Date',
  component: MemorableDate
};
export default meta;

const Template: StoryFn<typeof MemorableDate> = (args: MemorableDateProps) => <MemorableDate {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  id: 'memorable-date-1',
  monthId: 'month-1',
  dayId: 'day-1',
  yearId: 'year-1',
  monthName: 'month-1',
  dayName: 'day-1',
  yearName: 'year-1'
};

export const DefaultValue = Template.bind({});
DefaultValue.args = {
  id: 'memorable-date-2',
  monthId: 'month-2',
  dayId: 'day-2',
  yearId: 'year-2',
  monthName: 'month-2',
  dayName: 'day-2',
  yearName: 'year-2',
  monthValue: 12,
  dayValue: 30,
  yearValue: 2000
};