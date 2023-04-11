import React from 'react';
export interface AlertProps {
    /**
     * The unique identifier for this component
     */
    id: string;
    /**
     * The type of alert to display
     */
    type: 'info' | 'warning' | 'error' | 'success';
    /**
     * Whether or not to display the alert
     */
    show?: boolean;
    /**
     * Whether or not to display a slim version of the alert
     */
    slim?: boolean;
    /**
     * Whether or not to display the alert icon
     */
    noIcon?: boolean;
    /**
     * Whether or not to display the alert heading
     */
    heading?: string;
    /**
     * The body of the alert
     */
    children?: React.ReactNode;
}
/**
 * An alert keeps users informed of important and sometimes time-sensitive changes.
 */
export declare const Alert: ({ id, type, show, slim, noIcon, heading, children, }: AlertProps) => React.ReactElement;
export default Alert;
