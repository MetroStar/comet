import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import SideNavigation, { SideNavigationItem } from './side-navigation';

describe('SideNavigation', () => {
  const defaultId = 'side-navigation1';
  const ariaLabel = 'Secondary navigation';
  const createAnchor = (isCurrent = false): JSX.Element => (
    <a className={isCurrent ? 'usa-current' : ''} href="/" onClick={(e) => e.preventDefault()}>
      Navigation Link
    </a>
  );

  test('should render with no accessibility violations', async () => {
    const flatNavigation: SideNavigationItem[] = [
      {
        anchor: createAnchor(true),
      },
      ...[...Array(4)].map(() => {
        return {
          anchor: createAnchor(),
        };
      }),
    ];

    const { container } = render(
      <SideNavigation id={defaultId} ariaLabel={ariaLabel} items={flatNavigation} />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it('should render a flat side navigation successfully', () => {
    const flatNavigation: SideNavigationItem[] = [
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

  it('should render a two level side navigation successfully', () => {
    const twoLevelNavigation: SideNavigationItem[] = [
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

  it('should render a three level side navigation successfully', () => {
    const threeLevelNavigation: SideNavigationItem[] = [
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
});
