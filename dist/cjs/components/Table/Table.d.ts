import React from "react";
import "./table.style.css";
export interface TableProps {
    id: string;
    headers?: string[];
    rows?: any[][];
    primaryCol?: number;
    primaryColAction?: Function;
}
export declare const Table: ({ id, headers, rows, primaryCol, primaryColAction, }: TableProps) => React.ReactElement;
export default Table;
