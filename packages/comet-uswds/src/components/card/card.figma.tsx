import { Card, CardBody, CardFooter, CardHeader } from './card';
import figma from '@figma/code-connect';
import Button from '../button';

figma.connect(
  Card,
  'https://www.figma.com/design/U58Pbb84dLaZfvFvdtGVdT/Comet-UI-Kit?node-id=43-2604',
  {
    props: {
      cardimage430: figma.boolean('Card image?'),
    },
    example: (props) => (
      <Card id="card-1">
        <CardHeader>Card Header</CardHeader>
        <CardBody>The meat of the card...</CardBody>
        <CardFooter>
          <Button id="card-button" variant="outline">
            Click me...
          </Button>
        </CardFooter>
      </Card>
    ),
  },
);
