import React from 'react';
import { Meta } from '@storybook/react-vite';
import { Banner, BannerProps } from './banner';

const meta: Meta<typeof Banner> = {
  title: 'USWDS/Banner',
  component: Banner,
  argTypes: {
    id: { required: true },
    type: { control: 'select', required: true },
  },
};
export default meta;

export const Default = {
  args: {
    id: 'banner-1',
    type: 'gov',
  },
  render: (args: BannerProps) => <Banner {...args} />,
};
