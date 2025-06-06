import React from 'react';
import { Meta } from '@storybook/react-vite';
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

export const Default = {
  args: {
    id: 'tag-1',
    size: 'Default',
    children: 'Placeholder tag text',
  },
  render: (args: TagProps) => <Tag {...args} />,
};
