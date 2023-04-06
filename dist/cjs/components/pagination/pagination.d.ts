import React, { SyntheticEvent } from "react";
export declare type CreatePageUrlHandler = (page: number) => string | undefined;
export declare type OnPageHandler = (event: SyntheticEvent<Element, Event>, page: number) => void;
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
export declare const Pagination: ({ id, currentPage, amountOfPages: pageSize, amountOfVisiblePageItems, ariaLabel, createPageUrl, onPage, }: PaginationProps) => React.ReactElement;
export default Pagination;
