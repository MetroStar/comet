import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Breadcrumb } from '../../index';
import { BreadcrumbProps, Crumb } from './breadcrumb';

const meta: ComponentMeta<typeof Breadcrumb> = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
};
export default meta;

const Template: ComponentStory<typeof Breadcrumb> = (args: BreadcrumbProps) => (
  <Breadcrumb {...args} />
);

export const Default = Template.bind({});
Default.args = {
  id: 'breadcrumb-1',
  crumbs: [
    {
      name: 'Rome',
      path: '/rome',
    },
    {
      name: 'Greece',
      path: '/greece',
    },
  ],
  current: 'Italy',
  action: (c: Crumb) => alert('Called with: ' + JSON.stringify(c)),
};
