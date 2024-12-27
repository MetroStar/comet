import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
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

  test('should render a Toast notification from the top left', () => {
    const { container } = render(
      <Toast
        id="test-toast"
        placement="topLeft"
        message="Testing message for notification"
        type="info"
      />,
    );
    expect(container.querySelector('#test-toast')).toBeTruthy();
    expect(container.querySelector('#test-toast')).toHaveClass('toast--topLeft');
  });

  test('should render a Toast notification from the bottom right', () => {
    const { container } = render(
      <Toast
        id="test-toast"
        placement="bottomRight"
        message="Testing message for notification"
        type="info"
      />,
    );
    expect(container.querySelector('#test-toast')).toBeTruthy();
    expect(container.querySelector('#test-toast')).toHaveClass('toast--bottomRight');
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

  test('clicking close button triggers onClose', async () => {
    vi.useFakeTimers();
    const handleClose = vi.fn();

    render(<Toast id="close-toast" message="Test message" onClose={handleClose} />);

    const closeButton = screen.getByRole('button');
    await fireEvent.click(closeButton);

    // Wait for the animation timeout (300ms in the component)
    vi.advanceTimersByTime(300);

    expect(handleClose).toHaveBeenCalled();
    vi.useRealTimers();
  });

  test('should wait for toast to disappear', async () => {
    const { container } = render(
      <Toast id="test-toast" message="Testing message for notification" type="info" duration={1} />,
    );
    expect(container.querySelector('#test-toast')).toBeTruthy();
    await waitFor(async () => {
      expect(container.querySelector('#test-toast')).not.toBeTruthy();
    });
  });
});
