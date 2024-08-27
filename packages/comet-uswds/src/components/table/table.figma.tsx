import { Table } from './table';
import figma from '@figma/code-connect';

figma.connect(
  Table,
  'https://www.figma.com/design/U58Pbb84dLaZfvFvdtGVdT/Comet-UI-Kit?node-id=556-15960',
  {
    props: {
      borderless: figma.enum('Variant', {
        Bordered: false,
        Borderless: true,
      }),
      scrollable: figma.boolean('Scrollable?'),
      striped: figma.boolean('Striped?'),
    },
    example: ({ scrollable, borderless, striped }) => {
      const columns = [
        {
          id: 'name',
          name: 'Name',
        },
        {
          id: 'orderAdmitted',
          name: 'Order admitted to union',
        },
        {
          id: 'dateOfVote',
          name: 'Date of ratification vote',
        },
        {
          id: 'dateAdmitted',
          name: 'Date admitted to union',
        },
        {
          id: 'percentVoters',
          name: 'Percent of voters in favor of ratification',
        },
        {
          id: 'votesCast',
          name: 'Votes cast in favor of ratification',
        },
        {
          id: 'estimatedPopulation',
          name: 'Estimated population at time of admission',
        },
      ];
      const data = [
        {
          dateAdmitted: {
            sortValue: '327092400',
            value: 'Aug. 21, 1959',
          },
          dateOfVote: {
            sortValue: '331844400',
            value: 'Apr. 24, 1956',
          },
          estimatedPopulation: {
            sortValue: '632772',
            value: '632,772',
          },
          name: {
            sortValue: 'Hawaii',
            value: 'Hawaii',
          },
          orderAdmitted: {
            sortValue: '50',
            value: '50th',
          },
          percentVoters: {
            sortValue: '0.943',
            value: '94.3%',
          },
          votesCast: {
            sortValue: '132773',
            value: '132,773',
          },
        },
        {
          dateAdmitted: {
            sortValue: '346960800',
            value: 'Jan. 3, 1959',
          },
          dateOfVote: {
            sortValue: '431978400',
            value: 'Jun. 27, 1959',
          },
          estimatedPopulation: {
            sortValue: '226167',
            value: '226,167',
          },
          name: {
            sortValue: 'Alaska',
            value: 'Alaska',
          },
          orderAdmitted: {
            sortValue: '49',
            value: '49th',
          },
          percentVoters: {
            sortValue: '0.681',
            value: '68.1%',
          },
          votesCast: {
            sortValue: '17477',
            value: '17,477',
          },
        },
        {
          dateAdmitted: {
            sortValue: '1826560800',
            value: 'Feb. 14, 1912',
          },
          dateOfVote: {
            sortValue: '1858528800',
            value: 'Feb. 9, 1911',
          },
          estimatedPopulation: {
            sortValue: '204354',
            value: '204,354',
          },
          name: {
            sortValue: 'Arizona',
            value: 'Arizona',
          },
          orderAdmitted: {
            sortValue: '48',
            value: '48th',
          },
          percentVoters: {
            sortValue: '0.787',
            value: '78.7%',
          },
          votesCast: {
            sortValue: '12187',
            value: '12,187',
          },
        },
      ];

      return (
        <Table
          caption="Voter Data"
          borderless={borderless}
          scrollable={scrollable}
          striped={striped}
          columns={columns}
          data={data}
          id="table"
        />
      );
    },
  },
);
