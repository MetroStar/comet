import React, { ReactNode } from "react";
import "./accordion.style.css";
interface Fold {
    label: string;
    child: ReactNode;
}
export interface AccordionProps {
    folds: Fold[];
}
declare const Accordion: React.FC<AccordionProps>;
export default Accordion;
