import React, { ReactNode } from 'react';
export interface SiteAlertProps {
    /**
     * The unique identifier for this component
     */
    id: string;
    /**
     * The type of alert to display
     */
    type?: 'Info' | 'Emergency';
    /**
     * The heading for the alert
     */
    heading?: string;
    /**
     * A boolean indicating whether or not the alert should be slim
     */
    slim?: boolean;
    /**
     * A boolean indicating whether or not to show the applicable icon
     */
    noIcon?: boolean;
    /**
     * A custom class to apply to the component
     */
    className?: string;
    /**
     * The contents of the alert
     */
    children: ReactNode;
}
/**
 * A site alert communicates urgent sitewide information.
 */
export declare const SiteAlert: ({ id, type, heading, slim, noIcon, className, children, }: SiteAlertProps) => React.ReactElement;
export default SiteAlert;
