import fileInput from '@uswds/uswds/js/usa-file-input';
import React, { useLayoutEffect, useRef } from 'react';
import FormGroup from '../form-group';

export interface FileInputProps {
  /**
   * The unique identifier for this component
   */
  id: string;
  /**
   * The name for the file input field
   */
  name?: string;
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
}

/**
 * File input allows users to attach one or multiple files.
 */
export const FileInput = ({
  id,
  required,
  label,
  helperText,
  errors,
  ...inputProps
}: FileInputProps & JSX.IntrinsicElements['input']): React.ReactElement => {
  const inputRef = useRef<HTMLInputElement>(null);
  useLayoutEffect(() => {
    const inputElement = inputRef.current;
    fileInput.on(inputElement);
    return () => fileInput.off(inputElement);
  }, []);
  return (
    <FormGroup
      id={`form-group-${id}`}
      required={required}
      label={label}
      helperText={helperText}
      errors={errors}
      fieldControl={
        <input className="usa-file-input" type="file" ref={inputRef} id={id} {...inputProps} />
      }
    />
  );
};

export default FileInput;
