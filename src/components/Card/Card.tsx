import React, { PropsWithChildren, ReactNode } from "react";

export interface CardProps {
  id: string;
  children: ReactNode;
}

export const Card = ({ id, children }: CardProps): React.ReactElement => {
  return (
    <div className="usa-card usa-card desktop:grid-col-12" id={id}>
      <div className="usa-card__container">{children}</div>
    </div>
  );
};

export const CardBody: React.FC<PropsWithChildren> = ({
  children,
}: PropsWithChildren) => {
  return <div className="usa-card__body">{children}</div>;
};

export const CardHeader: React.FC<PropsWithChildren> = ({
  children,
}: PropsWithChildren) => {
  return (
    <div className="usa-card__header">
      <h2 className="usa-card__heading text-primary-dark">{children}</h2>
    </div>
  );
};

export const CardFooter: React.FC<PropsWithChildren> = ({
  children,
}: PropsWithChildren) => {
  return <div className="usa-card__footer">{children}</div>;
};

export default Card;
