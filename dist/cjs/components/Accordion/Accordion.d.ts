import React, { ReactNode } from "react";
import "./accordion.style.css";
interface Fold {
    label: string;
    child: ReactNode;
}
export interface AccordionProps {
    id: string;
    folds: Fold[];
}
export declare const Accordion: ({ id, folds, }: AccordionProps) => React.ReactElement;
export default Accordion;
