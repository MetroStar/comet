import classNames from 'classnames';
import React, { ChangeEventHandler } from 'react';
import { ValidationStatus } from 'src/utils/types';

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
  validationStatus?: ValidationStatus;
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
  validationStatus,
  hint,
  rows,
  className,
  onChange,
  ...textAreaProps
}: TextAreaProps & JSX.IntrinsicElements['textarea']): React.ReactElement => {
  const classes = classNames(
    'usa-textarea',
    {
      'usa-input--error': validationStatus === 'error' && !textAreaProps.disabled,
      'usa-input--success': validationStatus === 'success' && !textAreaProps.disabled,
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
