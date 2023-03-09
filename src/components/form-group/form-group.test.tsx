import React from "react";
import { render } from "@testing-library/react";
import FormGroup from "./form-group";

describe("FormGroup", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<FormGroup>Some Form</FormGroup>);
    expect(baseElement).toBeTruthy();
  });
  it("should render a standard form group successfully", () => {
    const { baseElement } = render(<FormGroup>Some Form</FormGroup>);
    const formGroup = baseElement.querySelector(".usa-form-group");
    expect(formGroup).toBeTruthy();
  });
  it("should render multiple form groups successfully", () => {
    const { baseElement } = render(
      <>
        <FormGroup>Group 1</FormGroup>
        <FormGroup>Group 2</FormGroup>
      </>
    );
    const formGroup = baseElement.querySelectorAll(".usa-form-group");
    expect(formGroup).toHaveLength(2);
  });
  it("should render a standard form group with errors successfully", () => {
    const errors: string[] = ["error1"];
    const { baseElement } = render(
      <FormGroup errors={errors}>Some Form</FormGroup>
    );
    const formGroup = baseElement.querySelector(".usa-form-group--error");
    expect(formGroup).toBeTruthy();
  });
});
