import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PieChart } from "../../index";
import { PieChartProps } from "../../components/Data/PieChart/PieChart";

const meta: ComponentMeta<typeof PieChart> = {
  title: "Components/Data Visualization/Pie Chart",
  component: PieChart,
};
export default meta;

const Template: ComponentStory<typeof PieChart> = (args: PieChartProps) => (
  <div
    style={{
      width: "400px",
      height: "400px",
    }}
  >
    <PieChart {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  data: [
    {
      x: "dogs",
      y: 8,
    },
    {
      x: "cats",
      y: 5,
    },
    {
      x: "fish",
      y: 1,
    },
  ],
  colors: [],
};

export const CustomAngle = Template.bind({});
CustomAngle.args = {
  data: [
    {
      x: "dogs",
      y: 8,
    },
    {
      x: "cats",
      y: 5,
    },
    {
      x: "fish",
      y: 1,
    },
  ],
  colors: [],
  angle: {
    start: 90,
    end: -90,
  },
};

export const CustomColors = Template.bind({});
CustomColors.args = {
  data: [
    {
      x: "dogs",
      y: 8,
    },
    {
      x: "cats",
      y: 5,
    },
    {
      x: "fish",
      y: 1,
    },
  ],
  colors: ["#0d7ea2", "#cd425b", "#00a871"],
};
