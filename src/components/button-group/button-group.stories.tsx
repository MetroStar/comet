import React from "react";
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from '../button/button';
import { ButtonGroup, ButtonGroupProps } from './button-group';

const meta: ComponentMeta<typeof ButtonGroup> = {
  title: "Components/Button Group",
  component: ButtonGroup,
  argTypes: {
    alignment: { control: "select" },
  },
};
export default meta;

const handleClick = () => {
  return;
};
const Template: ComponentStory<typeof ButtonGroup> = (args: ButtonGroupProps) => (
  <div className="width-mobile">
    <ButtonGroup {...args}>
      <Button
        id="cancel"
        variant='secondary'
        onClick={handleClick}
      >
        Cancel
      </Button>
      <Button id="save" onClick={handleClick}>
        Save
      </Button>
    </ButtonGroup>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  id: "button-group-1",
  alignment: "left",
  className: "",
};
