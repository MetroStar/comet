import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AreaGraph } from "../../index";
import { AreaGraphProps } from "../../components/Data/AreaGraph/AreaGraph";
declare const meta: ComponentMeta<typeof AreaGraph>;
export default meta;
export declare const Default: ComponentStory<React.FC<AreaGraphProps>>;
export declare const Smooth: ComponentStory<React.FC<AreaGraphProps>>;
