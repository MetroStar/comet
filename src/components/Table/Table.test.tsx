import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Table from "./Table";

describe("Table", () => {
  test("should render with basic props", () => {
    render(<Table id="table" headers={["foo"]} rows={[["bar"]]} />);

    expect(screen.getByText("foo")).toBeVisible();
    expect(screen.getByText("bar")).toBeVisible();
  });

  test("should render primaryCol and actions work", () => {
    const spy = jest.fn();
    render(
      <Table
        id="table"
        headers={["foo"]}
        rows={[["bar", { a: 1 }]]}
        primaryCol={0}
        primaryColAction={spy}
      />
    );

    fireEvent.click(screen.getByText("bar"));

    expect(spy).toHaveBeenCalledWith("bar");
  });

  test("should render primaryCol click without action does nothing", () => {
    render(
      <Table
        id="table"
        headers={["foo"]}
        rows={[["bar", { a: 1 }]]}
        primaryCol={0}
      />
    );

    fireEvent.click(screen.getByText("bar"));
  });

  test("can handle non primitives", () => {
    render(<Table id="table" headers={["foo"]} rows={[[{ name: "one" }]]} />);
    expect(screen.getByText(JSON.stringify({ name: "one" }))).toBeVisible();
  });

  test("can be rendered with no props", () => {
    render(<Table id="table-1" />);
    render(<Table id="table-2" rows={[[]]} />);
  });
});
