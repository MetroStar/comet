import { Meta, StoryFn } from '@storybook/react';
import React, { ChangeEvent, useState } from 'react';
import Label from '../label/label';
import { Select, SelectOption, SelectOptionProps, SelectProps } from './select';

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
  return { value: word.toLowerCase(), label: word } as SelectOptionProps;
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
};
