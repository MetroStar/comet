import React from "react";

import "./modal.style.css";

export interface ModalProps {
  id: string;
  show?: boolean;
  onClose?: Function;
  children?: React.ReactNode;
}

export const Modal = ({
  id,
  show = false,
  onClose = () => {},
  children,
}: ModalProps): React.ReactElement => {
  return (
    <div
      id={id}
      data-testid="modal"
      className={`modal ${show ? "show" : "hide"}`}
    >
      <div className="modal-vis" data-testid="modal-vis">
        {children ?? <></>}
      </div>
      <div
        data-testid="modal-overlay"
        className="overlay"
        onClick={onClose as any}
      ></div>
    </div>
  );
};

export default Modal;
