import { Pagination } from './pagination';
import figma from '@figma/code-connect';

figma.connect(
  Pagination,
  'https://www.figma.com/design/U58Pbb84dLaZfvFvdtGVdT/Comet-UI-Kit?node-id=420-2169',
  {
    props: {
      currentPage: figma.enum('state', {
        'first page': 0,
        'middle page': 4,
        'last page': 8,
      }),
    },
    example: ({ currentPage }) => (
      <Pagination
        amountOfPages={9}
        amountOfVisiblePageItems={6}
        ariaLabel="Pagination"
        currentPage={currentPage}
        id="pagination-1"
      />
    ),
  },
);
