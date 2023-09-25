import React, { ReactElement, ReactNode, useEffect, useRef } from 'react';
import classnames from 'classnames';
import accordion from '@uswds/uswds/js/usa-accordion';
import './accordion.style.css';

export interface AccordionItemProps {
  /**
   * The unique identifier for the accordion item
   */
  id: string;
  /**
   * The label value for the accordion item
   */
  label: string;
  /**
   * Whether or not the accordion item is expanded
   */
  expanded: boolean;
  /**
   * The body of the accordion item
   */
  children: ReactNode;
}

export interface AccordionProps {
  /**
   * The unique identifier for this component
   */
  id: string;
  /**
   * Whether or not to allow multiple items to be expanded at once
   */
  allowMultiSelect?: boolean;
  /**
   * An array of AccordionItem objects, used to build the accordion
   */
  items?: AccordionItemProps[];
  /**
   * AccordionItem components to display as children
   */
  children?: ReactElement<AccordionItemProps> | Array<ReactElement<AccordionItemProps>>;
}

/**
 * An accordion is a list of headers that hide or reveal additional content when selected.
 */
export const Accordion = ({
  id,
  allowMultiSelect = false,
  items,
  children,
}: AccordionProps): ReactElement => {
  // If no children and items provided, render partial
  if (!children && !items) {
    return <></>;
  }

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
      className={classnames('usa-accordion', {
        'usa-accordion--multiselectable': allowMultiSelect,
      })}
      data-allow-multiple={allowMultiSelect ? true : undefined}
    >
      {children ??
        items?.map((e, i) => (
          <AccordionItem
            id={e.id}
            key={`accordion-item-${i}`}
            label={e.label}
            expanded={e.expanded}
          >
            {e.children}
          </AccordionItem>
        ))}
    </div>
  );
};

export const AccordionItem = ({
  id,
  label,
  expanded,
  children,
}: AccordionItemProps): ReactElement => {
  return (
    <div className="accordion-item" data-testid="accordion-item">
      <h4 className="usa-accordion__heading">
        <button
          type="button"
          className="usa-accordion__button"
          data-testid="accordion-button"
          aria-expanded={expanded}
          aria-controls={id}
        >
          {label}
        </button>
      </h4>
      <div
        id={id}
        className="usa-accordion__content usa-prose text-left"
        data-testid="accordion-content"
        hidden={!expanded}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
