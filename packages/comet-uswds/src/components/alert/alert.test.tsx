import { act, fireEvent, render } from '@testing-library/react';
import Alert from './alert';

describe('Alert', () => {
  test('should render a default alert', async () => {
    const { container } = render(<Alert id="alert" type="info" />);
    expect(container.querySelector('#alert')).toHaveClass('usa-alert--info');
  });

  test('should render a warning alert', () => {
    const { container } = render(<Alert id="alert" type="warning" />);
    expect(container.querySelector('#alert')).toHaveClass('usa-alert--warning');
  });

  test('should render an error alert', () => {
    const { container } = render(<Alert id="alert" type="error" />);
    expect(container.querySelector('#alert')).toHaveClass('usa-alert--error');
  });

  test('should render a success alert', () => {
    const { container } = render(<Alert id="alert" type="success" />);
    expect(container.querySelector('#alert')).toHaveClass('usa-alert--success');
  });

  test('should render an emergency alert', () => {
    const { container } = render(<Alert id="alert" type="emergency" />);
    expect(container.querySelector('#alert')).toHaveClass('usa-alert--emergency');
  });

  test('should render a slim alert', () => {
    const { container } = render(<Alert id="alert" type="info" slim={true} />);
    expect(container.querySelector('#alert')).toHaveClass('usa-alert--slim');
  });

  test('should render an alert with no icon', () => {
    const { container } = render(<Alert id="alert" type="info" noIcon={true} />);
    expect(container.querySelector('#alert')).toHaveClass('usa-alert--no-icon');
  });

  test('should render an alert with heading', () => {
    const { container } = render(<Alert id="alert" type="info" heading="some heading" />);
    expect(container.querySelector('.usa-alert__heading')).toBeTruthy();
  });

  test('should render a closable alert', () => {
    const { container } = render(<Alert id="alert" type="info" allowClose={true} />);
    const button = container.querySelector('.usa-button');
    expect(button).toBeTruthy();
    expect(button).toHaveAttribute('aria-label', 'Close');
  });

  test('should allow closing an alert', async () => {
    const spy = vi.fn();
    const { container } = render(<Alert id="alert" type="info" allowClose={true} onClose={spy} />);
    const button = container.querySelector('.usa-button');
    expect(button).toBeTruthy();
    if (button) {
      await act(async () => {
        fireEvent.click(button);
      });
      expect(container.querySelector('#alert')).toBeFalsy();
      expect(spy).toHaveBeenCalled();
    }
  });

  test('should render an alert with body', () => {
    const { container } = render(
      <Alert id="alert" type="info" heading="some heading" body="Some body" />,
    );
    expect(container.querySelector('.usa-alert__body')).toBeTruthy();
  });

  test('should not render an alert', () => {
    const { container } = render(<Alert id="alert" type="info" show={false} />);
    expect(container.querySelector('#alert')).toBeFalsy();
  });
});
