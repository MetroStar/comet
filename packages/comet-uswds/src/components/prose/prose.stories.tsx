import React from 'react';
import { Meta } from '@storybook/react-vite';
import { Prose } from '../../index';
import { ProseProps } from './prose';

const meta: Meta<typeof Prose> = {
  title: 'USWDS/Prose',
  component: Prose,
  argTypes: {
    id: { required: true },
  },
};
export default meta;

export const Default = {
  args: {
    id: 'prose-1',
    className: '',
  },
  render: (args: ProseProps) => (
    <Prose {...args}>
      <p>
        <strong>75 characters (68ex) max-width:</strong> Yosemite National Park is set within
        California&apos;s Sierra Nevada mountains. It&apos;s famed for its giant, ancient sequoias,
        and for Tunnel View, the iconic vista of towering Bridalveil Fall and the granite cliffs of
        El Capitan and Half Dome.
      </p>
    </Prose>
  ),
};
