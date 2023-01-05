import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Card, CardHeader, CardFooter, CardBody, Button } from "../index";

const meta: ComponentMeta<typeof Card> = {
  title: "react-uswds/Card",
  component: Card,
};
export default meta;

const Template: ComponentStory<typeof Card> = () => (
  <Card>
    <CardHeader>Card Header</CardHeader>
    <CardBody>The meat of the card...</CardBody>
    <CardFooter>
      <Button variant="outline">Click me...</Button>
    </CardFooter>
  </Card>
);

export const Default = Template.bind({});
