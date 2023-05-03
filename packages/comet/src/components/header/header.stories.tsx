import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Header } from '../../index';
import { HeaderProps } from './header';

const meta: Meta<typeof Header> = {
  title: 'USWDS/Header',
  component: Header,
};
export default meta;

const Template: StoryFn<typeof Header> = (args: HeaderProps) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  logo: 'USWDS Site',
  root: '/',
  folding: [
    {
      label: 'Fruits',
      items: [
        {
          label: 'Home',
          path: '/',
        },
        {
          label: 'Kiwi',
          path: '/kiwi',
        },
        {
          label: 'Orange',
          path: '/orange',
        },
      ],
    },
  ],
  simple: [
    { label: 'Lemon', path: '/lemon' },
    { label: 'Lime', path: '/lime' },
  ],
  showSearch: true,
};
