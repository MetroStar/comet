import React from "react";
import "./table.style.css";
export interface TableProps {
    id: string;
    headers?: string[];
    rows?: any[][];
    primaryCol?: number;
    primaryColAction?: Function;
}
declare const Table: React.FC<TableProps>;
export default Table;
