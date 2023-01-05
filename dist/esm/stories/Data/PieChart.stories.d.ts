import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PieChart } from "../../index";
import { PieChartProps } from "../../components/Data/PieChart/PieChart";
declare const meta: ComponentMeta<typeof PieChart>;
export default meta;
export declare const Default: ComponentStory<React.FC<PieChartProps>>;
export declare const CustomAngle: ComponentStory<React.FC<PieChartProps>>;
export declare const CustomColors: ComponentStory<React.FC<PieChartProps>>;
