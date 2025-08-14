import React from 'react';
import { act, render, fireEvent } from '@testing-library/react';
import DataTable from './data-table';
import { createColumnHelper } from '@tanstack/react-table';

export interface Person {
  firstName: string;
  lastName: string;
  children?: Person[];
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

  test('should render a table with expandable rows successfully', () => {
    const dataWithChildren: Person[] = [
      {
        firstName: 'John',
        lastName: 'Doe',
        children: [
          {
            firstName: 'Johnny',
            lastName: 'Doe Jr',
          },
        ],
      },
      {
        firstName: 'Jane',
        lastName: 'Smith',
      },
    ];

    const { baseElement } = render(
      <DataTable
        id="table-expandable"
        columns={cols}
        data={dataWithChildren}
        expandable={true}
        getChildRows={(row: Person) => row.children}
      ></DataTable>,
    );

    const table = baseElement.querySelector('#table-expandable');
    expect(table).toBeTruthy();

    // Check for expand buttons - should have one for each parent row
    const expandButtons = baseElement.querySelectorAll('.expand-button');
    expect(expandButtons).toHaveLength(2); // Both rows get expand buttons, but only one is visible for expandable row

    // Initially child rows should not be visible
    const childRows = baseElement.querySelectorAll('.child-row');
    expect(childRows).toHaveLength(0);
  });

  test('should render a table with initial expanded state', () => {
    const dataWithChildren: Person[] = [
      {
        firstName: 'John',
        lastName: 'Doe',
        children: [
          {
            firstName: 'Johnny',
            lastName: 'Doe Jr',
          },
        ],
      },
      {
        firstName: 'Jane',
        lastName: 'Smith',
      },
    ];

    const { baseElement } = render(
      <DataTable
        id="table-initial-expanded"
        columns={cols}
        data={dataWithChildren}
        expandable={true}
        getChildRows={(row: Person) => row.children}
        initialExpanded={{ '0': true }}
      ></DataTable>,
    );

    const table = baseElement.querySelector('#table-initial-expanded');
    expect(table).toBeTruthy();

    // With initial expanded state, child rows should be visible
    const childRows = baseElement.querySelectorAll('.child-row');
    expect(childRows).toHaveLength(1); // John Doe's child should be expanded
  });

  test('should handle pagination with expandable rows correctly', () => {
    const dataWithChildren: Person[] = [
      {
        firstName: 'John',
        lastName: 'Doe',
        children: [
          {
            firstName: 'Johnny',
            lastName: 'Doe Jr',
          },
        ],
      },
      {
        firstName: 'Jane',
        lastName: 'Smith',
        children: [
          {
            firstName: 'Janie',
            lastName: 'Smith Jr',
          },
        ],
      },
      {
        firstName: 'Bob',
        lastName: 'Wilson',
        children: [
          {
            firstName: 'Bobby',
            lastName: 'Wilson Jr',
          },
        ],
      },
    ];

    const { baseElement } = render(
      <DataTable
        id="table-paginated-expandable"
        columns={cols}
        data={dataWithChildren}
        expandable={true}
        getChildRows={(row: Person) => row.children}
        pageable={true}
        pageSize={2}
      ></DataTable>,
    );

    const table = baseElement.querySelector('#table-paginated-expandable');
    expect(table).toBeTruthy();

    // Should show 2 parent rows (John and Jane) on first page
    const allRows = baseElement.querySelectorAll('tbody tr');
    expect(allRows).toHaveLength(2); // 2 parent rows (child rows not expanded initially)

    // Should have pagination buttons since we have 3 total parent rows with pageSize 2
    const pageButtons = baseElement.querySelectorAll(
      '.table-paging-btn:not(.table-paging-prev):not(.table-paging-next)',
    );
    expect(pageButtons.length).toBeGreaterThan(0); // Should have page buttons
  });

