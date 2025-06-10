import { render, screen, fireEvent } from '@testing-library/react';
import Accordion from './accordion';

describe('Accordion', () => {
  test('should render with given props', () => {
    const items = [
      {
        id: 'item-1',
        label: 'foo',
        expanded: false,
        children: <span>bar</span>,
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
        children: <span>bar</span>,
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
        children: <span>bar</span>,
      },
    ];
    render(<Accordion id="accordion" items={items} allowMultiSelect={true} />);

    expect(screen.getByText('foo')).toBeVisible();
    expect(screen.getByText('bar')).not.toBeVisible();

    fireEvent.click(screen.getByTestId('accordion-button'));

    expect(screen.getByText('bar')).toBeVisible();
  });

  test('should not render when no items or children are provided', () => {
    const { container } = render(<Accordion id="accordion" />);
    expect(container.querySelector('#accordion')).toBeFalsy();
  });
});
