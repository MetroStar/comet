import { fireEvent, render } from '@testing-library/react';
import React, { FormEvent } from 'react';

import Form from './form';

describe('Form', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Form>Some form</Form>);
    expect(baseElement).toBeTruthy();
  });
  it('should render a form and submit successfully', () => {
    let isSubmitted = false;
    const handleSubmit = (e: FormEvent): void => {
      e.preventDefault();
      isSubmitted = true;
    };
    const { baseElement } = render(<Form onSubmit={handleSubmit}>Some form</Form>);

    const form = baseElement.querySelector<HTMLFormElement>('form');
    if (!form) return; // to help TypeScript, already asserted above for Jest
    expect(form).toBeTruthy();
    fireEvent.submit(form);
    expect(isSubmitted).toBe(true);
  });
  it('should render a form and reset successfully', () => {
    let isReset = false;
    const handleReset = (e: FormEvent): void => {
      e.preventDefault();
      isReset = true;
    };
    const { baseElement } = render(<Form onReset={handleReset}>Some form</Form>);

    const form = baseElement.querySelector<HTMLFormElement>('form');
    if (!form) return; // to help TypeScript, already asserted above for Jest
    expect(form).toBeTruthy();
    fireEvent.reset(form);
    expect(isReset).toBe(true);
  });
});
