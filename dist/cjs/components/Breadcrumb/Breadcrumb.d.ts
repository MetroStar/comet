import React from "react";
export interface Crumb {
    path: string;
    name: string;
}
export interface BreadcrumbProps {
    id: string;
    crumbs: Crumb[];
    action: Function;
    current?: string;
}
export declare const Breadcrumb: ({ id, crumbs, current, action, }: BreadcrumbProps) => React.ReactElement;
export default Breadcrumb;
