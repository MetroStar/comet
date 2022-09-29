import React from "react";
export interface CardProps {
    header?: React.ReactNode;
    children?: React.ReactNode;
    footer?: React.ReactNode;
}
declare const Card: React.FC<CardProps>;
export default Card;
