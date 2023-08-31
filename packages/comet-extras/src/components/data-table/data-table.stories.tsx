import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import DataTable, { DataTableProps } from './data-table';
import { createColumnHelper } from '@tanstack/react-table';

const meta: Meta<typeof DataTable> = {
  title: 'Extras/Data Table',
  component: DataTable,
};
export default meta;

const Template: StoryFn<typeof DataTable> = (args: DataTableProps) => (
  <DataTable {...args}></DataTable>
);

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type Person = {
  firstName: string;
  lastName: string;
};

const data: Person[] = [
  {
    firstName: 'tanner',
    lastName: 'linsley',
  },
  {
    firstName: 'tandy',
    lastName: 'miller',
  },
  {
    firstName: 'joe',
    lastName: 'dirte',
  },
];

const columnHelper = createColumnHelper<Person>();

const cols = [
  columnHelper.accessor('firstName', {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor((row) => row.lastName, {
    id: 'lastName',
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Last Name</span>,
  }),
];

export const Default = Template.bind({});
Default.args = {
  id: 'table-1',
  columns: cols,
  data,
};
