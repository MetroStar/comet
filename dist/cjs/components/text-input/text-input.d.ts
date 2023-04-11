import React, { ChangeEventHandler, ReactNode } from 'react';
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
export declare const TextInput: ({ id, className, type, mask, prefix, suffix, onChange, ...props }: TextInputProps & Omit<JSX.IntrinsicElements['input'], 'prefix' | 'suffix'>) => React.ReactElement;
export default TextInput;
