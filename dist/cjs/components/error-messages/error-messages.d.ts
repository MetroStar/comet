import React from 'react';
export interface ErrorMessagesProps {
    /**
     * The unique identifier for this component
     */
    id?: string;
    /**
     * An array of error strings to display
     */
    errors: string[];
}
/**
 * Outputs a list of error messages as HTML.
 */
export declare const ErrorMessages: ({ id, errors, }: ErrorMessagesProps) => React.ReactElement;
export default ErrorMessages;
