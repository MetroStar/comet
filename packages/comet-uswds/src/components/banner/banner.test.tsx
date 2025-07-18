import { render } from '@testing-library/react';
import Banner from './banner';

describe('Banner', () => {
  test('should render a default banner successfully', () => {
    const { baseElement } = render(<Banner id="banner1" />);
    expect(baseElement).toBeTruthy();
  });

  test('should render a gov banner successfully', () => {
    const { baseElement } = render(<Banner id="banner1" type="gov" />);
    expect(baseElement).toBeTruthy();
  });

  test('should render a mil banner successfully', () => {
    const { baseElement } = render(<Banner id="banner2" type="mil" />);
    expect(baseElement).toBeTruthy();
  });
});
