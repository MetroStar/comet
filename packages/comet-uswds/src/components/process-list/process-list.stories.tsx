import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import {
  ProcessList,
  ProcessListProps,
  ProcessListStep,
  ProcessListStepProps,
} from './process-list';

const meta: Meta<typeof ProcessList> = {
  title: 'USWDS/Process List',
  component: ProcessList,
  argTypes: {
    id: { required: true },
  },
};
export default meta;

const Template: StoryFn<typeof ProcessList> = (args: ProcessListProps) => <ProcessList {...args} />;

const steps: ProcessListStepProps[] = [
  {
    heading: 'Start a process',
    children: (
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra
        gravida, orci magna rhoncus neque.
      </p>
    ),
  },
  {
    heading: 'Start a process',
    children: (
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra
        gravida, orci magna rhoncus neque.
      </p>
    ),
  },
  {
    heading: 'Proceed to the second step',
    children: (
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
    children: (
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

export const CurrentStep = Template.bind({});
CurrentStep.args = {
  id: 'process-list-1b',
  steps,
  currentStep: 2,
};

const noContentSteps = steps.map((step) => {
  return { heading: step.heading, children: null };
});

export const NoStepContent = Template.bind({});
NoStepContent.args = {
  id: 'process-list-2',
  steps: noContentSteps,
};

const ChildrenTemplate: StoryFn<typeof ProcessList> = (args: ProcessListProps) => (
  <ProcessList {...args}>
    <ProcessListStep heading="Step 1">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra
      gravida, orci magna rhoncus neque.
    </ProcessListStep>
    <ProcessListStep heading="Step 2">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra
      gravida, orci magna rhoncus neque.
    </ProcessListStep>
    <ProcessListStep heading="Step 3">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra
      gravida, orci magna rhoncus neque.
    </ProcessListStep>
  </ProcessList>
);

export const WithChildren = ChildrenTemplate.bind({});
WithChildren.args = {
  id: 'process-list-3',
};

const CustomSizingTemplate: StoryFn<typeof ProcessList> = (args: ProcessListProps) => (
  <ProcessList {...args}>
    <ProcessListStep
      heading="Step 1"
      headingElementName="h5"
      headingClassName="font-sans-lg margin-top-1 text-light"
    >
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra
      gravida, orci magna rhoncus neque.
    </ProcessListStep>
    <ProcessListStep
      heading="Step 2"
      headingElementName="h5"
      headingClassName="font-sans-lg margin-top-1 text-light"
    >
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra
      gravida, orci magna rhoncus neque.
    </ProcessListStep>
  </ProcessList>
);

export const CustomSizing = CustomSizingTemplate.bind({});
CustomSizing.args = {
  id: 'process-list-4',
};