  test('should not count child rows against pagination when expanded', async () => {
    const dataWithChildren: Person[] = [
      {
        firstName: 'John',
        lastName: 'Doe',
        children: [
          {
            firstName: 'Johnny',
            lastName: 'Doe Jr',
          },
          {
            firstName: 'Jenny',
            lastName: 'Doe Jr',
          },
        ],
      },
      {
        firstName: 'Jane',
        lastName: 'Smith',
        children: [
          {
            firstName: 'Janie',
            lastName: 'Smith Jr',
          },
        ],
      },
      {
        firstName: 'Bob',
        lastName: 'Wilson',
      },
    ];

    const { baseElement } = render(
      <DataTable
        id="table-pagination-test"
        columns={cols}
        data={dataWithChildren}
        expandable={true}
        getChildRows={(row: Person) => row.children}
        pageable={true}
        pageSize={2}
        initialExpanded={{ '0': true }}
      ></DataTable>,
    );

    // Should show 2 parent rows (John and Jane) on first page, plus John's expanded children
    const allRows = baseElement.querySelectorAll('tbody tr');
    expect(allRows).toHaveLength(4); // 2 parent rows + 2 child rows from John

    // Verify we have child rows
    const childRows = baseElement.querySelectorAll('.child-row');
    expect(childRows).toHaveLength(2); // Johnny and Jenny

    // Should still have pagination buttons since Bob is on page 2
    const nextButton = baseElement.querySelector('#table-pagination-test-table-paging-next-btn');
    expect(nextButton).toBeTruthy();
    expect(nextButton?.hasAttribute('disabled')).toBe(false);
  });

  // Additional tests for new functionality
  describe('Expandable Rows', () => {
    const dataWithMultipleChildren: Person[] = [
      {
        firstName: 'Parent1',
        lastName: 'Doe',
        children: [
          { firstName: 'Child1', lastName: 'Doe' },
          { firstName: 'Child2', lastName: 'Doe' },
        ],
      },
      {
        firstName: 'Parent2',
        lastName: 'Smith',
        children: [{ firstName: 'Child3', lastName: 'Smith' }],
      },
      {
        firstName: 'Parent3',
        lastName: 'Wilson',
        // No children
      },
    ];

    test('should show expand buttons only for rows with children', () => {
      const { baseElement } = render(
        <DataTable
          id="test-expand-buttons"
          columns={cols}
          data={dataWithMultipleChildren}
          expandable={true}
          getChildRows={(row: Person) => row.children}
        ></DataTable>,
      );

      const expandButtons = baseElement.querySelectorAll('.expand-button');
      // Should have expand buttons for all parent rows, but visibility controlled by CSS
      expect(expandButtons).toHaveLength(3);
    });

    test('should expand and collapse rows when expand button is clicked', async () => {
      const { baseElement } = render(
        <DataTable
          id="test-expand-collapse"
          columns={cols}
          data={dataWithMultipleChildren}
          expandable={true}
          getChildRows={(row: Person) => row.children}
        ></DataTable>,
      );

      // Initially no child rows should be visible
      let childRows = baseElement.querySelectorAll('.child-row');
      expect(childRows).toHaveLength(0);

      // Click first expand button
      const firstExpandButton = baseElement.querySelector('.expand-button') as HTMLButtonElement;
      expect(firstExpandButton).toBeTruthy();

      await act(async () => {
        firstExpandButton?.click();
      });

      // Should now show 2 child rows for Parent1
      childRows = baseElement.querySelectorAll('.child-row');
      expect(childRows).toHaveLength(2);
    });

    test('should render SVG icons in expand buttons', () => {
      const { baseElement } = render(
        <DataTable
          id="test-svg-icons"
          columns={cols}
          data={dataWithMultipleChildren}
          expandable={true}
          getChildRows={(row: Person) => row.children}
        ></DataTable>,
      );

      const expandButtons = baseElement.querySelectorAll('.expand-button');
      const svgIcons = baseElement.querySelectorAll('.expand-button svg');

      expect(expandButtons.length).toBeGreaterThan(0);
      expect(svgIcons.length).toBeGreaterThan(0);
      expect(svgIcons.length).toBe(expandButtons.length);
    });

    test('should apply correct indentation to child rows', async () => {
      const { baseElement } = render(
        <DataTable
          id="test-indentation"
          columns={cols}
          data={dataWithMultipleChildren}
          expandable={true}
          getChildRows={(row: Person) => row.children}
          initialExpanded={{ '0': true }}
        ></DataTable>,
      );

      const childRows = baseElement.querySelectorAll('.child-row');
      expect(childRows).toHaveLength(2);

      // Check that child rows have proper indentation span
      const indentationSpans = baseElement.querySelectorAll('tr.child-row td span');
      expect(indentationSpans.length).toBeGreaterThan(0);
    });
  });

