import React from 'react';
import './header.style.css';
export declare type Navigate = (path: string) => void;
export declare type Search = (search: string) => void;
export interface HeaderProps {
    /**
     * An element to display as the logo for the header
     */
    logo?: React.ReactNode;
    /**
     * A root value for the header
     */
    root?: string;
    /**
     * Custom callback for navigation change
     */
    onNavigate?: Navigate;
    /**
     * An array of navigation groups
     */
    folding?: Array<{
        label: string;
        items: Array<{
            label: string;
            path: string;
        }>;
    }>;
    /**
     * An array of navigation items
     */
    simple?: Array<{
        label: string;
        path: string;
    }>;
    /**
     * Whether or not to display search component
     */
    showSearch?: boolean;
    /**
     * Custom callback for search event
     */
    onSearch?: Search;
}
/**
 * A header helps users identify where they are and provides a quick, organized way to reach the main sections of a website.
 */
export declare const Header: ({ logo, onNavigate, folding, simple, showSearch, onSearch, }: HeaderProps) => React.ReactElement;
export default Header;
