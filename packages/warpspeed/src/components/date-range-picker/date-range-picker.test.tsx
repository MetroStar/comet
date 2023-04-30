import React from 'react';
import { fireEvent, render, RenderResult } from '@testing-library/react';
import { Label, FormGroup, DatePicker } from '../..';
import { DateRangePickerContainer } from './date-range-picker';

describe('DateRangePicker', () => {
  const renderDateRangePicker = (): RenderResult =>
    render(
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
      </DateRangePickerContainer>,
    );

  it('should render successfully', () => {
    const { baseElement } = renderDateRangePicker();
    expect(baseElement).toBeTruthy();
    expect(baseElement.querySelectorAll('.usa-date-picker__button')).toHaveLength(2);
  });

  it('selecting start and end date should set min/max', () => {
    const { baseElement } = renderDateRangePicker(); // open calendar
    const [startDatePicker, endDatePicker] = Array.from(
      baseElement.querySelectorAll('.usa-date-picker'),
    );

    fireEvent.click(startDatePicker.querySelector('.usa-date-picker__button') as Element);

    // select year 2020
    fireEvent.click(
      startDatePicker.querySelector('.usa-date-picker__calendar__year-selection') as Element,
    );
    fireEvent.click(
      startDatePicker.querySelector(
        '.usa-date-picker__calendar__year[data-value="2020"]',
      ) as Element,
    );

    // select month Jan
    fireEvent.click(
      startDatePicker.querySelector('.usa-date-picker__calendar__month-selection') as Element,
    );
    fireEvent.click(
      startDatePicker.querySelector('.usa-date-picker__calendar__month[data-value="0"]') as Element,
    );

    // select day 01
    fireEvent.click(
      startDatePicker.querySelector('.usa-date-picker__calendar__date[data-day="1"]') as Element,
    );

    const eventDateStart = startDatePicker.querySelector(
      'input[name="event-date-start"]',
    ) as HTMLInputElement;
    const eventEndDate = endDatePicker.querySelector(
      'input[name="event-date-end"]',
    ) as HTMLInputElement;

    expect(eventDateStart?.value).toEqual('01/01/2020');

    expect(endDatePicker.getAttribute('data-min-date')).toBe('2020-01-01');

    fireEvent.click(endDatePicker.querySelector('.usa-date-picker__button') as Element);

    // select day 02
    fireEvent.click(
      endDatePicker.querySelector('.usa-date-picker__calendar__date[data-day="2"]') as Element,
    );

    expect(eventEndDate?.value).toEqual('01/02/2020');

    expect(startDatePicker.getAttribute('data-max-date')).toBe('2020-01-02');
  });
});
