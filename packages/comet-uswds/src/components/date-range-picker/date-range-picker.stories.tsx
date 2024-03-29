import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Label, FormGroup, DatePicker } from '../..';
import { DateRangePickerContainer } from './date-range-picker';

const meta: Meta<typeof DateRangePickerContainer> = {
  title: 'USWDS/Forms/Date Range Picker',
  component: DateRangePickerContainer,
};
export default meta;

const Template: StoryFn<typeof DateRangePickerContainer> = () => (
  <DateRangePickerContainer id="date-range-picker">
    <FormGroup>
      <Label id="event-date-start-label" htmlFor="event-date-start">
        Event start date
      </Label>
      <div className="usa-hint" id="event-date-start-hint">
        mm/dd/yyyy
      </div>
      <DatePicker
        id="event-date-start"
        name="event-date-start"
        aria-describedby="event-date-start-label event-date-start-hint"
      />
    </FormGroup>

    <FormGroup>
      <Label id="event-date-end-label" htmlFor="event-date-end">
        Event end date
      </Label>
      <div className="usa-hint" id="event-date-end-hint">
        mm/dd/yyyy
      </div>
      <DatePicker
        id="event-date-end"
        name="event-date-end"
        aria-describedby="event-date-end-label event-date-end-hint"
      />
    </FormGroup>
  </DateRangePickerContainer>
);

export const Standard = Template.bind({});
