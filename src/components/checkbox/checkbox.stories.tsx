import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Checkbox, CheckboxProps } from './checkbox';

const meta: ComponentMeta<typeof Checkbox> = {
  title: 'Components/Forms/Checkbox',
  component: Checkbox,
  argTypes: {
    id: { required: true },
    name: { required: true },
  },
};
export default meta;

const Template: ComponentStory<typeof Checkbox> = (args: CheckboxProps) => (
  <>
    {loremWords.map((word, wordIndex) => (
      <Checkbox
        id={`checkbox${wordIndex}`}
        name={checkboxName}
        label={word}
        value={word.toLowerCase()}
        checked={wordIndex === 0}
        key={wordIndex}
        isTile={args.isTile}
      />
    ))}
  </>
);

const checkboxName = 'lorem-checkbox';
const loremWords = ['Lorem', 'Ipsum', 'Dolor', 'Sit'];

export const Standard = Template.bind({});
Standard.args = {
  id: 'checkbox-1',
  name: 'checkbox-1',
  isTile: false,
};
