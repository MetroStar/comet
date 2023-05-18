import React, { PropsWithChildren, ReactNode } from 'react';
import classnames from 'classnames';

export interface CardProps {
  /**
   * The unique identifier for this component
   */
  id: string;
  /**
   * A custom class to apply to the component
   */
  className?: string;
  /**
   * The body of the card
   */
  children: ReactNode;
}

/**
 * Cards contain content and actions about a single subject.
 */
export const Card = ({ id, className, children }: CardProps): React.ReactElement => {
  const classes = classnames('usa-card__container', className);

  return (
    <div className={classes} id={id}>
      {children}
    </div>
  );
};

export const CardBody: React.FC<PropsWithChildren> = ({ children }: PropsWithChildren) => {
  return <div className="usa-card__body">{children}</div>;
};

export const CardHeader: React.FC<PropsWithChildren> = ({ children }: PropsWithChildren) => {
  return (
    <div className="usa-card__header">
      <h2 className="usa-card__heading text-primary-dark">{children}</h2>
    </div>
  );
};

export const CardFooter: React.FC<PropsWithChildren> = ({ children }: PropsWithChildren) => {
  return <div className="usa-card__footer">{children}</div>;
};

export default Card;
