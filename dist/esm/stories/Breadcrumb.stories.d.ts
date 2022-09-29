import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Breadcrumb } from "../index";
import { BreadcrumbProps } from "../components/Breadcrumb/Breadcrumb";
declare const meta: ComponentMeta<typeof Breadcrumb>;
export default meta;
export declare const Default: ComponentStory<React.FC<BreadcrumbProps>>;
export declare const WithoutCurrentLocation: ComponentStory<React.FC<BreadcrumbProps>>;
export declare const WithAction: ComponentStory<React.FC<BreadcrumbProps>>;
