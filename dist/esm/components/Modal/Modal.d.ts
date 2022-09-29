import React from "react";
import "./modal.style.css";
export interface ModalProps {
    show?: boolean;
    close?: Function;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    children?: React.ReactNode;
}
declare const Modal: React.FC<ModalProps>;
export default Modal;
