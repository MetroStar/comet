import React, { ReactNode } from "react";
export interface SideNavigationItem {
    /**
     * Anchor to render for current SideNavigationItem
     */
    anchor: ReactNode;
    /**
     * Items of the navigation
     */
    items?: SideNavigationItem[];
}
export interface SideNavigationProps {
    /**
     * The unique identifier for this component
     */
    id: string;
    /**
     * The aria-label for the navigation element
     */
    ariaLabel: string;
    /**
     * Items of the navigation
     */
    items: SideNavigationItem[];
}
export declare const SideNavigation: ({ id, ariaLabel, items, }: SideNavigationProps) => React.ReactElement;
export default SideNavigation;
