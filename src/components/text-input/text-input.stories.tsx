import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TextInput } from "../../index";
import { TextInputProps } from "./text-input";

const meta: ComponentMeta<typeof TextInput> = {
  title: "Components/Forms/Text Input",
  component: TextInput,
};
export default meta;

const Template: ComponentStory<typeof TextInput> = (args: TextInputProps) => (
  <TextInput {...args} />
);

export const Standard = Template.bind({});
Standard.args = {
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
