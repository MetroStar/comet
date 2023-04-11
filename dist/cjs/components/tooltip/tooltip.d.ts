import React, { ReactNode } from 'react';
export interface TooltipProps {
    /**
     * The text value to display in the tooltip
     */
    label: string;
    /**
     * Where the tooltip will display in reference to its child
     */
    position?: 'top' | 'right' | 'bottom' | 'left';
    /**
     * The contents of the tooltip
     */
    children: ReactNode;
}
/**
 * A tooltip is a short descriptive message that appears when a user hovers or focuses on an element.
 */
export declare const Tooltip: ({ label, position, children, }: TooltipProps) => React.ReactElement;
export default Tooltip;
