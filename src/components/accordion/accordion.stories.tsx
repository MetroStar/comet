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
  allowMultiSelect: false,
  folds: [
    {
      id: "item-1",
      label: "Item 1",
      child: <span>Hello</span>,
      expanded: true,
    },
    {
      id: "item-2",
      label: "Item 2",
      child: <span>World</span>,
      expanded: false,
    },
  ],
};

export const MultiSelect = Template.bind({});
MultiSelect.args = {
  id: "accordion-2",
  allowMultiSelect: true,
  folds: [
    {
      id: "item-1",
      label: "Item 1",
      child: <span>Hello</span>,
      expanded: false,
    },
    {
      id: "item-2",
      label: "Item 2",
      child: <span>World</span>,
      expanded: false,
    },
  ],
};
