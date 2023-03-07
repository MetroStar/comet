import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input } from "../index";
import { InputProps } from "../components/Input/Input";

const meta: ComponentMeta<typeof Input> = {
  title: "Components/Form Controls/Input",
  component: Input,
};
export default meta;

const Template: ComponentStory<typeof Input> = (args: InputProps) => (
  <Input {...args} />
);

export const Default = Template.bind({});
Default.args = {
  id: "input-1",
  type: "text",
  placeholder: "Input",
};

export const WithChangeEvent = Template.bind({});
WithChangeEvent.args = {
  id: "input-2",
  type: "text",
  placeholder: "Will alert on change...",
  onChange: (e: any) => alert(e.target.value),
};
