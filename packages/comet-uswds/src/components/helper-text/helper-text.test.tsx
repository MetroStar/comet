import { render } from '@testing-library/react';
import HelperText from './helper-text';

describe('HelperText', () => {
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
