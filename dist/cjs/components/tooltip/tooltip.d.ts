import { ReactNode } from 'react';
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
export declare function Tooltip({ label, position, children, }: TooltipProps): JSX.Element;
export default Tooltip;
