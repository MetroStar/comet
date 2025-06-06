import React from 'react';
import { Meta } from '@storybook/react-vite';
import { ErrorMessages, ErrorMessagesProps } from './error-messages';

const meta: Meta<typeof ErrorMessages> = {
  title: 'USWDS/Forms/Error Messages',
  component: ErrorMessages,
};
export default meta;

export const Standard = {
  args: {
    id: 'errors-1',
    errors: ['This is an error.'],
  },
  render: (args: ErrorMessagesProps) => <ErrorMessages {...args} />,
};

export const MultipleErrors = {
  args: {
    id: 'errors-2',
    errors: ['This is an error.', 'This is another error.'],
  },
  render: (args: ErrorMessagesProps) => <ErrorMessages {...args} />,
};

export const WithChildren = {
  args: {
    id: 'errors-3',
  },
  render: (args: ErrorMessagesProps) => (
    <ErrorMessages {...args}>
      <span className="usa-error-message">Error 1</span>
      <span className="usa-error-message">Error 2</span>
      <span className="usa-error-message">Error 3</span>
    </ErrorMessages>
  ),
};
