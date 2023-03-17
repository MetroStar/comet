import React from 'react';
import { Story, Meta, ComponentMeta, ComponentStory } from '@storybook/react';
import { ErrorMessages, ErrorMessagesProps } from './error-messages';

const meta: ComponentMeta<typeof ErrorMessages> = {
  title: 'Components/Forms/Error Messages',
  component: ErrorMessages,
};
export default meta;

const Template: ComponentStory<typeof ErrorMessages> = (args: ErrorMessagesProps) => (
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
