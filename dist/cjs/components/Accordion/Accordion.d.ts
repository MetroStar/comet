import React, { ReactNode } from "react";
import "./accordion.style.css";
interface Fold {
    id: string;
    label: string;
    expanded: boolean;
    child: ReactNode;
}
export interface AccordionProps {
    id: string;
    allowMultiSelect?: boolean;
    folds: Fold[];
}
export declare const Accordion: ({ id, allowMultiSelect, folds, }: AccordionProps) => React.ReactElement;
export default Accordion;
