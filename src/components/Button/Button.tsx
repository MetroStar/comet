import React, { ReactNode } from 'react';

export interface ButtonProps {
  children?: ReactNode
  onClick?: Function
  variant?: string
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  variant
}: ButtonProps) => {
  return (
    <button
      data-testid="button"
      className={`usa-button usa-button--${variant || 'default'}`}
      onClick={(e) => (onClick != null ? onClick(e) : {})}
    >
      {children || <></>}
    </button>
  )
}

export default Button
