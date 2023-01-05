import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Radial } from "../../index";
import { RadialProps } from "../../components/Data/Radial/Radial";

const meta: ComponentMeta<typeof Radial> = {
  title: "react-uswds/Data/Radial",
  component: Radial,
};
export default meta;

const Template: ComponentStory<typeof Radial> = (args: RadialProps) => (
  <div
    style={{
      width: "400px",
      height: "400px",
    }}
  >
    <Radial {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  chart: {
    width: 400,
    height: 400,
  },
  color: "#0d7ea2",
  data: [1, 3, 5, 1, 2, 1, 5],
};
