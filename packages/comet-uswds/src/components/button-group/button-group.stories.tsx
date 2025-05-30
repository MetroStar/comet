import React from 'react';
import { Meta, StoryFn } from '@storybook/react-vite';
import Button from '../button/button';
import { ButtonGroup, ButtonGroupProps } from './button-group';

const meta: Meta<typeof ButtonGroup> = {
  title: 'USWDS/Button Group',
  component: ButtonGroup,
  argTypes: {
    type: { control: 'select' },
  },
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
  type: 'default',
  className: '',
};

const SegmentedTemplate: StoryFn<typeof ButtonGroup> = (args: ButtonGroupProps) => (
  <ButtonGroup {...args}>
    <Button id="button-1" variant="outline" onClick={handleClick}>
      Button 1
    </Button>
    <Button id="button-2" variant="outline" onClick={handleClick}>
      Button 2
    </Button>
    <Button id="button-3" variant="outline" onClick={handleClick}>
      Button 3
    </Button>
  </ButtonGroup>
);

export const Segmented = SegmentedTemplate.bind({});
Segmented.args = {
  id: 'button-group-2',
  type: 'segmented',
  className: '',
};
