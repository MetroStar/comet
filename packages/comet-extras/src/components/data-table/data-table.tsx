import React from 'react';
import {
  SortingState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  getPaginationRowModel,
  PaginationState,
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
  className,
}: DataTableProps): React.ReactElement => {
  const [sorting, setSorting] = React.useState<SortingState>(
    sortable ? [{ id: sortCol ?? columns[0], desc: sortDir === 'desc' }] : [],
  );
  const [paging, setPaging] = React.useState<PaginationState>({ pageIndex, pageSize });
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      pagination: paging,
    },
    enableSorting: sortable,
    onSortingChange: setSorting,
    onPaginationChange: setPaging,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
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

  return (
    <>
      <table id={id} className={classNames('data-table', { striped }, className)}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
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
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {pageable ? (
        <div className="table-paging">
          <button
            id="table-paging-prev-btn"
            className="table-paging-btn table-paging-prev"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {'<'}
          </button>
          {getPageButtonArray().map((index) => {
            return (
              <button
                id="table-paging-btn"
                key={`paging-btn-${index}`}
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
            id="table-paging-next-btn"
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
