import React, { ReactNode, SyntheticEvent } from "react";
import classNames from "classnames";
import sprite from "@uswds/uswds/img/sprite.svg";

export type CreatePageUrlHandler = (page: number) => string | undefined;
export type OnPageHandler = (
  event: SyntheticEvent<Element, Event>,
  page: number
) => void;

/* eslint-disable-next-line */
export interface PaginationProps {
  /**
   * The unique identifier for the pagination
   */
  id: string;

  /**
   * The current page (0 indexed)
   */
  currentPage: number;

  /**
   * The amount of pages
   */
  amountOfPages: number;

  /**
   * The amount of page items to show
   */
  amountOfVisiblePageItems?: number;

  /**
   * Defines a string value that labels the current element.
   */
  ariaLabel: string;

  /**
   * Pass a function in to create href URLs
   */
  createPageUrl?: CreatePageUrlHandler;

  /**
   * Event handler for when a pagination item is clicked
   */
  onPage?: OnPageHandler;
}

export const Pagination = ({
  id,
  currentPage,
  amountOfPages: pageSize,
  amountOfVisiblePageItems = 3,
  ariaLabel,
  createPageUrl = () => "#",
  onPage = () => undefined,
}: PaginationProps): React.ReactElement => {
  // if pageSize is <= 7, there should be no "extra slots"
  // see https://designsystem.digital.gov/components/pagination/
  if (pageSize <= 7) {
    amountOfVisiblePageItems = 7;
  }

  let startPageIndex = Math.max(
    0,
    currentPage - Math.floor(amountOfVisiblePageItems / 2)
  );
  const endPageIndex =
    Math.min(pageSize, startPageIndex + amountOfVisiblePageItems) - 1;

  if (endPageIndex === pageSize - 1) {
    startPageIndex = Math.max(0, endPageIndex - amountOfVisiblePageItems + 1);
  }

  return (
    <nav id={id} aria-label={ariaLabel} className="usa-pagination">
      <ul className="usa-pagination__list">
        {currentPage > 0 && (
          <li className="usa-pagination__item usa-pagination__arrow">
            <a
              href={createPageUrl(currentPage - 1)}
              onClick={(event) => onPage(event, currentPage - 1)}
              className="usa-pagination__link usa-pagination__previous-page"
              aria-label="Previous page"
            >
              <svg className="usa-icon" aria-hidden="true" role="img">
                <use xlinkHref={`${sprite}#navigate_before`}></use>
              </svg>
              <span className="usa-pagination__link-text">Previous</span>
            </a>
          </li>
        )}
        {startPageIndex > 0 && (
          <>
            {buildPaginationItem(
              0,
              currentPage,
              pageSize,
              createPageUrl,
              onPage
            )}
            <li
              className="usa-pagination__item usa-pagination__overflow"
              role="presentation"
            >
              <span>…</span>
            </li>
          </>
        )}
        {forLoopJsx(startPageIndex, endPageIndex, (page: number) =>
          buildPaginationItem(
            page,
            currentPage,
            pageSize,
            createPageUrl,
            onPage
          )
        )}
        {endPageIndex < pageSize - 1 && (
          <>
            <li
              className="usa-pagination__item usa-pagination__overflow"
              role="presentation"
            >
              <span>…</span>
            </li>
            {buildPaginationItem(
              pageSize - 1,
              currentPage,
              pageSize,
              createPageUrl,
              onPage
            )}
          </>
        )}
        {currentPage < pageSize - 1 && (
          <li className="usa-pagination__item usa-pagination__arrow">
            <a
              href={createPageUrl(currentPage + 1)}
              onClick={(event) => onPage(event, currentPage + 1)}
              className="usa-pagination__link usa-pagination__next-page"
              aria-label="Next page"
            >
              <span className="usa-pagination__link-text">Next</span>
              <svg className="usa-icon" aria-hidden="true" role="img">
                <use xlinkHref={`${sprite}#navigate_next`}></use>
              </svg>
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};

function forLoopJsx(
  startIndex: number,
  endIndex: number,
  forLoopCallback: (index: number) => ReactNode
): ReactNode {
  const reactArray: ReactNode[] = [];
  for (startIndex; startIndex <= endIndex; startIndex++) {
    reactArray.push(forLoopCallback(startIndex));
  }
  return reactArray;
}

function buildPaginationItem(
  page: number,
  currentPage: number,
  pageSize: number,
  createPageUrl: CreatePageUrlHandler,
  onPage: OnPageHandler
) {
  const isCurrentPage = page === currentPage;
  const ariaLabel =
    pageSize - 1 === page ? `last page, page ${page + 1}` : `page ${page + 1}`;
  return (
    <li key={page} className="usa-pagination__item usa-pagination__page-no">
      <a
        href={createPageUrl(page)}
        onClick={(event) => onPage(event, page)}
        className={classNames("usa-pagination__button", {
          "usa-current": isCurrentPage,
        })}
        aria-label={ariaLabel}
        aria-current={isCurrentPage ? "page" : undefined}
      >
        {`${page + 1}`}
      </a>
    </li>
  );
}

export default Pagination;
