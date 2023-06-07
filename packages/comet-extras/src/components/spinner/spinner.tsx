import React from 'react';
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
  type?: 'small' | 'large';
  /**
   * An optional text value to display with the indicator
   */
  loadingText?: string;
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
  type = 'large',
  loadingText = 'Loading...',
  className,
  ...props
}: SpinnerProps & JSX.IntrinsicElements['div']): React.ReactElement => {
  const classes = classnames(
    { 'spinner-container-large': type === 'large' },
    { 'spinner-container-small': type === 'small' },
    className,
  );

  return (
    <div id={id} className={classes} {...props}>
      <div className={type === 'large' ? 'spinner-large' : 'spinner-small'}>
        <div className={type === 'large' ? 'dot-spinner-large' : 'dot-spinner-small'}></div>
      </div>
      {loadingText && <div className="loading-text">{loadingText}</div>}
    </div>
  );
};

export default Spinner;
