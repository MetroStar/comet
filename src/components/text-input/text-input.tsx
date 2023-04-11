import React, { ChangeEventHandler, ReactNode } from 'react';
import classnames from 'classnames';
import { getInputMode, getPattern, getPlaceholder, getType } from './input-utils';

export interface TextInputProps {
  /**
   * The unique identifier for this component
   */
  id: string;
  /**
   * The type of input to display
   */
  type?: 'text' | 'email' | 'number' | 'password' | 'search' | 'tel' | 'url';
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
  className,
  type,
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
      'usa-masked': mask,
    },
    className,
  );

  const getInputElement = (
    <input
      id={id}
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

  return prefix ?? suffix ? (
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
