import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
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

const Template: StoryFn<typeof TextInput> = (args: TextInputProps) => <TextInput {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  id: 'input-standard',
  type: 'text',
  required: false,
  label: 'Input',
  helperText: 'Enter your input',
  disabled: false,
};

const ErrorTemplate: StoryFn<typeof TextInput> = (args: TextInputProps) => (
  <div className="padding-left-1">
    <TextInput {...args} />
  </div>
);

export const WithErrors = ErrorTemplate.bind({});
WithErrors.args = {
  id: 'input-errors',
  type: 'text',
  required: true,
  label: 'Input',
  helperText: 'Enter your input',
  errors: 'This field is required',
  validationStatus: 'error',
};

export const WithMask = Template.bind({});
WithMask.args = {
  id: 'input-mask',
  type: 'text',
  mask: 'ssn',
};

export const WithPrefix = Template.bind({});
WithPrefix.args = {
  id: 'input-prefix',
  type: 'text',
  prefix: <Icon id="credit-card-icon" type="credit_card" />,
  'aria-label': 'Input credit card',
};

export const WithSuffix = Template.bind({});
WithSuffix.args = {
  id: 'input-suffix',
  type: 'number',
  suffix: 'lbs',
  'aria-label': 'Input pounds',
};

export const WithChangeEvent = Template.bind({});
WithChangeEvent.args = {
  id: 'input-change-event',
  type: 'text',
  placeholder: 'Will alert on change...',
  onChange: (e: any) => alert(e.target.value),
};
