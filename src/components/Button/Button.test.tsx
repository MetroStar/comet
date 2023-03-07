import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./button";

describe("Button", () => {
  test("should render a default button", () => {
    render(<Button id="button"></Button>);
    expect(screen.getByTestId("button")).toBeTruthy();
  });

  test("should render a secondary button", () => {
    render(<Button id="button" variant="secondary"></Button>);
    expect(screen.getByTestId("button")).toHaveClass("usa-button--secondary");
  });

  test("should render an accent cool button", () => {
    render(<Button id="button" variant="accent-cool"></Button>);
    expect(screen.getByTestId("button")).toHaveClass("usa-button--accent-cool");
  });

  test("should render an accent warm button", () => {
    render(<Button id="button" variant="accent-warm"></Button>);
    expect(screen.getByTestId("button")).toHaveClass("usa-button--accent-warm");
  });

  test("should render a base button", () => {
    render(<Button id="button" variant="base"></Button>);
    expect(screen.getByTestId("button")).toHaveClass("usa-button--base");
  });

  test("should render an outline button", () => {
    render(<Button id="button" variant="outline"></Button>);
    expect(screen.getByTestId("button")).toHaveClass("usa-button--outline");
  });

  test("should render an outline inverse button", () => {
    render(<Button id="button" variant="outline-inverse"></Button>);
    expect(screen.getByTestId("button")).toHaveClass("usa-button--inverse");
  });

  test("should render a big button", () => {
    render(<Button id="button" variant="big"></Button>);
    expect(screen.getByTestId("button")).toHaveClass("usa-button--big");
  });

  test("should render a unstyled button", () => {
    render(<Button id="button" variant="unstyled"></Button>);
    expect(screen.getByTestId("button")).toHaveClass("usa-button--unstyled");
  });

  test("should render a button with custom className", () => {
    render(<Button id="button" className="usa-custom"></Button>);
    expect(screen.getByTestId("button")).toHaveClass("usa-custom");
  });

  test("should render with click", () => {
    const spy = jest.fn();
    render(
      <Button id="button" onClick={spy}>
        foo
      </Button>
    );
    expect(screen.getByText("foo")).toBeVisible();

    fireEvent.click(screen.getByTestId("button"));
    expect(spy).toHaveBeenCalled();
  });
});
