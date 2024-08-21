import FormGroup from '../form-group';

export interface RangeSliderProps {
  /**
   * The unique identifier for the input field
   */
  id: string;
  /**
   * The name of the input field
   */
  name: string;
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
   * A minimum value allowed for the slider
   */
  minValue?: string;
  /**
   * A maximum value allowed for the slider
   */
  maxValue?: string;
  /**
   * The value to increment the slider by as it is changed
   */
  step?: string;
  /**
   * The default value to apply to the range slider
   */
  defaultValue?: string;
  /**
   * Event handler will be triggered when the range slider value changes
   */
  onChange?: (this: HTMLInputElement, event: Event) => void;
}

/**
 * A range slider allows users to choose an approximate number from a range.
 */
export const RangeSlider = ({
  id,
  required,
  label,
  helperText,
  errors,
  minValue,
  maxValue,
  step = '10',
  defaultValue,
  onChange,
  ...inputProps
}: RangeSliderProps & Omit<JSX.IntrinsicElements['input'], 'min' | 'max'>): React.ReactElement => {
  return (
    <FormGroup
      id={`form-group-${id}`}
      required={required}
      label={label}
      helperText={helperText}
      errors={errors}
      fieldControl={
        <input
          id={id}
          className="usa-range"
          type="range"
          min={minValue}
          max={maxValue}
          step={step}
          defaultValue={defaultValue}
          onChange={onChange}
          role="slider"
          {...inputProps}
        />
      }
    />
  );
};

export default RangeSlider;
