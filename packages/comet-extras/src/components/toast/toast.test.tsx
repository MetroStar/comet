import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { Toast } from './toast'; // Assuming the Toast component is in the same directory

describe('Toast Component Tests', () => {
  test('should render with no accessibility violations', async () => {
    const { container } = render(
      <Toast id="test-accessibility-toast" message="Testing toast notification" />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  test('should render an info Toast notification', () => {
    const { container } = render(
      <Toast id="test-toast" message="Testing message for notification" type="info" />,
    );
    expect(container.querySelector('#test-toast')).toBeTruthy();
    expect(container.querySelector('#test-toast')).toHaveClass('toast--info');
  });

  test('should render a warning Toast notification', () => {
    const { container } = render(
      <Toast id="test-toast" message="Testing message for notification" type="warning" />,
    );
    expect(container.querySelector('#test-toast')).toBeTruthy();
    expect(container.querySelector('#test-toast')).toHaveClass('toast--warning');
  });

  test('should render a success Toast notification', () => {
    const { container } = render(
      <Toast id="test-toast" message="Testing message for notification" type="success" />,
    );
    expect(container.querySelector('#test-toast')).toBeTruthy();
    expect(container.querySelector('#test-toast')).toHaveClass('toast--success');
  });

  test('should render an error Toast notification', () => {
    const { container } = render(
      <Toast id="test-toast" message="Testing message for notification" type="error" />,
    );
    expect(container.querySelector('#test-toast')).toBeTruthy();
    expect(container.querySelector('#test-toast')).toHaveClass('toast--error');
  });

  test('should render an emergency Toast notification', () => {
    const { container } = render(
      <Toast id="test-toast" message="Testing message for notification" type="emergency" />,
    );
    expect(container.querySelector('#test-toast')).toBeTruthy();
    expect(container.querySelector('#test-toast')).toHaveClass('toast--emergency');
  });
});
