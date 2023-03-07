import React from "react";
import "./modal.style.css";
export interface ModalProps {
    id: string;
    show?: boolean;
    onClose?: Function;
    children?: React.ReactNode;
}
declare const Modal: React.FC<ModalProps>;
export default Modal;
