import React, { ChangeEventHandler } from "react";
export interface TextInputProps {
    id: string;
    type?: "text" | "email" | "number" | "password" | "search" | "tel" | "url";
    onChange?: ChangeEventHandler<HTMLInputElement>;
}
export declare const TextInput: ({ id, className, type, onChange, ...props }: TextInputProps & JSX.IntrinsicElements["input"]) => React.ReactElement;
export default TextInput;
