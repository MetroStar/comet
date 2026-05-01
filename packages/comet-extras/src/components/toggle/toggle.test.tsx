import { render, fireEvent, screen } from '@testing-library/react';
import { Toggle } from './toggle'; // Assuming the Toggle component is in the same directory

describe('Toggle Component Tests', () => {
  // Test to check if the Toggle renders correctly
  test('renders the Toggle component', () => {
    render(<Toggle id="test-toggle" onChange={() => {}} />);

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  // Test to check if onChange is called when clicked
  test('calls onChange when clicked', () => {
    const handleChange = vi.fn();
    render(<Toggle id="test-toggle" checked={false} onChange={handleChange} />);
    const toggle = screen.getByRole('checkbox');
    fireEvent.click(toggle);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  // Test to check if the toggle renders as checked when checked prop is true
  test('renders as checked when checked prop is true', () => {
    render(<Toggle id="test-toggle" checked={true} onChange={() => {}} />);
    const toggle = screen.getByRole('checkbox');
    expect(toggle).toBeChecked();
  });

  // Test to check if the toggle renders as unchecked when checked prop is false
  test('renders as unchecked when checked prop is false', () => {
    render(<Toggle id="test-toggle" checked={false} onChange={() => {}} />);
    const toggle = screen.getByRole('checkbox');
    expect(toggle).not.toBeChecked();
  });

  // Test to check if optional props like label are rendered correctly
  test('renders label correctly when provided', () => {
    const testLabel = 'Test Label';
    render(<Toggle id="test-toggle" label={testLabel} onChange={() => {}} />);
    expect(screen.getByText(testLabel)).toBeInTheDocument();
  });

  // Test uncontrolled mode - toggle works without checked prop
  test('works in uncontrolled mode without checked prop', () => {
    render(<Toggle id="test-toggle" />);
    const toggle = screen.getByRole('checkbox');

    // Initially unchecked
    expect(toggle).not.toBeChecked();

    // Click to check
    fireEvent.click(toggle);
    expect(toggle).toBeChecked();

    // Click to uncheck
    fireEvent.click(toggle);
    expect(toggle).not.toBeChecked();
  });
});
