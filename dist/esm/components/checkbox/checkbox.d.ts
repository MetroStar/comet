import { ChangeEventHandler, MouseEventHandler } from "react";
export interface CheckboxData {
    /**
     * The text inside of the checkbox
     */
    label: string;
    /**
     * Default value of the checkbox
     */
    value?: string | ReadonlyArray<string> | number;
    /**
     * Whether the checkbox is checked by default
     */
    checked?: boolean;
}
export interface CheckboxProps extends CheckboxData {
    /**
     * The unique identifier for this component
     */
    id: string;
    /**
     * The name for the checkbox input field
     */
    name: string;
    /**
     * Whether the component is rendered as a tile
     */
    isTile?: boolean;
    /**
     * Event handler will be triggered when the checkbox value changes
     */
    onChange?: ChangeEventHandler<HTMLInputElement>;
    /**
     * Event handler will be triggered when the checkbox is clicked
     */
    onClick?: MouseEventHandler<HTMLInputElement>;
}
export declare function Checkbox({ id, name, label, value, checked, isTile, onChange, onClick, ...inputProps }: CheckboxProps & JSX.IntrinsicElements["input"]): JSX.Element;
export default Checkbox;
export interface CheckboxGroupProps {
    /**
     * The unique identifier for this component
     */
    id: string;
    /**
     * The name for all checkbox input fields
     */
    name: string;
    /**
     * Array of checkbox data for the input fields
     */
    data: CheckboxData[];
    /**
     * Whether the components are rendered as a tile
     */
    areTiles?: boolean;
    /**
     * Event handler will be triggered when the checkbox value changes
     */
    onChange?: ChangeEventHandler<HTMLInputElement>;
    /**
     * Event handler will be triggered when the checkbox is clicked
     */
    onClick?: MouseEventHandler<HTMLInputElement>;
}
export declare function CheckboxGroup({ id, name, data, areTiles, onChange, onClick, }: CheckboxGroupProps): JSX.Element;
