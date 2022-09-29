import React from "react";
export interface InputProps {
    onChange: Function;
    placeholder?: string;
    type?: string;
    style?: object;
}
declare const Input: React.FC<InputProps>;
export default Input;
