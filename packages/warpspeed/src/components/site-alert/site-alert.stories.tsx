import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import SiteAlert, { SiteAlertProps } from './site-alert';

const meta: Meta<typeof SiteAlert> = {
  title: 'Components/Site Alert',
  component: SiteAlert,
  argTypes: {
    id: { required: true },
    type: { control: 'select' },
    slim: { control: 'boolean' },
    noIcon: { control: 'boolean' },
  },
};
export default meta;

const Template: StoryFn<typeof SiteAlert> = (args: SiteAlertProps) => <SiteAlert {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'site-alert-1',
  type: 'Info',
  slim: false,
  noIcon: false,
  heading: 'Placeholder Heading Text',
};
