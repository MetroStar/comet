import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Breadcrumb } from "../index";
import { BreadcrumbProps, Crumb } from "../components/Breadcrumb/Breadcrumb";

const meta: ComponentMeta<typeof Breadcrumb> = {
  title: "react-uswds/Breadcrumb",
  component: Breadcrumb,
};
export default meta;

const Template: ComponentStory<typeof Breadcrumb> = (args: BreadcrumbProps) => (
  <Breadcrumb {...args} />
);

export const Default = Template.bind({});
Default.args = {
  crumbs: [
    {
      name: "Rome",
      path: "/rome",
    },
    {
      name: "Greece",
      path: "/greece",
    },
  ],
  current: "Italy",
};

export const WithoutCurrentLocation = Template.bind({});
WithoutCurrentLocation.args = {
  crumbs: [
    {
      name: "Rome",
      path: "/rome",
    },
    {
      name: "Greece",
      path: "/greece",
    },
  ],
};

export const WithAction = Template.bind({});
WithAction.args = {
  crumbs: [
    {
      name: "Rome",
      path: "/rome",
    },
    {
      name: "Greece",
      path: "/greece",
    },
  ],
  current: "Italy",
  action: (c: Crumb) => alert("Called with: " + JSON.stringify(c)),
};
