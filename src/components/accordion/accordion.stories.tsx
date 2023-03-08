import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Accordion } from "../../index";
import { AccordionProps } from "./accordion";

const meta: ComponentMeta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  argTypes: {
    id: { required: true },
  },
};
export default meta;

const Template: ComponentStory<typeof Accordion> = (args: AccordionProps) => (
  <Accordion {...args} />
);

export const Default = Template.bind({});
Default.args = {
  id: "accordion-1",
  folds: [
    {
      label: "Item 1",
      child: <span>Hello</span>,
    },
    {
      label: "Item 2",
      child: <span>World</span>,
    },
  ],
};
