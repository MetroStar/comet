import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '../button/button';
import { Tooltip, TooltipProps } from './tooltip';

const meta: ComponentMeta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  argTypes: {
    id: { required: true },
    label: { required: true },
    position: { control: "radio", required: true },
  },
};
export default meta;

const Template: ComponentStory<typeof Tooltip> = (args: TooltipProps) => (
  <Tooltip {...args}>
    <Button id="button">Button with a tooltip on the {args.position}</Button>
  </Tooltip>
);

export const Default = Template.bind({});
Default.args = {
  id: "tooltip-1",
  position: "top",
  label: "Tooltip text"
};
