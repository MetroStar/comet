import React, { ChangeEventHandler } from "react";
import classnames from "classnames";
import {
  getInputMode,
  getPattern,
  getPlaceholder,
  getType,
} from "./input-utils";

export interface TextInputProps {
  id: string;
  type?: "text" | "email" | "number" | "password" | "search" | "tel" | "url";
  mask?: "ssn" | "phone_number" | "zip_5_digit" | "zip_9_digit";
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export const TextInput = ({
  id,
  className,
  type,
  mask,
  onChange,
  ...props
}: TextInputProps & JSX.IntrinsicElements["input"]): React.ReactElement => {
  const classes = classnames(
    "usa-input",
    {
      "usa-masked": mask,
    },
    className
  );

  return (
    <input
      id={id}
      className={classes}
      data-testid="input"
      type={getType(mask, type)}
      onChange={onChange}
      pattern={getPattern(mask, props.pattern)}
      placeholder={getPlaceholder(mask, props.placeholder)}
      inputMode={getInputMode(mask, props.inputMode)}
      {...props}
    />
  );
};

export default TextInput;
