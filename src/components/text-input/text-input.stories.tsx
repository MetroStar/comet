import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icon, TextInput } from '../../index';
import { TextInputProps } from './text-input';

const meta: ComponentMeta<typeof TextInput> = {
  title: 'Components/Forms/Text Input',
  component: TextInput,
  argTypes: {
    mask: { control: 'select' },
  },
};
export default meta;

const Template: ComponentStory<typeof TextInput> = (args: TextInputProps) => (
  <TextInput {...args} />
);

export const Standard = Template.bind({});
Standard.args = {
  id: 'input-1',
  type: 'text',
  placeholder: 'Input',
};

export const WithMask = Template.bind({});
WithMask.args = {
  id: 'input-2',
  type: 'text',
  mask: 'ssn',
};

export const WithPrefix = Template.bind({});
WithPrefix.args = {
  id: 'input-3',
  type: 'text',
  prefix: <Icon id="credit-card-icon" type="credit_card" />,
  'aria-label': 'input 3',
};

export const WithSuffix = Template.bind({});
WithSuffix.args = {
  id: 'input-4',
  type: 'text',
  suffix: 'lbs',
  'aria-label': 'input 4',
};

export const WithChangeEvent = Template.bind({});
WithChangeEvent.args = {
  id: 'input-5',
  type: 'text',
  placeholder: 'Will alert on change...',
  onChange: (e: any) => alert(e.target.value),
};
