import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Input from "./Input";

test("Input renders with given props and callback works", () => {
  const spy = jest.fn();
  render(<Input placeholder="foo" onChange={spy} />);
  const input = screen.getByTestId("input");

  expect(input).toHaveClass("usa-input");

  fireEvent.change(input, { target: { value: "bar" } });
  expect(spy).toHaveBeenCalled();
});
