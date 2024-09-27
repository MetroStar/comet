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
  allowClose: false,
  heading: '',
};

export const AllowClose = Template.bind({});
AllowClose.args = {
  id: 'alert-close',
  type: 'info',
  slim: false,
  show: true,
  noIcon: false,
  allowClose: true,
  heading: 'Alert with close button',
  onClose: () => {
    // eslint-disable-next-line no-console
    console.log('Alert closed');
  },
};

const BodyTemplate: StoryFn<typeof Alert> = (args: AlertProps) => (
  <Alert {...args}>This is the alert body</Alert>
);

export const WithBody = BodyTemplate.bind({});
WithBody.args = {
  id: 'alert-2',
  type: 'info',
  slim: false,
  show: true,
  noIcon: false,
  allowClose: false,
  heading: '',
  body: <span>This is the alert body as a prop</span>,
};
