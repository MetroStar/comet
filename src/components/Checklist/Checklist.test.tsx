import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Checklist from "./Checklist";

test("Checklist renders with missing props", () => {
  render(<Checklist />);
});

test("Checklist renders with given props", () => {
  render(<Checklist label="Items:" items={["one", "two"]} />);
  expect(screen.getByText("Items:")).toBeVisible();
  expect(screen.getByText("one")).toBeVisible();
});

test("Checklist sends box state back on change", () => {
  const spy = jest.fn();
  render(<Checklist label="Items:" items={["one", "two"]} onChange={spy} />);
  fireEvent.click(screen.getAllByTestId("checkbox")[0]);
  expect(spy).toHaveBeenCalledWith(["one"]);
});

test("Checklist skips callback update when onChange is not available", () => {
  render(<Checklist label="Items:" items={["one", "two"]} />);
  fireEvent.click(screen.getAllByTestId("checkbox")[0]);
  expect(screen.getAllByTestId("checkbox")[0]).toBeChecked();
});
