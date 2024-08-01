import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import Icon from './icon';

describe('Icon', () => {
  test('should render with no accessibility violations', async () => {
    const { container } = render(<Icon id="icon1" type="accessibility_new" />);
    expect(await axe(container)).toHaveNoViolations();
  });

  test('should render a basic icon successfully', () => {
    const { baseElement } = render(<Icon id="icon1" type="accessibility_new" />);

    const svgs = baseElement.querySelectorAll('svg');
    expect(svgs.length).toBe(1);
  });

  test('should render icons of multiple sizes successfully', () => {
    const { baseElement } = render(
      <>
        <Icon id="icon0" type="accessibility_new" />
        <Icon id="icon1" type="accessibility_new" size="size-3" />
        <Icon id="icon2" type="accessibility_new" size="size-4" />
        <Icon id="icon3" type="accessibility_new" size="size-5" />
        <Icon id="icon4" type="accessibility_new" size="size-6" />
        <Icon id="icon5" type="accessibility_new" size="size-7" />
        <Icon id="icon6" type="accessibility_new" size="size-8" />
        <Icon id="icon7" type="accessibility_new" size="size-9" />
      </>,
    );

    const svgs = baseElement.querySelectorAll('svg');
    expect(svgs.length).toBe(8);
  });

  test('should render icons of different color successfully', () => {
    const { baseElement } = render(
      <>
        <Icon id="icon1" type="accessibility_new" />
        <Icon id="icon2" type="accessibility_new" className="text-primary" />
        <Icon id="icon2" type="accessibility_new" className="text-secondary" />
      </>,
    );

    const svgs = baseElement.querySelectorAll('svg');
    expect(svgs[0].classList.contains('text-base-darkest')).toBeTruthy();
    expect(svgs[1].classList.contains('text-primary')).toBeTruthy();
    expect(svgs[2].classList.contains('text-secondary')).toBeTruthy();
  });
});
