import React from 'react';
import { StoryFn, Meta } from '@storybook/react-vite';
import { Card, CardHeader, CardFooter, CardBody, Button } from '../../index';
import { CardMedia, CardProps } from './card';

const meta: Meta<typeof Card> = {
  title: 'USWDS/Card',
  component: Card,
  argTypes: {
    id: { required: true },
    layout: { control: { type: 'select', options: ['default', 'flag'] } },
  },
};
export default meta;

const Template: StoryFn<typeof Card> = (args: CardProps) => (
  <Card {...args}>
    <CardHeader>Card</CardHeader>
    <CardBody>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate,
      eaque qui officia recusandae.
    </CardBody>
    <CardFooter>
      <Button id="card-button">Button</Button>
    </CardFooter>
  </Card>
);

export const Default = Template.bind({});
Default.args = {
  id: 'card-1',
  layout: 'default',
  className: 'maxw-mobile-lg',
};

const MediaTemplate: StoryFn<typeof Card> = (args: CardProps) => (
  <Card {...args}>
    <CardMedia>
      <img
        src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg"
        alt="a placeholder image"
      />
    </CardMedia>
    <CardHeader>Card with Media</CardHeader>
    <CardBody>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate,
      eaque qui officia recusandae.
    </CardBody>
    <CardFooter>
      <Button id="card-button">Button</Button>
    </CardFooter>
  </Card>
);

export const WithMedia = MediaTemplate.bind({});
WithMedia.args = {
  id: 'card-standard-media',
  layout: 'default',
  className: 'maxw-mobile',
};

export const FlagLayout = MediaTemplate.bind({});
FlagLayout.args = {
  id: 'card-flag-media',
  layout: 'flag',
  mediaRight: false,
  className: 'maxw-tablet',
};
