import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Table } from '../../index';
import { TableProps } from './table';

const meta: Meta<typeof Table> = {
  title: 'USWDS/Table',
  component: Table,
};
export default meta;

const Template: StoryFn<typeof Table> = (args: TableProps) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'table-1',
  headers: ['A', 'B', 'C'],
  rows: [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
};

export const WithPrimaryColumn = Template.bind({});
WithPrimaryColumn.args = {
  id: 'table-2',
  headers: ['Animals', 'Foods', 'Trees'],
  rows: [
    ['Panda', 'Sushi', 'Oak'],
    ['Tiger', 'Steak', 'Redwood'],
    ['Moose', 'Salmon', 'Spruce'],
  ],
  primaryCol: 0,
  primaryColAction: (c: any) => alert(c),
};
