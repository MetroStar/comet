/// <reference types="react" />
import { DropdownOption, DropdownProps } from "../dropdown/dropdown";
export declare type ComboBoxOption = DropdownOption;
export declare type ComboBoxProps = {
    placeholder?: string;
} & DropdownProps & JSX.IntrinsicElements["select"];
export declare function ComboBox({ placeholder, ...comboBoxProps }: ComboBoxProps): JSX.Element;
export default ComboBox;
