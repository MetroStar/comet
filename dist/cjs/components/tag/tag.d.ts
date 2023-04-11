import React, { ReactNode } from 'react';
export interface TagProps {
    /**
     * The unique identifier for this component
     */
    id: string;
    /**
     * The children of the tag
     */
    children: ReactNode;
    /**
     * The size of the tag
     */
    size?: 'Default' | 'Big';
    /**
     * Any additional CSS classes will be added to the tag
     */
    className?: string;
}
/**
 * A tag draws attention to new or categorized content elements.
 */
export declare const Tag: ({ id, children, size, className, }: TagProps) => React.ReactElement;
export default Tag;
