import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Prose from './prose';

describe('Prose', () => {
  test('should render', () => {
    const { container } = render(<Prose id="prose"><p>Prose text</p></Prose>);
    const proseComponent = container.querySelector('#prose');
    expect(proseComponent).toHaveClass('usa-prose');
    expect(proseComponent).toHaveTextContent('Prose text');
  });

  test('should render with custom className', () => {
    const { container } = render(<Prose id="prose" className="custom"><p>Prose text</p></Prose>);
    expect(container.querySelector('#prose')).toHaveClass('custom');
  });
});
