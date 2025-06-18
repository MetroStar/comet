import React from 'react';
import { Meta } from '@storybook/react-vite';
import Spinner, { SpinnerProps } from './spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Extras/Spinner',
  component: Spinner,
  argTypes: {
    id: { required: true },
    type: {
      control: 'select',
      options: ['tiny', 'small', 'medium', 'large'],
      defaultValue: 'medium',
    },
    textPosition: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      defaultValue: 'bottom',
    },
  },
};
export default meta;

export const Default = {
  args: {
    id: 'spinner',
    type: 'medium',
    loadingText: '',
    textPosition: 'bottom',
    className: '',
  },
  render: (args: SpinnerProps) => <Spinner {...args} />,
};
