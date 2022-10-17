import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Header, { HeaderProps } from "../Header/Header";
import Footer, { FooterProps } from "../Footer/Footer";
import "./scaffold.style.css";

export interface ScaffoldProps {
  routes: Array<{
    path: string;
    element: React.ReactNode;
  }>;
  header: HeaderProps;
  footer: FooterProps;
}

const Scaffold: React.FC<ScaffoldProps> = ({
  routes,
  header,
  footer,
}: ScaffoldProps) => {
  return (
    <BrowserRouter basename="/">
      <HeaderWithNavigate {...header} />
      <div className="usa-nav-container scaffold-body">
        <Routes>
          {routes.map((e, i) => (
            <Route path={e.path} element={e.element} key={`route-${i}`} />
          ))}
        </Routes>
      </div>
      <Footer {...footer} />
    </BrowserRouter>
  );
};

export const HeaderWithNavigate: React.FC<HeaderProps> = (
  props: HeaderProps
) => {
  const navigate = useNavigate();

  return <Header {...props} onNavigate={(s) => navigate(s)} />;
};

export default Scaffold;
