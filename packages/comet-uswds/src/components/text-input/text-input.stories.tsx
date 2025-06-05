import React from 'react';
import { Meta } from '@storybook/react-vite';
import { Icon, TextInput } from '../../index';
import { TextInputProps } from './text-input';

const meta: Meta<typeof TextInput> = {
  title: 'USWDS/Forms/Text Input',
  component: TextInput,
  argTypes: {
    mask: { control: 'select' },
    validationStatus: { control: 'select', options: ['error', 'success'] },
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};
export default meta;

export const Standard = {
  args: {
    id: 'input-standard',
    type: 'text',
    required: false,
    label: 'Input',
    helperText: 'Enter your input',
    disabled: false,
  },
  render: (args: TextInputProps) => <TextInput {...args} />,
};

export const WithErrors = {
  args: {
    id: 'input-errors',
    type: 'text',
    required: true,
    label: 'Input',
    helperText: 'Enter your input',
    errors: 'This field is required',
    validationStatus: 'error',
  },
  render: (args: TextInputProps) => <TextInput {...args} />,
};

export const WithMask = {
  args: {
    id: 'input-mask',
    type: 'text',
    mask: 'ssn',
  },
  render: (args: TextInputProps) => <TextInput {...args} />,
};

export const WithPrefix = {
  args: {
    id: 'input-prefix',
    type: 'text',
    prefix: <Icon id="credit-card-icon" type="credit_card" />,
    'aria-label': 'Input credit card',
  },
  render: (args: TextInputProps) => <TextInput {...args} />,
};

export const WithSuffix = {
  args: {
    id: 'input-suffix',
    type: 'number',
    suffix: 'lbs',
    'aria-label': 'Input pounds',
  },
  render: (args: TextInputProps) => <TextInput {...args} />,
};

export const WithChangeEvent = {
  args: {
    id: 'input-change-event',
    type: 'text',
    placeholder: 'Will alert on change...',
    onChange: (e: any) => alert(e.target.value),
  },
  render: (args: TextInputProps) => <TextInput {...args} />,
};
