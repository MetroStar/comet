import './toggle.style.css';
import React, { ChangeEventHandler } from 'react';

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

/**
 * Used to toggle the state of a single setting on or off.
 */
export const Toggle = ({
  id,
  name,
  checked = false,
  label,
  ariaLabel,
  onChange,
}: ToggleProps): React.ReactElement => {
  return (
    <div className="toggle">
      <label htmlFor={id} className="toggle-label" tabIndex={0} aria-label={ariaLabel}>
        <div className="pos-rel">
          <input
            type="checkbox"
            id={id}
            name={name}
            className="toggle-sr-only"
            checked={checked}
            onChange={onChange}
            tabIndex={-1}
          />
          <div className={`toggle-body ${checked ? 'toggle-body-on' : ''}`}></div>
          <div className={`toggle-dot ${checked ? 'ml-6' : 'ml-0'}`}></div>
        </div>
        {label && <span className="toggle-label ml-3">{label}</span>}
      </label>
    </div>
  );
};

export default Toggle;
