import React from "react";
import "./table.style.css";

export interface TableProps {
  headers?: string[];
  rows?: any[][];
  primaryCol?: number;
  primaryColAction?: Function;
}

const handleNonPrimitives = (e: any): any =>
  typeof e === "object" ? JSON.stringify(e) : e;

const Table: React.FC<TableProps> = ({
  headers,
  rows,
  primaryCol,
  primaryColAction = (e: any): void => {},
}: TableProps) => {
  return (
    <div className="table">
      <table className="usa-table dynamic-table">
        <thead>
          <tr>
            {headers ? (
              headers.map((e, i) => <th key={`table-head-${i}`}>{e}</th>)
            ) : (
              <></>
            )}
          </tr>
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