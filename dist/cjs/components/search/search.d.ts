import React, { FormEvent } from 'react';
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
export declare const Search: ({ id, type, onSearch, ...props }: SearchProps & JSX.IntrinsicElements['input']) => React.ReactElement;
export default Search;
