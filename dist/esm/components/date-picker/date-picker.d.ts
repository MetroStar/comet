import React from 'react';
export interface DatePickerProps {
    /**
     * The unique identifier for the input field
     */
    id: string;
    /**
     * The name of the input field
     */
    name: string;
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
     * Event handler will be triggered when the date-picker value changes
     */
    onChange?: (this: HTMLInputElement, event: Event) => void;
}
/**
 * A date picker helps users select a single date.
 */
export declare const DatePicker: ({ minDate, maxDate, dateRange, defaultValue, onChange, ...inputProps }: DatePickerProps & JSX.IntrinsicElements['input']) => React.ReactElement;
export default DatePicker;
