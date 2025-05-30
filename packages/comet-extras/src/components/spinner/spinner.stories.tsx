import React from 'react';
import { Meta, StoryFn } from '@storybook/react-vite';
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

const Template: StoryFn<typeof Spinner> = (args: SpinnerProps) => <Spinner {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'spinner',
  type: 'large',
  loadingText: 'Loading...',
  className: '',
};
