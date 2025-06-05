import React from 'react';
import { Meta } from '@storybook/react-vite';
import { Accordion, AccordionItem } from '../../index';
import { AccordionProps } from './accordion';

const meta: Meta<typeof Accordion> = {
  title: 'USWDS/Accordion',
  component: Accordion,
  argTypes: {
    id: { required: true },
  },
};

export default meta;

export const Default = {
  args: {
    id: 'accordion-1',
    allowMultiSelect: false,
    items: [
      {
        id: 'item-1',
        label: 'Item 1',
        children: <span>Hello</span>,
        expanded: true,
      },
      {
        id: 'item-2',
        label: 'Item 2',
        children: <span>World</span>,
        expanded: false,
      },
    ],
  },
  render: (args: AccordionProps) => <Accordion {...args} />,
};

export const MultiSelect = {
  args: {
    id: 'accordion-2',
    allowMultiSelect: true,
    items: [
      {
        id: 'item-1',
        label: 'Item 1',
        children: <span>Hello</span>,
        expanded: false,
      },
      {
        id: 'item-2',
        label: 'Item 2',
        children: <span>World</span>,
        expanded: false,
      },
    ],
  },
  render: (args: AccordionProps) => <Accordion {...args} />,
};

export const WithChildren = {
  args: {
    id: 'accordion-3',
    allowMultiSelect: false,
  },
  render: (args: AccordionProps) => (
    <Accordion {...args}>
      <AccordionItem id="item-1" label="Item 1" expanded={true}>
        <span>Hello</span>
      </AccordionItem>
      <AccordionItem id="item-2" label="Item 2" expanded={false}>
        <span>World</span>
      </AccordionItem>
    </Accordion>
  ),
};
