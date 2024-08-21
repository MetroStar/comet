import { render, screen, fireEvent } from '@testing-library/react';
import { axe } from 'jest-axe';
import TextInput from './text-input';

describe('Input', () => {
  test('should render with no accessibility violations', async () => {
    const { container } = render(<TextInput id="input" label="input" />);
    expect(await axe(container)).toHaveNoViolations();
  });

  test('should render successfully', () => {
    render(<TextInput id="input" />);
    const input = screen.getByTestId('input');
    expect(input).toHaveClass('usa-input');
  });

  test('should render with number type', () => {
    render(<TextInput id="input" type="number" />);
    const input = screen.getByTestId('input');
    expect(input).toHaveClass('usa-input');
    expect(input).toHaveAttribute('type', 'number');
  });

  test('should render with ssn mask', () => {
    render(<TextInput id="input" mask="ssn" />);
    const input = screen.getByTestId('input');
    expect(input).toHaveClass('usa-input');
    expect(input).toHaveClass('usa-masked');
  });

  test('should render with phone number mask', () => {
    render(<TextInput id="input" mask="phone_number" />);
    const input = screen.getByTestId('input');
    expect(input).toHaveClass('usa-input');
    expect(input).toHaveClass('usa-masked');
  });

  test('should render with a 5 digit zip mask', () => {
    render(<TextInput id="input" mask="zip_5_digit" />);
    const input = screen.getByTestId('input');
    expect(input).toHaveClass('usa-input');
    expect(input).toHaveClass('usa-masked');
  });

  test('should render with a 9 digit zip mask', () => {
    render(<TextInput id="input" mask="zip_9_digit" />);
    const input = screen.getByTestId('input');
    expect(input).toHaveClass('usa-input');
    expect(input).toHaveClass('usa-masked');
  });

  test('should render with a custom pattern', () => {
    render(<TextInput id="input" pattern="/hello/" />);
    const input = screen.getByTestId('input');
    expect(input).toHaveClass('usa-input');
    expect(input).toHaveAttribute('pattern', '/hello/');
  });

  test('should render with a custom input mode', () => {
    render(<TextInput id="input" inputMode="decimal" />);
    const input = screen.getByTestId('input');
    expect(input).toHaveClass('usa-input');
    expect(input).toHaveAttribute('inputMode', 'decimal');
  });

  test('should render with a prefix', () => {
    render(<TextInput id="input" prefix="pref" />);
    const input = screen.getByTestId('input');
    expect(input).toHaveClass('usa-input');
    expect(input.parentNode).toHaveClass('usa-input-group');
  });

  test('should render with a suffix', () => {
    render(<TextInput id="input" suffix="suff" />);
    const input = screen.getByTestId('input');
    expect(input).toHaveClass('usa-input');
    expect(input.parentNode).toHaveClass('usa-input-group');
  });

  test('Input renders with given props and callback works', () => {
    const spy = vi.fn();
    render(<TextInput id="input" placeholder="foo" onChange={spy} />);
    const input = screen.getByTestId('input');

    expect(input).toHaveClass('usa-input');

    fireEvent.change(input, { target: { value: 'bar' } });
    expect(spy).toHaveBeenCalled();
  });
});
