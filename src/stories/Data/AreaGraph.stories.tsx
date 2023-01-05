import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AreaGraph } from "../../index";
import { AreaGraphProps } from "../../components/Data/AreaGraph/AreaGraph";

const meta: ComponentMeta<typeof AreaGraph> = {
  title: "react-uswds/Data/AreaGraph",
  component: AreaGraph,
};
export default meta;

const Template: ComponentStory<typeof AreaGraph> = (args: AreaGraphProps) => (
  <div
    style={{
      width: "400px",
      height: "400px",
    }}
  >
    <AreaGraph {...args} />
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
      { x: 1, y: 4 },
      { x: 2, y: 7 },
      { x: 3, y: 2 },
    ],
  ],
};

export const Smooth = Template.bind({});
Smooth.args = {
  chart: {
    width: 400,
    height: 400,
  },
  colors: ["#0d7ea2", "#cd425b"],
  smooth: true,
  data: [
    [
      { x: 0, y: 3 },
      { x: 1, y: 9 },
      { x: 2, y: 5 },
      { x: 3, y: 12 },
    ],
    [
      { x: 0, y: 1 },
      { x: 1, y: 4 },
      { x: 2, y: 7 },
      { x: 3, y: 2 },
    ],
  ],
};
