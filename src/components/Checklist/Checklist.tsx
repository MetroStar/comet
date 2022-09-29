import React, { useState } from "react";
import "./checklist.style.css";

export interface ChecklistProps {
  items?: string[];
  onChange?: Function;
  label?: string;
}

const Checklist: React.FC<ChecklistProps> = ({
  items,
  label,
  onChange,
}: ChecklistProps) => {
  const [checked, setChecked] = useState(
    Array(items ? items.length : 0).fill(false)
  );

  const onCheck = (
    event: React.ChangeEvent<HTMLInputElement>,
    i: number
  ): void => {
    const current = [...checked];
    current[i] = event.currentTarget.checked;

    // Update parent via callback, then update view.
    if (items && onChange) {
      const selected: string[] = [];
      current.forEach((e, i) => (e ? selected.push(items[i]) : null));
      onChange(selected);
    }

    setChecked(current);
  };

  return (
    <div className="checklist">
      <span className="label">{label}</span>
      {items ? (
        items.map((item, i) => (
          <span className="usa-checkbox checkbox" key={`checkbox-${i}`}>
            <input
              className="usa-checkbox__input"
              data-testid="checkbox"
              id={item}
              type="checkbox"
              name="historical-figures"
              style={{ display: "inline-block" }}
              onChange={(e) => onCheck(e, i)}
              checked={checked[i]}
            />
            <label
              className="usa-checkbox__label"
              htmlFor={item}
              style={{ paddingLeft: 30, display: "inline-block" }}
            >
              {item}
            </label>
          </span>
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default Checklist;
