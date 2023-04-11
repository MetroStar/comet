import React, { ReactNode } from 'react';
export interface FormGroupProps {
    /**
     * The unique identifier for this component
     */
    id?: string;
    /**
     * An array of string error messages
     */
    errors?: string[];
    /**
     * Additional class name for the form group
     */
    className?: string;
    /**
     * The contents of the form group
     */
    children: ReactNode;
}
/**
 * A wrapper for form elements used to provide validation formatting.
 */
export declare const FormGroup: ({ id, errors, className, children, }: FormGroupProps) => React.ReactElement;
export default FormGroup;
