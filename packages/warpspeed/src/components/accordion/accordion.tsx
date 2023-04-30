import React, { ReactNode, useEffect, useRef } from 'react';
import clasnames from 'classnames';
import accordion from '@uswds/uswds/js/usa-accordion';
import './accordion.style.css';

interface AccordionItem {
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
   * An array of AccordionItem objects, used to build the accordion
   */
  items: AccordionItem[];
}

/**
 * An accordion is a list of headers that hide or reveal additional content when selected.
 */
export const Accordion = ({
  id,
  allowMultiSelect = false,
  items,
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
      {items.map((e, i) => (
        <div className="accordion-item" data-testid="accordion-item" key={`accordion-item-${i}`}>
          <h4 className="usa-accordion__heading">
            <button
              type="button"
              className="usa-accordion__button"
              data-testid="accordion-button"
              aria-expanded={items[i].expanded}
              aria-controls={items[i].id}
            >
              {e.label}
            </button>
          </h4>
          <div
            id={items[i].id}
            className="usa-accordion__content usa-prose text-left"
            data-testid="accordion-content"
            hidden={!items[i].expanded}
          >
            {e.child}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
