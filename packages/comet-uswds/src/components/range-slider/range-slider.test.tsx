import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { axe } from 'jest-axe';
import RangeSlider from './range-slider';

describe('Range slider', () => {
  const defaultId = 'range-slider';

  test('should render with no accessibility violations', async () => {
    const { container } = render(
      <RangeSlider id={defaultId} name={defaultId} aria-label="slider" />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  test('should render a range slider successfully', () => {
    const { baseElement } = render(<RangeSlider id={defaultId} name={defaultId} />);
    expect(baseElement).toBeTruthy();
    expect(baseElement.querySelector('.usa-range')).toBeTruthy();
  });

  test('should render a range slider with min, max, and step successfully', () => {
    const { baseElement } = render(
      <RangeSlider id={defaultId} name={defaultId} minValue="0" maxValue="100" step="10" />,
    );
    expect(baseElement).toBeTruthy();
    expect(baseElement.querySelector('#range-slider')?.getAttribute('min')).toEqual('0');
    expect(baseElement.querySelector('#range-slider')?.getAttribute('max')).toEqual('100');
  });

  test('should render a range slider with a default value', () => {
    const { baseElement } = render(
      <RangeSlider id={defaultId} name={defaultId} defaultValue="20" />,
    );
    expect(baseElement).toBeTruthy();
    expect(baseElement.querySelector('#range-slider')?.getAttribute('value')).toEqual('20');
  });

  test('should change the value of the slider', () => {
    const spy = vi.fn();
    const { baseElement } = render(
      <RangeSlider id={defaultId} name={defaultId} defaultValue="20" onChange={spy} />,
    );

    const input = baseElement.querySelector('#range-slider') as HTMLInputElement;
    fireEvent.change(input, { target: { value: '30' } });
    expect(baseElement).toBeTruthy();
    expect(spy).toHaveBeenCalled();
  });
});
