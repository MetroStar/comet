import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FileInput, FileInputProps } from './file-input';

const meta: ComponentMeta<typeof FileInput> = {
  title: 'Components/Forms/File Input',
  component: FileInput,
  argTypes: {
    id: { required: true },
    name: { required: true },
    multiple: { type: 'boolean' },
  },
};
export default meta;

const Template: ComponentStory<typeof FileInput> = (args: FileInputProps) => (
  <div className="usa-form-group">
    <label className="usa-label" htmlFor={args.id}>
      Input accepts a single file
    </label>
    <FileInput id={args.id} name={args.name} />
  </div>
);

export const Standard = Template.bind({});
Standard.args = {
  id: 'file-input-1',
  name: 'file-input-1',
  multiple: false,
};

const MultipleTemplate: ComponentStory<typeof FileInput> = (args: FileInputProps) => (
  <div className="usa-form-group">
    <label className="usa-label" htmlFor={args.id}>
      Input accepts a multiple files
    </label>
    <FileInput id={args.id} name={args.name} multiple />
  </div>
);

export const Multiple = MultipleTemplate.bind({});
Multiple.args = {
  id: 'file-input-2',
  name: 'file-input-2',
  multiple: true,
};
