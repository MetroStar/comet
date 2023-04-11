import React from 'react';
import './table.style.css';

export interface TableProps {
  /**
   * The unique identifier for this component
   */
  id: string;
  /**
   * An string array of table header items
   */
  headers?: string[];
  /**
   * An array of row objects
   */
  rows?: any[][];
  /**
   * The index of the primary column
   */
  primaryCol?: number;
  /**
   * Custom callback for when primary column is clicked
   */
  primaryColAction?: Function;
}

const handleNonPrimitives = (e: any): any => (typeof e === 'object' ? JSON.stringify(e) : e);

export const Table = ({
  id,
  headers,
  rows,
  primaryCol,
  primaryColAction = (e: any): void => {},
}: TableProps): React.ReactElement => {
  return (
    <div className="table" id={id}>
      <table className="usa-table dynamic-table">
        <thead>
          <tr>{headers ? headers.map((e, i) => <th key={`table-head-${i}`}>{e}</th>) : <></>}</tr>
        </thead>
        <tbody>
          {rows ? (
            rows.map((cols, j) => (
              <tr key={`table-row-${j}`}>
                {cols.map((e, i) => (
                  <td key={`table-cell-${j}-${i}`}>
                    {primaryCol === i ? (
                      <span
                        className="col-primary text-primary"
                        onClick={() => primaryColAction(e)}
                      >
                        {handleNonPrimitives(e)}
                      </span>
                    ) : (
                      handleNonPrimitives(e)
                    )}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <></>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
