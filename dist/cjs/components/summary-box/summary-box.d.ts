import React from 'react';
export interface SummaryBoxProps {
    /**
     * The unique identifier for this component
     */
    id: string;
    /**
     * The heading for the summary box
     */
    heading: string;
    /**
     * A custom class to apply to the component
     */
    className?: string;
    /**
     * An array of string messages to display in the summary box
     */
    items: string[];
}
/**
 * A summary box highlights key information from a longer page or displays next steps.
 */
export declare const SummaryBox: ({ id, heading, className, items, }: SummaryBoxProps) => React.ReactElement;
export default SummaryBox;
