import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Table } from '../../index';
import { TableColumn, TableProps } from './table';

const meta: Meta<typeof Table> = {
  title: 'USWDS/Table',
  component: Table,
  argTypes: {
    id: { required: true },
    sortDir: { control: 'select' },
  },
};
export default meta;

const Template: StoryFn<typeof Table> = (args: TableProps) => {
  const columns: TableColumn[] = [
    { id: 'name', name: 'Name' },
    { id: 'orderAdmitted', name: 'Order admitted to union' },
    { id: 'dateOfVote', name: 'Date of ratification vote' },
    { id: 'dateAdmitted', name: 'Date admitted to union' },
    { id: 'percentVoters', name: 'Percent of voters in favor of ratification' },
    { id: 'votesCast', name: 'Votes cast in favor of ratification' },
    {
      id: 'estimatedPopulation',
      name: 'Estimated population at time of admission',
      sortable: false,
    },
  ];

  interface StateData {
    name: SortableDataCell | unknown;
    orderAdmitted: SortableDataCell | unknown;
    dateOfVote: SortableDataCell | unknown;
    dateAdmitted: SortableDataCell | unknown;
    percentVoters: SortableDataCell | unknown;
    votesCast: SortableDataCell | unknown;
    estimatedPopulation: SortableDataCell | unknown;
  }

  interface SortableDataCell {
    value: unknown;
    sortValue: unknown;
  }

  const data: StateData[] = [
    {
      name: { value: 'Hawaii', sortValue: 'Hawaii' },
      orderAdmitted: { value: '50th', sortValue: '50' },
      dateOfVote: { value: 'Apr. 24, 1956', sortValue: '331844400' },
      dateAdmitted: { value: 'Aug. 21, 1959', sortValue: '327092400' },
      percentVoters: { value: '94.3%', sortValue: '0.943' },
      votesCast: { value: '132,773', sortValue: '132773' },
      estimatedPopulation: { value: '632,772', sortValue: '632772' },
    },
    {
      name: { value: 'Alaska', sortValue: 'Alaska' },
      orderAdmitted: { value: '49th', sortValue: '49' },
      dateOfVote: { value: 'Jun. 27, 1959', sortValue: '431978400' },
      dateAdmitted: { value: 'Jan. 3, 1959', sortValue: '346960800' },
      percentVoters: { value: '68.1%', sortValue: '0.681' },
      votesCast: { value: '17,477', sortValue: '17477' },
      estimatedPopulation: { value: '226,167', sortValue: '226167' },
    },
    {
      name: { value: 'Arizona', sortValue: 'Arizona' },
      orderAdmitted: { value: '48th', sortValue: '48' },
      dateOfVote: { value: 'Feb. 9, 1911', sortValue: '1858528800' },
      dateAdmitted: { value: 'Feb. 14, 1912', sortValue: '1826560800' },
      percentVoters: { value: '78.7%', sortValue: '0.787' },
      votesCast: { value: '12,187', sortValue: '12187' },
      estimatedPopulation: { value: '204,354', sortValue: '204354' },
    },
  ];
  return (
    <Table
      id={args.id}
      tabIndex={args.tabIndex}
      columns={columns}
      data={data}
      caption={args.caption}
      borderless={args.borderless}
      striped={args.striped}
      scrollable={args.scrollable}
      sortable={args.sortable}
      sortDir={args.sortDir}
      sortIndex={args.sortIndex}
      onSort={args.onSort}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  id: 'table-1',
  tabIndex: 1,
  caption: 'Voter Data',
  borderless: false,
  striped: false,
  scrollable: false,
  sortable: true,
  sortDir: 'ascending',
  sortIndex: 0,
};

export const OnSort = Template.bind({});
OnSort.args = {
  id: 'table-1',
  tabIndex: 1,
  caption: 'Voter Data',
  borderless: false,
  striped: false,
  scrollable: false,
  sortable: true,
  sortDir: 'ascending',
  sortIndex: 0,
  onSort: () => {
    console.log('Sorting...');
  },
};
