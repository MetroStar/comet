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
/**
 * A table shows information in columns and rows.
 */
export declare const Table: ({ id, headers, rows, primaryCol, primaryColAction, }: TableProps) => React.ReactElement;
export default Table;
