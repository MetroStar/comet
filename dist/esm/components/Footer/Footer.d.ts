import React from "react";
export declare type Navigate = (path: string) => void;
export interface FooterProps {
    links?: Array<{
        label: string;
        path: string;
    }>;
    onNavigate?: Navigate;
    logoText?: string;
    logoSrc?: string;
    contactMessage?: string;
    email?: string;
    phone?: string;
    socials?: {
        facebook?: string;
        twitter?: string;
        youtube?: string;
        instagram?: string;
    };
}
declare const Footer: React.FC<FooterProps>;
export default Footer;
