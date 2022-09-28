import React from 'react';

interface ButtonProps {
    label: string;
    onClick: Function;
}
declare const Button: React.FC<ButtonProps>;

export { Button };
