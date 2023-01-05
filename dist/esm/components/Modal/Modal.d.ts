import React from "react";
import "./modal.style.css";
export interface ModalProps {
    show?: boolean;
    close?: Function;
    children?: React.ReactNode;
}
declare const Modal: React.FC<ModalProps>;
export default Modal;
