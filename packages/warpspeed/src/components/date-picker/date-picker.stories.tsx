import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { DatePicker, DatePickerProps } from './date-picker';

const meta: Meta<typeof DatePicker> = {
  title: 'Components/Forms/Date Picker',
  component: DatePicker,
  argTypes: {
    id: { required: true },
    name: { required: true },
  },
};
export default meta;

const today = new Date();
const eightDaysAgo = new Date(today);
eightDaysAgo.setDate(eightDaysAgo.getDate() - 8);
const sixtyDaysAgo = new Date(today);
sixtyDaysAgo.setDate(sixtyDaysAgo.getDate() - 60);
const twoWeeksFromNow = new Date(today);
twoWeeksFromNow.setDate(twoWeeksFromNow.getDate() + 14);

const Template: StoryFn<typeof DatePicker> = (args: DatePickerProps) => (
  <div className="usa-form-group">
    <label className="usa-label" id="appointment-date-label" htmlFor={args.id}>
      Appointment date
    </label>
    <div className="usa-hint" id="appointment-date-hint">
      mm/dd/yyyy
    </div>
    <DatePicker
      id={args.id}
      name={args.name}
      aria-describedby="appointment-date-label appointment-date-hint"
      defaultValue={args.defaultValue}
      minDate={args.minDate}
      maxDate={args.maxDate}
      dateRange={args.dateRange}
    />
  </div>
);

export const Standard = Template.bind({});
Standard.args = {
  id: 'date-picker-1',
  name: 'date-picker-1',
};

export const DefaultValue = Template.bind({});
DefaultValue.args = {
  id: 'date-picker-2',
  name: 'date-picker-2',
  defaultValue: today.toString(),
};

export const MinMax = Template.bind({});
MinMax.args = {
  id: 'date-picker-3',
  name: 'date-picker-3',
  minDate: sixtyDaysAgo,
  maxDate: twoWeeksFromNow,
};

export const DateRange = Template.bind({});
DateRange.args = {
  id: 'date-picker-4',
  name: 'date-picker-4',
  dateRange: eightDaysAgo,
};
