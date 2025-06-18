import { describe, test, expect } from 'vitest';
import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import Spinner from './spinner';

describe('Spinner', () => {
  test('should render with no accessibility violations', async () => {
    const { container } = render(<Spinner id="spinner" />);
    expect(await axe(container)).toHaveNoViolations();
  });

  test('should render a default spinner', () => {
    const { container } = render(<Spinner id="spinner" />);
    expect(container.querySelector('#spinner')).toBeTruthy();
    expect(container.querySelector('#spinner > div')).toHaveClass('spinner-medium');
  });

  describe('size variations', () => {
    test.each(['tiny', 'small', 'medium', 'large'] as const)(
      'should render a %s spinner',
      (size) => {
        const { container } = render(<Spinner id="spinner" type={size} />);
        expect(container.querySelector('#spinner > div')).toHaveClass(`spinner-${size}`);
      },
    );
  });

  describe('text positioning', () => {
    const loadingText = 'Loading...';

    test.each(['top', 'right', 'bottom', 'left'] as const)(
      'should position text %s of spinner',
      (position) => {
        const { container } = render(
          <Spinner id="spinner" loadingText={loadingText} textPosition={position} />,
        );
        expect(container.querySelector('#spinner')).toHaveClass(`text-position-${position}`);
        expect(container.querySelector('.loading-text')).toHaveTextContent(loadingText);
      },
    );

    test('should default to bottom text position when not specified', () => {
      const { container } = render(<Spinner id="spinner" loadingText={loadingText} />);
      expect(container.querySelector('#spinner')).toHaveClass('text-position-bottom');
    });
  });

  test('should not render loading text when not provided', () => {
    const { container } = render(<Spinner id="spinner" />);
    expect(container.querySelector('.loading-text')).not.toBeTruthy();
  });

  test('should render a spinner with loading text', () => {
    const { container } = render(<Spinner id="spinner" loadingText="Loading..." />);
    expect(container.querySelector('#spinner')).toBeTruthy();
    expect(container.querySelector('.loading-text')).toBeTruthy();
  });

  test('should apply custom className when provided', () => {
    const customClass = 'custom-spinner';
    const { container } = render(<Spinner id="spinner" className={customClass} />);
    expect(container.querySelector('#spinner')).toHaveClass(customClass);
  });
});
