import React, { ChangeEventHandler, MouseEventHandler } from 'react';
import classnames from 'classnames';

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
}

export interface RadioButtonProps extends RadioButtonData {
  /**
   * The unique identifier for this component
   */
  id: string;
  /**
   * The name for the radioButton input field
   */
  name: string;
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

export const RadioButton = ({
  id,
  name,
  label,
  value,
  checked,
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
        defaultValue={value}
        defaultChecked={checked}
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
  onChange,
  onClick,
}: RadioButtonGroupProps): React.ReactElement => {
  return (
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
            isTile={areTiles}
            onChange={onChange}
            onClick={onClick}
            key={radioButtonId}
          />
        );
      })}
    </>
  );
};
