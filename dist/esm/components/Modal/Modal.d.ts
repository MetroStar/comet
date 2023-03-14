import React from "react";
import "./modal.style.css";
export interface ModalProps {
    id: string;
    show?: boolean;
    onClose?: Function;
    children?: React.ReactNode;
}
export declare const Modal: ({ id, show, onClose, children, }: ModalProps) => React.ReactElement;
export default Modal;
