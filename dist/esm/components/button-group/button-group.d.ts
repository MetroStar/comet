import React, { ReactNode } from 'react';
export interface ButtonGroupProps {
    /**
     * The unique identifier for this component
     */
    id?: string;
    /**
     * Whether to justify left or right
     */
    alignment?: 'left' | 'right';
    /**
     * A custom class to apply to the component
     */
    className?: string;
    /**
     * The contents of the label
     */
    children?: ReactNode;
}
/**
 * A button group collects similar or related actions.
 */
export declare const ButtonGroup: ({ id, alignment, className, children, }: ButtonGroupProps) => React.ReactElement;
export default ButtonGroup;
