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
  <Button {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "Default Button",
};

export const WithAction = Template.bind({});
WithAction.args = {
  children: "With Action",
  onClick: (e: ReactEventHandler<HTMLButtonElement>) => alert("Clicked!"),
};

export const WithVariant = Template.bind({});
WithVariant.args = {
  children:
    "With A Variant Prop (accent-cool, accent-warm, base, outline, etc)",
  variant: "outline",
};
