import React from 'react';
import { render } from '@testing-library/react';
import ErrorMessages from './error-messages';

describe('ErrorMessage', () => {
  it('should render successfully', () => {
    const errors: string[] = [''];
    const { baseElement } = render(<ErrorMessages errors={errors} />);
    expect(baseElement).toBeTruthy();
  });
  it('should render an error message successfully', () => {
    const errors: string[] = ['error1'];
    const { baseElement } = render(<ErrorMessages errors={errors} />);
    const errorMessages = baseElement.querySelectorAll('.usa-error-message');
    expect(errorMessages).toHaveLength(1);
  });
  it('should render multiple error messages successfully', () => {
    const errors: string[] = ['error1', 'error2'];
    const { baseElement } = render(<ErrorMessages errors={errors} />);
    const errorMessages = baseElement.querySelectorAll('.usa-error-message');
    expect(errorMessages).toHaveLength(2);
  });
});
