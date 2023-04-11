import { DropdownOption, DropdownProps } from '../dropdown/dropdown';
import React from 'react';
export declare type ComboBoxOption = DropdownOption;
export declare type ComboBoxProps = {
    /**
     * The placeholder value to display in the control
     */
    placeholder?: string;
} & DropdownProps & JSX.IntrinsicElements['select'];
/**
 * A combo box helps users select an item from a large list of options.
 */
export declare const ComboBox: ({ placeholder, ...comboBoxProps }: ComboBoxProps) => React.ReactElement;
export default ComboBox;
