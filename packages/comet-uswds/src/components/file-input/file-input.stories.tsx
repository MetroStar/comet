import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { FileInput, FileInputProps } from './file-input';

const meta: Meta<typeof FileInput> = {
  title: 'USWDS/Forms/File Input',
  component: FileInput,
  argTypes: {
    id: { required: true },
    name: { required: true },
    multiple: { type: 'boolean' },
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};
export default meta;

const Template: StoryFn<typeof FileInput> = (args: FileInputProps) => <FileInput {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  id: 'file-input-1',
  name: 'file-input-1',
  multiple: false,
  required: false,
  label: 'Select a file',
  helperText: 'Input accepts a single file',
  disabled: false,
};

export const Multiple = Template.bind({});
Multiple.args = {
  id: 'file-input-2',
  name: 'file-input-2',
  multiple: true,
  required: false,
  label: 'Select files',
  helperText: 'Input accepts multiple files',
  disabled: false,
};
