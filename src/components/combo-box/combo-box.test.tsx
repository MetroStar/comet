import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ComboBox, { ComboBoxOption } from "./combo-box";

describe("ComboBox", () => {
  const defaultId = "combo-box1";
  const defaultName = "combo-box-name";
  const loremWords = ["Lorem", "Ipsum", "Dolor", "Sit"];
  const options = loremWords.map((word) => {
    return { value: word.toLowerCase(), label: word } as ComboBoxOption;
  });

  it("should render a default combo box successfully", () => {
    const { baseElement } = render(
      <>
        <label htmlFor={defaultId}>Pick option</label>
        <ComboBox id={defaultId} name={defaultName} options={options} />
      </>
    );
    expect(baseElement).toBeTruthy();
    expect(baseElement.querySelector(".usa-combo-box__input")).toBeTruthy();
  });

  it("should render a default combo box with 4 options", async () => {
    const { baseElement } = render(
      <>
        <label htmlFor={defaultId}>Pick option</label>
        <ComboBox id={defaultId} name={defaultName} options={options} />
      </>
    );
    await userEvent.click(
      baseElement.querySelector(".usa-combo-box__toggle-list") as Element
    );
    expect(
      baseElement.querySelectorAll(".usa-combo-box__list li")
    ).toHaveLength(4);
  });

  it("should render a combo box with the first real option selected", () => {
    const { baseElement } = render(
      <>
        <label htmlFor={defaultId}>Pick option</label>
        <ComboBox
          id={defaultId}
          name={defaultName}
          defaultValue={options[0].value}
          options={options}
        />
      </>
    );
    expect(baseElement).toBeTruthy();
    expect(
      baseElement.querySelector("option:checked")?.getAttribute("value")
    ).toEqual(options[0].value);
  });

  it("should change selected option to first real option", async () => {
    const { baseElement } = render(
      <>
        <label htmlFor={defaultId}>Pick option</label>
        <ComboBox id={defaultId} name={defaultName} options={options} />
      </>
    );
    await userEvent.click(
      baseElement.querySelector(".usa-combo-box__toggle-list") as Element
    );
    await userEvent.click(
      baseElement.querySelector(".usa-combo-box__list li") as Element
    );
    expect(
      baseElement.querySelector("option:checked")?.getAttribute("value")
    ).toEqual(options[0].value);
  });

  it("should show a placeholder on the combo box", () => {
    const { baseElement } = render(
      <>
        <label htmlFor={defaultId}>Pick option</label>
        <ComboBox
          id={defaultId}
          name={defaultName}
          options={options}
          placeholder="- select option -"
        />
      </>
    );

    expect(
      baseElement
        .querySelector(".usa-combo-box__input")
        ?.getAttribute("placeholder")
    ).toEqual("- select option -");
  });

  it("changing option should trigger onChanged event handler", async () => {
    const onChange = jest.fn();
    const { baseElement } = render(
      <>
        <label htmlFor={defaultId}>Pick option</label>
        <ComboBox
          id={defaultId}
          name={defaultName}
          options={options}
          onChange={onChange}
        />
      </>
    );
    expect(onChange).toHaveBeenCalledTimes(0);
    await userEvent.click(
      baseElement.querySelector(".usa-combo-box__toggle-list") as Element
    );
    await userEvent.click(
      baseElement.querySelector(".usa-combo-box__list li") as Element
    );
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
