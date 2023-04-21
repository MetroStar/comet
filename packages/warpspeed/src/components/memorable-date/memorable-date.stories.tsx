import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { MemorableDate } from '../../index';
import { MemorableDateProps } from './memorable-date';

const meta: Meta<typeof MemorableDate> = {
  title: 'USWDS/MemorableDate',
  component: MemorableDate,
  argTypes: {
    id: { required: true },
    monthId: { required: true },
    dayId: { required: true },
    yearId: { required: true }
  },
};
export default meta;

const Template: StoryFn<typeof MemorableDate> = (args: MemorableDateProps) => <MemorableDate {...args}>MemorableDate</MemorableDate>;

export const Default = Template.bind({});
Default.args = {
  id: 'memorable-date-1',
  monthId: 'memorable-date-month-1',
  dayId: 'memorable-date-day-1',
  yearId: 'memorable-date-year-1'
};
