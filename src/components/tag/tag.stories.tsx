import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Tag, { TagProps } from './tag';

const meta: ComponentMeta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    id: { required: true },
    size: { control: "radio" },
  }
}
export default meta;

const Template: ComponentStory<typeof Tag> = (args: TagProps) => (
  <Tag {...args} />
);

export const Default = Template.bind({});
Default.args = {
  id: "tag-1",
  size: "Default",
  children: "Placeholder tag text"
};
