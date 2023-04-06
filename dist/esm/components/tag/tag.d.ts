import { ReactNode } from 'react';
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
export declare function Tag({ id, children, size, className, }: TagProps): JSX.Element;
export default Tag;
