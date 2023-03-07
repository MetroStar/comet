import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Checklist } from "../../index";
import { ChecklistProps } from "./checklist";

const meta: ComponentMeta<typeof Checklist> = {
  title: "Components/Form Controls/Checklist",
  component: Checklist,
  argTypes: {
    id: { required: true },
  },
};
export default meta;

const Template: ComponentStory<typeof Checklist> = (args: ChecklistProps) => (
  <Checklist {...args} />
);

export const Default = Template.bind({});
Default.args = {
  id: "checklist-1",
  label: "Items: ",
  items: ["Hello", "World...", "42!"],
};
