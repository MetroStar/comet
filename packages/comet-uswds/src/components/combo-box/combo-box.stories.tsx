import { Meta, StoryFn } from '@storybook/react-vite';
import React from 'react';
import { ComboBox, ComboBoxOptionProps, ComboBoxProps } from './combo-box';

const meta: Meta<typeof ComboBox> = {
  title: 'USWDS/Forms/Combo Box',
  component: ComboBox,
  argTypes: {
    id: { required: true },
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};
export default meta;

const loremText =
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus explicabo magnam, harum eos repellat pariatur, quia itaque dolorum qui ipsa dolore sapiente tempore ipsum ut quibusdam esse natus, iusto mollitia.';
const loremWords = [...loremText.replace('.', '').replace(',', '').split(' ')];
const options = loremWords.map((word) => {
  return { value: word.toLowerCase(), label: word } as ComboBoxOptionProps;
});

const Template: StoryFn<typeof ComboBox> = (args: ComboBoxProps) => <ComboBox {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  id: 'combo-box-1',
  name: 'combo-box-1',
  options,
  required: false,
  label: 'Options',
  helperText: 'Select from the list below',
  disabled: false,
  defaultValue: options[0].value,
};

export const NoDefault = Template.bind({});
NoDefault.args = {
  id: 'combo-box-1',
  name: 'combo-box-1',
  options,
  label: 'Pick one',
  defaultValue: '',
};
