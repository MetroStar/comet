import React from 'react';

import './modal.style.css';

export interface ModalProps {
  /**
   * The unique identifier for this component
   */
  id: string;
  /**
   * Whether or not to display the modal
   */
  show?: boolean;
  /**
   * Custom callback for when modal is closed
   */
  onClose?: Function;
  /**
   * The body of the modal
   */
  children?: React.ReactNode;
}

export const Modal = ({
  id,
  show = false,
  onClose = () => {},
  children,
}: ModalProps): React.ReactElement => {
  return (
    <div id={id} data-testid="modal" className={`modal ${show ? 'show' : 'hide'}`}>
      <div className="modal-vis" data-testid="modal-vis">
        {children ?? <></>}
      </div>
      <div data-testid="modal-overlay" className="overlay" onClick={onClose as any}></div>
    </div>
  );
};

export default Modal;
