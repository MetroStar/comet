import React from 'react';
import { Meta, StoryFn } from '@storybook/react-vite';
import { ErrorMessages, ErrorMessagesProps } from './error-messages';

const meta: Meta<typeof ErrorMessages> = {
  title: 'USWDS/Forms/Error Messages',
  component: ErrorMessages,
};
export default meta;

const Template: StoryFn<typeof ErrorMessages> = (args: ErrorMessagesProps) => (
  <ErrorMessages {...args} />
);

export const Standard = Template.bind({});
Standard.args = {
  id: 'errors-1',
  errors: ['This is an error.'],
};

export const MultipleErrors = Template.bind({});
MultipleErrors.args = {
  id: 'errors-2',
  errors: ['This is an error.', 'This is another error.'],
};

const ChildrenTemplate: StoryFn<typeof ErrorMessages> = (args: ErrorMessagesProps) => (
  <ErrorMessages {...args}>
    <span className="usa-error-message">Error 1</span>
    <span className="usa-error-message">Error 2</span>
    <span className="usa-error-message">Error 3</span>
  </ErrorMessages>
);

export const WithChildren = ChildrenTemplate.bind({});
WithChildren.args = {
  id: 'errors-3',
};
