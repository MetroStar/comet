import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Icon, IconProps } from './icon';

const meta: ComponentMeta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    id: { required: true },
    type: { control: "select", required: true },
    size: { control: "select", required: true },
  }
};
export default meta;

const Template: ComponentStory<typeof Icon> = (args: IconProps) => (
  <Icon {...args} />
);

export const Default = Template.bind({});
Default.args = {
  id: "icon-1",
  type: "accessibility_new",
  size: "size-3",
};

export const Sizes = () => {
  return (
    <>
      <div>
        <Icon
          id="icon1"
          type="accessibility_new"
          size="size-3"
        />
        <p>size-3</p>
      </div>
      
      <div>
        <Icon
          id="icon2"
          type="accessibility_new"
          size="size-4"
        />
        <p>size-4</p>
      </div>

      <div>
        <Icon
          id="icon3"
          type="accessibility_new"
          size="size-5"
        />
        <p>size-5</p>
      </div>

      <div>
        <Icon
          id="icon4"
          type="accessibility_new"
          size="size-6"
        />
        <p>size-6</p>
      </div>

      <div>
        <Icon
          id="icon5"
          type="accessibility_new"
          size="size-7"
        />
        <p>size-7</p>
      </div>

      <div>
        <Icon
          id="icon6"
          type="accessibility_new"
          size="size-8"
        />
        <p>size-8</p>
      </div>

      <div>
        <Icon
          id="icon7"
          type="accessibility_new"
          size="size-9"
        />
        <p>size-9</p>
      </div>
    </>
  )
};

export const Colors = () => {
  return (
    <>
      <div>
        <Icon
          id="icon1"
          type="accessibility_new"
          size="size-9"
        />
        <p>No color class assigned</p>
      </div>
      
      <div>
        <Icon
          id="icon2"
          type="accessibility_new"
          size="size-9"
          className="text-primary"
        />
        <p>Class of text-primary</p>
      </div>

      <div>
        <Icon
          id="icon3"
          type="accessibility_new"
          size="size-9"
          className="text-secondary"
        />
        <p>Class of text-secondary</p>
      </div>
    </>
  )
};
