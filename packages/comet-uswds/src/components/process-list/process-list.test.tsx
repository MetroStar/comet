import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import ProcessList, { ProcessListStep } from './process-list';

describe('Process list', () => {
  const defaultId = 'process-list1';
  const steps: ProcessListStep[] = [
    {
      heading: 'Start a process',
      content: (
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed
          pharetra gravida, orci magna rhoncus neque.
        </p>
      ),
    },
    {
      heading: 'Start a process',
      content: (
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed
          pharetra gravida, orci magna rhoncus neque.
        </p>
      ),
    },
    {
      heading: 'Proceed to the second step',
      content: (
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
      content: (
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
  it('should render a standard process list successfully', () => {
    const { baseElement } = render(<ProcessList id={defaultId} steps={steps} />);
    expect(baseElement).toBeTruthy();
  });
  it('should render a process list with h4 heading elements', () => {
    const { baseElement } = render(<ProcessList id={defaultId} steps={steps} />);
    expect(baseElement).toBeTruthy();
    const processListNodes = baseElement.querySelectorAll('.usa-process-list__heading');
    processListNodes.forEach((processListNode) => {
      expect(processListNode?.tagName).toEqual('H4');
    });
  });
  it('should render a process list with different heading elements', () => {
    const { baseElement } = render(
      <ProcessList
        id={defaultId}
        steps={steps}
        headingElementName="p"
        headingClassName="font-sans-xl line-height-sans-1"
      />,
    );
    expect(baseElement).toBeTruthy();
    const processListNodes = baseElement.querySelectorAll('.usa-process-list__heading');
    processListNodes.forEach((processListNode) => {
      expect(processListNode?.tagName).toEqual('P');
      expect(processListNode?.classList).toContain('font-sans-xl');
      expect(processListNode?.classList).toContain('line-height-sans-1');
    });
  });
});
