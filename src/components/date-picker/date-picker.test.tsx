import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DatePicker from "./date-picker";

describe("Date picker", () => {
  const defaultId = "date-picker1";
  const defaultName = "date-picker-name";
  const today = new Date();

  it("should render a default date picker successfully", () => {
    const { baseElement } = render(
      <DatePicker id={defaultId} name={defaultName} />
    );
    expect(baseElement).toBeTruthy();

    // proves the USWDS ran correctly
    expect(baseElement.querySelector(".usa-date-picker__button")).toBeTruthy();
  });

  it("should open calendar when clicking on picker button", () => {
    const { baseElement } = render(
      <DatePicker id={defaultId} name={defaultName} />
    );
    expect(
      baseElement
        .querySelector(".usa-date-picker__calendar")
        ?.hasAttribute("hidden")
    ).toEqual(true);

    fireEvent.click(
      baseElement.querySelector(".usa-date-picker__button") as Element
    );

    expect(
      baseElement
        .querySelector(".usa-date-picker__calendar")
        ?.hasAttribute("hidden")
    ).toEqual(false);
  });

  it("should set date to Jan 1 2020 using calendar", () => {
    const { baseElement } = render(
      <DatePicker id={defaultId} name={defaultName} />
    );
    // open calendar
    fireEvent.click(
      baseElement.querySelector(".usa-date-picker__button") as Element
    );

    // select year 2020
    fireEvent.click(
      baseElement.querySelector(
        ".usa-date-picker__calendar__year-selection"
      ) as Element
    );
    fireEvent.click(
      baseElement.querySelector(
        '.usa-date-picker__calendar__year[data-value="2020"]'
      ) as Element
    );

    // select month Jan
    fireEvent.click(
      baseElement.querySelector(
        ".usa-date-picker__calendar__month-selection"
      ) as Element
    );
    fireEvent.click(
      baseElement.querySelector(
        '.usa-date-picker__calendar__month[data-value="0"]'
      ) as Element
    );

    // select day 01
    fireEvent.click(
      baseElement.querySelector(
        '.usa-date-picker__calendar__date[data-day="1"]'
      ) as Element
    );

    expect(
      baseElement.querySelector<HTMLInputElement>(
        `input[name="${defaultName}"]`
      )?.value
    ).toEqual("01/01/2020");
  });

  it("should set date to Jan 1 2020 using keyboard", async () => {
    const { baseElement } = render(
      <DatePicker id={defaultId} name={defaultName} />
    );

    const input = baseElement.querySelector(
      `input[name="${defaultName}"]`
    ) as HTMLInputElement;

    await userEvent.type(input, "01/01/2020");

    // open calendar
    await fireEvent.click(
      baseElement.querySelector(".usa-date-picker__button") as Element
    );

    expect(
      baseElement
        .querySelector(".usa-date-picker__calendar__date--selected")
        ?.getAttribute("data-value")
    ).toEqual("2020-01-01");
  });

  it("should render a date picker with defaultValue successfully", () => {
    const defaultValue = "2021-09-14";
    const { baseElement } = render(
      <DatePicker
        id={defaultId}
        name={defaultName}
        defaultValue={defaultValue}
      />
    );
    expect(baseElement).toBeTruthy();
    expect(baseElement.querySelector("input")?.value).toBe(defaultValue);
  });

  it("should render a date picker with minDate successfully", () => {
    const minDate = "2021-09-01";
    const { baseElement } = render(
      <DatePicker id={defaultId} name={defaultName} minDate={minDate} />
    );
    expect(baseElement).toBeTruthy();
    expect(
      baseElement
        .querySelector(".usa-date-picker")
        ?.getAttribute("data-min-date")
    ).toBe(minDate);
  });

  it("should render a date picker with maxDate successfully", () => {
    const maxDate = "2021-09-01";
    const { baseElement } = render(
      <DatePicker id={defaultId} name={defaultName} maxDate={maxDate} />
    );
    expect(baseElement).toBeTruthy();
    expect(
      baseElement
        .querySelector(".usa-date-picker")
        ?.getAttribute("data-max-date")
    ).toBe(maxDate);
  });

  it("should render a date picker with date range successfully", () => {
    const dateStr = "2021-09-01";
    const rangeDate = new Date(dateStr);
    const { baseElement } = render(
      <DatePicker
        id={defaultId}
        name={defaultName}
        defaultValue={today.toString()}
        dateRange={rangeDate}
      />
    );
    expect(baseElement).toBeTruthy();
    expect(
      baseElement
        .querySelector(".usa-date-picker")
        ?.getAttribute("data-range-date")
    ).toBe(dateStr);
  });

  it("should be disabled when passing disabled", () => {
    const { baseElement } = render(
      <DatePicker id={defaultId} name={defaultName} disabled />
    );

    expect(
      baseElement
        .querySelector(".usa-date-picker__external-input")
        ?.hasAttribute("disabled")
    ).toEqual(true);

    expect(
      baseElement
        .querySelector(".usa-date-picker__button")
        ?.hasAttribute("disabled")
    ).toEqual(true);
  });

  it("should trigger onChange event", async () => {
    const onChange = jest.fn();
    const { baseElement } = render(
      <DatePicker id={defaultId} name={defaultName} onChange={onChange} />
    );

    const input = baseElement.querySelector(
      `input[name="${defaultName}"]`
    ) as HTMLInputElement;

    await userEvent.type(input, "01/01/2020");
    await userEvent.tab();

    expect(onChange).toBeCalledTimes(1);
    expect(input.value).toBe("01/01/2020");

    await userEvent.clear(input);
    await userEvent.tab();

    expect(onChange).toBeCalledTimes(2);
    expect(input.value).toBe("");

    // open calendar
    await fireEvent.click(
      baseElement.querySelector(".usa-date-picker__button") as Element
    );

    // select year 2020
    await fireEvent.click(
      baseElement.querySelector(
        ".usa-date-picker__calendar__year-selection"
      ) as Element
    );
    await fireEvent.click(
      baseElement.querySelector(
        '.usa-date-picker__calendar__year[data-value="2020"]'
      ) as Element
    );

    // select month Jan
    await fireEvent.click(
      baseElement.querySelector(
        ".usa-date-picker__calendar__month-selection"
      ) as Element
    );
    await fireEvent.click(
      baseElement.querySelector(
        '.usa-date-picker__calendar__month[data-value="0"]'
      ) as Element
    );

    // select day 01
    await fireEvent.click(
      baseElement.querySelector(
        '.usa-date-picker__calendar__date[data-day="1"]'
      ) as Element
    );

    expect(onChange).toBeCalledTimes(3);
    expect(input.value).toBe("01/01/2020");
  });
});
