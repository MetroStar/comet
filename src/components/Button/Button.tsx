import React, { ReactNode } from "react";

export interface ButtonProps {
  children?: ReactNode;
  onClick?: Function;
  variant?: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick = () => {},
  children = <></>,
  variant = "default",
}: ButtonProps) => {
  return (
    <button
      data-testid="button"
      className={`usa-button usa-button--${variant}`}
      onClick={(e) => onClick(e)}
    >
      {children}
    </button>
  );
};

export default Button;
