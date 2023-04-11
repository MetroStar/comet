import React, { ReactNode } from 'react';
export interface ProcessListProps {
    /**
     * The unique identifier for this component
     */
    id: string;
    /**
     * The level of the headings
     */
    headingElementName?: string;
    /**
     * Additional class names for the heading element
     */
    headingClassName?: string;
    /**
     * The level of the headings
     */
    steps: ProcessListStep[];
}
export interface ProcessListStep {
    /**
     * The heading for the step
     */
    heading: string;
    /**
     * The content of the step
     */
    content: ReactNode;
}
/**
 * A process list displays the steps or stages of important instructions or processes.
 */
export declare const ProcessList: ({ id, headingElementName, headingClassName, steps, }: ProcessListProps) => React.ReactElement;
export default ProcessList;
