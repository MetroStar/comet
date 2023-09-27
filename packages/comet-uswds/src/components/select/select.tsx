import classNames from 'classnames';
import React, { ChangeEventHandler, ReactElement } from 'react';

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
  defaultOption = { value: '', label: '- Select -' },
  options,
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
    <select className={classNames('usa-select', className)} onChange={onChange} {...selectProps}>
      {createOption(defaultOption, -1)}
      {children ?? options?.map(createOption)}
    </select>
  );
};

export const SelectOption = ({ value, label }: SelectOptionProps): ReactElement => {
  return <option value={value}>{label}</option>;
};

const createOption = (
  option: SelectOptionProps | null,
  optionIndex: number,
): React.ReactElement | null =>
  option && (
    <option value={option.value} key={optionIndex}>
      {option.label}
    </option>
  );

export default Select;
