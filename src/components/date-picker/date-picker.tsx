import datePicker from "@uswds/uswds/js/usa-date-picker";
import React, { useLayoutEffect, useRef } from "react";

export interface DatePickerProps {
  /**
   * The unique identifier for the input field
   */
  id: string;

  /**
   * The name of the input field
   */
  name: string;

  /**
   * The date picker will not allow a date selection before this date. The date should be in the format YYYY-MM-DD. Typing in an earlier date will cause native form validation error. A default min date or 0000-01-01 is used as a default.
   */
  minDate?: Date | string;

  /**
   * The date picker will not allow a date selection after this date. The date should be in the format YYYY-MM-DD. Typing in an later date will cause native form validation error. There is no default maximum date.
   */
  maxDate?: Date | string;

  /**
   * The date picker will show a range selection from the range date. The date should be in the format YYYY-MM-DD.
   */
  dateRange?: Date | string;

  /**
   * The date picker input will set this value if it is a valid date. The date should be in the format YYYY-MM-DD.
   */
  defaultValue?: string;

  /**
   * Event handler will be triggered when the date-picker value changes
   */
  onChange?: (this: HTMLInputElement, event: Event) => void;
}

interface DatePickerAttributes {
  "data-min-date"?: string;
  "data-max-date"?: string;
  "data-range-date"?: string;
  "data-default-value"?: string;
}

export function DatePicker({
  minDate,
  maxDate,
  dateRange,
  defaultValue,
  onChange,
  ...inputProps
}: DatePickerProps & JSX.IntrinsicElements["input"]) {
  const datePickerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const datePickerElement = datePickerRef.current as HTMLInputElement;
    datePicker.on(datePickerElement);
    const externalInput =
      datePicker.getDatePickerContext(datePickerElement).externalInputEl;
    if (onChange) {
      externalInput.addEventListener("change", onChange);
    }
    return () => {
      if (onChange) {
        externalInput.removeEventListener("change", onChange);
      }
      datePicker.off(datePickerElement);
    };
  });

  const datePickerAttributes: DatePickerAttributes = {};
  if (minDate) datePickerAttributes["data-min-date"] = getDateString(minDate);
  if (maxDate) datePickerAttributes["data-max-date"] = getDateString(maxDate);
  if (dateRange)
    datePickerAttributes["data-range-date"] = getDateString(dateRange);
  if (defaultValue)
    datePickerAttributes["data-default-value"] = getDateString(defaultValue);

  return (
    <div
      ref={datePickerRef}
      className="usa-date-picker"
      {...datePickerAttributes}
    >
      <input className="usa-input" type="text" {...inputProps} />
    </div>
  );
}

export default DatePicker;

function getDateString(minDate: string | Date): string {
  if (typeof minDate === "string") {
    const date = new Date(minDate);
    return date.toISOString().substring(0, 10);
  } else {
    return minDate.toISOString().substring(0, 10);
  }
}
