import React, { ReactNode } from 'react';
export interface LabelProps {
    /**
     * The HTML element that this is labeling
     */
    htmlFor?: string;
    /**
     * A boolean indicating whether or not the field is required
     */
    required?: boolean;
    /**
     * The contents of the label
     */
    children: ReactNode;
}
/**
 * Defines a label for an HTML element.
 */
export declare const Label: ({ htmlFor, required, children, ...labelProps }: LabelProps & JSX.IntrinsicElements['label']) => React.ReactElement;
export default Label;
