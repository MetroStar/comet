import React, { ReactNode } from 'react';
import classnames from 'classnames';

export interface SiteAlertProps {
  /**
   * The unique identifier for this component
   */
  id: string;
  /**
   * The type of alert to display
   */
  type?: 'Info' | 'Emergency';
  /**
   * The heading for the alert
   */
  heading?: string;
  /**
   * A boolean indicating whether or not the alert should be slim
   */
  slim?: boolean;
  /**
   * A boolean indicating whether or not to show the applicable icon
   */
  noIcon?: boolean;
  /**
   * A custom class to apply to the component
   */
  className?: string;
  /**
   * The contents of the alert
   */
  children: ReactNode;
}

/**
 * A site alert communicates urgent sitewide information.
 */
export const SiteAlert = ({
  id,
  type = 'Info',
  heading,
  slim = false,
  noIcon = false,
  className,
  children,
}: SiteAlertProps): React.ReactElement => {
  const classes = classnames(
    'usa-site-alert',
    {
      'usa-site-alert--emergency': type === 'Emergency',
      'usa-site-alert--info': type === 'Info',
      'usa-site-alert--slim': slim,
      'usa-site-alert--no-icon': noIcon,
    },
    className,
  );

  return (
    <section id={id} className={classes} aria-label="Site Alert">
      <div className="usa-alert">
        <div className="usa-alert__body">
          {heading && <h3 className="usa-alert__heading">{heading}</h3>}
          {children && <p className="usa-alert__text">{children}</p>}
        </div>
      </div>
    </section>
  );
};

export default SiteAlert;
