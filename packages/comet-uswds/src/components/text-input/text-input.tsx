import React, { ChangeEventHandler, ReactNode } from 'react';
import classnames from 'classnames';
import { getInputMode, getPattern, getPlaceholder, getType } from './input-utils';
import { ValidationStatus } from 'src/utils/types';

export interface TextInputProps {
  /**
   * The unique identifier for this component
   */
  id: string;
  /**
   * The name of the text input
   */
  name?: string;
  /**
   * The type of input to display
   */
  type?: 'text' | 'email' | 'number' | 'password' | 'search' | 'tel' | 'url';
  /**
   * State based styling to apply to the input
   */
  validationStatus?: ValidationStatus;
  /**
   * Helper text to display above the input
   */
  hint?: string;
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
  className,
  type,
  validationStatus,
  hint,
  mask,
  prefix,
  suffix,
  onChange,
  ...props
}: TextInputProps &
  Omit<JSX.IntrinsicElements['input'], 'prefix' | 'suffix'>): React.ReactElement => {
  const classes = classnames(
    'usa-input',
    {
      'usa-input--error': validationStatus === 'error' && !props.disabled,
      'usa-input--success': validationStatus === 'success' && !props.disabled,
      'usa-masked': mask,
    },
    className,
  );

  const getInputElement = (
    <>
      {hint ? (
        <div className="usa-hint" id={`${id}-hint`}>
          {hint}
        </div>
      ) : undefined}
      <input
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
    </>
  );

  return (prefix ?? suffix) ? (
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
  ) : (
    getInputElement
  );
};

export default TextInput;
