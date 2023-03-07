import React from "react";
import "./checklist.style.css";
export interface ChecklistProps {
    id: string;
    items?: string[];
    onChange?: Function;
    label?: string;
}
export declare const Checklist: ({ id, items, label, onChange, }: ChecklistProps) => React.ReactElement;
export default Checklist;
