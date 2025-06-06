import React from 'react';
import { Meta } from '@storybook/react-vite';
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

export const Default = {
  args: {
    id: 'card-1',
    layout: 'default',
    className: 'maxw-mobile-lg',
  },
  render: (args: CardProps) => (
    <Card {...args}>
      <CardHeader>Card</CardHeader>
      <CardBody>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo
        cupiditate, eaque qui officia recusandae.
      </CardBody>
      <CardFooter>
        <Button id="card-button">Button</Button>
      </CardFooter>
    </Card>
  ),
};

export const WithMedia = {
  args: {
    id: 'card-standard-media',
    layout: 'default',
    className: 'maxw-mobile',
  },
  render: (args: CardProps) => (
    <Card {...args}>
      <CardMedia>
        <img
          src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg"
          alt="a placeholder image"
        />
      </CardMedia>
      <CardHeader>Card with Media</CardHeader>
      <CardBody>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo
        cupiditate, eaque qui officia recusandae.
      </CardBody>
      <CardFooter>
        <Button id="card-button">Button</Button>
      </CardFooter>
    </Card>
  ),
};

export const FlagLayout = {
  args: {
    id: 'card-flag-media',
    layout: 'flag',
    mediaRight: false,
    className: 'maxw-tablet',
  },
  render: (args: CardProps) => (
    <Card {...args}>
      <CardMedia>
        <img
          src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg"
          alt="a placeholder image"
        />
      </CardMedia>
      <CardHeader>Card with Media</CardHeader>
      <CardBody>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo
        cupiditate, eaque qui officia recusandae.
      </CardBody>
      <CardFooter>
        <Button id="card-button">Button</Button>
      </CardFooter>
    </Card>
  ),
};
