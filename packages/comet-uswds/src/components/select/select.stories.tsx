import { Meta, StoryFn } from '@storybook/react';
import React, { ChangeEvent, useState } from 'react';
import Label from '../label/label';
import { Select, SelectOption, SelectProps } from './select';

const meta: Meta<typeof Select> = {
  title: 'USWDS/Forms/Select',
  component: Select,
  argTypes: {
    id: { required: true },
    name: { required: true },
  },
};
export default meta;

const loremWords = ['Lorem', 'Ipsum', 'Dolor', 'Sit'];
const options = loremWords.map((word) => {
  return { value: word.toLowerCase(), label: word } as SelectOption;
});

const SelectWrapper: React.FC<SelectProps> = (props: SelectProps) => {
  const [selectedValue, setSelectedValue] = useState('');
  const onChange = (event: ChangeEvent<HTMLSelectElement>): void =>
    setSelectedValue(event.target.value);
  return (
    <>
      <Label htmlFor={props.id}>Select label</Label>
      <Select id={props.id} name={props.name} options={props.options} onChange={onChange} />
      <p>Selected value: {selectedValue}</p>
    </>
  );
};

const Template: StoryFn<typeof Select> = (args: SelectProps) => <SelectWrapper {...args} />;
export const Standard = Template.bind({});
Standard.args = {
  id: 'select-1',
  name: 'select-1',
  options,
};
