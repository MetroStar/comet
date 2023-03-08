import React, { ChangeEventHandler } from "react";
import classnames from "classnames";

export interface InputProps {
  id: string;
  type?: "text" | "email" | "number" | "password" | "search" | "tel" | "url";
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export const Input = ({
  id,
  className,
  type,
  onChange,
  ...props
}: InputProps & JSX.IntrinsicElements["input"]): React.ReactElement => {
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

export default Input;
