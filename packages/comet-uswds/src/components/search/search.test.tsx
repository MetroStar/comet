import React, { FormEvent } from 'react';
import { fireEvent, render } from '@testing-library/react';
import Search from './search';

describe('Search', () => {
  const defaultId = 'search1';

  test('should render a default search successfully', () => {
    const { baseElement } = render(<Search id={defaultId} />);
    expect(baseElement).toBeTruthy();
  });

  test('should render a big search successfully', () => {
    const { baseElement } = render(<Search id={defaultId} type="big" />);
    expect(baseElement).toBeTruthy();
    const search = baseElement.querySelector(`#${defaultId}`);
    expect(search).not.toBeNull();
    expect(search).toHaveProperty('id', defaultId);
    expect(search?.classList).toContain('usa-search');
    expect(search?.classList).toContain('usa-search--big');
  });

  test('should render a small search successfully', () => {
    const { baseElement } = render(<Search id={defaultId} type="small" />);
    expect(baseElement).toBeTruthy();
    const search = baseElement.querySelector(`#${defaultId}`);
    const icon = baseElement.querySelector('img');
    expect(search).not.toBeNull();
    expect(search).toHaveProperty('id', defaultId);
    expect(search?.classList).toContain('usa-search');
    expect(search?.classList).toContain('usa-search--small');
    expect(icon).not.toBeNull();
    expect(icon?.classList).toContain('usa-search__submit-icon');
  });

  test('firing submit event should invoke onSearch callback', () => {
    const searchTerm = 'lorem';
    const onSearchCallback = vi.fn((e: FormEvent) => e.preventDefault());
    const { baseElement } = render(<Search id={defaultId} onSearch={onSearchCallback} />);
    expect(baseElement).toBeTruthy();
    const searchForm = baseElement.querySelector<HTMLFormElement>('form.usa-search');
    const searchInput = baseElement.querySelector<HTMLInputElement>('.usa-search input');
    expect(searchForm).toBeTruthy();
    expect(searchInput).toBeTruthy();
    if (!searchForm) return; // to help TypeScript, already asserted above for Jest
    if (!searchInput) return; // to help TypeScript, already asserted above for Jest
    searchInput.value = searchTerm;
    fireEvent.submit(searchForm);
    expect(onSearchCallback).toBeCalledTimes(1);
    expect(onSearchCallback).toBeCalledWith<[FormEvent, string]>(expect.any(Object), searchTerm);
  });

  test('firing submit event should not invoke false onSearch callback', () => {
    const searchTerm = 'lorem';
    const { baseElement } = render(<Search id={defaultId} />);
    expect(baseElement).toBeTruthy();
    const searchForm = baseElement.querySelector<HTMLFormElement>('form.usa-search');
    const searchInput = baseElement.querySelector<HTMLInputElement>('.usa-search input');
    expect(searchForm).toBeTruthy();
    expect(searchInput).toBeTruthy();
    if (!searchForm) return; // to help TypeScript, already asserted above for Jest
    if (!searchInput) return; // to help TypeScript, already asserted above for Jest
    searchInput.value = searchTerm;
    fireEvent.submit(searchForm);
  });
});
