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
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      pagination: paging,
      expanded,
    },
    enableSorting: sortable,
    enableExpanding: expandable,
    onSortingChange: setSorting,
    onPaginationChange: setPaging,
    onExpandedChange: setExpanded,
    getSubRows: getChildRows,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
  });

  const getPageButtonArray = (): number[] => {
    const totalPages = table.getPageCount();
    const array = Array.from({ length: totalPages }, (_, index) => index++);
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
                            {row.getIsExpanded() ? '−' : '+'}
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
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {'<'}
          </button>
          {getPageButtonArray().map((index) => {
            return (
              <button
                id={`${id}-table-paging-btn-${index}`}
                key={`${id}-table-paging-btn-${index}`}
                className={`table-paging-btn table-paging-btn ${
                  index === paging.pageIndex ? 'table-paging-btn-active' : ''
                }`}
                onClick={() => table.setPageIndex(index)}
              >
                {index + 1}
              </button>
            );
          })}
          <button
            id={`${id}-table-paging-next-btn`}
            className="table-paging-btn table-paging-next"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            {'>'}
          </button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default DataTable;
