import React, { ReactElement, ReactNode } from 'react';
import './tabs.style.css';
export interface TabPanelProps {
    /**
     * The unique identifier for the tab panel
     */
    id: string;
    /**
     * The label value for the tab panel
     */
    label: string;
    /**
     * The contents of the button
     */
    children: ReactNode;
}
export interface TabsProps {
    /**
     * The unique identifier for this component
     */
    id: string;
    /**
     * The id of a tab panel to show by default
     */
    defaultTabId: string;
    /**
     * An array of child tab panels
     */
    children: Array<ReactElement<TabPanelProps>>;
    /**
     * A custom class to apply to the component
     */
    className?: string;
}
export declare const TabPanel: ({ id, children }: TabPanelProps) => React.ReactElement;
/**
 * Used to organize and allow navigation between groups of content.
 */
export declare const Tabs: ({ id, defaultTabId, children, className }: TabsProps) => React.ReactElement;
export default Tabs;
