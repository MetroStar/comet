import { createOption, SelectOptionProps, SelectProps } from '../select/select';
import comboBox from '@uswds/uswds/js/usa-combo-box';
import React, {
  ChangeEventHandler,
  JSX,
  ReactElement,
  RefObject,
  useLayoutEffect,
  useRef,
} from 'react';
import FormGroup from '../form-group';
import classNames from 'classnames';

export type ComboBoxOptionProps = SelectOptionProps;
export type ComboBoxProps = {
  /**
   * The unique identifier for this component
   */
  id: string;
  /**
   * The name of the select
   */
  name?: string;
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
   *  The placeholder value to display in the control
   */
  placeholder?: string;
  /**
   * SelectOption components to display as children
   */
  children?: ReactElement<SelectOptionProps> | Array<ReactElement<SelectOptionProps>>;
  /**
   * Event handler for when value of the select is changed
   */
  onChange?: ChangeEventHandler<HTMLSelectElement>;
} & SelectProps &
  JSX.IntrinsicElements['select'];

/**
 * A combo box helps users select an item from a large list of options.
 */
export const ComboBox = ({
  id,
  options,
  required,
  label,
  helperText,
  errors,
  onChange,
  className,
  children,
  defaultValue,
  placeholder,
  ...selectProps
}: ComboBoxProps): React.ReactElement => {
  const comboBoxRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const comboBoxElement = comboBoxRef.current;
    const comboBoxLabel = comboBoxElement?.parentNode?.querySelector(`label[for="${id}"]`);
    // Only intialize the combo box if the label is present, USWDS will error otherwise
    if (comboBoxLabel) {
      comboBox.on(comboBoxElement);
    }
    // Ensure cleanup after the effect
    return () => {
      if (comboBoxElement) {
        comboBox.off(comboBoxElement);
      }
    };
  });

  const comboBoxAttributes: {
    className: string;
    ref: RefObject<HTMLDivElement | null>;
    'data-placeholder'?: string;
    'data-default-value'?: unknown;
  } = {
    className: 'usa-combo-box',
    ref: comboBoxRef,
    ...(placeholder && { 'data-placeholder': placeholder }),
    ...(defaultValue && { 'data-default-value': defaultValue }),
  };

  return (
    <FormGroup
      id={`form-group-${id}`}
      required={required}
      label={label}
      helperText={helperText}
      errors={errors}
      fieldControl={
        <div {...comboBoxAttributes}>
          <select
            id={id}
            className={classNames('usa-select', className)}
            defaultValue={defaultValue}
            onChange={onChange}
            {...selectProps}
          >
            {children ?? options?.map(createOption)}
          </select>
        </div>
      }
    />
  );
};

export default ComboBox;
