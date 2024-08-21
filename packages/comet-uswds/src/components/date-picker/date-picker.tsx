import datePicker from '@uswds/uswds/js/usa-date-picker';
import React, { useLayoutEffect, useRef } from 'react';
import FormGroup from '../form-group';
import { ValidationStatus } from '../utils/types';
import classNames from 'classnames';

export interface DatePickerProps {
  /**
   * The unique identifier for the input field
   */
  id: string;
  /**
   * The name of the input field
   */
  name?: string;
  /**
   * The date picker will not allow a date selection before this date. The date should be in the format YYYY-MM-DD. Typing in an earlier date will cause native form validation error. A default min date or 0000-01-01 is used as a default.
   */
  minDate?: Date | string;
  /**
   * The date picker will not allow a date selection after this date. The date should be in the format YYYY-MM-DD. Typing in an later date will cause native form validation error. There is no default maximum date.
   */
  maxDate?: Date | string;
  /**
   * The date picker will show a range selection from the range date. The date should be in the format YYYY-MM-DD.
   */
  dateRange?: Date | string;
  /**
   * The date picker input will set this value if it is a valid date. The date should be in the format YYYY-MM-DD.
   */
  defaultValue?: string;
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
   * State based styling to apply to the form group
   */
  validationStatus?: ValidationStatus;
  /**
   * Event handler will be triggered when the date-picker value changes
   */
  onChange?: (this: HTMLInputElement, event: Event) => void;
}

interface DatePickerAttributes {
  'data-min-date'?: string;
  'data-max-date'?: string;
  'data-range-date'?: string;
  'data-default-value'?: string;
}

/**
 * A date picker helps users select a single date.
 */
export const DatePicker = ({
  id,
  minDate,
  maxDate,
  dateRange,
  defaultValue,
  required,
  label,
  helperText,
  errors,
  validationStatus,
  onChange,
  ...inputProps
}: DatePickerProps & JSX.IntrinsicElements['input']): React.ReactElement => {
  const datePickerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const datePickerElement = datePickerRef.current as HTMLDivElement;
    const datePickerWrapper = datePickerElement.querySelector(
      '.usa-date-picker__wrapper',
    ) as HTMLDivElement;
    if (!datePickerWrapper) datePicker.on(datePickerElement);

    const externalInput = datePicker.getDatePickerContext(datePickerElement).externalInputEl;
    if (onChange) {
      externalInput.addEventListener('change', onChange);
    }
    return () => {
      if (onChange) {
        externalInput.removeEventListener('change', onChange);
      }
      /* v8 ignore next */
      if (datePickerWrapper) datePicker.off(datePickerElement);
    };
  }, []);

  const datePickerAttributes: DatePickerAttributes = {};
  if (minDate) datePickerAttributes['data-min-date'] = getDateString(minDate);
  if (maxDate) datePickerAttributes['data-max-date'] = getDateString(maxDate);
  if (dateRange) datePickerAttributes['data-range-date'] = getDateString(dateRange);
  if (defaultValue) datePickerAttributes['data-default-value'] = getDateString(defaultValue);

  const inputClasses = classNames('usa-input', {
    'usa-input--error': validationStatus === 'error',
    'usa-input--success': validationStatus === 'success',
  });

  return (
    <FormGroup
      id={`form-group-${id}`}
      required={required}
      label={label}
      helperText={helperText}
      errors={errors}
      fieldControl={
        <div ref={datePickerRef} className="usa-date-picker" {...datePickerAttributes}>
          <input id={id} className={inputClasses} type="text" {...inputProps} />
        </div>
      }
    />
  );
};

export default DatePicker;

function getDateString(minDate: string | Date): string {
  if (typeof minDate === 'string') {
    const date = new Date(minDate);
    return date.toISOString().substring(0, 10);
  } else {
    return minDate.toISOString().substring(0, 10);
  }
}
