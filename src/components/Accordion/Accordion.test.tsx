import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Accordion from "./Accordion";

describe("Accordion", () => {
  test("should render with given props", () => {
    const folds = [
      {
        label: "foo",
        child: <span>bar</span>,
      },
    ];
    render(<Accordion id="accordion" folds={folds} />);

    expect(screen.getByText("foo")).toBeVisible();
    expect(screen.getByText("bar")).not.toBeVisible();

    fireEvent.click(screen.getByTestId("accordion-button"));

    expect(screen.getByText("bar")).toBeVisible();
  });
});
