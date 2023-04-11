import Dropdown, { DropdownOption, DropdownProps } from '../dropdown/dropdown';
import comboBox from '@uswds/uswds/js/usa-combo-box';
import React, { RefObject, useLayoutEffect, useRef } from 'react';

export type ComboBoxOption = DropdownOption;
export type ComboBoxProps = {
  /**
   * The placeholder value to display in the control
   */
  placeholder?: string;
} & DropdownProps &
  JSX.IntrinsicElements['select'];

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
      <Dropdown {...comboBoxProps} />
    </div>
  );
};

export default ComboBox;
