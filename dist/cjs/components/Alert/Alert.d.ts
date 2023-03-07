import React from "react";
export interface AlertProps {
    id: string;
    type: "info" | "warning" | "error" | "success";
    show?: boolean;
    slim?: boolean;
    noIcon?: boolean;
    heading?: string;
    children?: React.ReactNode;
}
export declare const Alert: ({ id, type, show, slim, noIcon, heading, children, }: AlertProps) => React.ReactElement;
export default Alert;
