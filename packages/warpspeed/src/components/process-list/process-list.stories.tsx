import React, { ReactHTMLElement } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ProcessList, ProcessListProps, ProcessListStep } from './process-list';

const meta: Meta<typeof ProcessList> = {
  title: 'USWDS/Process List',
  component: ProcessList,
  argTypes: {
    id: { required: true },
  },
};
export default meta;

const Template: StoryFn<typeof ProcessList> = (args: ProcessListProps) => <ProcessList {...args} />;

const steps: ProcessListStep[] = [
  {
    heading: 'Start a process',
    content: (
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra
        gravida, orci magna rhoncus neque.
      </p>
    ),
  },
  {
    heading: 'Start a process',
    content: (
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra
        gravida, orci magna rhoncus neque.
      </p>
    ),
  },
  {
    heading: 'Proceed to the second step',
    content: (
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra
        gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim.
        Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed quis
        velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien.
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

export const Default = Template.bind({});
Default.args = {
  id: 'process-list-1',
  steps,
};

const noContentSteps = steps.map((step) => {
  return { heading: step.heading, content: null };
});

export const NoStepContent = Template.bind({});
NoStepContent.args = {
  id: 'process-list-2',
  steps: noContentSteps,
};

const customSizingSteps = steps.map((step) => {
  return {
    heading: step.heading,
    content: React.cloneElement(step.content as ReactHTMLElement<HTMLElement>, {
      className: 'font-sans-lg margin-top-1 text-light',
    }),
  };
});

export const CustomSizing = Template.bind({});
CustomSizing.args = {
  id: 'process-list-3',
  steps: customSizingSteps,
  headingElementName: 'p',
  headingClassName: 'font-sans-xl line-height-sans-1',
};
