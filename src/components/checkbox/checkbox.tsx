import React, { ChangeEventHandler, MouseEventHandler } from "react";
import classnames from "classnames";

export interface CheckboxData {
  /**
   * The text inside of the checkbox
   */
  label: string;
  /**
   * Default value of the checkbox
   */
  value?: string | ReadonlyArray<string> | number;
  /**
   * Whether the checkbox is checked by default
   */
  checked?: boolean;
}

export interface CheckboxProps extends CheckboxData {
  /**
   * The unique identifier for this component
   */
  id: string;
  /**
   * The name for the checkbox input field
   */
  name: string;
  /**
   * Whether the component is rendered as a tile
   */
  isTile?: boolean;
  /**
   * Event handler will be triggered when the checkbox value changes
   */
  onChange?: ChangeEventHandler<HTMLInputElement>;
  /**
   * Event handler will be triggered when the checkbox is clicked
   */
  onClick?: MouseEventHandler<HTMLInputElement>;
}

export function Checkbox({
  id,
  name,
  label,
  value,
  checked,
  isTile,
  onChange,
  onClick,
  ...inputProps
}: CheckboxProps & JSX.IntrinsicElements["input"]) {
  const inputId = `${id}__usa-checkbox__input`;
  const classes = classnames("usa-checkbox__input", {
    "usa-checkbox__input--tile": isTile,
  });

  return (
    <div id={id} className="usa-checkbox">
      <input
        className={classes}
        id={inputId}
        type="checkbox"
        name={name}
        defaultValue={value}
        defaultChecked={checked}
        onChange={onChange}
        onClick={onClick}
        {...inputProps}
      />
      <label className="usa-checkbox__label" htmlFor={inputId}>
        {label}
      </label>
    </div>
  );
}

export default Checkbox;

export interface CheckboxGroupProps {
  /**
   * The unique identifier for this component
   */
  id: string;
  /**
   * The name for all checkbox input fields
   */
  name: string;
  /**
   * Array of checkbox data for the input fields
   */
  data: CheckboxData[];
  /**
   * Whether the components are rendered as a tile
   */
  areTiles?: boolean;
  /**
   * Event handler will be triggered when the checkbox value changes
   */
  onChange?: ChangeEventHandler<HTMLInputElement>;
  /**
   * Event handler will be triggered when the checkbox is clicked
   */
  onClick?: MouseEventHandler<HTMLInputElement>;
}

export function CheckboxGroup({
  id,
  name,
  data,
  areTiles,
  onChange,
  onClick,
}: CheckboxGroupProps) {
  return (
    <>
      {data.map((checkboxData, checkboxIndex) => {
        const checkBoxId = `${id}__checkbox${checkboxIndex}`;
        return (
          <Checkbox
            id={checkBoxId}
            name={name}
            label={checkboxData.label}
            value={checkboxData.value}
            checked={checkboxData.checked}
            isTile={areTiles}
            onChange={onChange}
            onClick={onClick}
            key={checkBoxId}
          />
        );
      })}
    </>
  );
}
