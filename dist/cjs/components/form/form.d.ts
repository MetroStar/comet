import React from 'react';
export interface FormProps {
    /**
     * The unique identifier for the dropdown
     */
    id: string;
    /**
     * Whether to render a large form
     */
    isLarge?: boolean;
}
/**
 * A form allows users to enter information into a page.
 */
export declare const Form: ({ id, isLarge, className, children, ...formProps }: FormProps & JSX.IntrinsicElements['form']) => React.ReactElement;
export default Form;
