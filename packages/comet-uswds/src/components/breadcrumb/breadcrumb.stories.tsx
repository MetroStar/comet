import React from 'react';
import { Meta } from '@storybook/react-vite';
import { Breadcrumb, BreadcrumbItem } from '../../index';
import { BreadcrumbItemProps, BreadcrumbProps } from './breadcrumb';

const meta: Meta<typeof Breadcrumb> = {
  title: 'USWDS/Breadcrumb',
  component: Breadcrumb,
  argTypes: {
    id: { required: true },
  },
};
export default meta;

const action = (c: BreadcrumbItemProps): void => alert('Called with: ' + JSON.stringify(c));

export const Default = {
  args: {
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
  },
  render: (args: BreadcrumbProps) => <Breadcrumb {...args} />,
};

export const WithChildren = {
  args: {
    id: 'breadcrumb-2',
    current: 'Italy',
    action,
  },
  render: (args: BreadcrumbProps) => (
    <Breadcrumb {...args}>
      <BreadcrumbItem name="Rome" path="/rome" action={args.action} />
      <BreadcrumbItem name="Greece" path="/greece" action={args.action} />
    </Breadcrumb>
  ),
};
