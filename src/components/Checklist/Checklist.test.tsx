import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Checklist from "./Checklist";

describe("Checklist", () => {
  test("should render with missing props", () => {
    render(<Checklist id="checklist" />);
  });

  test("should render with given props", () => {
    render(<Checklist id="checklist" label="Items:" items={["one", "two"]} />);
    expect(screen.getByText("Items:")).toBeVisible();
    expect(screen.getByText("one")).toBeVisible();
  });

  test("should sends box state back on change", () => {
    const spy = jest.fn();
    render(
      <Checklist
        id="checklist"
        label="Items:"
        items={["one", "two"]}
        onChange={spy}
      />
    );
    fireEvent.click(screen.getAllByTestId("checkbox")[0]);
    expect(spy).toHaveBeenCalledWith(["one"]);
  });

  test("should skips callback update when onChange is not available", () => {
    render(<Checklist id="checklist" label="Items:" items={["one", "two"]} />);
    fireEvent.click(screen.getAllByTestId("checkbox")[0]);
    expect(screen.getAllByTestId("checkbox")[0]).toBeChecked();
  });
});
