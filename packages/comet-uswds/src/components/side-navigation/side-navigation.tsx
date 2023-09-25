import React, { ReactElement, ReactNode } from 'react';

export interface SideNavigationItemProps {
  /**
   * Anchor to render for current SideNavigationItem
   */
  anchor: ReactNode;
  /**
   * Items of the navigation
   */
  items?: SideNavigationItemProps[];
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
  items?: SideNavigationItemProps[];
  /**
   * The body of the component
   */
  children?: ReactElement<SideNavigationItemProps> | Array<ReactElement<SideNavigationItemProps>>;
}

/**
 * Hierarchical, vertical navigation to place at the side of a page.
 */
export const SideNavigation = ({
  id,
  ariaLabel,
  items,
  children,
}: SideNavigationProps): ReactElement => {
  if (!children && !items) {
    return <></>;
  }

  return (
    <nav id={id} aria-label={ariaLabel}>
      <ul className="usa-sidenav">
        {children ??
          items?.map((item, index) => (
            <SideNavigationItem
              items={item.items}
              anchor={item.anchor}
              key={`side-nav-item-${index}`}
            ></SideNavigationItem>
          ))}
      </ul>
    </nav>
  );
};

export const SideNavigationItem = ({ items, anchor }: SideNavigationItemProps): JSX.Element => {
  return (
    <li className="usa-sidenav__item">
      {anchor}
      {items && items.length > 0 && (
        <ul className="usa-sidenav__sublist">
          {items.map((item, index) => (
            <SideNavigationItem
              items={item.items}
              anchor={item.anchor}
              key={`side-nav-item-sublist-${index}`}
            ></SideNavigationItem>
          ))}
        </ul>
      )}
    </li>
  );
};

export default SideNavigation;
