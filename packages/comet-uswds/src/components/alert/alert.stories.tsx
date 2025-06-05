import React from 'react';
import { Meta } from '@storybook/react-vite';
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

export const Default = {
  args: {
    id: 'alert-1',
    type: 'info',
    slim: false,
    show: true,
    noIcon: false,
    allowClose: false,
    heading: '',
  },
  render: (args: AlertProps) => <Alert {...args}>This is the alert body</Alert>,
};

export const AllowClose = {
  args: {
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
  },
  render: (args: AlertProps) => <Alert {...args}>This is the alert body</Alert>,
};

export const WithBody = {
  args: {
    id: 'alert-2',
    type: 'info',
    slim: false,
    show: true,
    noIcon: false,
    allowClose: false,
    heading: '',
    body: <span>This is the alert body as a prop</span>,
  },
  render: (args: AlertProps) => <Alert {...args}>This is the alert body</Alert>,
};
