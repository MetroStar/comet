import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import HelperText from './helper-text';

describe('HelperText', () => {
  test('should render with no accessibility violations', async () => {
    const { container } = render(<HelperText>Some text</HelperText>);
    expect(await axe(container)).toHaveNoViolations();
  });

  test('should render successfully', () => {
    const { baseElement } = render(<HelperText>Some text</HelperText>);
    expect(baseElement).toBeTruthy();
  });

  test('should render a standard label successfully', () => {
    const { baseElement } = render(<HelperText>Some text</HelperText>);
    const text = baseElement.querySelector('.usa-hint');
    expect(text).toBeTruthy();
  });
});
