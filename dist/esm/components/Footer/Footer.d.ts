import React from 'react';
export declare type Navigate = (path: string) => void;
export interface FooterProps {
    /**
     * An array of navigation items
     */
    links?: Array<{
        label: string;
        path: string;
    }>;
    /**
     * Custom callback for navigation change
     */
    onNavigate?: Navigate;
    /**
     * A text value to display next to the logo
     */
    logoText?: string;
    /**
     * The URL to the logo
     */
    logoSrc?: string;
    /**
     * A text message to display with the contact information
     */
    contactMessage?: string;
    /**
     * Contact email to display
     */
    email?: string;
    /**
     * Contact phone number to display
     */
    phone?: string;
    /**
     * An object of URLs to link to socials
     */
    socials?: {
        facebook?: string;
        twitter?: string;
        youtube?: string;
        instagram?: string;
    };
}
/**
 * A footer serves site visitors who arrive at the bottom of a page without finding what they want.
 */
export declare const Footer: ({ links, onNavigate, logoText, logoSrc, contactMessage, email, phone, socials, }: FooterProps) => React.ReactElement;
export default Footer;
