/// <reference types="react" />
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
export declare function Banner({ id, type }: BannerProps): JSX.Element;
export default Banner;
