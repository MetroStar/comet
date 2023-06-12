import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { axe } from 'jest-axe';
import Accordion from './accordion';

describe('Accordion', () => {
  test('should render with no accessibility violations', async () => {
    const items = [
      {
        id: 'item-1',
        label: 'foo',
        expanded: false,
        child: <span>bar</span>,
      },
    ];
    const { container } = render(<Accordion id="accordion" items={items} />);
    expect(await axe(container)).toHaveNoViolations();
  });

  test('should render with given props', () => {
    const items = [
      {
        id: 'item-1',
        label: 'foo',
        expanded: false,
        child: <span>bar</span>,
      },
    ];
    render(<Accordion id="accordion" items={items} />);

    expect(screen.getByText('foo')).toBeVisible();
    expect(screen.getByText('bar')).not.toBeVisible();

    fireEvent.click(screen.getByTestId('accordion-button'));

    expect(screen.getByText('bar')).toBeVisible();
  });

  test('should render with expanded', () => {
    const items = [
      {
        id: 'item-1',
        label: 'foo',
        expanded: true,
        child: <span>bar</span>,
      },
    ];
    render(<Accordion id="accordion" items={items} />);

    expect(screen.getByText('foo')).toBeVisible();
    expect(screen.getByText('bar')).toBeVisible();

    fireEvent.click(screen.getByTestId('accordion-button'));

    expect(screen.getByText('bar')).not.toBeVisible();
  });

  test('should render with multi-select', () => {
    const items = [
      {
        id: 'item-1',
        label: 'foo',
        expanded: false,
        child: <span>bar</span>,
      },
    ];
    render(<Accordion id="accordion" items={items} allowMultiSelect={true} />);

    expect(screen.getByText('foo')).toBeVisible();
    expect(screen.getByText('bar')).not.toBeVisible();

    fireEvent.click(screen.getByTestId('accordion-button'));

    expect(screen.getByText('bar')).toBeVisible();
  });
});
