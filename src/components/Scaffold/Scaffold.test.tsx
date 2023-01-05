import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Scaffold from "./Scaffold";

const header = {
  logo: "What",
  simple: [
    { label: "root", path: "/" },
    { label: "two", path: "/two" },
  ],
};

const footer = {
  logoText: "What",
};

const scaffoldJsx = (header?: any, footer?: any): any => (
  <HashRouter>
    <Scaffold header={header} footer={footer}>
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/two" element={<div data-testid="two" />} />
      </Routes>
    </Scaffold>
  </HashRouter>
);

test("Scaffold renders with given props.", () => {
  render(scaffoldJsx(header, footer));

  expect(screen.getByTestId("header")).toBeVisible();
  expect(screen.getByTestId("footer")).toBeVisible();
  expect(screen.getByTestId("root")).toBeVisible();

  const two = screen.getByText("two");
  fireEvent.click(two);

  expect(screen.getByTestId("two")).toBeVisible();
});
