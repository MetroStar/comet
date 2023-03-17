import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import SideNavigation, { SideNavigationItem, SideNavigationProps } from './side-navigation';

const meta: ComponentMeta<typeof SideNavigation> = {
  title: 'Components/Side Navigation',
  component: SideNavigation,
  argTypes: {
    id: { required: true },
  },
};
export default meta;

const Template: ComponentStory<typeof SideNavigation> = (args: SideNavigationProps) => (
  <SideNavigation {...args} />
);

const ariaLabel = 'Secondary navigation';
const createAnchor = (isCurrent = false) => (
  <a className={isCurrent ? 'usa-current' : ''} href="/" onClick={(e) => e.preventDefault()}>
    Navigation Link
  </a>
);
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

export const FlatSideNavigation = Template.bind({});
FlatSideNavigation.args = {
  id: 'side-navigation-1',
  items: flatNavigation,
  ariaLabel,
};

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

export const TwoLevelSideNavigation = Template.bind({});
TwoLevelSideNavigation.args = {
  id: 'side-navigation-2',
  items: twoLevelNavigation,
  ariaLabel,
};

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

export const ThreeLevelSideNavigation = Template.bind({});
ThreeLevelSideNavigation.args = {
  id: 'side-navigation-3',
  items: threeLevelNavigation,
  ariaLabel,
};
