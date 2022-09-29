import React, { ReactNode, useState } from "react";
import "./accordion.style.css";

interface Fold {
  label: string;
  child: ReactNode;
}

export interface AccordionProps {
  folds: Fold[];
}

const Accordion: React.FC<AccordionProps> = ({ folds }: AccordionProps) => {
  const [hide, setHide] = useState<boolean[]>(Array(folds.length).fill(true));

  const onAccClick = (i: number): void => {
    const hidden = [...hide];
    hidden[i] = !hidden[i];
    setHide(hidden);
  };

  return (
    <div className="usa-accordion">
      {folds.map((e, i) => (
        <div
          className="accordion-item"
          key={`accordion-item-${i}`}
          data-testid="encounter"
        >
          <h4 className="usa-accordion__heading">
            <button
              type="button"
              className="usa-accordion__button"
              aria-expanded={!hide[i]}
              data-testid="acc-button"
              onClick={() => onAccClick(i)}
            >
              {e.label}
            </button>
          </h4>
          <div
            className="usa-accordion__content usa-prose text-left"
            style={{
              display: hide[i] ? "none" : "block",
              visibility: "visible",
            }}
            hidden={hide[i]}
            data-testid="acc-content-body"
          >
            {e.child}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
