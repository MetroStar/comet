import React, { useEffect } from 'react';
import {
  SortingState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  getPaginationRowModel,
  PaginationState,
  ExpandedState,
  getExpandedRowModel,
} from '@tanstack/react-table';
import classNames from 'classnames';
import './data-table.style.css';

export interface DataTableProps<T = any> {
  /**
   * The unique identifier for this component
   */
  id: string;
  /**
   * The table column definitions
   */
  columns: T[];
  /**
   * The data to display in the table rows
   */
  data: T[];
  /**
   * A boolean indicating if the table is striped or not
   */
  striped?: boolean;
  /**
   * A boolean indicating if the table is sortable or not
   */
  sortable?: boolean;
  /**
   * The column id to set as the default sort
   */
  sortCol?: string;
  /**
   * The default sort direction if sortIndex is provided
   */
  sortDir?: 'asc' | 'desc';
  /**
   * A boolean indicating if the table is pageable or not
   */
  pageable?: boolean;
  /**
   * The index of the page to display as default
   */
  pageIndex?: number;
  /**
   * The number of items to display per page
   */
  pageSize?: number;
  /**
   * A boolean indicating if the table supports expandable rows
   */
  expandable?: boolean;
  /**
   * A function that returns the child rows for a given parent row
   */
  getChildRows?: (row: T) => T[] | undefined;
  /**
   * Initial expanded state for rows (object with row IDs as keys and boolean values)
   */
  initialExpanded?: Record<string, boolean>;
  /**
   * Additional class names for the table
   */
  className?: string;
}
/**
 * A Data Table shows information in columns and rows, with advanced functionality.
 */
