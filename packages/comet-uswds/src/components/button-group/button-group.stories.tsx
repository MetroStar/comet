import React from 'react';
import { Meta } from '@storybook/react-vite';
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

export const Default = {
  args: {
    id: 'button-group-1',
    type: 'default',
    className: '',
  },
  render: (args: ButtonGroupProps) => (
    <ButtonGroup {...args}>
      <Button id="cancel" variant="secondary" onClick={handleClick}>
        Cancel
      </Button>
      <Button id="save" onClick={handleClick}>
        Save
      </Button>
    </ButtonGroup>
  ),
};

export const Segmented = {
  args: {
    id: 'button-group-2',
    type: 'segmented',
    className: '',
  },
  render: (args: ButtonGroupProps) => (
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
  ),
};
