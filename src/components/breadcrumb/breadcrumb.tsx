import React from 'react';

export interface Crumb {
  path: string;
  name: string;
}

export interface BreadcrumbProps {
  id: string;
  crumbs: Crumb[];
  action: Function;
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
