import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Breadcrumb, BreadcrumbItem } from '../../index';
import { BreadcrumbItemProps, BreadcrumbProps } from './breadcrumb';

const meta: Meta<typeof Breadcrumb> = {
  title: 'USWDS/Breadcrumb',
  component: Breadcrumb,
};
export default meta;

const Template: StoryFn<typeof Breadcrumb> = (args: BreadcrumbProps) => <Breadcrumb {...args} />;

const action = (c: BreadcrumbItemProps): void => alert('Called with: ' + JSON.stringify(c));

export const Default = Template.bind({});
Default.args = {
  id: 'breadcrumb-1',
  items: [
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
  action,
};

const ChildrenTemplate: StoryFn<typeof Breadcrumb> = (args: BreadcrumbProps) => (
  <Breadcrumb {...args}>
    <BreadcrumbItem name="Rome" path="/rome" action={args.action} />
    <BreadcrumbItem name="Greece" path="/greece" action={args.action} />
  </Breadcrumb>
);

export const WithChildren = ChildrenTemplate.bind({});
WithChildren.args = {
  id: 'breadcrumb-2',
  current: 'Italy',
  action,
};
