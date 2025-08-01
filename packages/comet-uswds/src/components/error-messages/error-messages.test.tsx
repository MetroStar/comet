import { render } from '@testing-library/react';
import ErrorMessages from './error-messages';

describe('ErrorMessage', () => {
  test('should render successfully', () => {
    const errors: string[] = [''];
    const { baseElement } = render(<ErrorMessages errors={errors} />);
    expect(baseElement).toBeTruthy();
  });

  test('should render an error message as a string successfully', () => {
    const { baseElement } = render(<ErrorMessages errors="error" />);
    const errorMessages = baseElement.querySelectorAll('.usa-error-message');
    expect(errorMessages).toHaveLength(1);
  });

  test('should render an error message successfully', () => {
    const errors: string[] = ['error1'];
    const { baseElement } = render(<ErrorMessages errors={errors} />);
    const errorMessages = baseElement.querySelectorAll('.usa-error-message');
    expect(errorMessages).toHaveLength(1);
  });

  test('should render multiple error messages successfully', () => {
    const errors: string[] = ['error1', 'error2'];
    const { baseElement } = render(<ErrorMessages errors={errors} />);
    const errorMessages = baseElement.querySelectorAll('.usa-error-message');
    expect(errorMessages).toHaveLength(2);
  });

  test('should not render when no items or children are provided', () => {
    const { container } = render(<ErrorMessages id="errors" />);
    expect(container.querySelector('#errors')).toBeFalsy();
  });
});
