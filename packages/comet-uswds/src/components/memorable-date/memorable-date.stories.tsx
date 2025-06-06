import React from 'react';
import { Meta } from '@storybook/react-vite';
import { MemorableDate } from '../../index';
import { MemorableDateProps } from './memorable-date';

const meta: Meta<typeof MemorableDate> = {
  title: 'USWDS/Forms/Memorable Date',
  component: MemorableDate,
  argTypes: {
    required: { control: 'boolean' },
  },
};
export default meta;

export const Standard = {
  args: {
    id: '1',
    required: false,
    label: 'Date of Birth',
    helperText: 'For example: January 19 2000',
  },
  render: (args: MemorableDateProps) => <MemorableDate {...args} />,
};

export const DefaultValue = {
  args: {
    id: '2',
    required: false,
    label: 'Date of Birth',
    helperText: 'For example: January 19 2000',
    defaultMonthValue: 12,
    defaultDayValue: 30,
    defaultYearValue: 2000,
  },
  render: (args: MemorableDateProps) => <MemorableDate {...args} />,
};
