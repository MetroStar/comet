import classnames from "classnames";
import React, { createElement } from "react";

/* eslint-disable-next-line */
export interface StepIndicatorProps {
  /**
   * The unique identifier for this component
   */
  id: string;
  /**
   * Array of labels for the steps. Length of array will be used as step count.
   */
  steps: string[];
  /**
   * Step that is currently active. (0-based index)
   */
  currentStep: number;
  /**
   * Hides labels of step indicator if set to true. Defaults to false.
   */
  hideLabels?: boolean;
  /**
   * Shows step number in step indicator if set to true. Defaults to false.
   */
  showCounters?: boolean;
  /**
   * Shows small step number in step indicator if set to true. Defaults to false.
   */
  showSmallCounters?: boolean;
  /**
   * Centers label and counter if set to true. Defaults to false.
   */
  centerCounters?: boolean;
  /**
   * Level of the heading (h1, h2, h3, h4, h5, h6). Defaults to h4
   */
  headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const StepIndicator = ({
  id,
  steps,
  currentStep,
  hideLabels = false,
  showCounters = false,
  showSmallCounters = false,
  centerCounters = false,
  headingLevel = "h4",
}: StepIndicatorProps): React.ReactElement => {
  const classes = classnames("usa-step-indicator", {
    "usa-step-indicator--no-labels": hideLabels,
    "usa-step-indicator--counters": showCounters,
    "usa-step-indicator--counters-sm": showSmallCounters,
    "usa-step-indicator--center": centerCounters,
  });

  return (
    <div id={id} className={classes} aria-label="progress">
      <ol className="usa-step-indicator__segments">
        {steps.map((step, stepIndex) => {
          const attributes = {
            key: stepIndex,
            className: "usa-step-indicator__segment",
          };
          let segmentSrLabel = "";
          if (stepIndex < currentStep) {
            attributes.className += " usa-step-indicator__segment--complete";
            segmentSrLabel = "completed";
          } else if (stepIndex > currentStep) {
            segmentSrLabel = "not completed";
          } else {
            attributes.className += " usa-step-indicator__segment--current";
            Object.assign(attributes, { "aria-current": true });
          }

          return (
            <li {...attributes}>
              <span className="usa-step-indicator__segment-label">
                {step}
                {segmentSrLabel !== "" && (
                  <span className="usa-sr-only">{segmentSrLabel}</span>
                )}
              </span>
            </li>
          );
        })}
      </ol>
      <div className="usa-step-indicator__header">
        {createElement(
          headingLevel,
          { className: "usa-step-indicator__heading" },
          <>
            <span className="usa-step-indicator__heading-counter">
              <span className="usa-sr-only">Step</span>
              <span className="usa-step-indicator__current-step">
                {currentStep + 1}
              </span>
              <span className="usa-step-indicator__total-steps">
                &nbsp;of {steps.length}
              </span>
            </span>
            <span className="usa-step-indicator__heading-text">
              {steps[currentStep]}
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default StepIndicator;
