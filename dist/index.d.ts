import React, { ReactNode, SyntheticEvent, PropsWithChildren, ChangeEventHandler } from 'react';
import { ForAxes, DomainTuple, VictoryBarAlignmentType } from 'victory';

interface Fold {
    label: string;
    child: ReactNode;
}
interface AccordionProps {
    id: string;
    folds: Fold[];
}
declare const Accordion: ({ id, folds, }: AccordionProps) => React.ReactElement;

interface AlertProps {
    id: string;
    type: "info" | "warning" | "error" | "success";
    show?: boolean;
    slim?: boolean;
    noIcon?: boolean;
    heading?: string;
    children?: React.ReactNode;
}
declare const Alert: ({ id, type, show, slim, noIcon, heading, children, }: AlertProps) => React.ReactElement;

interface Crumb {
    path: string;
    name: string;
}
interface BreadcrumbProps {
    id: string;
    crumbs: Crumb[];
    action: Function;
    current?: string;
}
declare const Breadcrumb: ({ id, crumbs, current, action, }: BreadcrumbProps) => React.ReactElement;

interface ButtonProps {
    id: string;
    type?: "button" | "submit" | "reset";
    variant?: "default" | "secondary" | "accent-cool" | "accent-warm" | "base" | "outline" | "outline-inverse" | "big" | "unstyled";
    className?: string;
    onClick?: (param: SyntheticEvent) => void;
    children?: ReactNode;
}
declare const Button: ({ id, type, variant, className, children, ...props }: ButtonProps & JSX.IntrinsicElements["button"]) => React.ReactElement;

interface CardProps {
    id: string;
    children: ReactNode;
}
declare const Card: ({ id, children }: CardProps) => React.ReactElement;
declare const CardBody: React.FC<PropsWithChildren>;
declare const CardHeader: React.FC<PropsWithChildren>;
declare const CardFooter: React.FC<PropsWithChildren>;

interface ChecklistProps {
    id: string;
    items?: string[];
    onChange?: Function;
    label?: string;
}
declare const Checklist: ({ id, items, label, onChange, }: ChecklistProps) => React.ReactElement;

declare type Navigate$1 = (path: string) => void;
interface FooterProps {
    links?: Array<{
        label: string;
        path: string;
    }>;
    onNavigate?: Navigate$1;
    logoText?: string;
    logoSrc?: string;
    contactMessage?: string;
    email?: string;
    phone?: string;
    socials?: {
        facebook?: string;
        twitter?: string;
        youtube?: string;
        instagram?: string;
    };
}
declare const Footer: React.FC<FooterProps>;

declare type Navigate = (path: string) => void;
declare type Search = (search: string) => void;
interface HeaderProps {
    logo?: React.ReactNode;
    root?: string;
    onNavigate?: Navigate;
    folding?: Array<{
        label: string;
        items: Array<{
            label: string;
            path: string;
        }>;
    }>;
    simple?: Array<{
        label: string;
        path: string;
    }>;
    showSearch?: boolean;
    onSearch?: Search;
}
declare const Header: React.FC<HeaderProps>;

interface InputProps {
    id: string;
    type?: "text" | "email" | "number" | "password" | "search" | "tel" | "url";
    onChange?: ChangeEventHandler<HTMLInputElement>;
}
declare const Input: ({ id, className, type, onChange, ...props }: InputProps & JSX.IntrinsicElements["input"]) => React.ReactElement;

interface ModalProps {
    id: string;
    show?: boolean;
    onClose?: Function;
    children?: React.ReactNode;
}
declare const Modal: React.FC<ModalProps>;

interface TableProps {
    id: string;
    headers?: string[];
    rows?: any[][];
    primaryCol?: number;
    primaryColAction?: Function;
}
declare const Table: React.FC<TableProps>;

declare type EventHandler = () => void;
interface ChartProps {
    height?: number;
    width?: number;
    domain?: ForAxes<DomainTuple>;
    horizontal?: boolean;
    polar?: boolean;
    style?: {
        [attribute: string]: any;
    };
    backgroundComponent?: React.ReactElement;
    eventHandlers?: {
        [eventName: string]: EventHandler;
    };
    children?: React.ReactElement | React.ReactElement[];
}

interface BarGraphProps {
    chart: ChartProps;
    color?: string;
    alignment?: VictoryBarAlignmentType;
    barRatio?: number;
    data: number[];
}
declare const BarGraph: React.FC<BarGraphProps>;

interface LineGraphProps {
    chart: ChartProps;
    colors?: string[];
    smooth?: boolean;
    data: Array<Array<{
        x: number;
        y: number;
    }>>;
}
declare const LineGraph: React.FC<LineGraphProps>;

interface AreaGraphProps {
    chart: ChartProps;
    colors?: string[];
    smooth?: boolean;
    data: Array<Array<{
        x: number;
        y: number;
    }>>;
}
declare const AreaGraph: React.FC<AreaGraphProps>;

interface PolarAxisProps {
    chart: ChartProps;
    colors?: string[];
    ticks?: number[];
    data: Array<Array<{
        x: number;
        y: number;
    }>>;
}
declare const PolarAxis: React.FC<PolarAxisProps>;

interface RadialProps {
    chart: ChartProps;
    color?: string;
    ticks?: number[];
    data: number[];
}
declare const Radial: React.FC<RadialProps>;

interface PieChartProps {
    colors?: string[];
    angle?: {
        start: number;
        end: number;
    };
    data: Array<{
        x: string;
        y: number;
    }>;
}
declare const PieChart: React.FC<PieChartProps>;

export { Accordion, Alert, AreaGraph, BarGraph, Breadcrumb, Button, Card, CardBody, CardFooter, CardHeader, Checklist, Footer, Header, Input, LineGraph, Modal, PieChart, PolarAxis, Radial, Table };
