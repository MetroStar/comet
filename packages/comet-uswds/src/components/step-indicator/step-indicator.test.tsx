import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import StepIndicator from './step-indicator';

const steps: string[] = ['Lorem', 'Ipsum', 'Dolor', 'Sit', 'Amet'];

describe('StepIndicator', () => {
  test('should render with no accessibility violations', async () => {
    const { container } = render(
      <StepIndicator id="step-indicator1" steps={steps} currentStep={1} />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  test('should render successfully', () => {
    const { baseElement } = render(
      <StepIndicator id="step-indicator1" steps={steps} currentStep={1} />,
    );
    expect(baseElement).toBeTruthy();
  });

  test(`should render ${steps.length} steps`, () => {
    const { baseElement } = render(
      <StepIndicator id="step-indicator1" steps={steps} currentStep={1} />,
    );
    expect(baseElement.querySelectorAll('.usa-step-indicator__segment')).toHaveLength(steps.length);
  });

  test('should render step 0 as complete', () => {
    const { baseElement } = render(
      <StepIndicator id="step-indicator1" steps={steps} currentStep={1} />,
    );
    expect(baseElement.querySelectorAll('.usa-step-indicator__segment')[0].classList).toContain(
      'usa-step-indicator__segment--complete',
    );
  });

  test('should render step 1 as current', () => {
    const { baseElement } = render(
      <StepIndicator id="step-indicator1" steps={steps} currentStep={1} />,
    );
    const secondIndicator = baseElement.querySelectorAll('.usa-step-indicator__segment')[1];
    expect(secondIndicator.classList).toContain('usa-step-indicator__segment--current');
    expect(secondIndicator.getAttribute('aria-current')).toEqual('true');
  });

  test('should render step 2 not as complete or current', () => {
    const { baseElement } = render(
      <StepIndicator id="step-indicator1" steps={steps} currentStep={1} />,
    );
    const thirdIndicator = baseElement.querySelectorAll('.usa-step-indicator__segment')[2];
    expect(thirdIndicator.classList).not.toContain('usa-step-indicator__segment--current');
    expect(thirdIndicator.classList).not.toContain('usa-step-indicator__segment--complete');
    expect(thirdIndicator.hasAttribute('aria-current')).toEqual(false);
  });

  test('should render step indicator with hidden labels', () => {
    const { baseElement } = render(
      <StepIndicator id="step-indicator1" steps={steps} currentStep={0} hideLabels={true} />,
    );
    const stepIndicator = baseElement.querySelector('.usa-step-indicator');
    expect(stepIndicator?.classList).toContain('usa-step-indicator--no-labels');
  });

  test('should render step indicator with counters', () => {
    const { baseElement } = render(
      <StepIndicator id="step-indicator1" steps={steps} currentStep={0} showCounters={true} />,
    );
    const stepIndicator = baseElement.querySelector('.usa-step-indicator');
    expect(stepIndicator?.classList).toContain('usa-step-indicator--counters');
  });

  test('should render step indicator with small counters', () => {
    const { baseElement } = render(
      <StepIndicator id="step-indicator1" steps={steps} currentStep={0} showSmallCounters={true} />,
    );
    const stepIndicator = baseElement.querySelector('.usa-step-indicator');
    expect(stepIndicator?.classList).toContain('usa-step-indicator--counters-sm');
  });

  test('should render step indicator with centered counters', () => {
    const { baseElement } = render(
      <StepIndicator id="step-indicator1" steps={steps} currentStep={0} centerCounters={true} />,
    );
    const stepIndicator = baseElement.querySelector('.usa-step-indicator');
    expect(stepIndicator?.classList).toContain('usa-step-indicator--center');
  });

  test('should render step indicator with h1 header', () => {
    const { baseElement } = render(
      <StepIndicator
        id="step-indicator1"
        steps={steps}
        currentStep={0}
        centerCounters={true}
        headingLevel="h1"
      />,
    );
    const stepIndicatorHeading = baseElement.querySelector('.usa-step-indicator__heading');
    expect(stepIndicatorHeading?.tagName).toBe('H1');
  });
});
