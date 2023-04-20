import { FormGroup, Label } from '../..';
import { Meta, StoryFn } from '@storybook/react';
import { TimePicker, TimePickerProps } from './time-picker';
import React from 'react';

const meta: Meta<typeof TimePicker> = {
  title: 'USWDS/Forms/Time Picker',
  component: TimePicker,
};
export default meta;

const Template: StoryFn<typeof TimePicker> = (args: TimePickerProps) => (
  <FormGroup>
    <Label htmlFor={args.id}>Appointment Time</Label>
    <TimePicker id={args.id} minTime={args.minTime} maxTime={args.maxTime} step={args.step} />
  </FormGroup>
);
export const Standard = Template.bind({});
Standard.args = {
  id: 'timepicker-1',
  minTime: '08:00',
  maxTime: '17:00',
  step: 15,
};
