import React, { useState } from 'react';
import { Meta } from '@storybook/react-vite';
import Toggle, { ToggleProps } from './toggle';

export default {
  title: 'Extras/Toggle',
  component: Toggle,
  argTypes: {
    id: { control: 'text' },
    name: { control: 'text' },
    label: { control: 'text' },
    ariaLabel: { control: 'text' },
    onChange: { action: 'changed' },
  },
} as Meta<ToggleProps>;

export const Default = {
  args: {
    id: 'toggle',
    name: 'toggle',
    label: 'Toggle',
    ariaLabel: 'Toggle button',
  },
  render: (args: ToggleProps) => <Toggle {...args} />,
};

export const WithLabel = {
  args: {
    id: 'toggle-with-label',
    name: 'toggle',
    label: 'Enable notifications',
    ariaLabel: 'Enable notifications',
  },
  render: (args: ToggleProps) => <Toggle {...args} />,
};

export const Controlled = {
  args: {
    id: 'toggle-controlled',
    name: 'toggle',
    label: 'Controlled Toggle',
    ariaLabel: 'Controlled toggle button',
  },
  render: (args: ToggleProps) => {
    const [checked, setChecked] = useState(false);
    return (
      <Toggle
        {...args}
        checked={checked}
        onChange={(e) => {
          setChecked(e.target.checked);
          args.onChange?.(e);
        }}
      />
    );
  },
};

export const ControlledChecked = {
  args: {
    id: 'toggle-controlled-checked',
    name: 'toggle',
    label: 'Controlled Toggle (Initially Checked)',
    ariaLabel: 'Controlled toggle button initially checked',
  },
  render: (args: ToggleProps) => {
    const [checked, setChecked] = useState(true);
    return (
      <Toggle
        {...args}
        checked={checked}
        onChange={(e) => {
          setChecked(e.target.checked);
          args.onChange?.(e);
        }}
      />
    );
  },
};
