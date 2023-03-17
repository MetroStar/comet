import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Accordion from './accordion';

describe('Accordion', () => {
  test('should render with given props', () => {
    const folds = [
      {
        id: 'item-1',
        label: 'foo',
        expanded: false,
        child: <span>bar</span>,
      },
    ];
    render(<Accordion id="accordion" folds={folds} />);

    expect(screen.getByText('foo')).toBeVisible();
    expect(screen.getByText('bar')).not.toBeVisible();

    fireEvent.click(screen.getByTestId('accordion-button'));

    expect(screen.getByText('bar')).toBeVisible();
  });

  test('should render with expanded', () => {
    const folds = [
      {
        id: 'item-1',
        label: 'foo',
        expanded: true,
        child: <span>bar</span>,
      },
    ];
    render(<Accordion id="accordion" folds={folds} />);

    expect(screen.getByText('foo')).toBeVisible();
    expect(screen.getByText('bar')).toBeVisible();

    fireEvent.click(screen.getByTestId('accordion-button'));

    expect(screen.getByText('bar')).not.toBeVisible();
  });

  test('should render with multi-select', () => {
    const folds = [
      {
        id: 'item-1',
        label: 'foo',
        expanded: false,
        child: <span>bar</span>,
      },
    ];
    render(<Accordion id="accordion" folds={folds} allowMultiSelect={true} />);

    expect(screen.getByText('foo')).toBeVisible();
    expect(screen.getByText('bar')).not.toBeVisible();

    fireEvent.click(screen.getByTestId('accordion-button'));

    expect(screen.getByText('bar')).toBeVisible();
  });
});
