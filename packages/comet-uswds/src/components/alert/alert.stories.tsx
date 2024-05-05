import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Alert } from '../../index';
import { AlertProps } from './alert';

const meta: Meta<typeof Alert> = {
  title: 'USWDS/Alert',
  component: Alert,
  argTypes: {
    id: { required: true },
    type: { control: 'select', required: true },
  },
};
export default meta;

const Template: StoryFn<typeof Alert> = (args: AlertProps) => (
  <Alert {...args}>This is the alert body</Alert>
);

export const Default = Template.bind({});
Default.args = {
  id: 'alert-1',
  type: 'info',
  slim: false,
  show: true,
  noIcon: false,
  heading: '',
};

const BodyTemplate: StoryFn<typeof Alert> = (args: AlertProps) => (
  <Alert {...args}>This is the alert body</Alert>
);

export const WithBody = BodyTemplate.bind({});
WithBody.args = {
  id: 'alert-1',
  type: 'info',
  slim: false,
  show: true,
  noIcon: false,
  heading: '',
  body: <span>This is the alert body as a prop</span>,
};
