import { render, screen, fireEvent } from '@testing-library/react';
import Breadcrumb, { BreadcrumbItem } from './breadcrumb';

describe('Breadcrumb', () => {
  test('should render with given props and is callable', () => {
    const spy = vi.fn();
    const crumbs = [{ path: '/test', name: 'test', action: spy }];
    render(<Breadcrumb id="breadcrumb" items={crumbs} current="foo" action={spy} />);

    expect(screen.getByText('test')).toBeVisible();
    expect(screen.getByText('foo')).toBeVisible();

    fireEvent.click(screen.getByTestId('breadcrumb-link'));

    expect(spy).toHaveBeenCalledWith('/test');
  });

  test('should render when current is optional', () => {
    const spy = vi.fn();
    const crumbs = [{ path: '/test', name: 'test' }];
    render(<Breadcrumb id="breadcrumb" items={crumbs} action={spy} />);
  });

  test('should not render when no children or items are provided', () => {
    const spy = vi.fn();
    const { container } = render(<Breadcrumb id="breadcrumb" action={spy} />);
    expect(container.querySelector('#breadcrumb')).toBeFalsy();
  });

  test('should render with children', () => {
    const spy = vi.fn();
    const { container } = render(
      <Breadcrumb id="breadcrumb" action={spy}>
        <BreadcrumbItem path="/test" name="test" />
      </Breadcrumb>,
    );
    expect(container.querySelector('#breadcrumb')).toBeTruthy();
  });
});
