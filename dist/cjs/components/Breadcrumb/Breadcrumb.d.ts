import React from 'react';
export interface Crumb {
    /**
     * The intended url path for the item
     */
    path: string;
    /**
     * The display value for this bread crumb item
     */
    name: string;
}
export interface BreadcrumbProps {
    /**
     * The unique identifier for this component
     */
    id: string;
    /**
     * An array of bread crumb objects to display
     */
    crumbs: Crumb[];
    /**
     * Custom callback for when breadcrumb item is clicked
     */
    action: Function;
    /**
     * Custom value to display as the current location
     */
    current?: string;
}
/**
 * Breadcrumbs provide secondary navigation to help users understand where they are in a website.
 */
export declare const Breadcrumb: ({ id, crumbs, current, action, }: BreadcrumbProps) => React.ReactElement;
export default Breadcrumb;
