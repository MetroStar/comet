import React from "react";

export interface CardProps {
  header?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ header, children, footer }: CardProps) => {
  return (
    <div className="usa-card usa-card desktop:grid-col-12">
      <div className="usa-card__container">
        <div className="usa-card__header">
          <h2 className="usa-card__heading text-primary-dark">
            {header ?? ""}
          </h2>
        </div>
        <div className="usa-card__body">{children ?? <></>}</div>
        <div className="usa-card__footer">{footer ?? <></>}</div>
      </div>
    </div>
  );
};

export default Card;
