import { Meta, StoryFn } from '@storybook/react';
import React, { FormEvent } from 'react';
import { Search, SearchProps } from './search';

const meta: Meta<typeof Search> = {
  title: 'USWDS/Search',
  component: Search,
  argTypes: {
    id: { required: true },
    type: { control: 'select' },
  },
};
export default meta;

const Template: StoryFn<typeof Search> = (args: SearchProps) => <Search {...args} />;

const preventDefault = (event: FormEvent): void => event.preventDefault();

export const Default = Template.bind({});
Default.args = {
  id: 'search-1',
  type: 'default',
  onSearch: preventDefault,
};

export const SmallSearch = Template.bind({});
SmallSearch.args = {
  id: 'search-2',
  type: 'small',
  onSearch: preventDefault,
};

export const BigSearch = Template.bind({});
BigSearch.args = {
  id: 'search-3',
  type: 'big',
  onSearch: preventDefault,
};
