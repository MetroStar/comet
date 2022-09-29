import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "../index";
import { ButtonProps } from "../components/Button/Button";
declare const meta: ComponentMeta<typeof Button>;
export default meta;
export declare const Default: ComponentStory<React.FC<ButtonProps>>;
export declare const WithAction: ComponentStory<React.FC<ButtonProps>>;
export declare const WithVariant: ComponentStory<React.FC<ButtonProps>>;
