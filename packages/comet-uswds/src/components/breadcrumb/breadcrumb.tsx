import React, { ReactElement } from 'react';

export interface BreadcrumbItemProps {
  /**
   * The intended url path for the item
   */
  path: string;
  /**
   * The display value for this bread crumb item
   */
  name: string;
  /**
   * Custom callback for when breadcrumb item is clicked
   */
  action?: Function;
}

export interface BreadcrumbProps {
  /**
   * The unique identifier for this component
   */
  id: string;
  /**
   * Custom callback for when breadcrumb item is clicked
   */
  action: Function;
  /**
   * Custom value to display as the current location
   */
  current?: string;
  /**
   * An array of bread crumb items to display
   */
  items?: BreadcrumbItemProps[];
  /**
   * BreadcrumbItem components to display as children
   */
  children?: ReactElement<BreadcrumbItemProps> | Array<ReactElement<BreadcrumbItemProps>>;
}

/**
 * Breadcrumbs provide secondary navigation to help users understand where they are in a website.
 */
export const Breadcrumb = ({
  id,
  current,
  action,
  items,
  children,
}: BreadcrumbProps): ReactElement => {
  // If no children and items provided, render partial
  if (!children && !items) {
    return <></>;
  }

  return (
    <nav className="usa-breadcrumb breadcrumb" aria-label="Breadcrumbs,," id={id}>
      <ol className="usa-breadcrumb__list">
        {children ??
          items?.map((e, i) => (
            <BreadcrumbItem path={e.path} name={e.name} action={action} key={`breadcrumb-${i}`} />
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

export const BreadcrumbItem = ({ path, name, action }: BreadcrumbItemProps): ReactElement => {
  return (
    <li className="usa-breadcrumb__list-item">
      <span
        className="usa-breadcrumb__link span-link"
        data-testid="breadcrumb-link"
        onClick={() => {
          /* v8 ignore if */
          if (action) {
            action(path);
          } else {
            return false;
          }
        }}
      >
        <span>{name}</span>
      </span>
    </li>
  );
};

export default Breadcrumb;
