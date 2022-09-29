import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Accordion } from "../index";
import { AccordionProps } from "../components/Accordion/Accordion";

const meta: ComponentMeta<typeof Accordion> = {
  title: "react-uswds/Accordion",
  component: Accordion,
};
export default meta;

const Template: ComponentStory<typeof Accordion> = (args: AccordionProps) => (
  <Accordion {...args} />
);

export const Default = Template.bind({});
Default.args = {
  folds: [
    {
      label: "Item",
      child: <span>Hello</span>,
    },
    {
      label: "Item 2",
      child: <span>World</span>,
    },
  ],
};
