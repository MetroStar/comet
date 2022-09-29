import React from "react";
export interface Crumb {
    path: string;
    name: string;
}
export interface BreadcrumbProps {
    crumbs: Crumb[];
    action: Function;
    current?: string;
}
declare const Breadcrumb: React.FC<BreadcrumbProps>;
export default Breadcrumb;
