import React from 'react';
import { Meta } from '@storybook/react-vite';
import { DatePicker } from '../..';
import { DateRangePickerContainer } from './date-range-picker';

const meta: Meta<typeof DateRangePickerContainer> = {
  title: 'USWDS/Forms/Date Range Picker',
  component: DateRangePickerContainer,
  argTypes: {
    id: { required: true },
  },
};
export default meta;

export const Standard = {
  args: {
    id: 'date-range-picker',
  },
  render: () => (
    <DateRangePickerContainer id="date-range-picker">
      <DatePicker
        id="event-date-start"
        name="event-date-start"
        label="Event start date"
        helperText="mm/dd/yyyy"
      />
      <DatePicker
        id="event-date-end"
        name="event-date-end"
        label="Event end date"
        helperText="mm/dd/yyyy"
      />
    </DateRangePickerContainer>
  ),
};
