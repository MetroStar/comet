import React, { ReactElement, ReactNode } from 'react';
import classnames from 'classnames';
import './process-list.css';

export interface ProcessListStepProps {
  /**
   * The heading for the step
   */
  heading: string;
  /**
   * The level of the headings
   */
  headingElementName?: string;
  /**
   * Whether the step is the current step
   */
  isCurrentStep?: boolean;
  /**
   * Whether the step is a completed step
   */
  isCompletedStep?: boolean;
  /**
   * Whether the step is the last step
   */
  isLastStep?: boolean;
  /**
   * Additional class names for the heading element
   */
  headingClassName?: string;
  /**
   * The body of the step
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
  steps?: ProcessListStepProps[];
  /**
   * The current step (1 based index)
   */
  currentStep?: number;
  /**
   * ProcessListStep components to display as children
   */
  children?: ReactElement<ProcessListStepProps> | Array<ReactElement<ProcessListStepProps>>;
}

/**
 * A process list displays the steps or stages of important instructions or processes.
 */
export const ProcessList = ({
  id,
  steps,
  currentStep = 0,
  children,
}: ProcessListProps): ReactElement => {
  // If no children and items provided, render partial
  if (!children && !steps) {
    return <></>;
  }

  return (
    <ol id={id} className="usa-process-list">
      {children ??
        steps?.map((step, stepIndex) => (
          <ProcessListStep
            heading={step.heading}
            key={stepIndex}
            isCurrentStep={currentStep === stepIndex + 1 && currentStep !== steps.length}
            isCompletedStep={currentStep > stepIndex + 1 || currentStep === steps.length}
            isLastStep={stepIndex === steps.length - 1}
          >
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
  isCurrentStep,
  isCompletedStep,
  isLastStep,
  children,
}: ProcessListStepProps): ReactElement => {
  const listItemClasses = classnames('usa-process-list__item', {
    current: isCurrentStep && !isCompletedStep,
    completed: isCompletedStep,
    last: isLastStep,
  });

  const headingClasses = classnames(
    'usa-process-list__heading',
    {
      current: isCurrentStep && !isCompletedStep,
      completed: isCompletedStep,
      last: isLastStep,
    },
    headingClassName,
  );
  return (
    <li className={listItemClasses}>
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
