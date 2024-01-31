import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Toggle, ToggleProps } from './toggle'; // Assuming the Toggle component is in the same directory

describe('Toggle Component Tests', () => {
  // Test to check if the Toggle renders correctly
  test('renders the Toggle component', () => {
    render(<Toggle id="test-toggle" />);

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  // Test to check if onChange is called and state changes on click
  test('calls onChange and changes state when clicked', () => {
    const handleChange = jest.fn();
    render(<Toggle id="test-toggle" onChange={handleChange} />);
    const toggle = screen.getByRole('checkbox');
    fireEvent.click(toggle);
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(toggle).toBeChecked();
  });

  // Test to check if optional props like label are rendered correctly
  test('renders label correctly when provided', () => {
    const testLabel = 'Test Label';
    render(<Toggle id="test-toggle" label={testLabel} />);
    expect(screen.getByText(testLabel)).toBeInTheDocument();
  });
});