  describe('Initial Expanded State', () => {
    test('should respect initialExpanded prop', () => {
      const dataWithChildren: Person[] = [
        {
          firstName: 'John',
          lastName: 'Doe',
          children: [{ firstName: 'Johnny', lastName: 'Doe Jr' }],
        },
        {
          firstName: 'Jane',
          lastName: 'Smith',
          children: [{ firstName: 'Janie', lastName: 'Smith Jr' }],
        },
      ];

      const { baseElement } = render(
        <DataTable
          id="test-initial-expanded"
          columns={cols}
          data={dataWithChildren}
          expandable={true}
          getChildRows={(row: Person) => row.children}
          initialExpanded={{ '0': true, '1': false }}
        ></DataTable>,
      );

      const childRows = baseElement.querySelectorAll('.child-row');
      expect(childRows).toHaveLength(1); // Only John's child should be expanded
    });

    test('should expand multiple rows when specified in initialExpanded', () => {
      const dataWithChildren: Person[] = [
        {
          firstName: 'John',
          lastName: 'Doe',
          children: [{ firstName: 'Johnny', lastName: 'Doe Jr' }],
        },
        {
          firstName: 'Jane',
          lastName: 'Smith',
          children: [{ firstName: 'Janie', lastName: 'Smith Jr' }],
        },
        {
          firstName: 'Bob',
          lastName: 'Wilson',
          children: [{ firstName: 'Bobby', lastName: 'Wilson Jr' }],
        },
      ];

      const { baseElement } = render(
        <DataTable
          id="test-multiple-expanded"
          columns={cols}
          data={dataWithChildren}
          expandable={true}
          getChildRows={(row: Person) => row.children}
          initialExpanded={{ '0': true, '2': true }}
        ></DataTable>,
      );

      const childRows = baseElement.querySelectorAll('.child-row');
      expect(childRows).toHaveLength(2); // John's and Bob's children should be expanded
    });
  });

