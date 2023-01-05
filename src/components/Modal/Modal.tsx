import React from "react";

import "./modal.style.css";

export interface ModalProps {
  show?: boolean;
  close?: Function;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  show = false,
  close = () => {},
  children,
}: ModalProps) => {
  return (
    <div data-testid="modal" className={`modal ${show ? "show" : "hide"}`}>
      <div className="modal-vis" data-testid="modal-vis">
        {children ?? <></>}
      </div>
      <div
        data-testid="modal-overlay"
        className="overlay"
        onClick={close as any}
      ></div>
    </div>
  );
};

export default Modal;
