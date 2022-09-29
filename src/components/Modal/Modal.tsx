import React from "react";
import Card from "../Card";

import "./modal.style.css";

export interface ModalProps {
  show?: boolean;
  close?: Function;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  show = false,
  close = () => {},
  header,
  footer,
  children,
}: ModalProps) => {
  return (
    <div data-testid="modal" className={`modal ${show ? "show" : "hide"}`}>
      <div className="modal-vis" data-testid="modal-vis">
        <Card header={header} footer={footer}>
          {children}
        </Card>
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
