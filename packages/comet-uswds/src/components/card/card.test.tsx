import { render, screen } from '@testing-library/react';
import Card, { CardBody, CardHeader, CardFooter, CardMedia } from './card';

describe('Card', () => {
  test('should render a card and subcomponents', () => {
    render(
      <Card id="card-1">
        <CardHeader>Foo</CardHeader>
        <CardBody>Bar</CardBody>
        <CardFooter>Test</CardFooter>
      </Card>,
    );
    expect(screen.getByText('Foo')).toBeVisible();
    expect(screen.getByText('Bar')).toBeVisible();
    expect(screen.getByText('Test')).toBeVisible();
  });

  test('should render a card with media', () => {
    render(
      <Card id="card-1">
        <CardMedia>
          <img src="someimage.jpg" alt="a placeholder image" />
        </CardMedia>
        <CardHeader>Foo</CardHeader>
        <CardBody>Bar</CardBody>
        <CardFooter>Test</CardFooter>
      </Card>,
    );
    expect(screen.getByText('Foo')).toBeVisible();
    expect(screen.getByText('Bar')).toBeVisible();
    expect(screen.getByText('Test')).toBeVisible();
    expect(screen.getByAltText('a placeholder image')).toBeVisible();
  });

  test('should render a card with media on right', () => {
    render(
      <Card id="card-1" mediaRight>
        <CardMedia>
          <img src="someimage.jpg" alt="a placeholder image" />
        </CardMedia>
        <CardHeader>Foo</CardHeader>
        <CardBody>Bar</CardBody>
        <CardFooter>Test</CardFooter>
      </Card>,
    );
    expect(screen.getByText('Foo')).toBeVisible();
    expect(screen.getByText('Bar')).toBeVisible();
    expect(screen.getByText('Test')).toBeVisible();
    expect(screen.getByAltText('a placeholder image')).toBeVisible();
  });

  test('should render with custom class', () => {
    const { container } = render(
      <Card id="card-2" className="some-class">
        Body
      </Card>,
    );
    expect(container.querySelector('#card-2')).toHaveClass('usa-card');
    expect(container.querySelector('#card-2')).toHaveClass('some-class');
  });
});
