import React from 'react';
export interface FileInputProps {
    /**
     * The unique identifier for this component
     */
    id: string;
    /**
     * The name for the file input field
     */
    name: string;
}
/**
 * File input allows users to attach one or multiple files.
 */
export declare const FileInput: (inputProps: FileInputProps & JSX.IntrinsicElements['input']) => React.ReactElement;
export default FileInput;
