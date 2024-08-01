import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import Label from './label';

describe('Label', () => {
  test('should render with no accessibility violations', async () => {
    const { container } = render(<Label>Some label</Label>);
    expect(await axe(container)).toHaveNoViolations();
  });

  test('should render successfully', () => {
    const { baseElement } = render(<Label>Some label</Label>);
    expect(baseElement).toBeTruthy();
  });

  test('should render a standard label successfully', () => {
    const { baseElement } = render(<Label>Some label</Label>);
    const label = baseElement.querySelector('.usa-label');
    expect(label).toBeTruthy();
  });

  test('should render a label with required indicator successfully', () => {
    const { baseElement } = render(<Label required={true}>Some label</Label>);
    const label = baseElement.querySelector('.text-red');
    expect(label).toBeTruthy();
  });
});
