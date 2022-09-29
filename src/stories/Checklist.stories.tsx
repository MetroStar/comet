import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Checklist } from "../index";
import { ChecklistProps } from "../components/Checklist/Checklist";

const meta: ComponentMeta<typeof Checklist> = {
  title: "react-uswds/Checklist",
  component: Checklist,
};
export default meta;

const Template: ComponentStory<typeof Checklist> = (args: ChecklistProps) => (
  <Checklist {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Items: ",
  items: ["Hello", "World...", "42!"],
};
