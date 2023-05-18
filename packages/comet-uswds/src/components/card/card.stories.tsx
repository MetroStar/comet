import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Card, CardHeader, CardFooter, CardBody, Button } from '../../index';
import { CardProps } from './card';

const meta: Meta<typeof Card> = {
  title: 'USWDS/Card',
  component: Card,
  argTypes: {
    id: { required: true },
  },
};
export default meta;

const Template: StoryFn<typeof Card> = (args: CardProps) => (
  <Card {...args}>
    <CardHeader>Card Header</CardHeader>
    <CardBody>The meat of the card...</CardBody>
    <CardFooter>
      <Button id="card-button" variant="outline">
        Click me...
      </Button>
    </CardFooter>
  </Card>
);

export const Default = Template.bind({});
Default.args = {
  id: 'card-1',
  className: '',
};
