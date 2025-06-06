import React from 'react';
import { Meta } from '@storybook/react-vite';
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

export const Single = {
  args: {
    id: 'lorem-checkbox',
    name: 'lorem-checkbox',
    label: 'Lorem',
    value: 'lorem',
    isTile: false,
    defaultChecked: true,
  },
  render: (args: CheckboxProps) => (
    <Checkbox
      id={args.id}
      name={args.name}
      label={args.label}
      value={args.value}
      defaultChecked={args.defaultChecked}
      isTile={args.isTile}
    />
  ),
};

const loremWords = ['Lorem', 'Ipsum', 'Dolor', 'Sit'];

export const Group = {
  args: {
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
  },
  render: (args: CheckboxGroupProps) => <CheckboxGroup {...args} />,
};
