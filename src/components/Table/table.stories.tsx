import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Table } from "../../index";
import { TableProps } from "./table";

const meta: ComponentMeta<typeof Table> = {
  title: "Components/Table",
  component: Table,
};
export default meta;

const Template: ComponentStory<typeof Table> = (args: TableProps) => (
  <Table {...args} />
);

export const Default = Template.bind({});
Default.args = {
  id: "table-1",
  headers: ["A", "B", "C"],
  rows: [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
};

export const WithPrimaryColumn = Template.bind({});
WithPrimaryColumn.args = {
  id: "table-2",
  headers: ["Animals", "Foods", "Trees"],
  rows: [
    ["Panda", "Sushi", "Oak"],
    ["Tiger", "Steak", "Redwood"],
    ["Moose", "Salmon", "Spruce"],
  ],
  primaryCol: 0,
  primaryColAction: (c: any) => alert(c),
};
