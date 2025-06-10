import { render } from '@testing-library/react';
import SideNavigation, { SideNavigationItemProps } from './side-navigation';
import { JSX } from 'react';

describe('SideNavigation', () => {
  const defaultId = 'side-navigation1';
  const ariaLabel = 'Secondary navigation';
  const createAnchor = (isCurrent = false): JSX.Element => (
    <a className={isCurrent ? 'usa-current' : ''} href="/" onClick={(e) => e.preventDefault()}>
      Navigation Link
    </a>
  );

  test('should render a flat side navigation successfully', () => {
    const flatNavigation: SideNavigationItemProps[] = [
      {
        anchor: createAnchor(true),
      },
      ...[...Array(4)].map(() => {
        return {
          anchor: createAnchor(),
        };
      }),
    ];

    const { baseElement } = render(
      <SideNavigation id={defaultId} ariaLabel={ariaLabel} items={flatNavigation} />,
    );
    expect(baseElement).toBeTruthy();
  });

  test('should render a two level side navigation successfully', () => {
    const twoLevelNavigation: SideNavigationItemProps[] = [
      {
        anchor: createAnchor(true),
        items: [
          ...[...Array(3)].map(() => {
            return {
              anchor: createAnchor(),
            };
          }),
          {
            anchor: createAnchor(true),
          },
        ],
      },
      ...[...Array(3)].map(() => {
        return {
          anchor: createAnchor(),
          items: [...Array(3)].map(() => {
            return {
              anchor: createAnchor(),
            };
          }),
        };
      }),
    ];

    const { baseElement } = render(
      <SideNavigation id={defaultId} ariaLabel={ariaLabel} items={twoLevelNavigation} />,
    );
    expect(baseElement).toBeTruthy();
  });

  test('should render a three level side navigation successfully', () => {
    const threeLevelNavigation: SideNavigationItemProps[] = [
      {
        anchor: createAnchor(true),
        items: [
          {
            anchor: createAnchor(true),
            items: [
              ...[...Array(3)].map(() => {
                return {
                  anchor: createAnchor(),
                };
              }),
              {
                anchor: createAnchor(true),
              },
            ],
          },
          ...[...Array(3)].map(() => {
            return {
              anchor: createAnchor(),
              items: [...Array(3)].map(() => {
                return {
                  anchor: createAnchor(),
                };
              }),
            };
          }),
        ],
      },
      ...[...Array(3)].map(() => {
        return {
          anchor: createAnchor(),
          items: [...Array(3)].map(() => {
            return {
              anchor: createAnchor(),
              items: [...Array(3)].map(() => {
                return {
                  anchor: createAnchor(),
                };
              }),
            };
          }),
        };
      }),
    ];

    const { baseElement } = render(
      <SideNavigation id={defaultId} ariaLabel={ariaLabel} items={threeLevelNavigation} />,
    );
    expect(baseElement).toBeTruthy();
  });

  test('should not render when no items or children are provided', () => {
    const { container } = render(<SideNavigation id="side-navigation" ariaLabel={ariaLabel} />);
    expect(container.querySelector('#side-navigation')).toBeFalsy();
  });
});
