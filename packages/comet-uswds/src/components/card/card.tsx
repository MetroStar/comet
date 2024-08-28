import React, { PropsWithChildren, ReactNode } from 'react';
import classnames from 'classnames';

export interface CardProps {
  /**
   * The unique identifier for this component
   */
  id: string;
  /**
   * The layout of the card
   */
  layout?: 'default' | 'flag';
  /**
   * Whether the media is on the right
   */
  mediaRight?: boolean;
  /**
   * A custom class to apply to the component
   */
  className?: string;
  /**
   * The body of the card
   */
  children: ReactNode;
}

export interface CardMediaProps {
  /**
   * Whether the card media is inset
   */
  inset?: boolean;
  /**
   * Whether the card media is exdent
   */
  exdent?: boolean;
  /**
   * The body of the card media
   */
  children: ReactNode;
}

/**
 * Cards contain content and actions about a single subject.
 */
export const Card = ({
  id,
  layout = 'default',
  mediaRight = false,
  className,
  children,
}: CardProps): React.ReactElement => {
  const classes = classnames(
    'usa-card',
    { 'usa-card--flag flex-1': layout === 'flag' },
    { 'usa-card--media-right': mediaRight },
    className,
  );

  return (
    <div className={classes} id={id}>
      <div className="usa-card__container">{children}</div>
    </div>
  );
};

export const CardBody = ({ children }: PropsWithChildren): React.ReactElement => {
  return <div className="usa-card__body">{children}</div>;
};

export const CardHeader = ({ children }: PropsWithChildren): React.ReactElement => {
  return (
    <div className="usa-card__header">
      <h2 className="usa-card__heading">{children}</h2>
    </div>
  );
};

export const CardMedia = ({
  inset = false,
  exdent = false,
  children,
}: CardMediaProps): React.ReactElement => {
  const classes = classnames(
    'usa-card__media',
    { 'usa-card__media--inset': inset },
    { 'usa-card__media--exdent': exdent },
  );

  return (
    <div className={classes}>
      <div className="usa-card__img">{children}</div>
    </div>
  );
};

export const CardFooter = ({ children }: PropsWithChildren): React.ReactElement => {
  return <div className="usa-card__footer">{children}</div>;
};

export default Card;
