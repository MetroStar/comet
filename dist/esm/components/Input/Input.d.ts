import React, { ChangeEventHandler } from "react";
export interface InputProps {
    id: string;
    type?: "text" | "email" | "number" | "password" | "search" | "tel" | "url";
    onChange?: ChangeEventHandler<HTMLInputElement>;
}
export declare const Input: ({ id, className, type, onChange, ...props }: InputProps & JSX.IntrinsicElements["input"]) => React.ReactElement;
export default Input;
