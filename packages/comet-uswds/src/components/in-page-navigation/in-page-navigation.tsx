import inPageNavigation from '@uswds/uswds/js/usa-in-page-navigation';
import React, { ReactNode, useEffect, useRef } from 'react';

export interface InPageNavigationItemProps {
  heading: string;
  headingType: 'h2' | 'h3';
  content: ReactNode;
}

export interface InPageNavigationProps {
  /**
   * The unique identifier for this component
   */
  id: string;
  /**
   * The title of the page
   */
  pageTitle: string;
  /**
   * The title of the in-page navigation
   */
  navTitle?: string;
  /**
   * The list of navigation items to display
   */
  items: InPageNavigationItemProps[];
}

/**
 * The in-page navigation allows navigation to specific sections on a lengthy content page.
 */
export const InPageNavigation = ({
  id,
  navTitle,
  pageTitle,
  items,
}: InPageNavigationProps): React.ReactElement => {
  // Ensure in-page navigation JS is loaded
  const navRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const navElement = navRef.current;
    inPageNavigation.on(navElement);

    // Ensure cleanup after the effect
    return () => {
      inPageNavigation.off(navElement);
    };
  }, []);

  return (
    <div id={id} className="usa-in-page-nav-container" ref={navRef}>
      <aside
        className="usa-in-page-nav"
        data-title-text={navTitle ? navTitle : 'On this page'}
        data-title-heading-level="h4"
        data-scroll-offset="0"
        data-root-margin="0px 0px 0px 0px"
        data-threshold="1"
      ></aside>
      <main id="main-content" className="main-content usa-prose">
        <h1>{pageTitle}</h1>
        {items.map((item, index) => (
          <div key={`in-page-nav-item-${index}`}>
            <item.headingType>{item.heading}</item.headingType>
            <p>{item.content}</p>
          </div>
        ))}
      </main>
    </div>
  );
};

export default InPageNavigation;
