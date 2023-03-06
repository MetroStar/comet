import React from "react";
import "./header.style.css";
export declare type Navigate = (path: string) => void;
export declare type Search = (search: string) => void;
export interface HeaderProps {
    logo?: React.ReactNode;
    root?: string;
    onNavigate?: Navigate;
    folding?: Array<{
        label: string;
        items: Array<{
            label: string;
            path: string;
        }>;
    }>;
    simple?: Array<{
        label: string;
        path: string;
    }>;
    showSearch?: boolean;
    onSearch?: Search;
}
declare const Header: React.FC<HeaderProps>;
export default Header;
