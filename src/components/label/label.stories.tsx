import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Label } from "../label/label";
import { LabelProps } from "victory";

const meta: ComponentMeta<typeof Label> = {
  title: "Components/Forms/Label",
  component: Label,
  argTypes: {
    required: { type: "boolean" },
  },
};
export default meta;

const Template: ComponentStory<typeof Label> = (args: LabelProps) => (
  <Label>Label</Label>
);

export const Standard = Template.bind({});
Standard.args = {
  required: false,
};

const RequiredTemplate: ComponentStory<typeof Label> = (args: LabelProps) => (
  <Label required>Label</Label>
);

export const LabelWithRequired = RequiredTemplate.bind({});
LabelWithRequired.args = {
  required: true,
};
