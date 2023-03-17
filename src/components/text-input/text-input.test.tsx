import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import TextInput from './text-input';

describe('Input', () => {
  test('Input renders with given props and callback works', () => {
    const spy = jest.fn();
    render(<TextInput id="input" placeholder="foo" onChange={spy} />);
    const input = screen.getByTestId('input');

    expect(input).toHaveClass('usa-input');

    fireEvent.change(input, { target: { value: 'bar' } });
    expect(spy).toHaveBeenCalled();
  });
});
