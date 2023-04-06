import { ReactNode } from 'react';
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
export declare function ButtonGroup({ id, alignment, className, children, }: ButtonGroupProps): JSX.Element;
export default ButtonGroup;
