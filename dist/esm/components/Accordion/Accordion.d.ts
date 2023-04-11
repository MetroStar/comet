import React, { ReactNode } from 'react';
import './accordion.style.css';
interface Fold {
    /**
     * The unique identifier for the fold
     */
    id: string;
    /**
     * The label value for the fold
     */
    label: string;
    /**
     * Whether or not the fold is expanded
     */
    expanded: boolean;
    /**
     * The body of the fold
     */
    child: ReactNode;
}
export interface AccordionProps {
    /**
     * The unique identifier for this component
     */
    id: string;
    /**
     * Whether or not to allow multiple folds to be expanded at once
     */
    allowMultiSelect?: boolean;
    /**
     * An array of Fold objects, used to build the accordion
     */
    folds: Fold[];
}
/**
 * An accordion is a list of headers that hide or reveal additional content when selected.
 */
export declare const Accordion: ({ id, allowMultiSelect, folds, }: AccordionProps) => React.ReactElement;
export default Accordion;
