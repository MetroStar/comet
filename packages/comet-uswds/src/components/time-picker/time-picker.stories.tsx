import React from 'react';
import { Meta } from '@storybook/react-vite';
import { TimePicker, TimePickerProps } from './time-picker';

const meta: Meta<typeof TimePicker> = {
  title: 'USWDS/Forms/Time Picker',
  component: TimePicker,
  argTypes: {
    id: { required: true },
    required: { control: 'boolean' },
  },
};
export default meta;

export const Standard = {
  args: {
    id: 'timepicker-1',
    required: false,
    label: 'Appointment Time',
    helperText: 'Select a time from the dropdown. Type into the input to filter options.',
    minTime: '08:00',
    maxTime: '17:00',
    step: 15,
  },
  render: (args: TimePickerProps) => (
    <TimePicker
      id={args.id}
      name={args.name}
      required={args.required}
      label={args.label}
      helperText={args.helperText}
      minTime={args.minTime}
      maxTime={args.maxTime}
      step={args.step}
    />
  ),
};
