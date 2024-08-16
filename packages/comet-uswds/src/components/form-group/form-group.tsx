import React, { isValidElement, ReactNode } from 'react';
import classNames from 'classnames';
import Label from '../label';
import HelperText from '../helper-text';
import ErrorMessages from '../error-messages';
import { ValidationStatus } from 'src/utils/types';

export interface FormGroupProps {
  /**
   * The unique identifier for this component
   */
  id?: string;
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
   * Additional class name for the form group
   */
  className?: string;
  /**
   * The contents of the form group
   */
  fieldControl?: ReactNode;
  /**
   * The contents of the form group
   */
  children?: ReactNode;
}

/**
 * A wrapper for form elements used to provide validation formatting.
 */
export const FormGroup = ({
  id = undefined,
  required,
  label,
  helperText,
  errors,
  validationStatus,
  className,
  fieldControl,
  children,
}: FormGroupProps): React.ReactElement => {
  const classes = classNames(
    'usa-form-group',
    {
      'usa-form-group--error': !!(errors && errors.length > 0) || validationStatus === 'error',
    },
    className,
  );

  // If no children and fieldControl provided, render partial
  if (!children && !fieldControl) {
    return <></>;
  }

  // If children are provided, render them directly
  if (children) {
    return (
      <div id={id} className={classes}>
        {children}
      </div>
    );
  }

  // If fieldControl is provided, augment as needed
  const fieldControlId = isValidElement(fieldControl) ? fieldControl.props.id : undefined;
  const fieldControlWithProps = isValidElement(fieldControl)
    ? React.cloneElement(fieldControl, {
        'aria-describedby': `${id}-helper-text`,
      } as React.Attributes)
    : fieldControl;

  return (
    <div id={id} className={classes}>
      {label ? (
        <Label htmlFor={fieldControlId} required={required}>
          {label}
        </Label>
      ) : (
        <></>
      )}
      {helperText ? <HelperText id={`${id}-helper-text`}>{helperText}</HelperText> : <></>}
      {errors ? <ErrorMessages id={`${id}-errors`} errors={errors} /> : <></>}
      {fieldControlWithProps ? fieldControlWithProps : <></>}
    </div>
  );
};

export default FormGroup;
