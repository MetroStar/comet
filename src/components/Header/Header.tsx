import React, { useState } from "react";
import { MdOutlineSearch } from "react-icons/md";
import "./header.style.css";

export type Navigate = (path: string) => void;
export type Search = (search: string) => void;

export interface HeaderProps {
  logo?: React.ReactNode;
  root?: string;
  onNavigate?: Navigate;
  folding?: Array<{
    label: string;
    items: Array<{
      label: string;
      path: string;
    }>;
  }>;
  simple?: Array<{
    label: string;
    path: string;
  }>;
  showSearch?: boolean;
  onSearch?: Search;
}

const Header: React.FC<HeaderProps> = ({
  logo,
  onNavigate = (path: string): void => {},
  folding,
  simple,
  showSearch,
  onSearch = (search: string): void => {},
}: HeaderProps) => {
  const [showFold, setShowFold] = useState(
    Array(folding?.length ?? 0).fill(false)
  );

  const onFoldClick = (i: number): void => {
    const current = [...showFold];
    current[i] = !current[i];
    setShowFold(current);
  };

  return (
    <header className="usa-header usa-header--basic" data-testid="header">
      <div className="usa-nav-container">
        <div className="usa-navbar">
          <div className="usa-logo" id="-logo">
            <em className="usa-logo__text">{logo ?? <></>}</em>
          </div>
          <button type="button" className="usa-menu-btn">
            Menu
          </button>
        </div>
        <nav aria-label="Primary navigation" className="usa-nav">
          <button type="button" className="usa-nav__close">
            <img src="/assets/img/usa-icons/close.svg" role="img" alt="Close" />
          </button>
          <ul className="usa-nav__primary usa-accordion">
            {folding?.map((e, i) => (
              <li
                className="usa-nav__primary-item"
                key={`folding-navigation-${i}`}
              >
                <button
                  type="button"
                  className="usa-accordion__button usa-nav__link usa-current"
                  aria-controls="basic-nav-section-one"
                  aria-expanded={showFold[i] ? "true" : "false"}
                  data-testid="fold-control"
                  onClick={() => onFoldClick(i)}
                >
                  <span>{e.label}</span>
                </button>
                <ul
                  id="basic-nav-section-one"
                  data-testid="folding"
                  className={`usa-nav__submenu ${
                    showFold[i] ? "folded-show" : "folded-hide"
                  }`}
                >
                  {e.items.map((l, j) => (
                    <li
                      className="usa-nav__submenu-item"
                      key={`folding-navigation-${i}-subitem-${j}`}
                    >
                      <a
                        href=""
                        onClick={(event) => {
                          event.preventDefault();
                          onNavigate(l.path);
                        }}
                      >
                        <span>{l.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            )) ?? <></>}
            {simple?.map((e, i) => (
              <li className="usa-nav__primary-item" key={`simple-link-${i}`}>
                <a
                  href=""
                  className="usa-nav-link"
                  onClick={(event) => {
                    event.preventDefault();
                    onNavigate(e.path);
                  }}
                >
                  <span>{e.label}</span>
                </a>
              </li>
            )) ?? <></>}
          </ul>
          <SearchBar show={showSearch ?? false} onSearch={(v) => onSearch(v)} />
        </nav>
      </div>
    </header>
  );
};

interface SearchProps {
  show: boolean;
  onSearch: Search;
}

const SearchBar: React.FC<SearchProps> = ({ show, onSearch }: SearchProps) => {
  const [query, setQuery] = useState("");

  if (!show) return <></>;

  return (
    <section aria-label="Search component">
      <form className="usa-search usa-search--small" role="search">
        <label className="usa-sr-only" htmlFor="search-field">
          Search
        </label>
        <input
          className="usa-input"
          id="search-field"
          type="search"
          name="search"
          data-testid="search"
          onChange={(event) => setQuery(event.target.value)}
        />
        <button
          aria-label="search"
          className="usa-button"
          type="submit"
          data-testid="search-button"
          onClick={(event) => {
            event.preventDefault();
            onSearch(query);
          }}
        >
          <MdOutlineSearch />
        </button>
      </form>
    </section>
  );
};

export default Header;
