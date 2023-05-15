import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Breadcrumb from './breadcrumb';

describe('Breadcrum', () => {
  test('should render with given props and is callable', () => {
    const spy = jest.fn();
    const crumbs = [{ path: '/test', name: 'test' }];
    render(<Breadcrumb id="breadcrumb" crumbs={crumbs} current="foo" action={spy} />);

    expect(screen.getByText('test')).toBeVisible();
    expect(screen.getByText('foo')).toBeVisible();

    fireEvent.click(screen.getByTestId('breadcrumb-link'));

    expect(spy).toHaveBeenCalledWith('/test');
  });

  test('should render when current is optional', () => {
    const spy = jest.fn();
    const crumbs = [{ path: '/test', name: 'test' }];
    render(<Breadcrumb id="breadcrumb" crumbs={crumbs} action={spy} />);
  });
});
