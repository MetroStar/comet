import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { HelperText, HelperTextProps } from './helper-text';

const meta: Meta<typeof HelperText> = {
  title: 'USWDS/Forms/Helper Text',
  component: HelperText,
};
export default meta;

const Template: StoryFn<typeof HelperText> = (args: HelperTextProps) => (
  <HelperText>{args.children}</HelperText>
);

export const Standard = Template.bind({});
Standard.args = {
  children: 'Helper Text',
};
