import React, { ReactNode, useEffect, useRef } from 'react';
import clasnames from 'classnames';
import accordion from '@uswds/uswds/js/usa-accordion';
import './accordion.style.css';

interface Fold {
  /**
   * The unique identifier for the fold
   */
  id: string;
  /**
   * The label value for the fold
   */
  label: string;
  /**
   * Whether or not the fold is expanded
   */
  expanded: boolean;
  /**
   * The body of the fold
   */
  child: ReactNode;
}

export interface AccordionProps {
  /**
   * The unique identifier for this component
   */
  id: string;
  /**
   * Whether or not to allow multiple folds to be expanded at once
   */
  allowMultiSelect?: boolean;
  /**
   * An array of Fold objects, used to build the accordion
   */
  folds: Fold[];
}

/**
 * An accordion is a list of headers that hide or reveal additional content when selected.
 */
export const Accordion = ({
  id,
  allowMultiSelect = false,
  folds,
}: AccordionProps): React.ReactElement => {
  // Ensure accordion JS is loaded
  const accordionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const accordionElement = accordionRef.current;
    /* istanbul ignore else */
    if (accordionElement) {
      accordionElement.querySelectorAll('button').forEach((elem) => {
        accordion.on(elem);
      });
    }

    // Ensure cleanup after the effect
    return () => {
      /* istanbul ignore else */
      if (accordionElement) {
        accordionElement.querySelectorAll('button').forEach((elem) => {
          accordion.off(elem);
        });
      }
    };
  });

  return (
    <div
      id={id}
      ref={accordionRef}
      className={clasnames('usa-accordion', {
        'usa-accordion--multiselectable': allowMultiSelect,
      })}
      data-allow-multiple={allowMultiSelect ? true : undefined}
    >
      {folds.map((e, i) => (
        <div className="accordion-item" data-testid="accordion-item" key={`accordion-item-${i}`}>
          <h4 className="usa-accordion__heading">
            <button
              type="button"
              className="usa-accordion__button"
              data-testid="accordion-button"
              aria-expanded={folds[i].expanded}
              aria-controls={folds[i].id}
            >
              {e.label}
            </button>
          </h4>
          <div
            id={folds[i].id}
            className="usa-accordion__content usa-prose text-left"
            data-testid="accordion-content"
            hidden={!folds[i].expanded}
          >
            {e.child}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
