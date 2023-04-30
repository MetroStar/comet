import React, { PropsWithChildren, useLayoutEffect, useRef } from 'react';
import dateRangePicker from '@uswds/uswds/js/usa-date-range-picker';

export interface DateRangePickerProps {
  /**
   * The unique identifier for the date range picker field
   */
  id: string;
}

/**
 * A date range picker helps users select a range between two dates.
 */
export const DateRangePickerContainer = ({
  id,
  children,
}: DateRangePickerProps & PropsWithChildren<unknown>): React.ReactElement => {
  const dateRangePickerRef = useRef(null);
  useLayoutEffect(() => {
    const dateRangePickerElement = dateRangePickerRef.current;
    dateRangePicker.on(dateRangePickerElement);
    return () => dateRangePicker.off(dateRangePickerElement);
  });
  return (
    <div id={id} ref={dateRangePickerRef} className="usa-date-range-picker">
      {children}
    </div>
  );
};

export default DateRangePickerContainer;
