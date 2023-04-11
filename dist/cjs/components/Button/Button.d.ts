import React, { ReactNode, SyntheticEvent } from 'react';
export interface ButtonProps {
    /**
     * The unique identifier for this component
     */
    id: string;
    /**
     * The type of button to display
     */
    type?: 'button' | 'submit' | 'reset';
    /**
     * The style variant of button to display
     */
    variant?: 'default' | 'secondary' | 'accent-cool' | 'accent-warm' | 'base' | 'outline' | 'outline-inverse' | 'big' | 'unstyled';
    /**
     * A custom class to apply to the component
     */
    className?: string;
    /**
     * Custom callback for when button is clicked
     */
    onClick?: (param: SyntheticEvent) => void;
    /**
     * The contents of the button
     */
    children?: ReactNode;
}
/**
 * A button draws attention to important actions with a large selectable surface.
 */
export declare const Button: ({ id, type, variant, className, children, ...props }: ButtonProps & JSX.IntrinsicElements['button']) => React.ReactElement;
export default Button;
