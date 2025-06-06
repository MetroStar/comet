import React from 'react';
import { Meta } from '@storybook/react-vite';
import { Button } from '../button/button';
import { Tooltip, TooltipProps } from './tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'USWDS/Tooltip',
  component: Tooltip,
  argTypes: {
    label: { required: true },
    position: { control: 'select' },
  },
};
export default meta;

const renderTooltip = (args: TooltipProps) => (
  <Tooltip {...args}>
    <Button id="button">Button with a tooltip {args.position}</Button>
  </Tooltip>
);

export const TooltipTop = {
  args: {
    position: 'top',
    label: 'Tooltip text',
  },
  render: renderTooltip,
};

export const TooltipRight = {
  args: {
    position: 'right',
    label: 'Tooltip text',
  },
  render: renderTooltip,
};

export const TooltipBottom = {
  args: {
    position: 'bottom',
    label: 'Tooltip text',
  },
  render: renderTooltip,
};

export const TooltipLeft = {
  args: {
    position: 'left',
    label: 'Tooltip text',
  },
  render: renderTooltip,
};
