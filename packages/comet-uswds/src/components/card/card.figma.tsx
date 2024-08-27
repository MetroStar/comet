import { Card, CardBody, CardFooter, CardHeader, CardMedia } from './card';
import figma from '@figma/code-connect';
import Button from '../button';

figma.connect(
  Card,
  'https://www.figma.com/design/U58Pbb84dLaZfvFvdtGVdT/Comet-UI-Kit?node-id=43-2601',
  {
    props: {
      layout: figma.enum('Type', {
        Default: 'default',
        Flag: 'flag',
      }),
      inset: figma.enum('Variant', {
        Inset: true,
      }),
      exdent: figma.enum('Variant', {
        Exdent: true,
      }),
    },
    example: ({ layout, inset, exdent }) => (
      <Card id="card-default" layout={layout}>
        <CardMedia inset={inset} exdent={exdent}>
          <img
            src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg"
            alt="a placeholder image"
          />
        </CardMedia>
      </Card>
    ),
  },
);

figma.connect(
  Card,
  'https://www.figma.com/design/U58Pbb84dLaZfvFvdtGVdT/Comet-UI-Kit?node-id=43-2604',
  {
    props: {},
    variant: {
      Variant: 'Default',
    },
    example: () => (
      <Card id="card-default">
        <CardMedia>
          <img
            src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg"
            alt="a placeholder image"
          />
        </CardMedia>
        <CardHeader>Card title</CardHeader>
        <CardBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo
          cupiditate, eaque qui officia recusandae.
        </CardBody>
        <CardFooter>
          <Button id="button">Button</Button>
        </CardFooter>
      </Card>
    ),
  },
);

figma.connect(
  Card,
  'https://www.figma.com/design/U58Pbb84dLaZfvFvdtGVdT/Comet-UI-Kit?node-id=43-2604',
  {
    props: {},
    variant: {
      Variant: 'Header first',
    },
    example: () => (
      <Card id="card-default">
        <CardHeader>Card title</CardHeader>
        <CardMedia>
          <img
            src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg"
            alt="a placeholder image"
          />
        </CardMedia>
        <CardBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo
          cupiditate, eaque qui officia recusandae.
        </CardBody>
        <CardFooter>
          <Button id="button">Button</Button>
        </CardFooter>
      </Card>
    ),
  },
);

figma.connect(
  Card,
  'https://www.figma.com/design/U58Pbb84dLaZfvFvdtGVdT/Comet-UI-Kit?node-id=46-7016',
  {
    props: {
      mediaRight: figma.enum('Variant', {
        'Media left': false,
        'Media right': true,
      }),
    },
    example: ({ mediaRight }) => (
      <Card id="card-default" layout="flag" mediaRight={mediaRight}>
        <CardHeader>Card title</CardHeader>
        <CardMedia>
          <img
            src="https://designsystem.digital.gov/img/introducing-uswds-2-0/built-to-grow--alt.jpg"
            alt="a placeholder image"
          />
        </CardMedia>
        <CardBody>Lorem ipsum dolor sit amet consectetur adipisicing elit.</CardBody>
        <CardFooter>
          <Button id="button">Button</Button>
        </CardFooter>
      </Card>
    ),
  },
);
