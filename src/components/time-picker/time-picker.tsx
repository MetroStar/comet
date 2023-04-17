import classNames from 'classnames';
import React, { useLayoutEffect, useRef } from 'react';
import comboBox from '@uswds/uswds/js/usa-combo-box';
import timePicker from '@uswds/uswds/js/usa-time-picker';

export interface TimePickerProps {
  /**
   * The unique identifier for the input
   */
  id: string;
  /**
   * The time picker will use this regular expression to filter the time picker options.
   */
  filter?: string;
  /**
   * The start time used in the time picker in hh:mm 24-hour format. The default is 00:00.
   */
  minTime?: string;
  /**
   * The end time used for the time picker in hh:mm 24-hour format. The default is 23:59.
   */
  maxTime?: string;
  /**
   * The number of minutes between options. The minimum is 1 minute and the default is 30 minutes.
   */
  step?: number;
  /**
   * Event handler will be triggered when the time-picker value changes
   */
  onChange?: (this: HTMLInputElement, event: Event) => void;
}

/**
 * A time picker helps users select a specific time.
 */
export const TimePicker = ({
  filter,
  minTime,
  maxTime,
  step,
  onChange,
  ...inputProps
}: TimePickerProps & JSX.IntrinsicElements['input']): React.ReactElement => {
  const timePickerRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const timePickerElement = timePickerRef.current as HTMLDivElement;
    timePicker.on(timePickerElement);
    comboBox.on(timePickerElement);
    const inputElement = timePickerElement.querySelector(
      '.usa-combo-box__input',
    ) as HTMLInputElement;

    if (onChange) {
      inputElement.addEventListener('change', onChange);
    }

    return () => {
      if (onChange) {
        inputElement.removeEventListener('change', onChange);
      }
      comboBox.off(timePickerElement);
      timePicker.off(timePickerElement);
    };
  });

  const datePickerAttributes: {
    'data-filter'?: unknown;
    'data-min-time'?: unknown;
    'data-max-time'?: unknown;
    'data-step'?: unknown;
  } = {};
  if (filter) datePickerAttributes['data-filter'] = filter;
  if (minTime) datePickerAttributes['data-min-time'] = minTime;
  if (maxTime) datePickerAttributes['data-max-time'] = maxTime;
  if (step) datePickerAttributes['data-step'] = step;

  return (
    <div
      ref={timePickerRef}
      className={classNames('usa-time-picker', inputProps.className)}
      {...datePickerAttributes}
    >
      <input className="usa-input" type="text" {...inputProps} />
    </div>
  );
};

export default TimePicker;
