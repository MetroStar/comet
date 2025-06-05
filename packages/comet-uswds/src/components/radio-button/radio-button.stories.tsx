import React from 'react';
import { Meta } from '@storybook/react-vite';
import {
  RadioButton,
  RadioButtonGroup,
  RadioButtonGroupProps,
  RadioButtonProps,
} from './radio-button';

const meta: Meta<typeof RadioButton> = {
  title: 'USWDS/Forms/Radio Button',
  component: RadioButton,
  argTypes: {
    id: { required: true },
    name: { required: true },
  },
};
export default meta;

export const Single = {
  args: {
    id: 'lorem-radio-button',
    name: 'lorem-radio-button',
    label: 'Lorem',
    value: 'lorem',
    isTile: false,
    defaultChecked: true,
  },
  render: (args: RadioButtonProps) => (
    <RadioButton
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
    id: 'radio-group',
    name: 'radio-group',
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
  render: (args: RadioButtonGroupProps) => <RadioButtonGroup {...args} />,
};
