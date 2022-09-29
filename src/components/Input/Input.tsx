import React, { ChangeEventHandler } from "react";

export interface InputProps {
  onChange: Function;
  placeholder?: string;
  type?: string;
  style?: object;
}

const Input: React.FC<InputProps> = (props: InputProps) => {
  return (
    <input
      className="usa-input"
      placeholder={props.placeholder}
      type={props.type}
      style={props.style}
      onChange={props.onChange as ChangeEventHandler<HTMLInputElement>}
    />
  );
};

export default Input;
