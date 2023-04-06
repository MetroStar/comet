import React from "react";
export interface StepIndicatorProps {
    /**
     * The unique identifier for this component
     */
    id: string;
    /**
     * Array of labels for the steps. Length of array will be used as step count.
     */
    steps: string[];
    /**
     * Step that is currently active. (0-based index)
     */
    currentStep: number;
    /**
     * Hides labels of step indicator if set to true. Defaults to false.
     */
    hideLabels?: boolean;
    /**
     * Shows step number in step indicator if set to true. Defaults to false.
     */
    showCounters?: boolean;
    /**
     * Shows small step number in step indicator if set to true. Defaults to false.
     */
    showSmallCounters?: boolean;
    /**
     * Centers label and counter if set to true. Defaults to false.
     */
    centerCounters?: boolean;
    /**
     * Level of the heading (h1, h2, h3, h4, h5, h6). Defaults to h4
     */
    headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}
export declare const StepIndicator: ({ id, steps, currentStep, hideLabels, showCounters, showSmallCounters, centerCounters, headingLevel, }: StepIndicatorProps) => React.ReactElement;
export default StepIndicator;
