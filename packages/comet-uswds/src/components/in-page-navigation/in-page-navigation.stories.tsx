import React from 'react';
import { StoryFn, Meta } from '@storybook/react-vite';
import { InPageNavigation } from '../../index';
import { InPageNavigationProps } from './in-page-navigation';

const meta: Meta<typeof InPageNavigation> = {
  title: 'USWDS/In-Page Navigation',
  component: InPageNavigation,
  argTypes: {
    id: { required: true },
  },
};
export default meta;

const content = `
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi commodo,
    ipsum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio
    lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula
    volutpat condimentum. Aliquam erat volutpat. Sed quis velit. Nulla
    facilisi. Nulla libero. Vivamus pharetra posuere sapien. Lorem ipsum dolor
    sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra
    gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis.
    Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat
    condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla
    libero. Vivamus pharetra posuere sapien. Lorem ipsum dolor sit amet,
    consectetuer adipiscing elit. Morbi commodo, ipsum sed pharetra gravida,
    orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit
    amet enim. Suspendisse id velit vitae ligula volutpat condimentum. Aliquam
    erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus
    pharetra posuere sapien. Lorem ipsum dolor sit amet, consectetuer
    adipiscing elit. Morbi commodo, ipsum sed pharetra gravida, orci magna
    rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim.
    Suspendisse id velit vitae ligula volutpat condimentum. Aliquam erat
    volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra
    posuere sapien. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
    Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque, id
    pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit
    vitae ligula volutpat condimentum. Aliquam erat volutpat. Sed quis velit.
    Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien. Lorem ipsum
    dolor sit amet, consectetuer adipiscing elit. Morbi commodo, ipsum sed
    pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non
    turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat
    condimentum. Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla
    libero. Vivamus pharetra posuere sapien.
`;

const Template: StoryFn<typeof InPageNavigation> = (args: InPageNavigationProps) => (
  <InPageNavigation {...args} />
);

export const Default = Template.bind({});
Default.args = {
  id: 'nav-1',
  navTitle: 'On this page',
  pageTitle: 'Sample in-page navigation page',
  items: [
    {
      heading: 'Lorem ipsum dolor',
      content: content,
      headingType: 'h2',
    },
    {
      heading: 'Consectetuer adipiscing elit',
      content: content,
      headingType: 'h2',
    },
    {
      heading: 'Nullam sit amet enim',
      content: content,
      headingType: 'h3',
    },
    {
      heading: 'Vivamus pharetra posuere sapien',
      content: content,
      headingType: 'h3',
    },
    {
      heading: 'Suspendisse id velit',
      content: content,
      headingType: 'h2',
    },
  ],
};
