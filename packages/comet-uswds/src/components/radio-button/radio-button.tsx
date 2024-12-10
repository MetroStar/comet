import React, { ChangeEventHandler, JSX, MouseEventHandler } from 'react';
import classnames from 'classnames';
import FormGroup from '../form-group';

export interface RadioButtonData {
  /**
   * The text inside of the radioButton
   */
  label: string;
  /**
   * Default value of the radioButton
   */
  value?: string | readonly string[] | number;
  /**
   * Whether the radioButton is checked by default
   */
  checked?: boolean;
  /**
   * Whether the checkbox is checked by default
   */
  defaultChecked?: boolean;
}

export interface RadioButtonProps extends RadioButtonData {
  /**
   * The unique identifier for this component
   */
  id: string;
  /**
   * The name for the radioButton input field
   */
  name?: string;
  /**
   * Whether the component is rendered as a tile
   */
  isTile?: boolean;
  /**
   * Event handler will be triggered when the radioButton value changes
   */
  onChange?: ChangeEventHandler<HTMLInputElement>;
  /**
   * Event handler will be triggered when the radioButton is clicked
   */
  onClick?: MouseEventHandler<HTMLInputElement>;
}

/**
 * Radio buttons allow users to select exactly one choice from a group.
 */
export const RadioButton = ({
  id,
  name,
  label,
  checked,
  defaultChecked,
  isTile,
  onChange,
  onClick,
  ...inputProps
}: RadioButtonProps & JSX.IntrinsicElements['input']): React.ReactElement => {
  const inputId = `${id}__usa-radio__input`;
  const classes = classnames('usa-radio__input', {
    'usa-radio__input--tile': isTile,
  });

  return (
    <div id={id} className="usa-radio">
      <input
        className={classes}
        id={inputId}
        type="radio"
        name={name}
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        onClick={onClick}
        {...inputProps}
      />
      <label className="usa-radio__label" htmlFor={inputId}>
        {label}
      </label>
    </div>
  );
};

export default RadioButton;

export interface RadioButtonGroupProps {
  /**
   * The unique identifier for this component
   */
  id: string;
  /**
   * The name for all radioButton input fields
   */
  name: string;
  /**
   * Array of radioButton data for the input fields
   */
  data: RadioButtonData[];
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
   * Event handler will be triggered when the radioButton value changes
   */
  onChange?: ChangeEventHandler<HTMLInputElement>;
  /**
   * Event handler will be triggered when the radioButton is clicked
   */
  onClick?: MouseEventHandler<HTMLInputElement>;
}

export const RadioButtonGroup = ({
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
}: RadioButtonGroupProps): React.ReactElement => {
  return (
    <FormGroup
      id={`form-group-${id}`}
      required={required}
      label={label}
      helperText={helperText}
      errors={errors}
      fieldControl={
        <>
          {data.map((radioButtonData, radioButtonIndex) => {
            const radioButtonId = `${id}__radio${radioButtonIndex}`;
            return (
              <RadioButton
                id={radioButtonId}
                name={name}
                label={radioButtonData.label}
                value={radioButtonData.value}
                checked={radioButtonData.checked}
                defaultChecked={radioButtonData.defaultChecked}
                isTile={areTiles}
                onChange={onChange}
                onClick={onClick}
                key={radioButtonId}
              />
            );
          })}
        </>
      }
    />
  );
};
