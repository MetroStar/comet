import React, { ChangeEventHandler } from "react";
import classnames from "classnames";

export interface TextInputProps {
  id: string;
  type?: "text" | "email" | "number" | "password" | "search" | "tel" | "url";
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export const TextInput = ({
  id,
  className,
  type,
  onChange,
  ...props
}: TextInputProps & JSX.IntrinsicElements["input"]): React.ReactElement => {
  return (
    <input
      id={id}
      className={classnames("usa-input", className)}
      type={type}
      data-testid="input"
      onChange={onChange}
      {...props}
    />
  );
};

export default TextInput;
