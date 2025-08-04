import React, { useState, Dispatch, SetStateAction } from 'react';
import { Meta } from '@storybook/react-vite';
import { StepIndicator, StepIndicatorProps } from './step-indicator';
import Button from '../button/button';
import ButtonGroup from '../button-group';

const meta: Meta<typeof StepIndicator> = {
  title: 'USWDS/Step Indicator',
  component: StepIndicator,
  argTypes: {
    id: { required: true },
    steps: { requried: true },
    currentStep: { required: true },
  },
};
export default meta;

const steps: string[] = ['Lorem', 'Ipsum', 'Dolor', 'Sit', 'Amet'];

export const Standard = {
  args: {
    id: 'step-indicator-1',
    steps,
    currentStep: 0,
    hideLabels: false,
    hideCounterHeading: false,
    showCounters: false,
    showSmallCounters: false,
    centerCounters: false,
    headingLevel: 'h1',
  },
  render: (args: StepIndicatorProps) => {
    const [currentStep, setCurrentStep] = useState(args.currentStep);
    const prevNextButtons = ([currentStep, setCurrentStep]: [
      number,
      Dispatch<SetStateAction<number>>,
    ]) => {
      return (
        <ButtonGroup>
          <Button
            id="previous-button"
            disabled={currentStep <= 0}
            onClick={() => setCurrentStep(currentStep - 1)}
          >
            Previous
          </Button>
          <Button
            id="next-button"
            disabled={currentStep >= steps.length - 1}
            onClick={() => setCurrentStep(currentStep + 1)}
          >
            Next
          </Button>
        </ButtonGroup>
      );
    };

    const newProps = { ...args };
    newProps.currentStep = currentStep;

    return (
      <>
        <StepIndicator {...newProps} />
        {prevNextButtons([currentStep, setCurrentStep])}
      </>
    );
  },
};
