import React, { ReactElement, ReactNode } from 'react';
import classnames from 'classnames';

export interface ProcessListStepProp {
  /**
   * The heading for the step
   */
  heading: string;
  /**
   * The level of the headings
   */
  headingElementName?: string;
  /**
   * Additional class names for the heading element
   */
  headingClassName?: string;
  /**
   * The body of the accordion item
   */
  children: ReactNode;
}

export interface ProcessListProps {
  /**
   * The unique identifier for this component
   */
  id: string;
  /**
   * The level of the headings
   */
  steps?: ProcessListStepProp[];
  /**
   * The body of the component
   */
  children?: ReactElement<ProcessListStepProp> | Array<ReactElement<ProcessListStepProp>>;
}

/**
 * A process list displays the steps or stages of important instructions or processes.
 */
export const ProcessList = ({ id, steps, children }: ProcessListProps): ReactElement => {
  if (!children && !steps) {
    return <></>;
  }

  return (
    <ol id={id} className="usa-process-list">
      {children ??
        steps?.map((step, stepIndex) => (
          <ProcessListStep heading={step.heading} key={stepIndex}>
            {step.children}
          </ProcessListStep>
        ))}
    </ol>
  );
};

export const ProcessListStep = ({
  heading,
  headingClassName,
  headingElementName = 'h4',
  children,
}: ProcessListStepProp): ReactElement => {
  const headingClasses = classnames('usa-process-list__heading', headingClassName);
  return (
    <li className="usa-process-list__item">
      {React.createElement(
        headingElementName,
        {
          className: headingClasses,
        },
        heading,
      )}
      {children}
    </li>
  );
};

export default ProcessList;
