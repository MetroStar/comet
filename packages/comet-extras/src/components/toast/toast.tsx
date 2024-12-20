import React, { useState, useEffect } from 'react';

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
  type?: 'success' | 'error' | 'warning' | 'info';
  /**
   * Callback function when toast is closed either manually or automatically
   * */
  onClose?: () => void;
}

const styles = {
  toastContainer: {
    position: 'fixed',
    top: '20px',
    right: '20px',
    zIndex: 1000,
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  toast: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    minWidth: '300px',
    maxWidth: '400px',
    padding: '12px 16px',
    borderRadius: '4px',
    color: 'white',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
    animation: 'slideIn 0.3s ease-out forwards',
  },
  leaving: {
    animation: 'slideOut 0.3s ease-in forwards',
  },
  closeButton: {
    background: 'none',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    padding: '4px',
    marginLeft: '12px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.2s',
  },
  message: {
    margin: 0,
    flexGrow: 1,
  },
  '@keyframes slideIn': {
    from: {
      transform: 'translateX(100%)',
      opacity: 0,
    },
    to: {
      transform: 'translateX(0)',
      opacity: 1,
    },
  },
  '@keyframes slideOut': {
    from: {
      transform: 'translateX(0)',
      opacity: 1,
    },
    to: {
      transform: 'translateX(100%)',
      opacity: 0,
    },
  },
};

const typeStyles = {
  success: { background: '#4caf50' },
  error: { background: '#f44336' },
  warning: { background: '#ff9800' },
  info: { background: '#2196f3' },
};

// Add keyframes to document
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
`;
document.head.appendChild(styleSheet);

export const Toast = ({
  id,
  message = 'This is a toast notification',
  duration = 3000,
  type = 'info',
  onClose = () => {},
}: ToastProps): React.ReactElement => {
  const [isVisible, setIsVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);

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
    <div
      id={id}
      style={{
        ...styles.toast,
        ...(isLeaving ? styles.leaving : {}),
        ...typeStyles[type],
      }}
    >
      <p style={styles.message}>{message}</p>
      <button onClick={dismissToast} style={styles.closeButton} aria-label="Close notification">
        ✕
      </button>
    </div>
  );
};

export default Toast;
