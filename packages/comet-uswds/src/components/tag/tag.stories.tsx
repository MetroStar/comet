import React from 'react';
import { Meta, StoryFn } from '@storybook/react-vite';
import Tag, { TagProps } from './tag';

const meta: Meta<typeof Tag> = {
  title: 'USWDS/Tag',
  component: Tag,
  argTypes: {
    id: { required: true },
    size: { control: 'radio' },
  },
};
export default meta;

const Template: StoryFn<typeof Tag> = (args: TagProps) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'tag-1',
  size: 'Default',
  children: 'Placeholder tag text',
};
