import React, { FormEvent } from 'react';
import classnames from 'classnames';

export interface SearchProps {
  /**
   * The unique identifier for this component
   */
  id: string;
  /**
   * The size of the search
   */
  type?: 'default' | 'small' | 'big';
  /**
   * Custom callback for when a search is performed
   */
  onSearch?: (event: FormEvent<HTMLFormElement>, searchText: string) => void;
}

/**
 * Search allows users to search for specific content if they know what search terms to use or can’t find desired content in the main navigation
 */
export const Search = ({
  id,
  type = 'default',
  onSearch,
  ...props
}: SearchProps & JSX.IntrinsicElements['input']): React.ReactElement => {
  const classes = classnames('usa-search', {
    'usa-search--small': type === 'small',
    'usa-search--big': type === 'big',
  });

  return (
    <form id={id} className={classes} role="search" onSubmit={onSubmit}>
      <label className="usa-sr-only" htmlFor={`${id}__search-field`}>
        Search
      </label>
      <input
        className="usa-input"
        id={`${id}__search-field`}
        type="search"
        name="search"
        {...props}
      />
      <button className="usa-button" type="submit">
        <span className={type === 'small' ? 'usa-sr-only' : 'usa-search__submit-text'}>Search</span>
      </button>
    </form>
  );

  function onSubmit(event: FormEvent<HTMLFormElement>): void {
    if (onSearch) {
      const form = event.target as unknown as {
        elements: { search: { value: string } };
      };
      onSearch(event, form.elements.search.value);
    }
  }
};

export default Search;
