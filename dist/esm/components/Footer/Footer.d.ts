import React from "react";
export interface FooterProps {
    links?: Array<{
        label: string;
        path: string;
    }>;
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
