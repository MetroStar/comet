import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TextArea from "./text-area";

describe("TextArea", () => {
  const defaultId = "textarea1";
  const defaultName = "textarea-name";

  it("should render successfully", () => {
    const { baseElement } = render(
      <TextArea id={defaultId} name={defaultName} />
    );
    expect(baseElement).toBeTruthy();
  });

  it("should render a textarea with a default value", () => {
    const defaultValue = "value1";
    const { baseElement } = render(
      <TextArea id={defaultId} name={defaultName} defaultValue={defaultValue} />
    );
    expect(baseElement.querySelector("textarea")?.value).toEqual(defaultValue);
  });

  it("should render a textarea with rows specified", () => {
    const { baseElement } = render(
      <TextArea id={defaultId} name={defaultName} rows={2} />
    );
    expect(baseElement.querySelector("textarea")?.getAttribute("rows")).toEqual(
      "2"
    );
  });

  it("changing the value should trigger onChanged event handler", async () => {
    const onChange = jest.fn();
    const { baseElement } = render(
      <TextArea id={defaultId} name={defaultName} onChange={onChange} />
    );
    const textAreaElement = baseElement.querySelector(
      "textarea"
    ) as HTMLTextAreaElement;
    expect(onChange).toHaveBeenCalledTimes(0);
    await userEvent.type(textAreaElement, "a");
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
