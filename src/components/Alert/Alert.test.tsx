import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Alert from "./Alert";

const props = {
  show: true,
  type: "info",
  header: "An Alert...",
  body: (
    <p>
      This <strong>is</strong> the alert body...
    </p>
  ),
};

test("Alert renders with given props", () => {
  render(<Alert {...props} />);
});

test("Alert renders with no props", () => {
  render(<Alert />);
});

test("Alert defaults to info with incorrect type", () => {
  render(<Alert type="red" show={true} />);
  expect(screen.getByTestId("alert")).toHaveClass("usa-alert--info")
})