import React from 'react';
import { Meta } from '@storybook/react-vite';
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

export const Standard = {
  args: {
    id: 'date-picker-1',
    name: 'date-picker-1',
    required: false,
    label: 'Appointment Date',
    helperText: 'mm/dd/yyyy',
    disabled: false,
  },
  render: (args: DatePickerProps) => (
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
  ),
};

export const DefaultValue = {
  args: {
    id: 'date-picker-2',
    name: 'date-picker-2',
    defaultValue: today.toString(),
    required: false,
    label: 'Appointment Date',
    helperText: 'mm/dd/yyyy',
  },
  render: (args: DatePickerProps) => (
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
  ),
};

export const MinMax = {
  args: {
    id: 'date-picker-3',
    name: 'date-picker-3',
    required: false,
    label: 'Appointment Date',
    helperText: 'mm/dd/yyyy',
    minDate: sixtyDaysAgo,
    maxDate: twoWeeksFromNow,
  },
  render: (args: DatePickerProps) => (
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
  ),
};

export const DateRange = {
  args: {
    id: 'date-picker-4',
    name: 'date-picker-4',
    required: false,
    label: 'Appointment Date',
    helperText: 'mm/dd/yyyy',
    dateRange: eightDaysAgo,
  },
  render: (args: DatePickerProps) => (
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
  ),
};

export const WithErrors = {
  args: {
    id: 'date-picker-1',
    name: 'date-picker-1',
    required: false,
    label: 'Appointment Date',
    helperText: 'mm/dd/yyyy',
    disabled: true,
    errors: 'This field is required',
    validationStatus: 'error',
  },
  render: (args: DatePickerProps) => (
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
  ),
};
