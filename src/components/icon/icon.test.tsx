import { render } from '@testing-library/react';

import Icon, { IconSize, IconType } from './icon';

describe('Icon', () => {
  it('should render a basic icon successfully', () => {
    const { baseElement } = render(
      <Icon id="icon1" type={IconType.accessibility_new} />
    );

    const svgs = baseElement.querySelectorAll('svg');
    expect(svgs.length).toBe(1);
  });
  it('should render icons of multiple sizes successfully', () => {
    const { baseElement } = render(
      <>
        <Icon id="icon0" type={IconType.accessibility_new} />
        <Icon
          id="icon1"
          type={IconType.accessibility_new}
          size={IconSize.size3}
        />
        <Icon
          id="icon2"
          type={IconType.accessibility_new}
          size={IconSize.size4}
        />
        <Icon
          id="icon3"
          type={IconType.accessibility_new}
          size={IconSize.size5}
        />
        <Icon
          id="icon4"
          type={IconType.accessibility_new}
          size={IconSize.size6}
        />
        <Icon
          id="icon5"
          type={IconType.accessibility_new}
          size={IconSize.size7}
        />
        <Icon
          id="icon6"
          type={IconType.accessibility_new}
          size={IconSize.size8}
        />
        <Icon
          id="icon7"
          type={IconType.accessibility_new}
          size={IconSize.size9}
        />
      </>
    );

    const svgs = baseElement.querySelectorAll('svg');
    expect(svgs.length).toBe(8);
  });
  it('should render icons of different types successfully', () => {
    const icons: string[] = [];
    for (const icon in IconType) {
      icons.push(icon);
    }
    const { baseElement } = render(
      <>
        {icons.map((icon: string, index: number) => (
          <div key={`row${index}`} title={icon as IconType}>
            <Icon id={`icon${index}`} type={icon as IconType} />
          </div>
        ))}
      </>
    );

    const svgs = baseElement.querySelectorAll('svg');
    expect(svgs.length).toBe(icons.length);
  });
  it('should render icons of different color successfully', () => {
    const { baseElement } = render(
      <>
        <Icon id="icon1" type={IconType.accessibility_new} />
        <Icon
          id="icon2"
          type={IconType.accessibility_new}
          className="text-primary"
        />
        <Icon
          id="icon2"
          type={IconType.accessibility_new}
          className="text-secondary"
        />
      </>
    );

    const svgs = baseElement.querySelectorAll('svg');
    expect(svgs[0].classList.contains('text-base-darkest')).toBeTruthy();
    expect(svgs[1].classList.contains('text-primary')).toBeTruthy();
    expect(svgs[2].classList.contains('text-secondary')).toBeTruthy();
  });
});
