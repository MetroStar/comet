import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Banner, BannerProps } from './banner';

const meta: ComponentMeta<typeof Banner> = {
  title: 'Components/Banner',
  component: Banner,
  argTypes: {
    id: { required: true },
    type: { control: 'select', required: true },
  },
};
export default meta;

const Template: ComponentStory<typeof Banner> = (args: BannerProps) => <Banner {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'banner-1',
  type: 'gov',
};
