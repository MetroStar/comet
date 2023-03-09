import React, { ReactNode } from "react";

/* eslint-disable-next-line */
export interface LabelProps {
  /**
   * The HTML element that this is labeling
   */
  htmlFor?: string;
  /**
   * A boolean indicating whether or not the field is required
   */
  required?: boolean;
  /**
   * The contents of the label
   */
  children: ReactNode;
}

export function Label({
  htmlFor,
  required,
  children,
  ...labelProps
}: LabelProps & JSX.IntrinsicElements["label"]) {
  return (
    <label className="usa-label" htmlFor={htmlFor} {...labelProps}>
      {children}
      {required && <span className="text-red"> *</span>}
    </label>
  );
}

export default Label;
