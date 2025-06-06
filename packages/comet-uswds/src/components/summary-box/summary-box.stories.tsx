import React from 'react';
import { Meta } from '@storybook/react-vite';
import { SummaryBox, SummaryBoxProps } from './summary-box';

const meta: Meta<typeof SummaryBox> = {
  title: 'USWDS/Summary Box',
  component: SummaryBox,
};
export default meta;

const items = ['Item 1', 'Item 2', 'Item 3'];

export const Default = {
  args: {
    id: 'summary-1',
    heading: 'Key information',
    className: '',
    items,
  },
  render: (args: SummaryBoxProps) => <SummaryBox {...args} />,
};

export const CustomClass = {
  args: {
    id: 'summary-2',
    heading: 'Key information',
    className: 'bg-base-lightest',
    items,
  },
  render: (args: SummaryBoxProps) => <SummaryBox {...args} />,
};
