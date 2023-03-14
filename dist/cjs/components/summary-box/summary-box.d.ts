/// <reference types="react" />
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
export declare function SummaryBox({ id, heading, className, items }: SummaryBoxProps): JSX.Element;
export default SummaryBox;
