import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Label from "../label/label";
import { TextArea, TextAreaProps } from "./text-area";

const meta: ComponentMeta<typeof TextArea> = {
  title: "Components/Forms/Text Area",
  component: TextArea,
  argTypes: {
    id: { required: true },
    name: { required: true },
  },
};
export default meta;

const Template: ComponentStory<typeof TextArea> = (args: TextAreaProps) => (
  <>
    <Label htmlFor={args.id}>Text Area label</Label>
    <TextArea {...args} />
  </>
);

export const Standard = Template.bind({});
Standard.args = {
  id: "text-area-1",
  name: "text-area-1",
};

export const TextAreaWithDefaultValue = Template.bind({});
TextAreaWithDefaultValue.args = {
  id: "text-area-2",
  name: "text-area-2",
  defaultValue: "A long time ago in a galaxy far, far away....",
};

export const TextAreaWithRows = Template.bind({});
TextAreaWithRows.args = {
  id: "text-area-3",
  name: "text-area-3",
  rows: 2,
};
