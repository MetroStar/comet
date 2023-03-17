import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { RadioButton, RadioButtonProps } from './radio-button';

const meta: ComponentMeta<typeof RadioButton> = {
  title: 'Components/Forms/Radio Button',
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

const Template: ComponentStory<typeof RadioButton> = (args: RadioButtonProps) => (
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
