import React from "react";

export interface AlertProps {
  show?: boolean;
  type?: string;
  header?: string;
  body?: React.ReactNode;
}

const Alert: React.FC<AlertProps> = ({
  show,
  type = "success",
  header,
  body,
}: AlertProps) => {
  if (!show) return <></>;

  const validTypes = ["info", "warning", "success", "error"];

  return (
    <div
      data-testid="alert"
      className={`usa-alert usa-alert--${
        type && validTypes.includes(type) ? type : "info"
      }`}
    >
      <div className="usa-alert__body">
        <h4 className="usa-alert__heading">{header ?? <></>}</h4>
        <div className="usa-alert__text">{body ?? <></>}</div>
      </div>
    </div>
  );
};

export default Alert;
