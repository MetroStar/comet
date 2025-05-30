import React from 'react';
import { Meta, StoryFn } from '@storybook/react-vite';
import { TextArea, TextAreaProps } from './text-area';

const meta: Meta<typeof TextArea> = {
  title: 'USWDS/Forms/Text Area',
  component: TextArea,
  argTypes: {
    id: { required: true },
    name: { required: true },
    rows: { control: 'number' },
    required: { control: 'boolean' },
    validationStatus: { control: 'select', options: ['error', 'success'] },
    disabled: { control: 'boolean' },
  },
};
export default meta;

const Template: StoryFn<typeof TextArea> = (args: TextAreaProps) => <TextArea {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  id: 'text-area-1',
  name: 'text-area-1',
  rows: 5,
  required: false,
  label: 'Text Area',
  helperText: 'Enter your text',
  disabled: false,
};

export const WithDefaultValue = Template.bind({});
WithDefaultValue.args = {
  id: 'text-area-2',
  name: 'text-area-2',
  defaultValue: 'A long time ago in a galaxy far, far away....',
};

export const WithErrors = Template.bind({});
WithErrors.args = {
  id: 'text-area-3',
  name: 'text-area-3',
  required: true,
  label: 'Text Area',
  helperText: 'Enter your text',
  errors: 'This field is required',
  validationStatus: 'error',
};
