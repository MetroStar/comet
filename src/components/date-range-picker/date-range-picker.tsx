import React, { PropsWithChildren, useLayoutEffect, useRef } from 'react';
import dateRangePicker from '@uswds/uswds/js/usa-date-range-picker';

export const DateRangePickerContainer = ({
  children,
}: PropsWithChildren<unknown>): React.ReactElement => {
  const dateRangePickerRef = useRef(null);
  useLayoutEffect(() => {
    const dateRangePickerElement = dateRangePickerRef.current;
    dateRangePicker.on(dateRangePickerElement);
    return () => dateRangePicker.off(dateRangePickerElement);
  });
  return (
    <div ref={dateRangePickerRef} className="usa-date-range-picker">
      {children}
    </div>
  );
};

export default DateRangePickerContainer;
