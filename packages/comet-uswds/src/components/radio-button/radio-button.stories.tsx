import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { RadioButton, RadioButtonProps } from './radio-button';

const meta: Meta<typeof RadioButton> = {
  title: 'USWDS/Forms/Radio Button',
  component: RadioButton,
  argTypes: {
    id: { required: true },
    name: { required: true },
    isTile: { type: 'boolean' },
  },
};
export default meta;

const radioButtonName = 'lorem-radio-button';
const loremWords = ['Lorem', 'Ipsum', 'Dolor', 'Sit'];

const Template: StoryFn<typeof RadioButton> = (args: RadioButtonProps) => (
  <>
    {loremWords.map((word, wordIndex) => (
      <RadioButton
        id={`radio-button${wordIndex}`}
        name={radioButtonName}
        label={word}
        value={word.toLowerCase()}
        checked={wordIndex === 0}
        key={wordIndex}
        isTile={args.isTile}
      />
    ))}
  </>
);

export const Standard = Template.bind({});
Standard.args = {
  id: 'radio-button-1',
  name: 'radio-button-1',
  isTile: false,
};

const SingleTemplate: StoryFn<typeof RadioButton> = (args: RadioButtonProps) => (
  <RadioButton
    id={radioButtonName}
    name={radioButtonName}
    label={args.label}
    value={args.value}
    checked={args.checked}
    defaultChecked={args.defaultChecked}
    isTile={args.isTile}
  />
);

export const Single = SingleTemplate.bind({});
Single.args = {
  id: 'radio-button-1',
  name: 'radio-button-1',
  label: 'Lorem',
  value: 'lorem',
  isTile: false,
  defaultChecked: true,
};
