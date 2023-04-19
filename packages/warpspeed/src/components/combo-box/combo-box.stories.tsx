import { Meta, StoryFn } from '@storybook/react';
import React, { ChangeEvent, useState } from 'react';
import { ComboBox, ComboBoxOption, ComboBoxProps } from './combo-box';

const meta: Meta<typeof ComboBox> = {
  title: 'USWDS/Forms/Combo Box',
  component: ComboBox,
  argTypes: {
    id: { required: true },
    name: { required: true },
  },
};
export default meta;

const loremText =
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus explicabo magnam, harum eos repellat pariatur, quia itaque dolorum qui ipsa dolore sapiente tempore ipsum ut quibusdam esse natus, iusto mollitia.';
const loremWords = [...loremText.replace('.', '').replace(',', '').split(' ')];
const options = loremWords.map((word) => {
  return { value: word.toLowerCase(), label: word } as ComboBoxOption;
});

const ComboBoxWrapper: React.FC<ComboBoxProps> = (props: ComboBoxProps) => {
  const [selectedValue, setSelectedValue] = useState(props.defaultValue);
  const onChange = (event: ChangeEvent<HTMLSelectElement>): void =>
    setSelectedValue(event.target.value);
  return (
    <>
      <label className="usa-label" htmlFor={props.id}>
        Combo Box label
      </label>
      <ComboBox
        id={props.id}
        name={props.name}
        options={props.options}
        defaultValue={selectedValue}
        onChange={onChange}
      />
      <p>Selected value: {selectedValue}</p>
    </>
  );
};

const Template: StoryFn<typeof ComboBox> = (args: ComboBoxProps) => <ComboBoxWrapper {...args} />;

export const Standard = Template.bind({});
Standard.args = {
  id: 'combo-box-1',
  name: 'combo-box-1',
  options,
  placeholder: 'Select...',
  defaultValue: options[0].value,
};

export const NoDefault = Template.bind({});
NoDefault.args = {
  id: 'combo-box-1',
  name: 'combo-box-1',
  options,
  placeholder: 'Select...',
  defaultValue: '',
};
