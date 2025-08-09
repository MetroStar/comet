import React from 'react';
import { Meta } from '@storybook/react-vite';
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

interface Person {
  firstName: string;
  lastName: string;
  middleName?: string;
  age: number;
  gender: 'M' | 'F' | 'NA';
  children?: Person[];
}

const data: Person[] = [
  {
    firstName: 'John',
    lastName: 'Doe',
    middleName: 'L',
    age: 30,
    gender: 'M',
    children: [
      {
        firstName: 'Johnny',
        lastName: 'Doe',
        middleName: '',
        age: 5,
        gender: 'M',
      },
      {
        firstName: 'Jenny',
        lastName: 'Doe',
        middleName: '',
        age: 3,
        gender: 'F',
      },
    ],
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    middleName: 'M',
    age: 29,
    gender: 'F',
    children: [
      {
        firstName: 'Happy',
        lastName: 'Trees',
        middleName: '',
        age: 25,
        gender: 'M',
      },
    ],
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
  {
    firstName: 'Bill',
    lastName: 'Gates',
    middleName: '',
    age: 75,
    gender: 'M',
  },
  {
    firstName: 'Ada',
    lastName: 'Lovelace',
    middleName: '',
    age: 36,
    gender: 'F',
  },
  {
    firstName: 'Alan',
    lastName: 'Turing',
    middleName: '',
    age: 41,
    gender: 'M',
  },
  {
    firstName: 'Dwayne',
    lastName: 'Johnson',
    middleName: '',
    age: 51,
    gender: 'M',
  },
  {
    firstName: 'Kirk',
    lastName: 'Hammett',
    middleName: '',
    age: 60,
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

export const Default = {
  args: {
    id: 'table-1',
    columns: cols,
    data,
    striped: false,
    sortable: true,
    sortDir: 'asc',
    sortCol: 'lastName',
    pageable: true,
    pageIndex: 0,
    pageSize: 3,
    className: 'width-full',
  },
  render: (args: DataTableProps) => <DataTable {...args} />,
};

export const WithExpandableRows = {
  args: {
    id: 'table-expandable',
    columns: cols,
    data,
    striped: false,
    sortable: true,
    sortDir: 'asc',
    sortCol: 'lastName',
    pageable: true,
    pageIndex: 0,
    pageSize: 5,
    expandable: true,
    getChildRows: (row: Person) => row.children,
    initialExpanded: { '0': true, '1': true },
    className: 'width-full',
  },
  render: (args: DataTableProps) => <DataTable {...args} />,
};
