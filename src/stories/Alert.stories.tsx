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
  <div className="width-desktop">
    <Alert {...args}>This is the alert body</Alert>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  show: true,
  type: "info",
  slim: false,
  // header: "An Alert...",
};
