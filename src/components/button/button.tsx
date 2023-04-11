import React, { ReactNode, SyntheticEvent } from 'react';
import classnames from 'classnames';

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
  variant?:
    | 'default'
    | 'secondary'
    | 'accent-cool'
    | 'accent-warm'
    | 'base'
    | 'outline'
    | 'outline-inverse'
    | 'big'
    | 'unstyled';
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
export const Button = ({
  id,
  type = 'button',
  variant = 'default',
  className,
  children,
  ...props
}: ButtonProps & JSX.IntrinsicElements['button']): React.ReactElement => {
  const classes = classnames(
    'usa-button',
    {
      'usa-button--secondary': variant === 'secondary',
      'usa-button--accent-cool': variant === 'accent-cool',
      'usa-button--accent-warm': variant === 'accent-warm',
      'usa-button--base': variant === 'base',
      'usa-button--outline': variant === 'outline',
      'usa-button--outline usa-button--inverse': variant === 'outline-inverse',
      'usa-button--big': variant === 'big',
      'usa-button--unstyled': variant === 'unstyled',
    },
    className,
  );

  return (
    <button id={id} type={type} className={classes} data-testid="button" {...props}>
      {children}
    </button>
  );
};

export default Button;
