import { useEffect, useRef, useState } from 'react';
import languageSelector from '@uswds/uswds/js/usa-language-selector';
import classnames from 'classnames';

export type LanguageOption = {
  label: string;
  localLabel?: string;
  attr: string;
  onChange?: () => void;
};

export interface LanguageSelectorProps {
  /**
   * The unique identifier for this component
   */
  id: string;
  /**
   * The variant of the language selector to display
   */
  variant?: 'default' | 'unstyled';
  /**
   * The size of the language selector
   */
  size?: 'default' | 'small';
  /**
   * The list of language options to display
   */
  items: LanguageOption[];
}

/**
 * The consistent placement, interface, and behavior of the language selection component allows users to easily find and
 * access content in the language the user is most comfortable in.
 */
export const LanguageSelector = ({
  id,
  items,
  variant = 'default',
  size = 'default',
}: LanguageSelectorProps): React.ReactElement => {
  const [current, setCurrent] = useState<number>(0);

  const languageSelectorClasses = classnames('usa-language-container', {
    'usa-language--small': size === 'small',
  });
  const buttonClasses = classnames('usa-button', {
    'usa-language__link': items.length >= 3,
    'usa-button--unstyled': variant === 'unstyled',
  });

  // If there are less than 3 items, render as a button that toggles the options
  if (items.length < 3) {
    return (
      <div id={id} className={languageSelectorClasses}>
        <button
          type="button"
          className={buttonClasses}
          role="button"
          onClick={() => {
            if (current == items.length - 1) {
              setCurrent(0);
            } else {
              setCurrent((prev) => prev + 1);
            }

            if (items[current].onChange) {
              items[current].onChange();
            }
          }}
        >
          <span lang={items[current].attr}>{items[current].label}</span>
        </button>
      </div>
    );
  }

  // Ensure language selector JS is loaded
  const languageSelectorRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const accordionElement = languageSelectorRef.current;
    languageSelector.on(accordionElement);

    // Ensure cleanup after the effect
    return () => {
      languageSelector.off(accordionElement);
    };
  });

  // If there are 3 or more items, render as an accordion
  return (
    <div id={id} className={languageSelectorClasses} ref={languageSelectorRef}>
      <ul className="usa-language__primary usa-accordion">
        <li className="usa-language__primary-item">
          <button
            type="button"
            className={buttonClasses}
            role="button"
            aria-expanded="false"
            aria-controls="language-options"
          >
            Languages
          </button>
          <ul id="language-options" className="usa-language__submenu" hidden>
            {items.map((item, index) => (
              <li key={index} className="usa-language__submenu-item">
                <a
                  href="#"
                  onClick={(event) => {
                    event.preventDefault();
                    if (item.onChange) {
                      item.onChange();
                    }
                  }}
                >
                  <span lang={item.attr}>
                    <strong>{item.label}</strong>
                    {item.localLabel ? ` (${item.localLabel})` : <></>}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default LanguageSelector;
