import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Header, Card, CardHeader } from "../index";
import { HeaderProps } from "../components/Header/Header";

const meta: ComponentMeta<typeof Header> = {
  title: "react-uswds/Header",
  component: Header,
};
export default meta;

const Template: ComponentStory<typeof Header> = (args: HeaderProps) => (
  <HashRouter>
    <Header {...args} />
    <br />
    <Routes>
      <Route
        path="/"
        element={
          <Card>
            <CardHeader>Home</CardHeader>
          </Card>
        }
      />
      <Route
        path="/kiwi"
        element={
          <Card>
            <CardHeader>Kiwi</CardHeader>
          </Card>
        }
      />
      <Route
        path="/orange"
        element={
          <Card>
            <CardHeader>Orange</CardHeader>
          </Card>
        }
      />
      <Route
        path="/lemon"
        element={
          <Card>
            <CardHeader>Lemon</CardHeader>
          </Card>
        }
      />
      <Route
        path="/lime"
        element={
          <Card>
            <CardHeader>Lime</CardHeader>
          </Card>
        }
      />
    </Routes>
  </HashRouter>
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
