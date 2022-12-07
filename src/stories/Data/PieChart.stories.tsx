import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PieChart } from "../../index";
import { PieChartProps } from "../../components/Data/PieChart/PieChart";

const meta: ComponentMeta<typeof PieChart> = {
  title: "react-uswds/Data/PieChart",
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
};

export const CustomAngle = Template.bind({});
CustomAngle.args = {
  angle: {
    start: 90,
    end: -90,
  },
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
};

export const CustomColors = Template.bind({});
CustomColors.args = {
  colors: ["#0d7ea2", "#cd425b", "#00a871"],
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
};
