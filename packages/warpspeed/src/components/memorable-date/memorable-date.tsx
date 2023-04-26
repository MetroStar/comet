import React from 'react';

export interface MemorableDateProps {
    /**
     * The unique identifier for this component
     */
    id: string;
    /**
     * The unique identifier for the month field
     */
    monthId: string;
    /**
     * The unique identifier for the day field
     */
    dayId: string;
    /**
     * The unique identifier for the year field
     */
    yearId: string;
    /**
     * The name for the month field
     */
    monthName?: string;
    /**
     * The name for the day field
     */
    dayName?: string;
    /**
     * The name for the year field
     */
    yearName?: string;
    /**
     * The default value for the day field
     */
    dayValue?: number;
    /**
     * The default value for the year field
     */
    monthValue?: number;
    /**
     * The default value for the year field
     */
    yearValue?: number;
  }

  /**
   * A memorable date splits a date into three fields.
   */
  export const MemorableDate = ({
    id,
    monthId,
    dayId,
    yearId,
    monthName,
    dayName,
    yearName,
    monthValue,
    dayValue,
    yearValue,
    ...props
  }: MemorableDateProps): React.ReactElement => {
    return (
      <div id={id} className="usa-memorable-date" data-testid="memorable-date" {...props}>
        <div className="usa-form-group usa-form-group--month usa-form-group--select">
          <label className="usa-label" htmlFor={monthId}>Month</label>
          <select
            className="usa-select"
            id={monthId}
            name={monthName}
            value={monthValue}
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
          <label className="usa-label" htmlFor={dayId}>Day</label>
          <input
            className="usa-input"
            id={dayId}
            name={dayName}
            minLength={1}
            maxLength={2}
            pattern="[0-9]*"
            inputMode="numeric"
            value={dayValue}
          />
        </div>
        <div className="usa-form-group usa-form-group--year">
          <label className="usa-label" htmlFor={yearId}>Year</label>
          <input
            className="usa-input"
            id={yearId}
            name={yearName}
            minLength={4}
            maxLength={4}
            pattern="[0-9]*"
            inputMode="numeric"
            value={yearValue}
          />
        </div>
      </div>
    );
  };
  
  export default MemorableDate;
  