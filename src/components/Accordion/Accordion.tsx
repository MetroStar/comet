import React, { ReactNode } from 'react';

interface Fold {
  label: string
  child: ReactNode
}

interface AccordionProps {
  fold: Fold
}

export const Accordion: React.FC<AccordionProps> = ({
  fold,
}: AccordionProps) => {
  return (
    <div className="usa-accordion">
      {Object.keys(fold).map((e, i) => (
        <div
          className="accordion-item"
          key={`accordion-item-${i}`}
          data-testid="encounter"
        >
          <h4 className="usa-accordion__heading">
            <button
              type="button"
              className="usa-accordion__button"
              aria-expanded={false}
              aria-controls={`a${i}`}
              data-testid="prescriptions-acc-button"
            >
              {/* Label */}
            </button>
          </h4>
          <div
            id={`a${i}`}
            className="usa-accordion__content usa-prose text-left"
            hidden={true}
            data-testid="prescriptions-acc"
          ></div>
        </div>
      ))}
    </div>
  )
}
