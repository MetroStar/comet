import React, { ReactNode, PropsWithChildren } from 'react';
import { ForAxes, DomainTuple, VictoryBarAlignmentType } from 'victory';

interface Fold {
    label: string;
    child: ReactNode;
}
interface AccordionProps {
    folds: Fold[];
}
declare const Accordion: React.FC<AccordionProps>;

interface AlertProps {
    show?: boolean;
    type?: string;
    slim?: boolean;
    header?: string;
    children?: React.ReactNode;
}
declare const Alert: React.FC<AlertProps>;

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
    children?: ReactNode;
    onClick?: Function;
    variant?: string;
}
declare const Button: React.FC<ButtonProps>;

declare const Card: React.FC<PropsWithChildren>;
declare const CardBody: React.FC<PropsWithChildren>;
declare const CardHeader: React.FC<PropsWithChildren>;
declare const CardFooter: React.FC<PropsWithChildren>;

interface ChecklistProps {
    items?: string[];
    onChange?: Function;
    label?: string;
}
declare const Checklist: React.FC<ChecklistProps>;

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
    onChange: Function;
    placeholder?: string;
    type?: string;
    style?: object;
}
declare const Input: React.FC<InputProps>;

interface ModalProps {
    show?: boolean;
    close?: Function;
    children?: React.ReactNode;
}
declare const Modal: React.FC<ModalProps>;

interface TableProps {
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
