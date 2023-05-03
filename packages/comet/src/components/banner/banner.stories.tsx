import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
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

const Template: StoryFn<typeof Banner> = (args: BannerProps) => <Banner {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'banner-1',
  type: 'gov',
};
