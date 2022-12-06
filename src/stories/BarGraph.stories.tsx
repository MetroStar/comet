import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BarGraph } from "../index";
import { BarGraphProps } from "../components/Data/BarGraph/BarGraph";

const meta: ComponentMeta<typeof BarGraph> = {
  title: "react-uswds/BarGraph",
  component: BarGraph,
};
export default meta;

const Template: ComponentStory<typeof BarGraph> = (args: BarGraphProps) => (
  <div
    style={{
      width: "400px",
      height: "400px",
    }}
  >
    <BarGraph {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  chart: {
    width: 400,
    height: 400,
  },
  alignment: "start",
  color: "#0d7ea2",
  barRatio: 1,
  data: [1, 2, 3, 4],
};
