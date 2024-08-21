import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import Prose from './prose';

describe('Prose', () => {
  test('should render with no accessibility violations', async () => {
    const { container } = render(
      <Prose id="prose">
        <p>Prose text</p>
      </Prose>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  test('should render', () => {
    const { container } = render(
      <Prose id="prose">
        <p>Prose text</p>
      </Prose>,
    );
    const proseComponent = container.querySelector('#prose');
    expect(proseComponent).toHaveClass('usa-prose');
    expect(proseComponent).toHaveTextContent('Prose text');
  });

  test('should render with custom className', () => {
    const { container } = render(
      <Prose id="prose" className="custom">
        <p>Prose text</p>
      </Prose>,
    );
    expect(container.querySelector('#prose')).toHaveClass('custom');
  });
});