export const DataTable = ({
  id,
  columns,
  data,
  striped = false,
  sortable = false,
  sortCol,
  sortDir,
  pageable = false,
  pageIndex = 0,
  pageSize = 10,
  expandable = false,
  getChildRows,
  initialExpanded = {},
  className,
}: DataTableProps): React.ReactElement => {
  const [sorting, setSorting] = React.useState<SortingState>(
    sortable ? [{ id: sortCol ?? columns[0], desc: sortDir === 'desc' }] : [],
  );
  const [paging, setPaging] = React.useState<PaginationState>({ pageIndex, pageSize });
  const [expanded, setExpanded] = React.useState<ExpandedState>(initialExpanded);

  // When expandable is enabled, we need to handle pagination differently
  // Only parent rows should count towards pagination
  const paginatedData = React.useMemo(() => {
    if (!pageable || !expandable) {
      return data;
    }

    // Calculate pagination based on parent rows only
    const startIndex = paging.pageIndex * paging.pageSize;
    const endIndex = startIndex + paging.pageSize;
    return data.slice(startIndex, endIndex);
  }, [data, pageable, expandable, paging.pageIndex, paging.pageSize]);

  const table = useReactTable({
    data: expandable && pageable ? paginatedData : data,
    columns,
    state: {
      sorting,
      pagination: expandable && pageable ? { pageIndex: 0, pageSize: 1000 } : paging, // Use large page size to disable TanStack pagination
      expanded,
    },
    enableSorting: sortable,
    enableExpanding: expandable,
    onSortingChange: setSorting,
    onPaginationChange: expandable && pageable ? () => {} : setPaging,
    onExpandedChange: setExpanded,
    getSubRows: getChildRows,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    ...(expandable && pageable ? {} : { getPaginationRowModel: getPaginationRowModel() }),
    getExpandedRowModel: getExpandedRowModel(),
  });

  const getPageButtonArray = (): number[] => {
    let totalPages;
    if (expandable && pageable) {
      // Calculate total pages based on parent rows only
      totalPages = Math.ceil(data.length / paging.pageSize);
    } else {
      totalPages = table.getPageCount();
    }

    const array = Array.from({ length: totalPages }, (_, index) => index);
    // Display up to 5 paging buttons at a time
    if (totalPages <= 5) {
      return array.slice(0, totalPages);
    } else {
      const currentPage = paging.pageIndex;
      if (currentPage < 4) {
        return array.slice(0, 5);
      } else {
        const firstPage = currentPage - 3;
        const lastPage = firstPage + 5;
        return array.slice(firstPage, lastPage);
      }
    }
  };

  const canPreviousPage =
    expandable && pageable ? paging.pageIndex > 0 : table.getCanPreviousPage();
  const canNextPage =
    expandable && pageable
      ? paging.pageIndex < Math.ceil(data.length / paging.pageSize) - 1
      : table.getCanNextPage();

  const handlePreviousPage = () => {
    if (expandable && pageable) {
      setPaging((prev) => ({ ...prev, pageIndex: Math.max(0, prev.pageIndex - 1) }));
    } else {
      table.previousPage();
    }
  };

  const handleNextPage = () => {
    if (expandable && pageable) {
      const maxPage = Math.ceil(data.length / paging.pageSize) - 1;
      setPaging((prev) => ({ ...prev, pageIndex: Math.min(maxPage, prev.pageIndex + 1) }));
    } else {
      table.nextPage();
    }
  };

  const handleSetPage = (pageIndex: number) => {
    if (expandable && pageable) {
      setPaging((prev) => ({ ...prev, pageIndex }));
    } else {
      table.setPageIndex(pageIndex);
    }
  };

  useEffect(() => {
    setPaging({ pageIndex, pageSize });
  }, [pageIndex, pageSize]);

  return (
    <>
      <table id={id} className={classNames('data-table', { striped }, className)}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  id={`${id}-th-${header.id}`}
                  key={`${id}-th-${header.id}`}
                  scope="col"
                  role="columnheader"
                >
                  <div
                    className={header.column.getCanSort() ? 'cursor-pointer select-none' : ''}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    {{
                      asc: '  ↑',
                      desc: '  ↓',
                    }[header.column.getIsSorted() as string] ?? null}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <React.Fragment key={row.id}>
                <tr key={row.id} className={row.depth > 0 ? 'child-row' : ''}>
                  {row.getVisibleCells().map((cell, cellIndex) => {
                    return (
                      <td key={cell.id}>
                        {cellIndex === 0 && expandable && row.depth === 0 && (
                          <button
                            className="expand-button"
                            onClick={row.getToggleExpandedHandler()}
                            style={{
                              marginRight: '8px',
                              cursor: row.getCanExpand() ? 'pointer' : 'default',
                              visibility: row.getCanExpand() ? 'visible' : 'hidden',
                            }}
                            aria-label={row.getIsExpanded() ? 'Collapse row' : 'Expand row'}
                          >
                            {row.getIsExpanded() ? (
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <polyline points="8 5 12 9 16 5" />
                                <polyline points="8 19 12 15 16 19" />
                              </svg>
                            ) : (
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <polyline points="8 9 12 5 16 9" />
                                <polyline points="8 15 12 19 16 15" />
                              </svg>
                            )}
                          </button>
                        )}
                        {cellIndex === 0 && row.depth > 0 && (
                          <span
                            style={{
                              marginLeft: `${row.depth * 20}px`,
                              marginRight: '8px',
                            }}
                          />
                        )}
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    );
                  })}
                </tr>
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
      {pageable ? (
        <div className="table-paging">
          <button
            id={`${id}-table-paging-prev-btn`}
            className="table-paging-btn table-paging-prev"
            onClick={handlePreviousPage}
            disabled={!canPreviousPage}
          >
            {'‹'}
          </button>
          {getPageButtonArray().map((index) => {
            return (
              <button
                id={`${id}-table-paging-btn-${index}`}
                key={`${id}-table-paging-btn-${index}`}
                className={`table-paging-btn table-paging-btn ${
                  index === paging.pageIndex ? 'table-paging-btn-active' : ''
                }`}
                onClick={() => handleSetPage(index)}
              >
                {index + 1}
              </button>
            );
          })}
          <button
            id={`${id}-table-paging-next-btn`}
            className="table-paging-btn table-paging-next"
            onClick={handleNextPage}
            disabled={!canNextPage}
          >
            {'›'}
          </button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default DataTable;
