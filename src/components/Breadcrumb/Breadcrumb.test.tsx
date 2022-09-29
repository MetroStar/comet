import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Breadcrumb from "./Breadcrumb";

test("Breadcrumb renders with given props and is callable", () => {
  const spy = jest.fn();
  const crumbs = [{ path: "/test", name: "test" }];
  render(<Breadcrumb crumbs={crumbs} current="foo" action={spy} />);

  expect(screen.getByText("test")).toBeVisible();
  expect(screen.getByText("foo")).toBeVisible();

  fireEvent.click(screen.getByTestId("bc-link"));

  expect(spy).toHaveBeenCalledWith("/test");
});

test("Breadcrumb current is optional", () => {
  const spy = jest.fn();
  const crumbs = [{ path: "/test", name: "test" }];
  render(<Breadcrumb crumbs={crumbs} action={spy} />);
});
