import React from 'react';
import { Meta } from '@storybook/react-vite';
import Spinner, { SpinnerProps } from './spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Extras/Spinner',
  component: Spinner,
  argTypes: {
    id: { required: true },
    type: { control: 'select' },
  },
};
export default meta;

export const Default = {
  args: {
    id: 'spinner',
    type: 'large',
    loadingText: 'Loading...',
    className: '',
  },
  render: (args: SpinnerProps) => <Spinner {...args} />,
};
