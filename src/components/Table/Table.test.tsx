import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Table from "./Table";

test("Table renders with basic props", () => {
  render(<Table headers={["foo"]} rows={[["bar"]]} />);

  expect(screen.getByText("foo")).toBeVisible();
  expect(screen.getByText("bar")).toBeVisible();
});

test("Table primaryCol and actions work", () => {
  const spy = jest.fn();
  render(
    <Table
      headers={["foo"]}
      rows={[["bar", { a: 1 }]]}
      primaryCol={0}
      primaryColAction={spy}
    />
  );

  fireEvent.click(screen.getByText("bar"));

  expect(spy).toHaveBeenCalledWith("bar");
});

test("Table can handle non primitives", () => {
  render(<Table headers={["foo"]} rows={[[{ name: "one" }]]} />);
  expect(screen.getByText(JSON.stringify({ name: "one" }))).toBeVisible();
});

test("Table can be rendered with no props", () => {
  render(<Table />);
  render(<Table rows={[[]]} />);
});
