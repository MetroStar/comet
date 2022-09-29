import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Card from "./Card";

test("Card renders with given props", () => {
  render(
    <Card header="foo" footer="bar">
      Card Body
    </Card>
  );
  expect(screen.getByText("foo")).toBeVisible();
  expect(screen.getByText("bar")).toBeVisible();
  expect(screen.getByText("Card Body")).toBeVisible();
});

test("Card can render with nothing", () => {
  render(<Card></Card>);
});
