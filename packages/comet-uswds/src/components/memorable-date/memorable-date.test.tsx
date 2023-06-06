import React from 'react';
import '@testing-library/jest-dom';
import { /* userEvent, */ render, screen /* fireEvent */ } from '@testing-library/react';
import { MemorableDate } from './memorable-date';
import userEvent from '@testing-library/user-event';

describe('Memorable Date', () => {
  const memorableDate = <MemorableDate id="1" data-testid="memorable-date-1" />;

  test('should render', () => {
    render(memorableDate);
    expect(screen.getByTestId('memorable-date-1')).toBeTruthy();
  });

  test('should render with default value', () => {
    const { baseElement } = render(
      <MemorableDate
        id="1"
        data-testid="memorable-date-1"
        defaultMonthValue={12}
        defaultDayValue={31}
        defaultYearValue={2023}
      />,
    );
    expect(screen.getByTestId('memorable-date-1')).toBeTruthy();
    expect(
      baseElement.querySelector('#memorable-date-month-1 > option:checked')?.getAttribute('value'),
    ).toEqual('12');
    expect(baseElement.querySelector('#memorable-date-day-1')?.getAttribute('value')).toEqual('31');
    expect(baseElement.querySelector('#memorable-date-year-1')?.getAttribute('value')).toEqual(
      '2023',
    );
  });

  it('changing option should trigger onChanged event handler', async () => {
    const onMonthChange = jest.fn();
    const onDayChange = jest.fn();
    const onYearChange = jest.fn();
    const { baseElement } = render(
      <MemorableDate
        id="1"
        data-testid="memorable-date-1"
        onMonthChange={onMonthChange}
        onDayChange={onDayChange}
        onYearChange={onYearChange}
      />,
    );
    const monthElement = baseElement.querySelector('#memorable-date-month-1') as HTMLSelectElement;
    const dayElement = baseElement.querySelector('#memorable-date-day-1') as HTMLInputElement;
    const yearElement = baseElement.querySelector('#memorable-date-year-1') as HTMLInputElement;

    await userEvent.selectOptions(monthElement, '12');
    await userEvent.type(dayElement, '31');
    await userEvent.type(yearElement, '2023');

    expect(onMonthChange).toHaveBeenCalled();
    expect(onDayChange).toHaveBeenCalled();
    expect(onYearChange).toHaveBeenCalled();
  });
});
