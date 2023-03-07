import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Alert } from "../../index";
import { AlertProps } from "./alert";

const meta: ComponentMeta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  argTypes: {
    id: { required: true },
    type: { control: "select", required: true },
  },
};
export default meta;

const Template: ComponentStory<typeof Alert> = (args: AlertProps) => (
  <div className="width-desktop">
    <Alert {...args}>This is the alert body</Alert>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  id: "alert-1",
  type: "info",
  slim: false,
  show: true,
  noIcon: false,
  heading: "",
};
