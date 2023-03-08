import React, { ReactNode, useState } from "react";
import "./accordion.style.css";

interface Fold {
  label: string;
  child: ReactNode;
}

export interface AccordionProps {
  id: string;
  folds: Fold[];
}

export const Accordion = ({
  id,
  folds,
}: AccordionProps): React.ReactElement => {
  const [hide, setHide] = useState<boolean[]>(Array(folds.length).fill(true));

  const onAccClick = (i: number): void => {
    const hidden = [...hide];
    hidden[i] = !hidden[i];
    setHide(hidden);
  };

  return (
    <div className="usa-accordion" id={id}>
      {folds.map((e, i) => (
        <div
          className="accordion-item"
          data-testid="accordion-item"
          key={`accordion-item-${i}`}
        >
          <h4 className="usa-accordion__heading">
            <button
              type="button"
              className="usa-accordion__button"
              data-testid="accordion-button"
              aria-expanded={!hide[i]}
              onClick={() => onAccClick(i)}
            >
              {e.label}
            </button>
          </h4>
          <div
            className="usa-accordion__content usa-prose text-left"
            data-testid="accordion-content"
            style={{
              display: hide[i] ? "none" : "block",
              visibility: "visible",
            }}
            hidden={hide[i]}
          >
            {e.child}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
