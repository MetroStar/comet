import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import ProcessList, { ProcessListStep, ProcessListStepProps } from './process-list';

describe('Process list', () => {
  const defaultId = 'process-list1';
  const steps: ProcessListStepProps[] = [
    {
      heading: 'Start a process',
      children: (
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed
          pharetra gravida, orci magna rhoncus neque.
        </p>
      ),
    },
    {
      heading: 'Start a process',
      children: (
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed
          pharetra gravida, orci magna rhoncus neque.
        </p>
      ),
    },
    {
      heading: 'Proceed to the second step',
      children: (
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed
          pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit
          amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat.
          Sed quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien.
        </p>
      ),
    },
    {
      heading: 'Complete the step-by-step process',
      children: (
        <p>
          Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat
          volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien.
        </p>
      ),
    },
  ];

  test('should render with no accessibility violations', async () => {
    const { container } = render(<ProcessList id={defaultId} steps={steps} />);
    expect(await axe(container)).toHaveNoViolations();
  });

  test('should render a standard process list successfully', () => {
    const { baseElement } = render(<ProcessList id={defaultId} steps={steps} />);
    expect(baseElement).toBeTruthy();
  });

  test('should render a with current step', () => {
    const { baseElement } = render(<ProcessList id={defaultId} steps={steps} currentStep={1} />);
    expect(baseElement).toBeTruthy();
  });

  test('should render a process list with h4 heading elements', () => {
    const { baseElement } = render(<ProcessList id={defaultId} steps={steps} />);
    expect(baseElement).toBeTruthy();
    const processListNodes = baseElement.querySelectorAll('.usa-process-list__heading');
    processListNodes.forEach((processListNode) => {
      expect(processListNode?.tagName).toEqual('H4');
    });
  });

  test('should render a process list with different heading elements', () => {
    const { baseElement } = render(
      <ProcessList id={defaultId}>
        <ProcessListStep
          heading="Step 1"
          headingElementName="p"
          headingClassName="font-sans-xl line-height-sans-1"
        >
          Step 1 Content
        </ProcessListStep>
      </ProcessList>,
    );
    expect(baseElement).toBeTruthy();
    const processListNodes = baseElement.querySelectorAll('.usa-process-list__heading');
    processListNodes.forEach((processListNode) => {
      expect(processListNode?.tagName).toEqual('P');
      expect(processListNode?.classList).toContain('font-sans-xl');
      expect(processListNode?.classList).toContain('line-height-sans-1');
    });
  });

  test('should not render when no items or children are provided', () => {
    const { container } = render(<ProcessList id="process-list" />);
    expect(container.querySelector('#process-list')).toBeFalsy();
  });
});
