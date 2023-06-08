import React, { ReactNode, Children } from 'react';
import classnames from 'classnames';

export interface ButtonGroupProps {
  /**
   * The unique identifier for this component
   */
  id?: string;
  /**
   * The type of button group to display
   */
  type?: 'default' | 'segmented';
  /**
   * A custom class to apply to the component
   */
  className?: string;
  /**
   * The contents of the label
   */
  children?: ReactNode;
}

/**
 * A button group collects similar or related actions.
 */
export const ButtonGroup = ({
  id = undefined,
  type = 'default',
  className,
  children,
}: ButtonGroupProps): React.ReactElement => {
  const classes = classnames(
    'usa-button-group',
    { 'usa-button-group--segmented': type === 'segmented' },
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
