import classnames from 'classnames';

export interface AlertProps {
  /**
   * The unique identifier for this component
   */
  id: string;
  /**
   * The type of alert to display
   */
  type: 'info' | 'warning' | 'error' | 'success' | 'emergency';
  /**
   * Whether or not to display the alert
   */
  show?: boolean;
  /**
   * Whether or not to display a slim version of the alert
   */
  slim?: boolean;
  /**
   * Whether or not to display the alert icon
   */
  noIcon?: boolean;
  /**
   * Whether or not to display the alert heading
   */
  heading?: string;
  /**
   * The body of the alert as an optional prop
   */
  body?: React.ReactNode;
  /**
   * The body of the alert
   */
  children?: React.ReactNode;
}

/**
 * An alert keeps users informed of important and sometimes time-sensitive changes.
 */
export const Alert = ({
  id,
  type,
  show = true,
  slim,
  noIcon,
  heading,
  body,
  children,
}: AlertProps): React.ReactElement => {
  const classes = classnames('usa-alert', {
    'usa-alert--success': type === 'success',
    'usa-alert--warning': type === 'warning',
    'usa-alert--error': type === 'error',
    'usa-alert--emergency': type === 'emergency',
    'usa-alert--info': type === 'info',
    'usa-alert--slim': slim,
    'usa-alert--no-icon': noIcon,
  });

  if (!show) return <></>;

  return (
    <div id={id} className={classes}>
      <div className="usa-alert__body">
        {heading && <h4 className="usa-alert__heading">{heading}</h4>}
        {body ?? <p className="usa-alert__text">{children}</p>}
      </div>
    </div>
  );
};

export default Alert;
