import React from 'react';
import '@testing-library/jest-dom';
import { /* userEvent, */ render, screen /* fireEvent */ } from '@testing-library/react';
import { MemorableDate } from './memorable-date';

describe('Memorable Date', () => {
  const memorableDate = <MemorableDate id="1" data-testid="memorable-date-1" />;

  test('should render', () => {
    render(memorableDate);
    expect(screen.getByTestId('memorable-date-1')).toBeTruthy();
  });
});
