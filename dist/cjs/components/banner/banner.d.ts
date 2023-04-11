import React from 'react';
export interface BannerProps {
    /**
     * The unique identifier for this component
     */
    id: string;
    /**
     * The type of banner to display
     */
    type?: 'gov' | 'mil';
}
/**
 * Banners identify official websites of government organizations in the United States. They also help visitors understand whether a website is official and secure.
 */
export declare const Banner: ({ id, type }: BannerProps) => React.ReactElement;
export default Banner;
