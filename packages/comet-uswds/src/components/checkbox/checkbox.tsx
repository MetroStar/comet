import React, { ChangeEventHandler, JSX, MouseEventHandler } from 'react';
import classnames from 'classnames';
import FormGroup from '../form-group';

export interface CheckboxData {
  /**
   * The text inside of the checkbox
   */
  label: string;
  /**
   * Default value of the checkbox
   */
  value?: string | readonly string[] | number;
  /**
   * Whether the checkbox is checked by default
   */
  checked?: boolean;
  /**
   * Whether the checkbox is checked by default
   */
  defaultChecked?: boolean;
}

export interface CheckboxProps extends CheckboxData {
  /**
   * The unique identifier for this component
   */
  id: string;
  /**
   * The name for the checkbox input field
   */
  name?: string;
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

/**
 * Checkboxes allow users to select one or more options from a list.
 */
export const Checkbox = ({
  id,
  name,
  label,
  checked,
  defaultChecked,
  isTile,
  onChange,
  onClick,
  ...inputProps
}: CheckboxProps & JSX.IntrinsicElements['input']): React.ReactElement => {
  const inputId = `${id}__usa-checkbox__input`;
  const classes = classnames('usa-checkbox__input', {
    'usa-checkbox__input--tile': isTile,
  });

  return (
    <div id={id} className="usa-checkbox">
      <input
        className={classes}
        id={inputId}
        type="checkbox"
        name={name}
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        onClick={onClick}
        {...inputProps}
      />
      <label className="usa-checkbox__label" htmlFor={inputId}>
        {label}
      </label>
    </div>
  );
};

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
   * A boolean indicating whether or not the field is required
   */
  required?: boolean;
  /**
   * Label text to display with the input
   */
  label?: string;
  /**
   * Helper text to display with the input
   */
  helperText?: string;
  /**
   * An array of string error messages
   */
  errors?: string | string[];
  /**
   * Event handler will be triggered when the checkbox value changes
   */
  onChange?: ChangeEventHandler<HTMLInputElement>;
  /**
   * Event handler will be triggered when the checkbox is clicked
   */
  onClick?: MouseEventHandler<HTMLInputElement>;
}

export const CheckboxGroup = ({
  id,
  name,
  data,
  areTiles,
  required,
  label,
  helperText,
  errors,
  onChange,
  onClick,
}: CheckboxGroupProps): React.ReactElement => {
  return (
    <FormGroup
      id={`form-group-${id}`}
      required={required}
      label={label}
      helperText={helperText}
      errors={errors}
      fieldControl={
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
                defaultChecked={checkboxData.defaultChecked}
                isTile={areTiles}
                onChange={onChange}
                onClick={onClick}
                key={checkBoxId}
              />
            );
          })}
        </>
      }
    />
  );
};
