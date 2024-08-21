import React, { ChangeEventHandler } from 'react';
import FormGroup from '../form-group';

export interface MemorableDateProps {
  /**
   * The unique identifier for this component
   */
  id: string;
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
   * The default value for the day field
   */
  defaultDayValue?: number;
  /**
   * The default value for the year field
   */
  defaultMonthValue?: number;
  /**
   * The default value for the year field
   */
  defaultYearValue?: number;
  /**
   * Event handler will be triggered when a month value changes
   */
  onMonthChange?: ChangeEventHandler<HTMLSelectElement>;
  /**
   * Event handler will be triggered when a day value changes
   */
  onDayChange?: ChangeEventHandler<HTMLInputElement>;
  /**
   * Event handler will be triggered when a year value changes
   */
  onYearChange?: ChangeEventHandler<HTMLInputElement>;
}

/**
 * A memorable date splits a date into three fields.
 */
export const MemorableDate = ({
  id,
  required,
  label,
  helperText,
  errors,
  defaultMonthValue,
  defaultDayValue,
  defaultYearValue,
  onMonthChange,
  onDayChange,
  onYearChange,
  ...props
}: MemorableDateProps): React.ReactElement => {
  return (
    <FormGroup
      id={`form-group-${id}`}
      required={required}
      label={label}
      helperText={helperText}
      errors={errors}
      fieldControl={
        <div
          id={`memorable-date-${id}`}
          className="usa-memorable-date"
          data-testid="memorable-date"
          {...props}
        >
          <div className="usa-form-group usa-form-group--month usa-form-group--select">
            <label className="usa-label" htmlFor={`memorable-date-month-${id}`}>
              Month
            </label>
            <select
              className="usa-select"
              id={`memorable-date-month-${id}`}
              name={`memorable-date-month-${id}`}
              defaultValue={defaultMonthValue}
              onChange={onMonthChange}
            >
              <option value="">- Select -</option>
              <option value={1}>01 - January</option>
              <option value={2}>02 - February</option>
              <option value={3}>03 - March</option>
              <option value={4}>04 - April</option>
              <option value={5}>05 - May</option>
              <option value={6}>06 - June</option>
              <option value={7}>07 - July</option>
              <option value={8}>08 - August</option>
              <option value={9}>09 - September</option>
              <option value={10}>10 - October</option>
              <option value={11}>11 - November</option>
              <option value={12}>12 - December</option>
            </select>
          </div>
          <div className="usa-form-group usa-form-group--day">
            <label className="usa-label" htmlFor={`memorable-date-day-${id}`}>
              Day
            </label>
            <input
              className="usa-input"
              id={`memorable-date-day-${id}`}
              name={`memorable-date-day-${id}`}
              type="number"
              minLength={1}
              maxLength={2}
              pattern="[0-9]*"
              inputMode="numeric"
              defaultValue={defaultDayValue}
              onChange={onDayChange}
            />
          </div>
          <div className="usa-form-group usa-form-group--year">
            <label className="usa-label" htmlFor={`memorable-date-year-${id}`}>
              Year
            </label>
            <input
              className="usa-input"
              id={`memorable-date-year-${id}`}
              name={`memorable-date-year-${id}`}
              type="number"
              minLength={4}
              maxLength={4}
              pattern="[0-9]*"
              inputMode="numeric"
              defaultValue={defaultYearValue}
              onChange={onYearChange}
            />
          </div>
        </div>
      }
    />
  );
};

export default MemorableDate;
