import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { axe } from 'vitest-axe';
import Card, { CardBody, CardHeader, CardFooter } from './card';

describe('Card', () => {
  test('should render with no accessibility violations', async () => {
    const { container } = render(<Card id="card-1">Body</Card>);
    expect(await axe(container)).toHaveNoViolations();
  });

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

  test('should render with custom class', () => {
    const { container } = render(
      <Card id="card-2" className="some-class">
        Body
      </Card>,
    );
    expect(container.querySelector('#card-2')).toHaveClass('usa-card');
    expect(container.querySelector('#card-2 > div')).toHaveClass('some-class');
  });
});
