import React from "react";
import { render } from "@testing-library/react";
import Label from "./label";

describe("Label", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Label>Some label</Label>);
    expect(baseElement).toBeTruthy();
  });
  it("should render a standard label successfully", () => {
    const { baseElement } = render(<Label>Some label</Label>);
    const label = baseElement.querySelector(".usa-label");
    expect(label).toBeTruthy();
  });
  it("should render a label with required indicator successfully", () => {
    const { baseElement } = render(<Label required={true}>Some label</Label>);
    const label = baseElement.querySelector(".text-red");
    expect(label).toBeTruthy();
  });
});
