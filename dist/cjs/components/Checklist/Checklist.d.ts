import React from "react";
import "./checklist.style.css";
export interface ChecklistProps {
    items?: string[];
    onChange?: Function;
    label?: string;
}
declare const Checklist: React.FC<ChecklistProps>;
export default Checklist;
