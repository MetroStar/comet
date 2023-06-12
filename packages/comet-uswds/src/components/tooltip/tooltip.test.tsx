import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import Button from '../button';
import Tooltip from './tooltip';

describe('Tooltip', () => {
  test('should render with no accessibility violations', async () => {
    const { container } = render(
      <Tooltip label="tooltip">
        <Button id="button-1">Button with a tooltip</Button>
      </Tooltip>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  test('should render successfully', () => {
    const { baseElement } = render(
      <Tooltip label="tooltip">
        <Button id="button-1">Button with a tooltip</Button>
      </Tooltip>,
    );
    expect(baseElement).toBeTruthy();
  });

  test('should render a top tooltip successfully', () => {
    const { baseElement } = render(
      <Tooltip label="tooltip" position="top">
        <Button id="button-1">Button with a tooltip</Button>
      </Tooltip>,
    );
    const button = baseElement.querySelector('.usa-tooltip');
    const trigger = baseElement.querySelector('.usa-tooltip__trigger');

    expect(button).toBeTruthy();
    expect(trigger).toBeTruthy();
    expect(trigger?.getAttribute('data-position')).toEqual('top');
  });

  test('should render a right tooltip successfully', () => {
    const { baseElement } = render(
      <Tooltip label="tooltip" position="right">
        <Button id="button-1">Button with a tooltip</Button>
      </Tooltip>,
    );
    const button = baseElement.querySelector('.usa-tooltip');
    const trigger = baseElement.querySelector('.usa-tooltip__trigger');

    expect(button).toBeTruthy();
    expect(trigger).toBeTruthy();
    expect(trigger?.getAttribute('data-position')).toEqual('right');
  });

  test('should render a bottom tooltip successfully', () => {
    const { baseElement } = render(
      <Tooltip label="tooltip" position="bottom">
        <Button id="button-1">Button with a tooltip</Button>
      </Tooltip>,
    );
    const button = baseElement.querySelector('.usa-tooltip');
    const trigger = baseElement.querySelector('.usa-tooltip__trigger');

    expect(button).toBeTruthy();
    expect(trigger).toBeTruthy();
    expect(trigger?.getAttribute('data-position')).toEqual('bottom');
  });

  test('should render a left tooltip successfully', () => {
    const { baseElement } = render(
      <Tooltip label="tooltip" position="left">
        <Button id="button-1">Button with a tooltip</Button>
      </Tooltip>,
    );
    const button = baseElement.querySelector('.usa-tooltip');
    const trigger = baseElement.querySelector('.usa-tooltip__trigger');

    expect(button).toBeTruthy();
    expect(trigger).toBeTruthy();
    expect(trigger?.getAttribute('data-position')).toEqual('left');
  });
});
