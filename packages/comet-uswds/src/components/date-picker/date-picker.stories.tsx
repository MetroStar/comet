import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { DatePicker, DatePickerProps } from './date-picker';

const meta: Meta<typeof DatePicker> = {
  title: 'USWDS/Forms/Date Picker',
  component: DatePicker,
  argTypes: {
    id: { required: true },
    name: { required: true },
    validationStatus: { control: { type: 'select', options: ['error', 'success'] } },
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
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
  <DatePicker
    id={args.id}
    name={args.name}
    required={args.required}
    label={args.label}
    helperText={args.helperText}
    errors={args.errors}
    validationStatus={args.validationStatus}
    defaultValue={args.defaultValue}
    minDate={args.minDate}
    maxDate={args.maxDate}
    dateRange={args.dateRange}
  />
);

export const Standard = Template.bind({});
Standard.args = {
  id: 'date-picker-1',
  name: 'date-picker-1',
  required: false,
  label: 'Appointment Date',
  helperText: 'mm/dd/yyyy',
  disabled: false,
};

export const DefaultValue = Template.bind({});
DefaultValue.args = {
  id: 'date-picker-2',
  name: 'date-picker-2',
  defaultValue: today.toString(),
  required: false,
  label: 'Appointment Date',
  helperText: 'mm/dd/yyyy',
};

export const MinMax = Template.bind({});
MinMax.args = {
  id: 'date-picker-3',
  name: 'date-picker-3',
  required: false,
  label: 'Appointment Date',
  helperText: 'mm/dd/yyyy',
  minDate: sixtyDaysAgo,
  maxDate: twoWeeksFromNow,
};

export const DateRange = Template.bind({});
DateRange.args = {
  id: 'date-picker-4',
  name: 'date-picker-4',
  required: false,
  label: 'Appointment Date',
  helperText: 'mm/dd/yyyy',
  dateRange: eightDaysAgo,
};

export const WithErrors = Template.bind({});
WithErrors.args = {
  id: 'date-picker-1',
  name: 'date-picker-1',
  required: false,
  label: 'Appointment Date',
  helperText: 'mm/dd/yyyy',
  disabled: true,
  errors: 'This field is required',
  validationStatus: 'error',
};
