import React from 'react'

enum variants {
  "default",
  "accent-cool",
  "accent-warm",
  "base",
  "outline"
}

export interface ButtonProps {
  label: string
  onClick: Function
  variant?: string[variants]
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <button data-testid="button" className={`usa-button usa-button--${props.variant || "default"}`} onClick={(e) => props.onClick(e)}>
      {props.label}
    </button>
  )
}

export default Button
