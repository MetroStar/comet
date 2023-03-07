import React from "react";
import classnames from "classnames";

export interface AlertProps {
  id: string;
  type: "info" | "warning" | "error" | "success";
  show?: boolean;
  slim?: boolean;
  noIcon?: boolean;
  heading?: string;
  children?: React.ReactNode;
}

export const Alert = ({
  id,
  type,
  show = true,
  slim,
  noIcon,
  heading,
  children,
}: AlertProps): React.ReactElement => {
  const classes = classnames("usa-alert", {
    "usa-alert--success": type === "success",
    "usa-alert--warning": type === "warning",
    "usa-alert--error": type === "error",
    "usa-alert--info": type === "info",
    "usa-alert--slim": slim,
    "usa-alert--no-icon": noIcon,
  });

  if (!show) return <></>;

  return (
    <div id={id} className={classes}>
      <div className="usa-alert__body">
        {heading && <h4 className="usa-alert__heading">{heading}</h4>}
        <p className="usa-alert__text">{children}</p>
      </div>
    </div>
  );
};

export default Alert;
