import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button from '../button/button';
import { ButtonGroup, ButtonGroupProps } from './button-group';

const meta: Meta<typeof ButtonGroup> = {
  title: 'USWDS/Button Group',
  component: ButtonGroup,
};
export default meta;

const handleClick = (): void => {};
const Template: StoryFn<typeof ButtonGroup> = (args: ButtonGroupProps) => (
  <ButtonGroup {...args}>
    <Button id="cancel" variant="secondary" onClick={handleClick}>
      Cancel
    </Button>
    <Button id="save" onClick={handleClick}>
      Save
    </Button>
  </ButtonGroup>
);

export const Default = Template.bind({});
Default.args = {
  id: 'button-group-1',
  className: '',
};
