import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Scaffold, Button, Alert } from "../index";
import { ScaffoldProps } from "../components/Scaffold/Scaffold";

const meta: ComponentMeta<typeof Scaffold> = {
  title: "react-uswds/Scaffold",
  component: Scaffold,
};
export default meta;

const Template: ComponentStory<typeof Scaffold> = (args: ScaffoldProps) => (
  <Scaffold {...args} />
);

interface FakeBodyProps {
  name: string;
}

const FakeBody: React.FC<FakeBodyProps> = ({ name }: FakeBodyProps) => {
  return (
    <>
      <h3>This page is about {name}. </h3>
      <br />
      <Alert
        type="info"
        show={true}
        header={`${name} is the name of this page.`}
      ></Alert>
      <br />
      <br />
      <Button variant="primary">Do Something</Button>
      <Button variant="outline">Do Something Else</Button>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  routes: [
    {
      path: "/",
      element: <FakeBody name="apple" />,
    },
    {
      path: "/mango",
      element: <FakeBody name="mango" />,
    },
    {
      path: "/kiwi",
      element: <FakeBody name="kiwi" />,
    },
  ],
  header: {
    logo: "USWDS Site",
    root: "/",
    simple: [
      { label: "Apple", path: "/" },
      { label: "Mango", path: "/mango" },
      { label: "Kiwi", path: "/kiwi" },
    ],
  },
  footer: {
    logoText: "React USWDS",
    logoSrc: "https://designsystem.digital.gov/img/uswds-logo/lg-black.png",
    contactMessage: "Reach Us Below.",
    phone: "(888)888-8888",
    email: "firstname@lastname.com",
    socials: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      youtube: "https://youtube.com",
      instagram: "https://instagram.com",
    },
  },
};
