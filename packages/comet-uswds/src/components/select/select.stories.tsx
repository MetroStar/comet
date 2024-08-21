import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { Select, SelectOption, SelectOptionProps, SelectProps } from './select';

const meta: Meta<typeof Select> = {
  title: 'USWDS/Forms/Select',
  component: Select,
  argTypes: {
    id: { required: true },
    name: { required: true },
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};
export default meta;

const loremWords = ['Lorem', 'Ipsum', 'Dolor', 'Sit'];
const options = loremWords.map((word) => {
  return { value: word.toLowerCase(), label: word } as SelectOptionProps;
});

const Template: StoryFn<typeof Select> = (args: SelectProps) => <Select {...args} />;
export const Standard = Template.bind({});
Standard.args = {
  id: 'select-1',
  name: 'select-1',
  options,
  required: false,
  label: 'Options',
  helperText: 'Select from the list below',
  disabled: false,
};

export const WithErrors = Template.bind({});
WithErrors.args = {
  id: 'select-1',
  name: 'select-1',
  options,
  required: false,
  label: 'Options',
  helperText: 'Select from the list below',
  errors: 'This field is required',
};

const ChildrenTemplate: StoryFn<typeof Select> = (args: SelectProps) => (
  <Select {...args}>
    <SelectOption value="1" label="Item 1" />
    <SelectOption value="2" label="Item 2" />
    <SelectOption value="3" label="Item 3" />
  </Select>
);

export const WithChildren = ChildrenTemplate.bind({});
WithChildren.args = {
  id: 'select-2',
  name: 'select-2',
  label: 'Options',
  helperText: 'Select from the list below',
};
