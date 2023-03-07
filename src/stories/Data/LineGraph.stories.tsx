import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { LineGraph } from "../../index";
import { LineGraphProps } from "../../components/Data/LineGraph/LineGraph";

const meta: ComponentMeta<typeof LineGraph> = {
  title: "Components/Data Visualization/Line Graph",
  component: LineGraph,
  argTypes: {
    smooth: { control: "boolean" },
  },
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
  colors: ["#0d7ea2", "#cd425b"],
  data: [
    [
      { x: 0, y: 3 },
      { x: 1, y: 9 },
      { x: 2, y: 5 },
      { x: 3, y: 12 },
    ],
    [
      { x: 0, y: 1 },
      { x: 1, y: 2 },
      { x: 2, y: 7 },
      { x: 3, y: 2 },
    ],
  ],
  smooth: false,
};

export const Smooth = Template.bind({});
Smooth.args = {
  chart: {
    width: 400,
    height: 400,
  },
  colors: ["#0d7ea2", "#cd425b"],
  data: [
    [
      { x: 0, y: 3 },
      { x: 1, y: 9 },
      { x: 2, y: 5 },
      { x: 3, y: 12 },
    ],
    [
      { x: 0, y: 1 },
      { x: 1, y: 2 },
      { x: 2, y: 7 },
      { x: 3, y: 2 },
    ],
  ],
  smooth: true,
};