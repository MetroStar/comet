import React from 'react';
import { Meta } from '@storybook/react-vite';
import { Label, LabelProps } from './label';

const meta: Meta<typeof Label> = {
  title: 'USWDS/Forms/Label',
  component: Label,
  argTypes: {
    required: { type: 'boolean' },
  },
};
export default meta;

export const Standard = {
  args: {
    required: false,
  },
  render: (args: LabelProps) => <Label required={args.required}>Label</Label>,
};

export const LabelWithRequired = {
  args: {
    required: true,
  },
  render: (args: LabelProps) => <Label required={args.required}>Label</Label>,
};
