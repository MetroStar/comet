import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { axe } from 'jest-axe';
import Header from './header';

const folding = [
  {
    label: 'Fruits',
    items: [
      {
        label: 'Orange',
        path: '/orange',
      },
    ],
  },
];

const simple = [
  {
    label: 'Bat',
    path: '/bat',
  },
];

test('should render with no accessibility violations', async () => {
  const { container } = render(<Header folding={folding} simple={simple} showSearch={true} />);
  expect(await axe(container)).toHaveNoViolations();
});

test('Header renders with given props and invokes folded menu', () => {
  render(<Header folding={folding} simple={simple} showSearch={true} />);

  expect(screen.getByText('Bat')).toBeVisible();

  const foldContent = screen.getByTestId('folding');
  const foldControl = screen.getByTestId('fold-control');
  expect(foldContent).toHaveClass('folded-hide');
  fireEvent.click(foldControl);
  expect(foldContent).toHaveClass('folded-show');
});

test('Header renders with nothing', () => {
  render(<Header />);
});

test('Header invokes navigation callback', () => {
  const navSpy = jest.fn();
  render(<Header folding={folding} simple={simple} onNavigate={navSpy} />);
  const foldControl = screen.getByTestId('fold-control');
  fireEvent.click(foldControl);
  fireEvent.click(screen.getByText('Orange'));
  expect(navSpy).toHaveBeenCalledWith('/orange');
});

test('Header invokes search callback', () => {
  const searchSpy = jest.fn();
  render(<Header folding={folding} simple={simple} showSearch={true} onSearch={searchSpy} />);

  fireEvent.change(screen.getByTestId('search'), { target: { value: 'foo' } });
  fireEvent.click(screen.getByTestId('search-button'));

  expect(searchSpy).toHaveBeenLastCalledWith('foo');
});

test('Invoke default callbacks', () => {
  render(<Header folding={folding} simple={simple} showSearch={true} />);

  // Default search callback
  fireEvent.change(screen.getByTestId('search'), { target: { value: 'foo' } });
  fireEvent.click(screen.getByTestId('search-button'));
  // Default navigate callback
  fireEvent.click(screen.getByText('Bat'));
});
