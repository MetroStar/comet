import React from 'react';
import { Meta } from '@storybook/react-vite';
import { Button } from '../../index';
import { ButtonProps } from './button';

const meta: Meta<typeof Button> = {
  title: 'USWDS/Button',
  component: Button,
  argTypes: {
    id: { required: true },
    type: { control: 'select', required: true },
    variant: { control: 'select' },
    size: { control: 'select' },
    disabled: { control: 'boolean' },
  },
};
export default meta;

export const Default = {
  args: {
    id: 'button-1',
    type: 'button',
    variant: 'default',
    size: 'default',
    className: '',
    disabled: false,
  },
  render: (args: ButtonProps) => <Button {...args}>Button</Button>,
};
