import './toggle.style.css';
import React, { ChangeEvent, ChangeEventHandler, useEffect, useState } from 'react';

export interface ToggleProps {
  /**
   * The unique identifier for this component
   */
  id: string;
  /**
   * The name of the text input
   */
  name?: string;
  /**
   * Whether the toggle is checked or not
   */
  checked?: boolean;
  /**
   * A label to display with the toggle
   */
  label?: string;
  /**
   * An accessible label for the toggle
   */
  ariaLabel?: string;
  /**
   * Custom callback for when input is changed
   */
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export const Toggle = ({
  id,
  name,
  checked = false,
  label,
  ariaLabel,
  onChange,
}: ToggleProps): React.ReactElement => {
  const [isChecked, setIsChecked] = useState(false);
  const toggleHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setIsChecked(!isChecked);
    onChange?.(event);
  };

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  return (
    <div className="toggle">
      <label htmlFor={id} className="toggle-label" tabIndex={0} aria-label={ariaLabel}>
        <div className="pos-rel">
          <input
            type="checkbox"
            id={id}
            name={name}
            className="toggle-sr-only"
            checked={isChecked}
            onChange={toggleHandler}
            tabIndex={-1}
          />
          <div className={`toggle-body ${isChecked ? 'toggle-body-on' : ''}`}></div>
          <div className={`toggle-dot ${isChecked ? 'ml-6' : 'ml-0'}`}></div>
        </div>
        {label && <span className="toggle-label ml-3">{label}</span>}
      </label>
    </div>
  );
};

export default Toggle;
