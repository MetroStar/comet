import React, { ReactNode } from "react";
export interface ButtonProps {
    children?: ReactNode;
    onClick?: Function;
    variant?: string;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
