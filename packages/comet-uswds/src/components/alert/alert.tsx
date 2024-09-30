import classnames from 'classnames';
import Button from '../button';
import Icon from '../icon';
import { useState } from 'react';
import './alert.style.css';

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
   * Whether or not to display the close button
   */
  allowClose?: boolean;
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
  /**
   * The function to call when the alert is closed
   * */
  onClose?: () => void;
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
  allowClose = false,
  heading,
  body,
  children,
  onClose,
}: AlertProps): React.ReactElement => {
  const [closed, setClosed] = useState(!show);
  const classes = classnames('usa-alert', {
    'usa-alert--success': type === 'success',
    'usa-alert--warning': type === 'warning',
    'usa-alert--error': type === 'error',
    'usa-alert--emergency': type === 'emergency',
    'usa-alert--info': type === 'info',
    'usa-alert--slim': slim,
    'usa-alert--no-icon': noIcon,
  });

  if (closed) return <></>;

  return (
    <div id={id} className={classes}>
      <div className="usa-alert__body">
        <div className="display-flex">
          <div className="flex-1">
            {heading && <h4 className="usa-alert__heading">{heading}</h4>}
          </div>
          <div className="flex-0">
            {allowClose && (
              <Button
                id={`close-btn-${id}`}
                variant="unstyled"
                aria-label="Close"
                onClick={() => {
                  setClosed(true);
                  if (onClose) {
                    onClose();
                  }
                }}
              >
                <div className="margin-auto">
                  <Icon id={`close-btn-icon-${id}`} type="close" />
                </div>
              </Button>
            )}
          </div>
        </div>
        {body ?? <p className="usa-alert__text">{children}</p>}
      </div>
    </div>
  );
};

export default Alert;
