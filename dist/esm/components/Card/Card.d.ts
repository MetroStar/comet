import React, { PropsWithChildren, ReactNode } from 'react';
export interface CardProps {
    /**
     * The unique identifier for this component
     */
    id: string;
    /**
     * The body of the card
     */
    children: ReactNode;
}
/**
 * Cards contain content and actions about a single subject.
 */
export declare const Card: ({ id, children }: CardProps) => React.ReactElement;
export declare const CardBody: React.FC<PropsWithChildren>;
export declare const CardHeader: React.FC<PropsWithChildren>;
export declare const CardFooter: React.FC<PropsWithChildren>;
export default Card;
