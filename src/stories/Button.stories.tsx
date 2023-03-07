import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "../index";
import { ButtonProps } from "../components/Button/Button";

const meta: ComponentMeta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    id: { required: true },
    type: { control: "select", required: true },
    variant: { control: "select" },
    disabled: { control: "boolean" },
  },
};
export default meta;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <Button {...args}>Button</Button>
);

export const Default = Template.bind({});
Default.args = {
  id: "button-1",
  type: "button",
  variant: "default",
  className: "",
  disabled: false,
};
