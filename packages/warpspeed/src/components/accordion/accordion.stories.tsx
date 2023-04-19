import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Accordion } from '../../index';
import { AccordionProps } from './accordion';

const meta: Meta<typeof Accordion> = {
  title: 'USWDS/Accordion',
  component: Accordion,
  argTypes: {
    id: { required: true },
  },
};
export default meta;

const Template: StoryFn<typeof Accordion> = (args: AccordionProps) => <Accordion {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'accordion-1',
  allowMultiSelect: false,
  folds: [
    {
      id: 'item-1',
      label: 'Item 1',
      child: <span>Hello</span>,
      expanded: true,
    },
    {
      id: 'item-2',
      label: 'Item 2',
      child: <span>World</span>,
      expanded: false,
    },
  ],
};

export const MultiSelect = Template.bind({});
MultiSelect.args = {
  id: 'accordion-2',
  allowMultiSelect: true,
  folds: [
    {
      id: 'item-1',
      label: 'Item 1',
      child: <span>Hello</span>,
      expanded: false,
    },
    {
      id: 'item-2',
      label: 'Item 2',
      child: <span>World</span>,
      expanded: false,
    },
  ],
};
