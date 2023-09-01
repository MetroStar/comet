import React from 'react';
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
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
  striped: boolean;
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
  striped,
  className,
}: DataTableProps): React.ReactElement => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table id={id} className={classNames('data-table', { striped }, className)}>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
