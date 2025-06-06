import React, { Dispatch, SetStateAction, SyntheticEvent, useState } from 'react';
import { Meta } from '@storybook/react-vite';
import { Pagination } from '../../index';
import { PaginationProps } from './pagination';

const meta: Meta<typeof Pagination> = {
  title: 'USWDS/Pagination',
  component: Pagination,
  argTypes: {
    id: { required: true },
  },
};
export default meta;

const onPage =
  (setPage: Dispatch<SetStateAction<number>>) =>
  (event: SyntheticEvent<Element, Event>, page: number) => {
    event.preventDefault();
    setPage(page);
  };

export const LargePagination = {
  args: {
    id: 'pagination-1',
    currentPage: 9,
    amountOfPages: 24,
    ariaLabel: 'Pagination 1',
    amountOfVisiblePageItems: 3,
  },
  render: (args: PaginationProps) => {
    const [currentPage, setCurrentPage] = useState(args.currentPage);

    const newProps = { ...args };
    newProps.currentPage = currentPage;
    newProps.onPage = onPage(setCurrentPage);

    return <Pagination {...newProps} />;
  },
};

export const SmallPagination = {
  args: {
    id: 'pagination-2',
    currentPage: 2,
    amountOfPages: 5,
    ariaLabel: 'Pagination 2',
    amountOfVisiblePageItems: 1,
  },
  render: (args: PaginationProps) => {
    const [currentPage, setCurrentPage] = useState(args.currentPage);

    const newProps = { ...args };
    newProps.currentPage = currentPage;
    newProps.onPage = onPage(setCurrentPage);

    return <Pagination {...newProps} />;
  },
};
