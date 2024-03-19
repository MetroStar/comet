import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'vitest-axe';
import Pagination from './pagination';

describe('Pagination', () => {
  test('should render with no accessibility violations', async () => {
    const { container } = render(
      <Pagination id="pagination1" currentPage={9} amountOfPages={24} ariaLabel="Pagination" />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  test('should render successfully', () => {
    const { baseElement } = render(
      <Pagination id="pagination1" currentPage={9} amountOfPages={24} ariaLabel="Pagination" />,
    );
    expect(baseElement).toBeTruthy();
    expect(baseElement.querySelector('a[aria-label="page 10"]')?.getAttribute('aria-current')).toBe(
      'page',
    );
    expect(baseElement.querySelector('nav')?.getAttribute('aria-label')).toBe('Pagination');
  });

  test('should render the correct page item as current', () => {
    const { baseElement } = render(
      <Pagination id="pagination1" currentPage={9} amountOfPages={24} ariaLabel="Pagination" />,
    );
    expect(baseElement.querySelector('a[aria-label="page 10"]')?.getAttribute('aria-current')).toBe(
      'page',
    );
  });

  test('should render previous, next, and extra slots', () => {
    const { baseElement } = render(
      <Pagination id="pagination1" currentPage={9} amountOfPages={24} ariaLabel="Pagination" />,
    );
    expect(baseElement.querySelectorAll('.usa-pagination__overflow')).toHaveLength(2);
    expect(baseElement.querySelectorAll('.usa-pagination__arrow')).toHaveLength(2);
  });

  test('should not render extra slots', () => {
    const { baseElement } = render(
      <Pagination id="pagination1" currentPage={3} amountOfPages={7} ariaLabel="Pagination" />,
    );
    expect(baseElement.querySelectorAll('.usa-pagination__overflow')).toHaveLength(0);
  });

  test('should render previous, and extra slots, but not next', () => {
    const { baseElement } = render(
      <Pagination id="pagination1" currentPage={23} amountOfPages={24} ariaLabel="Pagination" />,
    );
    expect(baseElement.querySelectorAll('.usa-pagination__overflow')).toHaveLength(1);
    expect(baseElement.querySelector('[aria-label="Previous page"]')).toBeTruthy();
  });

  test('should render next, and extra slots, but not previous', () => {
    const { baseElement } = render(
      <Pagination id="pagination1" currentPage={0} amountOfPages={24} ariaLabel="Pagination" />,
    );
    expect(baseElement.querySelectorAll('.usa-pagination__overflow')).toHaveLength(1);
    expect(baseElement.querySelector('[aria-label="Next page"]')).toBeTruthy();
  });

  test('clicking the value should trigger onPage event handler', async () => {
    const onPage = vi.fn();
    const { baseElement } = render(
      <Pagination
        id="pagination1"
        currentPage={9}
        amountOfPages={24}
        ariaLabel="Pagination"
        onPage={onPage}
      />,
    );

    const nextPageAnchor = baseElement.querySelector('[aria-label="Next page"]') as Element;
    await userEvent.click(nextPageAnchor);
    expect(onPage).toBeCalledTimes(1);
    expect(onPage).toBeCalledWith(expect.any(Object), 10);

    const previousPageAnchor = baseElement.querySelector('[aria-label="Previous page"]') as Element;
    await userEvent.click(previousPageAnchor);
    expect(onPage).toBeCalledTimes(2);
    expect(onPage).toBeCalledWith(expect.any(Object), 8);

    await userEvent.click(baseElement.querySelector('a[aria-label="page 11"]') as Element);
    expect(onPage).toBeCalledTimes(3);
    expect(onPage).toBeCalledWith(expect.any(Object), 10);
  });

  test('clicking the value when no onPage is configured should not crash', async () => {
    const { baseElement } = render(
      <Pagination id="pagination1" currentPage={9} amountOfPages={24} ariaLabel="Pagination" />,
    );

    const nextPageAnchor = baseElement.querySelector('[aria-label="Next page"]') as Element;
    await userEvent.click(nextPageAnchor);
    baseElement.querySelector('[aria-label="Previous page"]') as Element;
    await userEvent.click(baseElement.querySelector('a[aria-label="page 11"]') as Element);
  });

  test('should render pagination items with URL', () => {
    const { baseElement } = render(
      <Pagination
        id="pagination1"
        currentPage={4}
        amountOfPages={7}
        ariaLabel="Pagination"
        createPageUrl={(page: number) => `https://localhost/?page=${page}`}
      />,
    );

    const anchors = baseElement.querySelectorAll('a');
    expect(anchors[0].href).toBe('https://localhost/?page=3');
    expect(anchors[6].href).toBe('https://localhost/?page=5');
    for (let anchorIndex = 1; anchorIndex < anchors.length - 1; anchorIndex++) {
      const anchor = anchors[anchorIndex];
      expect(anchor.href).toBe(`https://localhost/?page=${anchorIndex - 1}`);
    }
  });
});
