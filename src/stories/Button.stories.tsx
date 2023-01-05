import React, { ReactEventHandler } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "../index";
import { ButtonProps } from "../components/Button/Button";

const meta: ComponentMeta<typeof Button> = {
  title: "react-uswds/Button",
  component: Button,
};
export default meta;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <Button {...args}>Button</Button>
);

export const Default = Template.bind({});
Default.args = {};

export const WithAction = Template.bind({});
WithAction.args = {
  onClick: (e: ReactEventHandler<HTMLButtonElement>) => alert("Clicked!"),
};

export const WithVariant = Template.bind({});
WithVariant.args = {
  variant: "outline",
};
