import React from 'react';
import { Meta } from '@storybook/react-vite';
import { HelperText, HelperTextProps } from './helper-text';

const meta: Meta<typeof HelperText> = {
  title: 'USWDS/Forms/Helper Text',
  component: HelperText,
  argTypes: {
    id: { required: true },
  },
};
export default meta;

export const Standard = {
  args: {
    id: 'helper-text-1',
    children: 'Helper Text',
  },
  render: (args: HelperTextProps) => <HelperText id={args.id}>{args.children}</HelperText>,
};