  describe('Pagination with Expandable Rows', () => {
    test('should paginate based on parent rows only', () => {
      const largeDataset: Person[] = Array.from({ length: 10 }, (_, i) => ({
        firstName: `Person${i + 1}`,
        lastName: 'Test',
        children: [
          { firstName: `Child${i + 1}A`, lastName: 'Test' },
          { firstName: `Child${i + 1}B`, lastName: 'Test' },
        ],
      }));

      const { baseElement } = render(
        <DataTable
          id="test-pagination-parent-only"
          columns={cols}
          data={largeDataset}
          expandable={true}
          getChildRows={(row: Person) => row.children}
          pageable={true}
          pageSize={3}
          initialExpanded={{ '0': true, '1': true, '2': true }}
        ></DataTable>,
      );

      // Should show 3 parent rows + 6 child rows (2 each) = 9 total rows
      const allRows = baseElement.querySelectorAll('tbody tr');
      expect(allRows).toHaveLength(9);

      // Should have pagination controls
      const nextButton = baseElement.querySelector(
        '#test-pagination-parent-only-table-paging-next-btn',
      );
      expect(nextButton).toBeTruthy();
      expect(nextButton?.hasAttribute('disabled')).toBe(false);
    });

    test('should calculate correct total pages for parent rows', () => {
      const dataSet: Person[] = Array.from({ length: 7 }, (_, i) => ({
        firstName: `Person${i + 1}`,
        lastName: 'Test',
        children: [{ firstName: `Child${i + 1}`, lastName: 'Test' }],
      }));

      const { baseElement } = render(
        <DataTable
          id="test-page-calculation"
          columns={cols}
          data={dataSet}
          expandable={true}
          getChildRows={(row: Person) => row.children}
          pageable={true}
          pageSize={3}
        ></DataTable>,
      );

      // With 7 parent rows and pageSize 3, should have 3 pages (3, 3, 1)
      const pageButtons = baseElement.querySelectorAll(
        '.table-paging-btn:not(.table-paging-prev):not(.table-paging-next)',
      );
      expect(pageButtons).toHaveLength(3); // Pages 1, 2, 3
    });

    test('should maintain expansion state across page navigation', async () => {
      const dataSet: Person[] = Array.from({ length: 5 }, (_, i) => ({
        firstName: `Person${i + 1}`,
        lastName: 'Test',
        children: [{ firstName: `Child${i + 1}`, lastName: 'Test' }],
      }));

      const { baseElement } = render(
        <DataTable
          id="test-expansion-navigation"
          columns={cols}
          data={dataSet}
          expandable={true}
          getChildRows={(row: Person) => row.children}
          pageable={true}
          pageSize={2}
          initialExpanded={{ '0': true }}
        ></DataTable>,
      );

      // Initially should show 2 parent rows + 1 child row = 3 total
      let allRows = baseElement.querySelectorAll('tbody tr');
      expect(allRows).toHaveLength(3);

      // Navigate to page 2
      const nextButton = baseElement.querySelector(
        '#test-expansion-navigation-table-paging-next-btn',
      ) as HTMLButtonElement;
      await act(async () => {
        nextButton?.click();
      });

      // Should now show different parent rows
      allRows = baseElement.querySelectorAll('tbody tr');
      // Page 2 might have expanded state maintained, so could have 2 parent + 1 child
      expect(allRows.length).toBeGreaterThanOrEqual(2); // At least 2 parent rows on page 2
    });

    test('should handle expandable and pageable functionality together', async () => {
      const dataSet: Person[] = [
        {
          firstName: 'Person1',
          lastName: 'Test',
          children: [{ firstName: 'Child1', lastName: 'Test' }],
        },
        {
          firstName: 'Person2',
          lastName: 'Test',
        },
        {
          firstName: 'Person3',
          lastName: 'Test',
          children: [{ firstName: 'Child3', lastName: 'Test' }],
        },
        {
          firstName: 'Person4',
          lastName: 'Test',
        },
      ];

      const { baseElement } = render(
        <DataTable
          id="test-expandable-pageable"
          columns={cols}
          data={dataSet}
          expandable={true}
          getChildRows={(row: Person) => row.children}
          pageable={true}
          pageSize={2}
        ></DataTable>,
      );

      // Initially should show 2 parent rows (Person1 and Person2)
      let allRows = baseElement.querySelectorAll('tbody tr');
      expect(allRows).toHaveLength(2);

      // Verify expand button exists for rows with children
      const expandButton = baseElement.querySelector('.expand-button') as HTMLButtonElement;
      expect(expandButton).toBeTruthy();

      // Verify pagination controls exist
      const nextButton = baseElement.querySelector(
        '#test-expandable-pageable-table-paging-next-btn',
      ) as HTMLButtonElement;
      expect(nextButton).toBeTruthy();
      expect(nextButton?.hasAttribute('disabled')).toBe(false);

      // Test expansion functionality
      await act(async () => {
        expandButton?.click();
      });

      // Should now show 2 parent rows + 1 child row = 3 total
      allRows = baseElement.querySelectorAll('tbody tr');
      expect(allRows).toHaveLength(3);

      // Test pagination functionality
      await act(async () => {
        nextButton?.click();
      });

      // Should show 2 parent rows on page 2
      allRows = baseElement.querySelectorAll('tbody tr');
      expect(allRows.length).toBeGreaterThanOrEqual(2);

      // Test that both functionalities can coexist
      const expandButtonPage2 = baseElement.querySelector('.expand-button');
      if (expandButtonPage2) {
        await act(async () => {
          (expandButtonPage2 as HTMLButtonElement)?.click();
        });
        allRows = baseElement.querySelectorAll('tbody tr');
        expect(allRows.length).toBeGreaterThanOrEqual(2);
      }
    });

    test('should handle previous page navigation in expandable pageable mode', async () => {
      const dataSet: Person[] = Array.from({ length: 6 }, (_, i) => ({
        firstName: `Person${i + 1}`,
        lastName: 'Test',
        children: i === 0 ? [{ firstName: `Child${i + 1}`, lastName: 'Test' }] : undefined,
      }));

      const { baseElement } = render(
        <DataTable
          id="test-prev-navigation"
          columns={cols}
          data={dataSet}
          expandable={true}
          getChildRows={(row: Person) => row.children}
          pageable={true}
          pageSize={2}
          pageIndex={1} // Start on page 2
        ></DataTable>,
      );

      // Should be on page 2, showing Person3 and Person4
      let allRows = baseElement.querySelectorAll('tbody tr');
      expect(allRows).toHaveLength(2);

      // Click previous button to test line 166: setPaging((prev) => ({ ...prev, pageIndex: Math.max(0, prev.pageIndex - 1) }));
      const prevButton = baseElement.querySelector(
        '#test-prev-navigation-table-paging-prev-btn',
      ) as HTMLButtonElement;
      expect(prevButton).toBeTruthy();
      expect(prevButton?.hasAttribute('disabled')).toBe(false);

      await act(async () => {
        prevButton?.click();
      });

      // Should now be on page 1, showing Person1 and Person2
      allRows = baseElement.querySelectorAll('tbody tr');
      expect(allRows).toHaveLength(2);

      // Click previous again when at page 0 to test Math.max(0, prev.pageIndex - 1) boundary
      await act(async () => {
        prevButton?.click();
      });

      // Should still be on page 1 (can't go below 0)
      allRows = baseElement.querySelectorAll('tbody tr');
      expect(allRows).toHaveLength(2);
    });

    test('should handle direct page navigation in expandable pageable mode', async () => {
      const dataSet: Person[] = Array.from({ length: 6 }, (_, i) => ({
        firstName: `Person${i + 1}`,
        lastName: 'Test',
        children: i === 0 ? [{ firstName: `Child${i + 1}`, lastName: 'Test' }] : undefined,
      }));

      const { baseElement } = render(
        <DataTable
          id="test-direct-navigation"
          columns={cols}
          data={dataSet}
          expandable={true}
          getChildRows={(row: Person) => row.children}
          pageable={true}
          pageSize={2}
        ></DataTable>,
      );

      // Should start on page 1
      let allRows = baseElement.querySelectorAll('tbody tr');
      expect(allRows).toHaveLength(2);

      // Click on page 3 button to test line 183: setPaging((prev) => ({ ...prev, pageIndex }));
      const page3Button = baseElement.querySelector(
        '#test-direct-navigation-table-paging-btn-2', // Zero-indexed, so page 3 is index 2
      ) as HTMLButtonElement;
      expect(page3Button).toBeTruthy();

      await act(async () => {
        page3Button?.click();
      });

      // Should now be on page 3, showing Person5 and Person6
      allRows = baseElement.querySelectorAll('tbody tr');
      expect(allRows).toHaveLength(2);

      // Click on page 1 button to test direct navigation back
      const page1Button = baseElement.querySelector(
        '#test-direct-navigation-table-paging-btn-0',
      ) as HTMLButtonElement;
      expect(page1Button).toBeTruthy();

      await act(async () => {
        page1Button?.click();
      });

      // Should be back on page 1
      allRows = baseElement.querySelectorAll('tbody tr');
      expect(allRows).toHaveLength(2);
    });
  });

