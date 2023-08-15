import table from '@uswds/uswds/js/usa-table';
import classNames from 'classnames';
import React, { useEffect, useRef } from 'react';

export interface TableProps<T = any> {
  /**
   * The unique identifier for this component
   */
  id: string;
  /**
   * The table header details for the table
   */
  columns: TableColumn[];
  /**
   * The data to display in the table rows
   */
  data: T[];
  /**
   * An optional caption to display above the table
   */
  caption?: string;
  /**
   * A boolean indicating if the table is sortable or not
   */
  sortable?: boolean;
  /**
   * The column index to set as the default sort
   */
  sortIndex?: number;
  /**
   * The default sort direction if sortIndex is provided
   */
  sortDir?: 'ascending' | 'descending';
  /**
   * A boolean indicating if the table is scrollabe or not
   */
  scrollable?: boolean;
  /**
   * Additional class names for the table
   */
  className?: string;
  /**
   * Used primarily to make table focusable
   */
  tabIndex?: number;
}

export interface TableColumn {
  id: string;
  name: string;
}

export interface TableCell {
  value: string;
  sortValue?: string;
}

/**
 * A table shows information in columns and rows.
 */
export const Table = ({
  id,
  caption,
  columns,
  data,
  sortable = false,
  sortIndex = 0,
  sortDir = 'ascending',
  scrollable = false,
  className,
  tabIndex = -1,
}: TableProps): React.ReactElement => {
  // Ensure table JS is loaded
  const tableRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const tableElement = tableRef.current;
    // If sortable, call table.on to enable functionality
    if (sortable) {
      table.on(tableElement);
    }

    // Ensure cleanup after the effect
    return () => {
      if (sortable) {
        table.off(tableElement);
        // Buttons added by table.on are not cleaned when calling off function, need to manually clean them up
        tableElement?.querySelectorAll('.usa-table__header__button').forEach((e) => e.remove());
      }
    };
  });

  return (
    <div
      id={id}
      className={classNames(
        { 'usa-table-container': !scrollable },
        { 'usa-table-container--scrollable': scrollable },
      )}
      ref={tableRef}
    >
      <table className={classNames('usa-table', className)} tabIndex={tabIndex}>
        <caption hidden={!!caption}>{caption}</caption>
        <thead>
          <tr>
            {columns.map((column: TableColumn, index: number) => (
              <th
                id={column.id}
                key={column.id}
                data-sortable={sortable || null}
                scope="col"
                role="columnheader"
                aria-sort={sortable && sortIndex === index ? sortDir : undefined}
              >
                {column.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i: number) => {
            const rowData: TableCell[] = [];
            for (const key in row) {
              if (sortable) {
                rowData.push({
                  value: row[key].value,
                  sortValue: row[key].sortValue,
                });
              } else {
                rowData.push({ value: row[key].value ? row[key].value : row[key] });
              }
            }

            return (
              <tr key={`tr-${i}`}>
                {rowData.map((row, j) => (
                  <td key={`td-${j}`} data-sort-value={sortable ? row.sortValue : row.value}>
                    {row.value}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      {sortable && (
        <div className="usa-sr-only usa-table__announcement-region" aria-live="polite"></div>
      )}
    </div>
  );
};

export default Table;
