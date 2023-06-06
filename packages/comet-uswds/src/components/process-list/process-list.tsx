import React, { ReactNode } from 'react';
import classnames from 'classnames';

export interface ProcessListProps {
  /**
   * The unique identifier for this component
   */
  id: string;
  /**
   * The level of the headings
   */
  headingElementName?: string;
  /**
   * Additional class names for the heading element
   */
  headingClassName?: string;
  /**
   * The level of the headings
   */
  steps: ProcessListStep[];
}

export interface ProcessListStep {
  /**
   * The heading for the step
   */
  heading: string;
  /**
   * The content of the step
   */
  content: ReactNode;
}

/**
 * A process list displays the steps or stages of important instructions or processes.
 */
export const ProcessList = ({
  id,
  headingElementName = 'h4',
  headingClassName,
  steps,
}: ProcessListProps): React.ReactElement => {
  return (
    <ol id={id} className="usa-process-list">
      {steps.map((step, stepIndex) => {
        const headingClasses = classnames('usa-process-list__heading', headingClassName);

        return (
          <li key={stepIndex} className="usa-process-list__item">
            {React.createElement(
              headingElementName,
              {
                className: headingClasses,
              },
              step.heading,
            )}
            {step.content}
          </li>
        );
      })}
    </ol>
  );
};

export default ProcessList;
