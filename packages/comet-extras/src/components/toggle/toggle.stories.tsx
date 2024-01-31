import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
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

const Template: StoryFn<ToggleProps> = (args) => <Toggle {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'toggle',
  name: 'toggle',
  checked: false,
  label: 'Toggle',
  ariaLabel: 'Toggle button',
};

export const Checked = Template.bind({});
Checked.args = {
  ...Default.args,
  checked: true,
  label: 'Checked Toggle',
  ariaLabel: 'Checked toggle button',
};
