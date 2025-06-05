import React, { JSX } from 'react';
import { Meta } from '@storybook/react-vite';
import SideNavigation, {
  SideNavigationItem,
  SideNavigationItemProps,
  SideNavigationProps,
} from './side-navigation';

const meta: Meta<typeof SideNavigation> = {
  title: 'USWDS/Side Navigation',
  component: SideNavigation,
  argTypes: {
    id: { required: true },
  },
};
export default meta;

const ariaLabel = 'Secondary navigation';
const createAnchor = (isCurrent = false): JSX.Element => (
  <a className={isCurrent ? 'usa-current' : ''} href="/" onClick={(e) => e.preventDefault()}>
    Navigation Link
  </a>
);
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

export const FlatSideNavigation = {
  args: {
    id: 'side-navigation-1',
    items: flatNavigation,
    ariaLabel,
  },
  render: (args: SideNavigationProps) => <SideNavigation {...args} />,
};

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

export const TwoLevelSideNavigation = {
  args: {
    id: 'side-navigation-2',
    items: twoLevelNavigation,
    ariaLabel,
  },
  render: (args: SideNavigationProps) => <SideNavigation {...args} />,
};

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

export const ThreeLevelSideNavigation = {
  args: {
    id: 'side-navigation-3',
    items: threeLevelNavigation,
    ariaLabel,
  },
  render: (args: SideNavigationProps) => <SideNavigation {...args} />,
};

export const WithChildren = {
  args: {
    id: 'side-navigation-4',
  },
  render: (args: SideNavigationProps) => (
    <SideNavigation {...args}>
      <SideNavigationItem anchor={createAnchor(true)} />
      <SideNavigationItem anchor={createAnchor(false)} />
      <SideNavigationItem anchor={createAnchor(false)} />
    </SideNavigation>
  ),
};
