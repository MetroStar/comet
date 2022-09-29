import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Accordion from "./Accordion";

test("Accordion renders with given props", () => {
  const folds = [
    {
      label: "foo",
      child: <span>bar</span>,
    },
  ];
  render(<Accordion folds={folds} />);

  expect(screen.getByText("foo")).toBeVisible();
  expect(screen.getByText("bar")).not.toBeVisible();

  fireEvent.click(screen.getByTestId("acc-button"));

  expect(screen.getByText("bar")).toBeVisible();
});
