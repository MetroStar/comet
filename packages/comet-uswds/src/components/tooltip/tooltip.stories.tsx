import React from 'react';
import { Meta, StoryFn } from '@storybook/react-vite';
import { Button } from '../button/button';
import { Tooltip, TooltipProps } from './tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'USWDS/Tooltip',
  component: Tooltip,
  argTypes: {
    label: { required: true },
    position: { control: false },
  },
};
export default meta;

const Template: StoryFn<typeof Tooltip> = (args: TooltipProps) => (
  <Tooltip {...args}>
    <Button id="button">Button with a tooltip {args.position}</Button>
  </Tooltip>
);

export const TooltipTop = Template.bind({});
TooltipTop.args = {
  position: 'top',
  label: 'Tooltip text',
};

export const TooltipRight = Template.bind({});
TooltipRight.args = {
  position: 'right',
  label: 'Tooltip text',
};

export const TooltipBottom = Template.bind({});
TooltipBottom.args = {
  position: 'bottom',
  label: 'Tooltip text',
};

export const TooltipLeft = Template.bind({});
TooltipLeft.args = {
  position: 'left',
  label: 'Tooltip text',
};
