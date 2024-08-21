import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Checkbox, CheckboxGroup, CheckboxGroupProps, CheckboxProps } from './checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'USWDS/Forms/Checkbox',
  component: Checkbox,
  argTypes: {
    id: { required: true },
    name: { required: true },
  },
};
export default meta;

const Template: StoryFn<typeof Checkbox> = (args: CheckboxProps) => (
  <Checkbox
    id={args.id}
    name={args.name}
    label={args.label}
    value={args.value}
    defaultChecked={args.defaultChecked}
    isTile={args.isTile}
  />
);

export const Single = Template.bind({});
Single.args = {
  id: 'lorem-checkbox',
  name: 'lorem-checkbox',
  label: 'Lorem',
  value: 'lorem',
  isTile: false,
  defaultChecked: true,
};

const loremWords = ['Lorem', 'Ipsum', 'Dolor', 'Sit'];

const GroupTemplate: StoryFn<typeof CheckboxGroup> = (args: CheckboxGroupProps) => (
  <CheckboxGroup {...args} />
);

export const Group = GroupTemplate.bind({});
Group.args = {
  id: 'checkbox-group',
  name: 'checkbox-group',
  data: loremWords.map((word, wordIndex) => ({
    label: word,
    value: word.toLowerCase(),
    defaultChecked: wordIndex === 0,
  })),
  areTiles: false,
  required: false,
  label: 'Options',
  helperText: 'Select from the list below',
};
