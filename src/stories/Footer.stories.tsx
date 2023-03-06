import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Footer } from "../index";
import { FooterProps } from "../components/Footer/Footer";

const meta: ComponentMeta<typeof Footer> = {
  title: "react-uswds/Footer",
  component: Footer,
};
export default meta;

const Template: ComponentStory<typeof Footer> = (args: FooterProps) => (
  <Footer {...args} />
);

export const Default = Template.bind({});
Default.args = {
  links: [
    {
      label: "Orange",
      path: "/orange",
    },
    {
      label: "Apple",
      path: "/apple",
    },
    {
      label: "Home",
      path: "/",
    },
  ],
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
};
