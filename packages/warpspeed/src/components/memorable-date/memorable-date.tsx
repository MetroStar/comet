import React, { ChangeEventHandler } from 'react';

export interface MemorableDateProps {
    /**
     * The unique identifier for this component
     */
    id: string;
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
     * Event handler will be triggered when a value changes
     */
    onMonthChange?: ChangeEventHandler<HTMLSelectElement>;
    onDayChange?: ChangeEventHandler<HTMLSelectElement>;
    onYearChange?: ChangeEventHandler<HTMLSelectElement>;
  }

  /**
   * A memorable date splits a date into three fields.
   */
  export const MemorableDate = ({
    id,
    defaultMonthValue,
    defaultDayValue,
    defaultYearValue,
    onMonthChange,
    onDayChange,
    onYearChange,
    ...props
  }: MemorableDateProps): React.ReactElement => {
    return (
      <div id={`memorable-date-${id}`} className="usa-memorable-date" data-testid="memorable-date" {...props}>
        <div className="usa-form-group usa-form-group--month usa-form-group--select">
          <label className="usa-label" htmlFor={`memorable-date-month-${id}`}>Month</label>
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
          <label className="usa-label" htmlFor={`memorable-date-day-${id}`}>Day</label>
          <input
            className="usa-input"
            id={`memorable-date-day-${id}`}
            name={`memorable-date-day-${id}`}
            minLength={1}
            maxLength={2}
            pattern="[0-9]*"
            inputMode="numeric"
            defaultValue={defaultDayValue}
            onChange={onDayChange}
          />
        </div>
        <div className="usa-form-group usa-form-group--year">
          <label className="usa-label" htmlFor={`memorable-date-year-${id}`}>Year</label>
          <input
            className="usa-input"
            id={`memorable-date-year-${id}`}
            name={`memorable-date-year-${id}`}
            minLength={4}
            maxLength={4}
            pattern="[0-9]*"
            inputMode="numeric"
            defaultValue={defaultYearValue}
            onChange={onYearChange}
          />
        </div>
      </div>
    );
  };
  
  export default MemorableDate;
  