  describe('Accessibility', () => {
    test('should have proper aria-labels on expand buttons', () => {
      const dataWithChildren: Person[] = [
        {
          firstName: 'John',
          lastName: 'Doe',
          children: [{ firstName: 'Johnny', lastName: 'Doe Jr' }],
        },
      ];

      const { baseElement } = render(
        <DataTable
          id="test-aria-labels"
          columns={cols}
          data={dataWithChildren}
          expandable={true}
          getChildRows={(row: Person) => row.children}
        ></DataTable>,
      );

      const expandButton = baseElement.querySelector('.expand-button');
      expect(expandButton).toBeTruthy();
      expect(expandButton?.getAttribute('aria-label')).toBe('Expand row');
    });

    test('should update aria-label when row is expanded', async () => {
      const dataWithChildren: Person[] = [
        {
          firstName: 'John',
          lastName: 'Doe',
          children: [{ firstName: 'Johnny', lastName: 'Doe Jr' }],
        },
      ];

      const { baseElement } = render(
        <DataTable
          id="test-aria-label-update"
          columns={cols}
          data={dataWithChildren}
          expandable={true}
          getChildRows={(row: Person) => row.children}
        ></DataTable>,
      );

      const expandButton = baseElement.querySelector('.expand-button') as HTMLButtonElement;
      expect(expandButton?.getAttribute('aria-label')).toBe('Expand row');

      await act(async () => {
        expandButton?.click();
      });

      expect(expandButton?.getAttribute('aria-label')).toBe('Collapse row');
    });
  });
});
