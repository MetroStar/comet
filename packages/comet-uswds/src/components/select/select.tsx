import classNames from 'classnames';
import React, { ChangeEventHandler, JSX, ReactElement } from 'react';
import FormGroup from '../form-group';

export interface SelectOptionProps {
  /**
   * The value for the option
   */
  value: string | readonly string[] | number;
  /**
   * The label for the option
   */
  label: string;
}

export interface SelectProps {
  /**
   * The unique identifier for the select
   */
  id: string;
  /**
   * The name of the select
   */
  name?: string;
  /**
   * The default option of the select
   */
  defaultOption?: SelectOptionProps | null;
  /**
   * The options of the select
   */
  options?: SelectOptionProps[];
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
   * SelectOption components to display as children
   */
  children?: ReactElement<SelectOptionProps> | Array<ReactElement<SelectOptionProps>>;
  /**
   * Event handler for when value of the select is changed
   */
  onChange?: ChangeEventHandler<HTMLSelectElement>;
}

/**
 * A select component allows users to choose one option from a temporary modal menu.
 */
export const Select = ({
  id,
  defaultOption = { value: '', label: '- Select -' },
  options,
  required,
  label,
  helperText,
  errors,
  onChange,
  className,
  children,
  ...selectProps
}: SelectProps & JSX.IntrinsicElements['select']): ReactElement => {
  // If no children and items provided, render partial
  if (!children && !options) {
    return <></>;
  }

  return (
    <FormGroup
      id={`form-group-${id}`}
      required={required}
      label={label}
      helperText={helperText}
      errors={errors}
      fieldControl={
        <select
          id={id}
          className={classNames('usa-select', className)}
          defaultValue={defaultOption?.value}
          onChange={onChange}
          {...selectProps}
        >
          {createOption(defaultOption, -1)}
          {children ?? options?.map(createOption)}
        </select>
      }
    />
  );
};

export const SelectOption = ({ value, label }: SelectOptionProps): ReactElement => {
  return <option value={value}>{label}</option>;
};

export const createOption = (
  option: SelectOptionProps | null,
  optionIndex: number,
): React.ReactElement | null =>
  option && (
    <option value={option.value} key={optionIndex}>
      {option.label}
    </option>
  );

export default Select;
