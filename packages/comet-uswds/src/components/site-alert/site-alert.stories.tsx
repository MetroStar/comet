import React from 'react';
import { Meta } from '@storybook/react-vite';
import SiteAlert, { SiteAlertProps } from './site-alert';

const meta: Meta<typeof SiteAlert> = {
  title: 'USWDS/Site Alert',
  component: SiteAlert,
  argTypes: {
    id: { required: true },
    type: { control: 'select' },
    slim: { control: 'boolean' },
    noIcon: { control: 'boolean' },
  },
};
export default meta;

export const Default = {
  args: {
    id: 'site-alert-1',
    type: 'Info',
    slim: false,
    noIcon: false,
    heading: 'Placeholder Heading Text',
  },
  render: (args: SiteAlertProps) => <SiteAlert {...args}>This is the alert body</SiteAlert>,
};
