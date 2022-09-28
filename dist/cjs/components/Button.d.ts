import React from 'react';
export interface ButtonProps {
    label: string;
    onClick: Function;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
