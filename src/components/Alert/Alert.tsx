import React from "react";

export interface AlertProps {
  show?: boolean;
  type?: string;
  slim?: boolean;
  header?: string;
  children?: React.ReactNode;
}

const Alert: React.FC<AlertProps> = ({
  show,
  type = "success",
  slim,
  header,
  children,
}: AlertProps) => {
  if (!show) return <></>;

  const validTypes = ["info", "warning", "success", "error"];

  return (
    <div
      data-testid="alert"
      className={`usa-alert usa-alert--${
        type && validTypes.includes(type) ? type : "info"
      } ${slim ? "usa-alert--slim usa-alert--no-icon" : ""}`}
    >
      <div className="usa-alert__body">
        {header ? <h4 className="usa-alert__heading">{header}</h4> : <></>}
        {children}
      </div>
    </div>
  );
};

export default Alert;
