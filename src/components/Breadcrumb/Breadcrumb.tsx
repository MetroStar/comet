import React from "react";

export interface Crumb {
  path: string;
  name: string;
}

export interface BreadcrumbProps {
  crumbs: Crumb[];
  action: Function;
  current?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  crumbs,
  current,
  action,
}: BreadcrumbProps) => {
  return (
    <nav className="usa-breadcrumb breadcrumb" aria-label="Breadcrumbs,,">
      <ol className="usa-breadcrumb__list">
        {crumbs.map((e, i) => (
          <li className="usa-breadcrumb__list-item" key={`breadcrumb-${i}`}>
            <span
              className="usa-breadcrumb__link span-link"
              data-testid="bc-link"
              onClick={() => action(e.path)}
            >
              <span>{e.name}</span>
            </span>
          </li>
        ))}
        {current ? (
          <li
            className="usa-breadcrumb__list-item usa-current"
            aria-current="true"
          >
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
