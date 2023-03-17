import React, { ReactNode, Children } from 'react';
import classnames from 'classnames';

/* eslint-disable-next-line */
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

export const ButtonGroup = ({
  id = undefined,
  alignment = 'left',
  className,
  children,
}: ButtonGroupProps): React.ReactElement => {
  const classes = classnames(
    'usa-button-group',
    {
      'float-left': alignment === 'left',
      'float-right': alignment === 'right',
    },
    className,
  );

  return (
    <ul id={id} className={classes}>
      {Children.map(children, (child: ReactNode, index) => {
        return (
          <li key={index} className="usa-button-group__item">
            {child}
          </li>
        );
      })}
    </ul>
  );
};

export default ButtonGroup;
