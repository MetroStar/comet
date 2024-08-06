import React, { Dispatch, SetStateAction, SyntheticEvent, useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
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

const PaginationWrapper: React.FC<PaginationProps> = (props: PaginationProps) => {
  const [currentPage1, setCurrentPage1] = useState(props.currentPage);

  const newProps = { ...props };
  newProps.currentPage = currentPage1;
  newProps.onPage = onPage(setCurrentPage1);

  return <Pagination {...newProps} />;
};

const Template: StoryFn<typeof Pagination> = (args: PaginationProps) => (
  <PaginationWrapper {...args} />
);

export const LargePagination = Template.bind({});
LargePagination.args = {
  id: 'pagination-1',
  currentPage: 9,
  amountOfPages: 24,
  ariaLabel: 'Pagination 1',
  amountOfVisiblePageItems: 3,
};

export const SmallPagination = Template.bind({});
SmallPagination.args = {
  id: 'pagination-2',
  currentPage: 2,
  amountOfPages: 5,
  ariaLabel: 'Pagination 2',
  amountOfVisiblePageItems: 1,
};
