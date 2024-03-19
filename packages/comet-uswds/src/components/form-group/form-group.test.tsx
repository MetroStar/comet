import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import FormGroup from './form-group';

describe('FormGroup', () => {
  test('should render with no accessibility violations', async () => {
    const { container } = render(<FormGroup>Some Form</FormGroup>);
    expect(await axe(container)).toHaveNoViolations();
  });

  test('should render successfully', () => {
    const { baseElement } = render(<FormGroup>Some Form</FormGroup>);
    expect(baseElement).toBeTruthy();
  });

  test('should render a standard form group successfully', () => {
    const { baseElement } = render(<FormGroup>Some Form</FormGroup>);
    const formGroup = baseElement.querySelector('.usa-form-group');
    expect(formGroup).toBeTruthy();
  });

  test('should render multiple form groups successfully', () => {
    const { baseElement } = render(
      <>
        <FormGroup>Group 1</FormGroup>
        <FormGroup>Group 2</FormGroup>
      </>,
    );
    const formGroup = baseElement.querySelectorAll('.usa-form-group');
    expect(formGroup).toHaveLength(2);
  });

  test('should render a standard form group with errors successfully', () => {
    const errors: string[] = ['error1'];
    const { baseElement } = render(<FormGroup errors={errors}>Some Form</FormGroup>);
    const formGroup = baseElement.querySelector('.usa-form-group--error');
    expect(formGroup).toBeTruthy();
  });
});
