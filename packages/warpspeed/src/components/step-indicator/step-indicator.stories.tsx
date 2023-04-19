import React, { useState, Dispatch, SetStateAction } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { StepIndicator, StepIndicatorProps } from './step-indicator';
import Button from '../button/button';

const meta: Meta<typeof StepIndicator> = {
  title: 'Components/Step Indicator',
  component: StepIndicator,
  argTypes: {
    id: { required: true },
    steps: { requried: true },
    currentStep: { required: true },
  },
};
export default meta;

const steps: string[] = ['Lorem', 'Ipsum', 'Dolor', 'Sit', 'Amet'];

const StepIndicatorWrapper: React.FC<StepIndicatorProps> = (props: StepIndicatorProps) => {
  const [currentStep, setCurrentStep] = useState(props.currentStep);
  function prevNextButtons([currentStep, setCurrentStep]: [
    number,
    Dispatch<SetStateAction<number>>,
  ]): JSX.Element {
    return (
      <>
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
      </>
    );
  }

  const newProps = { ...props };
  newProps.currentStep = currentStep;

  return (
    <>
      <StepIndicator {...newProps} />
      {prevNextButtons([currentStep, setCurrentStep])}
    </>
  );
};

const Template: StoryFn<typeof StepIndicator> = (args: StepIndicatorProps) => (
  <StepIndicatorWrapper {...args} />
);

export const Standard = Template.bind({});
Standard.args = {
  id: 'step-indicator-1',
  steps,
  currentStep: 0,
  hideLabels: false,
  showCounters: false,
  showSmallCounters: false,
  centerCounters: false,
  headingLevel: 'h1',
};
