import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input } from "../index";
import { InputProps } from "../components/Input/Input";

const meta: ComponentMeta<typeof Input> = {
  title: "react-uswds/Input",
  component: Input,
};
export default meta;

const Template: ComponentStory<typeof Input> = (args: InputProps) => (
  <Input {...args} />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: "Input",
};

export const NumberInput = Template.bind({});
NumberInput.args = {
  placeholder: "Number Input",
  type: "number",
};

export const DateInput = Template.bind({});
DateInput.args = {
  placeholder: "Input",
  type: "date",
};

export const WithChangeEvent = Template.bind({});
WithChangeEvent.args = {
  placeholder: "Will alert on change...",
  onChange: (e: any) => alert(e.target.value),
};
