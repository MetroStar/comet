import React, { ReactNode } from 'react';

interface Fold {
    label: string;
    child: ReactNode;
}
interface AccordionProps {
    folds: Fold[];
}
declare const Accordion: React.FC<AccordionProps>;

interface Crumb {
    path: string;
    name: string;
}
interface BreadcrumbProps {
    crumbs: Crumb[];
    action: Function;
    current?: string;
}
declare const Breadcrumb: React.FC<BreadcrumbProps>;

interface ButtonProps {
    label: string;
    onClick: Function;
}
declare const Button: React.FC<ButtonProps>;

interface InputProps {
    onChange: Function;
    placeholder?: string;
    type?: string;
    style?: object;
}
declare const Input: React.FC<InputProps>;

export { Accordion, Breadcrumb, Button, Input };
