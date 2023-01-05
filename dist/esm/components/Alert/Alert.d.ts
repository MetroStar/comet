import React from "react";
export interface AlertProps {
    show?: boolean;
    type?: string;
    slim?: boolean;
    header?: string;
    children?: React.ReactNode;
}
declare const Alert: React.FC<AlertProps>;
export default Alert;
