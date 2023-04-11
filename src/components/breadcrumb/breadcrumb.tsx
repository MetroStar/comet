import React from 'react';

export interface Crumb {
  /**
   * The intended url path for the item
   */
  path: string;
  /**
   * The display value for this bread crumb item
   */
  name: string;
}

export interface BreadcrumbProps {
  /**
   * The unique identifier for this component
   */
  id: string;
  /**
   * An array of bread crumb objects to display
   */
  crumbs: Crumb[];
  /**
   * Custom callback for when breadcrumb item is clicked
   */
  action: Function;
  /**
   * Custom value to display as the current location
   */
  current?: string;
}

export const Breadcrumb = ({
  id,
  crumbs,
  current,
  action,
}: BreadcrumbProps): React.ReactElement => {
  return (
    <nav className="usa-breadcrumb breadcrumb" aria-label="Breadcrumbs,," id={id}>
      <ol className="usa-breadcrumb__list">
        {crumbs.map((e, i) => (
          <li className="usa-breadcrumb__list-item" key={`breadcrumb-${i}`}>
            <span
              className="usa-breadcrumb__link span-link"
              data-testid="breadcrumb-link"
              onClick={() => action(e.path)}
            >
              <span>{e.name}</span>
            </span>
          </li>
        ))}
        {current ? (
          <li className="usa-breadcrumb__list-item usa-current" aria-current="true">
            <span>{current}</span>
          </li>
        ) : (
          <></>
        )}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
