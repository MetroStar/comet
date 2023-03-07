import React, { PropsWithChildren, ReactNode } from "react";
export interface CardProps {
    id: string;
    children: ReactNode;
}
export declare const Card: ({ id, children }: CardProps) => React.ReactElement;
export declare const CardBody: React.FC<PropsWithChildren>;
export declare const CardHeader: React.FC<PropsWithChildren>;
export declare const CardFooter: React.FC<PropsWithChildren>;
export default Card;
