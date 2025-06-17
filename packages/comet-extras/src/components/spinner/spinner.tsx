import React, { JSX } from 'react';
import classnames from 'classnames';
import './spinner.style.css';

export interface SpinnerProps {
  /**
   * The unique identifier for this component
   */
  id: string;
  /**
   * The size of the spinner to display
   */
  type?: 'tiny' | 'small' | 'medium' | 'large';
  /**
   * An optional text value to display with the indicator
   */
  loadingText?: string;
  /**
   * Position of the loading text relative to the spinner
   */
  textPosition?: 'top' | 'right' | 'bottom' | 'left';
  /**
   * A custom class to apply to the component
   */
  className?: string;
}

/**
 * Used to provide the loading state of some action.
 */
export const Spinner = ({
  id,
  type = 'medium',
  loadingText = '',
  textPosition = 'bottom',
  className,
  ...props
}: SpinnerProps & JSX.IntrinsicElements['div']): React.ReactElement => {
  const classes = classnames(
    'spinner-container',
    `spinner-container-${type}`,
    `text-position-${textPosition}`,
    className,
  );

  return (
    <div id={id} className={classes} {...props}>
      <div className={`spinner-${type}`} />
      {loadingText && <div className="loading-text">{loadingText}</div>}
    </div>
  );
};

export default Spinner;
