import Select, { SelectOptionProps, SelectProps } from '../select/select';
import comboBox from '@uswds/uswds/js/usa-combo-box';
import React, { RefObject, useLayoutEffect, useRef } from 'react';

export type ComboBoxOptionProps = SelectOptionProps;
export type ComboBoxProps = {
  /**
   * The unique identifier for this component
   */
  id: string;
  /**
   * The name for the combo box input field
   */
  name?: string;
  /**
   * The placeholder value to display in the control
   */
  placeholder?: string;
} & SelectProps &
  JSX.IntrinsicElements['select'];

/**
 * A combo box helps users select an item from a large list of options.
 */
export const ComboBox = ({ placeholder, ...comboBoxProps }: ComboBoxProps): React.ReactElement => {
  const comboBoxRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const comboBoxElement = comboBoxRef.current;
    comboBox.on(comboBoxElement);
    // Ensure cleanup after the effect
    return () => comboBox.off(comboBoxElement);
  });

  const comboBoxAttributes: {
    className: string;
    ref: RefObject<HTMLDivElement>;
    'data-placeholder'?: string;
    'data-default-value'?: unknown;
  } = {
    className: 'usa-combo-box',
    ref: comboBoxRef,
  };

  if (placeholder) comboBoxAttributes['data-placeholder'] = placeholder;
  if (comboBoxProps.defaultValue)
    comboBoxAttributes['data-default-value'] = comboBoxProps.defaultValue;

  return (
    <div {...comboBoxAttributes}>
      <Select {...comboBoxProps} />
    </div>
  );
};

export default ComboBox;
