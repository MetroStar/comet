import React, { ReactNode, SyntheticEvent } from "react";
export interface ButtonProps {
    id: string;
    type?: "button" | "submit" | "reset";
    variant?: "default" | "secondary" | "accent-cool" | "accent-warm" | "base" | "outline" | "outline-inverse" | "big" | "unstyled";
    className?: string;
    onClick?: (param: SyntheticEvent) => void;
    children?: ReactNode;
}
export declare const Button: ({ id, type, variant, className, children, ...props }: ButtonProps & JSX.IntrinsicElements["button"]) => React.ReactElement;
export default Button;
