import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { LineGraph } from "../index";
import { LineGraphProps } from "../components/Data/LineGraph/LineGraph";

const meta: ComponentMeta<typeof LineGraph> = {
  title: "react-uswds/LineGraph",
  component: LineGraph,
};
export default meta;

const Template: ComponentStory<typeof LineGraph> = (args: LineGraphProps) => (
  <div
    style={{
      width: "400px",
      height: "400px",
    }}
  >
    <LineGraph {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  chart: {
    width: 400,
    height: 400,
  },
  color: "#0d7ea2",
  data: [
    { x: 0, y: 0 },
    { x: 1, y: 2 },
    { x: 2, y: 1 },
    { x: 3, y: 4 },
  ],
};
