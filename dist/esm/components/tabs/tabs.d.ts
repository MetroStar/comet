import React, { ReactElement, ReactNode } from 'react';
import './tabs.style.css';
export interface TabPanelProps {
    id: string;
    label: string;
    children: ReactNode;
}
export interface TabsProps {
    id: string;
    defaultTabId: string;
    children: ReactElement<TabPanelProps>[];
    className?: string;
}
export declare const TabPanel: ({ id, children }: TabPanelProps) => React.ReactElement;
export declare const Tabs: ({ id, defaultTabId, children, className }: TabsProps) => React.ReactElement;
export default Tabs;
