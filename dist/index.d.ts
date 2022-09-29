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

interface CardProps {
    header?: React.ReactNode;
    children?: React.ReactNode;
    footer?: React.ReactNode;
}
declare const Card: React.FC<CardProps>;

interface ChecklistProps {
    items?: string[];
    onChange?: Function;
    label?: string;
}
declare const Checklist: React.FC<ChecklistProps>;

interface InputProps {
    onChange: Function;
    placeholder?: string;
    type?: string;
    style?: object;
}
declare const Input: React.FC<InputProps>;

interface TableProps {
    headers?: string[];
    rows?: any[][];
    primaryCol?: number;
    primaryColAction?: Function;
}
declare const Table: React.FC<TableProps>;

export { Accordion, Breadcrumb, Button, Card, Checklist, Input, Table };
