import classNames from 'classnames';
import React, { ChangeEventHandler } from 'react';

export interface TextAreaProps {
  /**
   * The unique identifier for the textarea
   */
  id: string;
  /**
   * The name of the textarea
   */
  name?: string;
  /**
   * State based styling to apply to the textarea
   */
  variant?: 'default' | 'error' | 'success';
  /**
   * Helper text to display above the input
   */
  hint?: string;
  /**
   * The number of rows to render for the textarea
   */
  rows?: number;
  /**
   * Event handler for when value of textarea is changes
   */
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
}

/**
 * A text area allows users to enter any combination of letters, numbers, or symbols.
 */
export const TextArea = ({
  id,
  name,
  variant = 'default',
  hint,
  rows,
  className,
  onChange,
  ...textAreaProps
}: TextAreaProps & JSX.IntrinsicElements['textarea']): React.ReactElement => {
  const classes = classNames(
    'usa-textarea',
    {
      'usa-input--error': variant === 'error' && !textAreaProps.disabled,
      'usa-input--success': variant === 'success' && !textAreaProps.disabled,
    },
    className,
  );
  return (
    <>
      {hint ? (
        <div className="usa-hint" id={`${id}-hint`}>
          {hint}
        </div>
      ) : undefined}
      <textarea
        className={classes}
        style={rows === undefined ? undefined : { height: 'unset' }}
        id={id}
        name={name}
        rows={rows}
        onChange={onChange}
        {...textAreaProps}
      />
    </>
  );
};

export default TextArea;
