import React, { ChangeEventHandler, MouseEventHandler } from 'react';
export interface RadioButtonData {
    /**
     * The text inside of the radioButton
     */
    label: string;
    /**
     * Default value of the radioButton
     */
    value?: string | readonly string[] | number;
    /**
     * Whether the radioButton is checked by default
     */
    checked?: boolean;
}
export interface RadioButtonProps extends RadioButtonData {
    /**
     * The unique identifier for this component
     */
    id: string;
    /**
     * The name for the radioButton input field
     */
    name: string;
    /**
     * Whether the component is rendered as a tile
     */
    isTile?: boolean;
    /**
     * Event handler will be triggered when the radioButton value changes
     */
    onChange?: ChangeEventHandler<HTMLInputElement>;
    /**
     * Event handler will be triggered when the radioButton is clicked
     */
    onClick?: MouseEventHandler<HTMLInputElement>;
}
/**
 * Radio buttons allow users to select exactly one choice from a group.
 */
export declare const RadioButton: ({ id, name, label, value, checked, isTile, onChange, onClick, ...inputProps }: RadioButtonProps & JSX.IntrinsicElements['input']) => React.ReactElement;
export default RadioButton;
export interface RadioButtonGroupProps {
    /**
     * The unique identifier for this component
     */
    id: string;
    /**
     * The name for all radioButton input fields
     */
    name: string;
    /**
     * Array of radioButton data for the input fields
     */
    data: RadioButtonData[];
    /**
     * Whether the components are rendered as a tile
     */
    areTiles?: boolean;
    /**
     * Event handler will be triggered when the radioButton value changes
     */
    onChange?: ChangeEventHandler<HTMLInputElement>;
    /**
     * Event handler will be triggered when the radioButton is clicked
     */
    onClick?: MouseEventHandler<HTMLInputElement>;
}
export declare const RadioButtonGroup: ({ id, name, data, areTiles, onChange, onClick, }: RadioButtonGroupProps) => React.ReactElement;
