import React, { ChangeEventHandler } from 'react';
export interface TextAreaProps {
    /**
     * The unique identifier for the textarea
     */
    id: string;
    /**
     * The name of the textarea
     */
    name: string;
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
export declare const TextArea: ({ id, name, rows, className, onChange, ...textAreaProps }: TextAreaProps & JSX.IntrinsicElements['textarea']) => React.ReactElement;
export default TextArea;
