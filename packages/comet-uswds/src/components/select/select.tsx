import classNames from 'classnames';
import React, { ChangeEventHandler } from 'react';

export interface SelectOption {
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
  defaultOption?: SelectOption | null;
  /**
   * The options of the select
   */
  options?: SelectOption[];
  /**
   * Event handler for when value of the select is changed
   */
  onChange?: ChangeEventHandler<HTMLSelectElement>;
}

/**
 * A select component allows users to choose one option from a temporary modal menu.
 */
export const Select = ({
  defaultOption = { value: '', label: '- Select -' },
  options,
  onChange,
  className,
  ...selectProps
}: SelectProps & JSX.IntrinsicElements['select']): React.ReactElement => {
  return (
    <select className={classNames('usa-select', className)} onChange={onChange} {...selectProps}>
      {createOption(defaultOption, -1)}
      {options?.map(createOption)}
    </select>
  );
};

const createOption = (
  option: SelectOption | null,
  optionIndex: number,
): React.ReactElement | null =>
  option && (
    <option value={option.value} key={optionIndex}>
      {option.label}
    </option>
  );

export default Select;
