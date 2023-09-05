import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import DataTable, { DataTableProps } from './data-table';
import { createColumnHelper } from '@tanstack/react-table';

const meta: Meta<typeof DataTable> = {
  title: 'Extras/Data Table',
  component: DataTable,
  argTypes: {
    sortDir: { control: 'select' },
  },
};
export default meta;

const Template: StoryFn<typeof DataTable> = (args: DataTableProps) => (
  <DataTable {...args}></DataTable>
);

interface Person {
  firstName: string;
  lastName: string;
  middleName?: string;
  age: number;
  gender: 'M' | 'F' | 'NA';
}

const data: Person[] = [
  {
    firstName: 'John',
    lastName: 'Doe',
    middleName: 'L',
    age: 30,
    gender: 'M',
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    middleName: 'M',
    age: 29,
    gender: 'F',
  },
  {
    firstName: 'Bob',
    lastName: 'Ross',
    middleName: '',
    age: 100,
    gender: 'M',
  },
  {
    firstName: 'Elon',
    lastName: 'Musk',
    middleName: 'R',
    age: 2032,
    gender: 'M',
  },
];

const columnHelper = createColumnHelper<Person>();

const cols = [
  columnHelper.accessor('firstName', {
    cell: (info) => info.getValue(),
    header: () => 'First Name',
  }),
  columnHelper.accessor('lastName', {
    cell: (info) => info.getValue(),
    header: () => 'Last Name',
  }),
  columnHelper.accessor('middleName', {
    cell: (info) => info.getValue(),
    header: () => 'Middle Name',
  }),
  columnHelper.accessor('age', {
    cell: (info) => info.getValue(),
    header: () => 'Age',
  }),
  columnHelper.accessor('gender', {
    cell: (info) => info.getValue(),
    header: () => 'Gender',
  }),
];

export const Default = Template.bind({});
Default.args = {
  id: 'table-1',
  columns: cols,
  data,
  striped: false,
  sortable: true,
  sortDir: 'asc',
  sortCol: 'lastName',
  className: 'width-full',
};
