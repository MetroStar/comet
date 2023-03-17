import React, { ReactNode } from 'react';

export interface SideNavigationItem {
  /**
   * Anchor to render for current SideNavigationItem
   */
  anchor: ReactNode;

  /**
   * Items of the navigation
   */
  items?: SideNavigationItem[];
}

export interface SideNavigationProps {
  /**
   * The unique identifier for this component
   */
  id: string;

  /**
   * The aria-label for the navigation element
   */
  ariaLabel: string;

  /**
   * Items of the navigation
   */
  items: SideNavigationItem[];
}

export const SideNavigation = ({
  id,
  ariaLabel,
  items,
}: SideNavigationProps): React.ReactElement => {
  return (
    <nav id={id} aria-label={ariaLabel}>
      <ul className="usa-sidenav">{items.map(createSideNavigationItem)}</ul>
    </nav>
  );
};

function createSideNavigationItem(item: SideNavigationItem, itemIndex: number): JSX.Element {
  return (
    <li className="usa-sidenav__item" key={itemIndex}>
      {item.anchor}
      {item.items && item.items.length > 0 && (
        <ul className="usa-sidenav__sublist">{item.items.map(createSideNavigationItem)}</ul>
      )}
    </li>
  );
}

export default SideNavigation;
