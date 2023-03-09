import React from 'react';
import { render } from '@testing-library/react';

import Tooltip from './tooltip';

describe('Tooltip', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Tooltip id="tooltip-1" label="tooltip">Some element</Tooltip>
    );
    expect(baseElement).toBeTruthy();
  });
  it('should render a top tooltip successfully', () => {
    const { baseElement } = render(
      <Tooltip id="tooltip-1" label="tooltip" position="top">
        Some element
      </Tooltip>
    );
    const button = baseElement.querySelector('.usa-tooltip');
    const trigger = baseElement.querySelector('.usa-tooltip__trigger');

    expect(button).toBeTruthy();
    expect(trigger).toBeTruthy();
    expect(trigger?.getAttribute('data-position')).toEqual('top');
  });
  it('should render a right tooltip successfully', () => {
    const { baseElement } = render(
      <Tooltip id="tooltip-1" label="tooltip" position="right">
        Some element
      </Tooltip>
    );
    const button = baseElement.querySelector('.usa-tooltip');
    const trigger = baseElement.querySelector('.usa-tooltip__trigger');

    expect(button).toBeTruthy();
    expect(trigger).toBeTruthy();
    expect(trigger?.getAttribute('data-position')).toEqual('right');
  });
  it('should render a bottom tooltip successfully', () => {
    const { baseElement } = render(
      <Tooltip id="tooltip-1" label="tooltip" position="bottom">
        Some element
      </Tooltip>
    );
    const button = baseElement.querySelector('.usa-tooltip');
    const trigger = baseElement.querySelector('.usa-tooltip__trigger');

    expect(button).toBeTruthy();
    expect(trigger).toBeTruthy();
    expect(trigger?.getAttribute('data-position')).toEqual('bottom');
  });
  it('should render a left tooltip successfully', () => {
    const { baseElement } = render(
      <Tooltip id="tooltip-1" label="tooltip" position="left">
        Some element
      </Tooltip>
    );
    const button = baseElement.querySelector('.usa-tooltip');
    const trigger = baseElement.querySelector('.usa-tooltip__trigger');

    expect(button).toBeTruthy();
    expect(trigger).toBeTruthy();
    expect(trigger?.getAttribute('data-position')).toEqual('left');
  });
});
