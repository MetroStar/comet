import React from 'react';
import { Meta } from '@storybook/react-vite';
import Toggle, { ToggleProps } from './toggle';

export default {
  title: 'Extras/Toggle',
  component: Toggle,
  argTypes: {
    id: { control: 'text' },
    name: { control: 'text' },
    checked: { control: 'boolean' },
    label: { control: 'text' },
    ariaLabel: { control: 'text' },
    onChange: { action: 'changed' },
  },
} as Meta<ToggleProps>;

export const Default = {
  args: {
    id: 'toggle',
    name: 'toggle',
    checked: false,
    label: 'Toggle',
    ariaLabel: 'Toggle button',
  },
  render: (args: ToggleProps) => <Toggle {...args} />,
};

export const Checked = {
  args: {
    id: 'toggle',
    name: 'toggle',
    checked: true,
    label: 'Checked Toggle',
    ariaLabel: 'Checked toggle button',
  },
  render: (args: ToggleProps) => <Toggle {...args} />,
};
