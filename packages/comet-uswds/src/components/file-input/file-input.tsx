import fileInput from '@uswds/uswds/js/usa-file-input';
import React, { useLayoutEffect, useRef } from 'react';

export interface FileInputProps {
  /**
   * The unique identifier for this component
   */
  id: string;
  /**
   * The name for the file input field
   */
  name?: string;
}

/**
 * File input allows users to attach one or multiple files.
 */
export const FileInput = (
  inputProps: FileInputProps & JSX.IntrinsicElements['input'],
): React.ReactElement => {
  const inputRef = useRef<HTMLInputElement>(null);
  useLayoutEffect(() => {
    const inputElement = inputRef.current;
    fileInput.on(inputElement);
    return () => fileInput.off(inputElement);
  }, []);
  return <input className="usa-file-input" type="file" ref={inputRef} {...inputProps} />;
};

export default FileInput;
