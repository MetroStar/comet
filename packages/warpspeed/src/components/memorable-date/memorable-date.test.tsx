import React from 'react';
import '@testing-library/jest-dom';
import /* userEvent, */ { render, screen /* fireEvent */} from '@testing-library/react';
import { MemorableDate } from './memorable-date';

describe('Memorable Date', () => {
  const memorableDate = <MemorableDate id="1" />;

  test('should render', () => {
    render(memorableDate);
    expect(screen.getByTestId('memorable-date-1')).toBeTruthy();
  });

  // it('should set date to Jan 2 2020 using keyboard', async () => {
  //   const { baseElement } = render(memorableDate);
  //   const monthInput = baseElement.querySelector(`input[id="month"]`) as HTMLInputElement;
  //   const dayInput = baseElement.querySelector(`input[id="day"]`) as HTMLInputElement;
  //   const yearInput = baseElement.querySelector(`input[id="year"]`) as HTMLInputElement;

  //   await userEvent.type(monthInput, "1");
  //   await userEvent.type(dayInput, "2");
  //   await userEvent.type(yearInput, "2020");

  //   // fireEvent.change(monthInput, {target: {value: '1'}});
  //   // fireEvent.change(dayInput, {target: {value: '2'}});
  //   // fireEvent.change(yearInput, {target: {value: '2020'}});

  //   expect(monthInput.value).toEqual('1');
  //   expect(dayInput.value).toEqual('2');
  //   expect(yearInput.value).toEqual('2020');
  // });
});