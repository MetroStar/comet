import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Label, LabelProps } from './label';

const meta: Meta<typeof Label> = {
  title: 'USWDS/Forms/Label',
  component: Label,
  argTypes: {
    required: { type: 'boolean' },
  },
};
export default meta;

const Template: StoryFn<typeof Label> = (args: LabelProps) => (
  <Label required={args.required}>Label</Label>
);

export const Standard = Template.bind({});
Standard.args = {
  required: false,
};

const RequiredTemplate: StoryFn<typeof Label> = (args: LabelProps) => (
  <Label required={args.required}>Label</Label>
);

export const LabelWithRequired = RequiredTemplate.bind({});
LabelWithRequired.args = {
  required: true,
};
