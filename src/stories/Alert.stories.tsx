import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Alert } from "../index";
import { AlertProps } from "../components/Alert/Alert";

const meta: ComponentMeta<typeof Alert> = {
  title: "react-uswds/Alert",
  component: Alert,
};
export default meta;

const Template: ComponentStory<typeof Alert> = (args: AlertProps) => (
  <Alert {...args}>This is the alert body</Alert>
);

export const Default = Template.bind({});
Default.args = {
  show: true,
  type: "info",
  slim: true,
  // header: "An Alert...",
};
