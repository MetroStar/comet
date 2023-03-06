import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Header } from "../index";
import { HeaderProps } from "../components/Header/Header";

const meta: ComponentMeta<typeof Header> = {
  title: "react-uswds/Header",
  component: Header,
};
export default meta;

const Template: ComponentStory<typeof Header> = (args: HeaderProps) => (
  <Header {...args} />
);

export const Default = Template.bind({});
Default.args = {
  logo: "USWDS Site",
  root: "/",
  folding: [
    {
      label: "Fruits",
      items: [
        {
          label: "Home",
          path: "/",
        },
        {
          label: "Kiwi",
          path: "/kiwi",
        },
        {
          label: "Orange",
          path: "/orange",
        },
      ],
    },
  ],
  simple: [
    { label: "Lemon", path: "/lemon" },
    { label: "Lime", path: "/lime" },
  ],
  showSearch: true,
};
