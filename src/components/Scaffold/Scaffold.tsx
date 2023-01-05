import React from "react";
import Header, { HeaderProps } from "../Header/Header";
import Footer, { FooterProps } from "../Footer/Footer";
import "./scaffold.style.css";

export interface ScaffoldProps {
  header: HeaderProps;
  footer: FooterProps;
  children?: React.ReactNode;
}

const Scaffold: React.FC<ScaffoldProps> = ({
  header,
  footer,
  children,
}: ScaffoldProps) => {
  return (
    <div data-testid="root">
      <Header {...header} />
      <div className="usa-nav-container scaffold-body">{children ?? <></>}</div>
      <Footer {...footer} />
    </div>
  );
};

export default Scaffold;
