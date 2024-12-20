import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import './toast.style.css';

// Props interface for the Toast component
export interface ToastProps {
  /**
   * The unique identifier for this component
   */
  id: string;
  /**
   * The message to display in the toast
   * */
  message: string;
  /**
   * Duration in milliseconds to show the toast. Set to 0 for no auto-dismiss
   * */
  duration?: number;
  /**
   * The type of toast which determines its color scheme
   * */
  type?: 'success' | 'error' | 'warning' | 'info' | 'emergency';
  /**
   * Callback function when toast is closed either manually or automatically
   * */
  onClose?: () => void;
  /**
   * A custom class to apply to the component
   */
  className?: string;
}

export const Toast = ({
  id,
  message = 'This is a toast notification',
  duration = 3000,
  type = 'info',
  className = 'toast',
  onClose = () => {},
}: ToastProps): React.ReactElement => {
  const [isVisible, setIsVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);

  const classes = classnames(`toast--${type}`, className, `${isLeaving ? 'toast--isLeaving' : ''}`);

  const dismissToast = () => {
    setIsLeaving(true);
    setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 300);
  };

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        dismissToast();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration]);

  if (!isVisible) return <></>;

  return (
    <div id={id} className={classes}>
      <p className="toast__message">{message}</p>
      <button
        onClick={dismissToast}
        className="toast__close-button"
        aria-label="Close notification"
      >
        ✕
      </button>
    </div>
  );
};

export default Toast;
