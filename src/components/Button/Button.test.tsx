import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

test("Button renders with given props", () => {
  const spy = jest.fn();
  render(<Button onClick={spy}>foo</Button>);
  expect(screen.getByText("foo")).toBeVisible();

  fireEvent.click(screen.getByTestId("button"));
  expect(spy).toHaveBeenCalled();
});

test("Can pass variant enum to button", () => {
  render(<Button variant="outline"></Button>);
  expect(screen.getByTestId("button")).toHaveClass("usa-button--outline");
});

test("Can handle missing onClick", () => {
  render(<Button variant="default"></Button>);
  fireEvent.click(screen.getByTestId("button"));
});
