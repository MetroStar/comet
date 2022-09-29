import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Table } from "../index";
import { TableProps } from "../components/Table/Table";
declare const meta: ComponentMeta<typeof Table>;
export default meta;
export declare const Default: ComponentStory<React.FC<TableProps>>;
export declare const WithPrimaryColumn: ComponentStory<React.FC<TableProps>>;
