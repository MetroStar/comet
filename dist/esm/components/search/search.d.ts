import React from "react";
import { FormEvent } from 'react';
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
     * The placeholder of the search
     */
    onSearch?: (event: FormEvent<HTMLFormElement>, searchText: string) => void;
}
export declare const Search: ({ id, type, onSearch, ...props }: SearchProps & JSX.IntrinsicElements['input']) => React.ReactElement;
export default Search;
