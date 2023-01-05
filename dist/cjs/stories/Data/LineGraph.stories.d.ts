import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { LineGraph } from "../../index";
import { LineGraphProps } from "../../components/Data/LineGraph/LineGraph";
declare const meta: ComponentMeta<typeof LineGraph>;
export default meta;
export declare const Default: ComponentStory<React.FC<LineGraphProps>>;
export declare const Smooth: ComponentStory<React.FC<LineGraphProps>>;
