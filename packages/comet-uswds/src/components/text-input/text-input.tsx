import React, { ChangeEventHandler, JSX, ReactNode, useEffect, useRef } from 'react';
import classnames from 'classnames';
import { getInputMode, getPattern, getPlaceholder, getType } from './input-utils';
import FormGroup from '../form-group';
import { ValidationStatus } from '../utils/types';
import inputMask from '@uswds/uswds/js/usa-input-mask';

export interface TextInputProps {
  /**
   * The unique identifier for this component
   */
  id: string;
  /**
   * The name for the combo box input field
   */
  name?: string;
  /**
   * The type of input to display
   */
  type?: 'text' | 'email' | 'number' | 'password' | 'search' | 'tel' | 'url';
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
   * The type of mask to apply to the input
   */
  mask?: 'ssn' | 'phone_number' | 'zip_5_digit' | 'zip_9_digit';
  /**
   * Custom element to display before the input
   */
  prefix?: ReactNode;
  /**
   * Custom element to display after the input
   */
  suffix?: ReactNode;
  /**
   * Custom callback for when input is changed
   */
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

/**
 * A text input allows users to enter any combination of letters, numbers, or symbols.
 */
export const TextInput = ({
  id,
  name,
  required,
  label,
  helperText,
  errors,
  validationStatus,
  className,
  type,
  mask,
  prefix,
  suffix,
  onChange,
  ...props
}: TextInputProps &
  Omit<JSX.IntrinsicElements['input'], 'prefix' | 'suffix'>): React.ReactElement => {
  const inputRef = useRef<HTMLInputElement>(null);
  // Ensure input mask JS is loaded
  useEffect(() => {
    const inputElement = inputRef.current;
    if (inputElement && mask) {
      inputMask.on(inputElement);
    }

    // Ensure cleanup after the effect
    return () => {
      if (inputElement && mask) {
        inputMask.off(inputElement);
      }
    };
  });

  const classes = classnames(
    'usa-input',
    {
      'usa-input--error': validationStatus === 'error',
      'usa-input--success': validationStatus === 'success',
      'usa-masked': mask,
    },
    className,
  );

  const getInputElement = (
    <input
      ref={inputRef}
      id={id}
      name={name}
      className={classes}
      data-testid="input"
      type={getType(mask, type)}
      onChange={onChange}
      pattern={getPattern(mask, props.pattern)}
      placeholder={getPlaceholder(mask, props.placeholder)}
      inputMode={getInputMode(mask, props.inputMode)}
      {...props}
    />
  );

  const getInputGroup = (
    <div className="usa-input-group">
      {prefix ? (
        <div className="usa-input-prefix" aria-hidden="true">
          {prefix}
        </div>
      ) : undefined}
      {getInputElement}
      {suffix ? (
        <div className="usa-input-suffix" aria-hidden="true">
          {suffix}
        </div>
      ) : undefined}
    </div>
  );

  return (
    <FormGroup
      id={`form-group-${id}`}
      required={required}
      label={label}
      helperText={helperText}
      errors={errors}
      validationStatus={validationStatus}
      fieldControl={(prefix ?? suffix) ? getInputGroup : getInputElement}
    />
  );
};

export default TextInput;
