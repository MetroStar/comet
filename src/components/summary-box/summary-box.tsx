import React from 'react';
import classnames from 'classnames';

/* eslint-disable-next-line */
export interface SummaryBoxProps {
  /**
   * The unique identifier for this component
   */
  id: string;
  /**
   * The heading for the summary box
   */
  heading: string;
  /**
   * A custom class to apply to the component
   */
  className?: string;
  /**
   * An array of string messages to display in the summary box
   */
  items: string[];
}

/**
 * A summary box highlights key information from a longer page or displays next steps.
 */
export const SummaryBox = ({
  id,
  heading,
  className,
  items,
}: SummaryBoxProps): React.ReactElement => {
  const classes = classnames('usa-summary-box', className);

  return (
    <div className={classes} role="region" aria-labelledby={id}>
      <div className="usa-summary-box__body">
        <h3 className="usa-summary-box__heading" id={id}>
          {heading}
        </h3>
        <div className="usa-summary-box__text">
          <ul className="usa-list">
            {items.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SummaryBox;
