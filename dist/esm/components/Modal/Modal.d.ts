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
/**
 * A modal disables page content and focuses the user’s attention on a single task or message.
 */
export declare const Modal: ({ id, show, onClose, children, }: ModalProps) => React.ReactElement;
export default Modal;
