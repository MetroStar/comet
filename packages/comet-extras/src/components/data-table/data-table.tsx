import React, { useEffect } from 'react';
import {
  ColumnSort,
  SortingState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
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
  className,
}: DataTableProps): React.ReactElement => {
  const [sorting, setSorting] = React.useState<SortingState>(
    sortable ? [{ id: sortCol ?? columns[0], desc: sortDir === 'desc' }] : [],
  );
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    enableSorting: sortable,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <table id={id} className={classNames('data-table', { striped }, className)}>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {header.isPlaceholder ? null : (
                  <div
                    {...{
                      className: header.column.getCanSort() ? 'cursor-pointer select-none' : '',
                      onClick: header.column.getToggleSortingHandler(),
                    }}
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    {{
                      asc: '  ↑',
                      desc: '  ↓',
                    }[header.column.getIsSorted() as string] ?? null}
                  </div>
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table
          .getRowModel()
          .rows.slice(0, 10)
          .map((row) => {
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
  );
};

export default DataTable;
