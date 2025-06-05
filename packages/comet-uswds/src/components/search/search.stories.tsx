import React, { FormEvent } from 'react';
import { Meta } from '@storybook/react-vite';
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

const preventDefault = (event: FormEvent): void => event.preventDefault();

export const Default = {
  args: {
    id: 'search-1',
    type: 'default',
    onSearch: preventDefault,
  },
  render: (args: SearchProps) => <Search {...args} />,
};

export const SmallSearch = {
  args: {
    id: 'search-2',
    type: 'small',
    onSearch: preventDefault,
  },
  render: (args: SearchProps) => <Search {...args} />,
};

export const BigSearch = {
  args: {
    id: 'search-3',
    type: 'big',
    onSearch: preventDefault,
  },
  render: (args: SearchProps) => <Search {...args} />,
};
