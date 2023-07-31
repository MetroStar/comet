import React, { ReactNode, useLayoutEffect, useRef } from 'react';
import modal from '@uswds/uswds/js/usa-modal';
import iconSprite from '@uswds/uswds/img/sprite.svg';
import classnames from 'classnames';

export interface ModalProps {
  /**
   * The unique identifier for this component
   */
  id: string;
  /**
   * The type of modal to display
   */
  size?: 'small' | 'large';
  /**
   * The heading for the alert
   */
  heading: string;
  /**
   * The footer for the alert
   */
  footer?: ReactNode;
  /**
   * The contents of the alert
   */
  children: ReactNode;
}

/**
 * A modal disables page content and focuses the user’s attention on a single task or message.
 */
export const Modal = ({
  id,
  heading,
  size = 'small',
  footer,
  children,
}: ModalProps): React.ReactElement => {
  const modalRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const modalElement = modalRef.current;
    modal.on(modalElement);
    return () => modal.off(modalElement);
  });

  const classes = classnames('usa-modal', {
    'usa-modal--lg': size === 'large',
  });

  return (
    <div
      ref={modalRef}
      className={classes}
      id={id}
      aria-labelledby={`${id}-heading`}
      aria-describedby={`${id}-description`}
    >
      <div className="usa-modal__content">
        <div className="usa-modal__main">
          <h2 className="usa-modal__heading" id={`${id}-heading`}>
            {heading}
          </h2>
          {children}
          <div className="usa-modal__footer">{footer}</div>
        </div>
        <button
          className="usa-button usa-modal__close"
          aria-label="Close this window"
          data-close-modal
        >
          <svg className="usa-icon" aria-hidden="true" focusable="false" role="img">
            <use xlinkHref={`${iconSprite}#close`}></use>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Modal;
