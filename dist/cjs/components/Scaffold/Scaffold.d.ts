import React from "react";
import { HeaderProps } from "../Header/Header";
import { FooterProps } from "../Footer/Footer";
import "./scaffold.style.css";
export interface ScaffoldProps {
    header: HeaderProps;
    footer: FooterProps;
    children?: React.ReactNode;
}
declare const Scaffold: React.FC<ScaffoldProps>;
export default Scaffold;
