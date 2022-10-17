import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Scaffold from "./Scaffold";

const routes = [
  { path: "/", element: <div data-testid="root"></div> },
  { path: "/two", element: <div data-testid="two"></div> },
];

test("Scaffold renders with given props.", () => {
  render(
    <Scaffold
      routes={routes}
      header={{
        logo: "What",
        simple: [
          { label: "root", path: "/" },
          { label: "two", path: "/two" },
        ],
      }}
      footer={{
        logoText: "What",
      }}
    />
  );

  expect(screen.getByTestId("header")).toBeVisible();
  expect(screen.getByTestId("footer")).toBeVisible();
  expect(screen.getByTestId("root")).toBeVisible();

  const two = screen.getByText("two");
  fireEvent.click(two);

  expect(screen.getByTestId("two")).toBeVisible();
});
