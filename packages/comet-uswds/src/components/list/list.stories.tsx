import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { List } from '../../index';
import { ListItem, ListProps } from './list';

const meta: Meta<typeof List> = {
  title: 'USWDS/List',
  component: List,
  argTypes: {
    id: { required: true },
    type: { control: 'select' },
    variant: { control: 'select' },
  },
};
export default meta;

const Template: StoryFn<typeof List> = (args: ListProps) => <List {...args}>Button</List>;

const items = [
  { id: 'item-1', value: 'Item 1' },
  { id: 'item-2', value: 'Item 2' },
  { id: 'item-3', value: 'Item 3' },
] as ListItem[];

export const Default = Template.bind({});
Default.args = {
  id: 'list-1',
  type: 'unordered',
  variant: 'default',
  items,
  className: '',
};
