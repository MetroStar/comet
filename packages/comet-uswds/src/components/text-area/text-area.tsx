import classnames from 'classnames';
import React, { ChangeEventHandler } from 'react';
import { ValidationStatus } from 'src/utils/types';
import FormGroup from '../form-group';

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
   * The number of rows to render for the textarea
   */
  rows?: number;
  /**
   * A boolean indicating whether or not the field is required
   */
  required?: boolean;
  /**
   * Label text to display with the input
   */
  label?: string;
  /**
   * Helper text to display with the input
   */
  helperText?: string;
  /**
   * An array of string error messages
   */
  errors?: string | string[];
  /**
   * State based styling to apply to the form group
   */
  validationStatus?: ValidationStatus;
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
  rows,
  required,
  label,
  helperText,
  errors,
  validationStatus,
  className,
  onChange,
  ...props
}: TextAreaProps & JSX.IntrinsicElements['textarea']): React.ReactElement => {
  const classes = classnames(
    'usa-textarea',
    {
      'usa-input--error': validationStatus === 'error',
      'usa-input--success': validationStatus === 'success',
    },
    className,
  );

  return (
    <FormGroup
      id={`form-group-${id}`}
      required={required}
      label={label}
      helperText={helperText}
      errors={errors}
      validationStatus={validationStatus}
      fieldControl={
        <textarea
          className={classes}
          style={rows === undefined ? undefined : { height: 'unset' }}
          id={id}
          name={name}
          rows={rows}
          onChange={onChange}
          {...props}
        />
      }
    />
  );
};

export default TextArea;
