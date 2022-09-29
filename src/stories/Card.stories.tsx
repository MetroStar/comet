import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Card, Button } from "../index";
import { CardProps } from "../components/Card/Card";

const meta: ComponentMeta<typeof Card> = {
  title: "react-uswds/Card",
  component: Card,
};
export default meta;

const Template: ComponentStory<typeof Card> = (args: CardProps) => (
  <Card {...args} />
);

export const Default = Template.bind({});
Default.args = {
  header: "Card!",
  children: "Lorum ipsum blah blah...",
  footer: <Button variant="outline">Action!</Button>,
};
