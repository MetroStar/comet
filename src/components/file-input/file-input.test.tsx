import { render, RenderOptions } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React, { ReactNode } from "react";
import FileInput from "./file-input";
const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: Wrapper, ...options });
const Wrapper = ({ children }: { children?: ReactNode }) => (
  <div>{children}</div>
);

describe("FileInput", () => {
  const defaultId = "file-input1";
  const fileInputName = "file-input-name";
  it("should render a standard file input successfully", () => {
    const { baseElement } = customRender(
      <FileInput id={defaultId} name={fileInputName} />
    );
    expect(baseElement).toBeTruthy();
    const input = baseElement.querySelector("input") as HTMLInputElement;
    input.classList.contains("usa-file-input__input");
    input.parentElement?.classList.contains("usa-file-input__target");
    input.parentElement?.parentElement?.classList.contains("usa-file-input");
  });

  it("should render a disabled file input successfully", () => {
    const { baseElement } = customRender(
      <FileInput id={defaultId} name={fileInputName} disabled />
    );
    expect(baseElement).toBeTruthy();
  });

  it("should render a disabled file input successfully", async () => {
    const onChange = jest.fn();
    const { baseElement } = customRender(
      <FileInput id={defaultId} name={fileInputName} onChange={onChange} />
    );

    const input = baseElement.querySelector(
      `#${defaultId}`
    ) as HTMLInputElement;
    const file = new File(["hello"], "hello.png", { type: "image/png" });
    await userEvent.upload(input, file);

    expect(onChange).toBeCalledTimes(1);
    expect(onChange).toBeCalledWith(expect.any(Object));
    expect(input.files).toHaveLength(1);
    expect((input.files as FileList)[0]?.name).toEqual("hello.png");
  });
});
