import React from 'react';
import { act, render } from '@testing-library/react';
import DataTable from './data-table';
import { createColumnHelper } from '@tanstack/react-table';

export interface Person {
  firstName: string;
  lastName: string;
}

describe('DataTable', () => {
  const basicData: Person[] = [
    {
      firstName: 'John',
      lastName: 'Doe',
    },
    {
      firstName: 'Jane',
      lastName: 'Doe',
    },
    {
      firstName: 'Bob',
      lastName: 'Ross',
    },
    {
      firstName: 'Elon',
      lastName: 'Musk',
    },
    {
      firstName: 'Bill',
      lastName: 'Gates',
    },
    {
      firstName: 'Ada',
      lastName: 'Lovelace',
    },
    {
      firstName: 'Alan',
      lastName: 'Turing',
    },
    {
      firstName: 'Dwayne',
      lastName: 'Johnson',
    },
    {
      firstName: 'Kirk',
      lastName: 'Hammett',
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
  ];

  test('should render a basic data table successfully', () => {
    const { baseElement } = render(
      <DataTable id="table-1" columns={cols} data={basicData}></DataTable>,
    );

    const table = baseElement.querySelector('#table-1');
    expect(table).toBeTruthy();
  });

  test('should render a striped table successfully', () => {
    const { baseElement } = render(
      <DataTable id="table-1" columns={cols} data={basicData} striped></DataTable>,
    );
    const table = baseElement.querySelector('#table-1.striped');
    expect(table).toBeTruthy();
  });

  test('should render a default sortable table successfully', () => {
    const { baseElement } = render(
      <DataTable id="table-1" columns={cols} data={basicData} sortable></DataTable>,
    );
    const table = baseElement.querySelector('#table-1');
    expect(table).toBeTruthy();
    const sortableBtns = baseElement.querySelectorAll('.cursor-pointer');
    expect(sortableBtns).toHaveLength(2);
  });

  test('should render a non-default sortable table successfully', () => {
    const { baseElement } = render(
      <DataTable
        id="table-1"
        columns={cols}
        data={basicData}
        sortable
        sortCol="lastName"
        sortDir="asc"
      ></DataTable>,
    );
    const table = baseElement.querySelector('#table-1');
    expect(table).toBeTruthy();
    const sortableBtns = baseElement.querySelectorAll('.cursor-pointer');
    expect(sortableBtns).toHaveLength(2);
  });

  test('should render a default pageable table successfully', () => {
    const { baseElement } = render(
      <DataTable id="table-1" columns={cols} data={basicData} pageable></DataTable>,
    );
    const table = baseElement.querySelector('#table-1');
    expect(table).toBeTruthy();
    const pagingSection = baseElement.querySelector('.table-paging');
    expect(pagingSection).toBeTruthy();
  });

  test('should render a non-default pageable table successfully', () => {
    const { baseElement } = render(
      <DataTable
        id="table-1"
        columns={cols}
        data={basicData}
        pageable
        pageIndex={1}
        pageSize={3}
      ></DataTable>,
    );
    const table = baseElement.querySelector('#table-1');
    expect(table).toBeTruthy();
    const pagingSection = baseElement.querySelector('.table-paging');
    expect(pagingSection).toBeTruthy();
  });

  test('should render a non-default pageable table with large number of pages successfully', () => {
    const { baseElement } = render(
      <DataTable id="table-1" columns={cols} data={basicData} pageable pageSize={1}></DataTable>,
    );
    const table = baseElement.querySelector('#table-1');
    expect(table).toBeTruthy();
    const pagingSection = baseElement.querySelector('.table-paging');
    expect(pagingSection).toBeTruthy();
    const pagingBtns = pagingSection?.querySelectorAll('.table-paging-btn');
    expect(pagingBtns).toHaveLength(7);
  });

  test('should render a non-default pageable table with large number of pages and current page successfully', () => {
    const { baseElement } = render(
      <DataTable
        id="table-1"
        columns={cols}
        data={basicData}
        pageable
        pageIndex={5}
        pageSize={1}
      ></DataTable>,
    );
    const table = baseElement.querySelector('#table-1');
    expect(table).toBeTruthy();
    const pagingSection = baseElement.querySelector('.table-paging');
    expect(pagingSection).toBeTruthy();
    const pagingBtns = pagingSection?.querySelectorAll('.table-paging-btn');
    expect(pagingBtns).toHaveLength(7);
  });

  test('should page through table ', async () => {
    const { baseElement } = render(
      <DataTable
        id="table-1"
        columns={cols}
        data={basicData}
        pageable
        pageIndex={0}
        pageSize={3}
      ></DataTable>,
    );
    const table = baseElement.querySelector('#table-1');
    expect(table).toBeTruthy();

    const pagingSection = baseElement.querySelector('.table-paging');
    if (pagingSection) {
      const nextBtn = pagingSection.querySelector(
        '#table-1-table-paging-next-btn',
      ) as HTMLButtonElement;
      const prevBtn = pagingSection.querySelector(
        '#table-1-table-paging-prev-btn',
      ) as HTMLButtonElement;
      const pageBtn = pagingSection.querySelector(
        '#table-1-table-paging-btn-0',
      ) as HTMLButtonElement;
      if (nextBtn) {
        expect(nextBtn).toBeTruthy();
        await act(async () => {
          nextBtn.click();
        });
      }
      if (prevBtn) {
        expect(prevBtn).toBeTruthy();
        await act(async () => {
          prevBtn.click();
        });
      }
      if (pageBtn) {
        expect(pageBtn).toBeTruthy();
        await act(async () => {
          pageBtn.click();
        });
      }
    }
  });

  test('should render a table with custom class successfully', () => {
    const { baseElement } = render(
      <DataTable id="table-1" columns={cols} data={basicData} className="width-full"></DataTable>,
    );
    const table = baseElement.querySelector('#table-1.width-full');
    expect(table).toBeTruthy();
  });
});
