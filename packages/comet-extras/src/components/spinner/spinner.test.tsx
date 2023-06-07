import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Spinner from './spinner';

describe('Spinner', () => {
  test('should render a default spinner', () => {
    const { container } = render(<Spinner id="spinner" />);
    expect(container.querySelector('#spinner')).toBeTruthy();
    expect(container.querySelector('#spinner > div')).toHaveClass('spinner-large');
  });

  test('should render a small spinner', () => {
    const { container } = render(<Spinner id="spinner" type="small" />);
    expect(container.querySelector('#spinner')).toBeTruthy();
    expect(container.querySelector('#spinner > div')).toHaveClass('spinner-small');
  });

  test('should render a spinner with loading text', () => {
    const { container } = render(<Spinner id="spinner" loadingText="Loading..." />);
    expect(container.querySelector('#spinner')).toBeTruthy();
    expect(container.querySelector('.loading-text')).toBeTruthy();
  });
});
