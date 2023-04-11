import React, { useEffect, useRef, useState } from 'react';
import accordion from '@uswds/uswds/js/usa-accordion';
import banner from '@uswds/uswds/js/usa-banner';
import usFlagSmall from '@uswds/uswds/img/us_flag_small.png';
import httpsIcon from '@uswds/uswds/img/icon-https.svg';
import dotGovIcon from '@uswds/uswds/img/icon-dot-gov.svg';

/* eslint-disable-next-line */
export interface BannerProps {
  /**
   * The unique identifier for this component
   */
  id: string;
  /**
   * The type of banner to display
   */
  type?: 'gov' | 'mil';
}

const BannerTypeFull = {
  gov: 'government',
  mil: 'U.S. Department of Defense',
};

/**
 * Banners identify official websites of government organizations in the United States. They also help visitors understand whether a website is official and secure.
 */
export const Banner = ({ id, type = 'gov' }: BannerProps): React.ReactElement => {
  const [isExpanded] = useState(false);
  // Ensure banner JS is loaded
  const bannerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const bannerElement = bannerRef.current;
    banner.on(bannerElement);
    accordion.on(bannerElement);

    // Ensure cleanup after the effect
    return () => {
      banner.off(bannerElement);
      accordion.off(bannerElement);
    };
  });

  return (
    <section
      id={id}
      className="usa-banner"
      aria-label="Official government website"
      ref={bannerRef}
    >
      <div className="usa-accordion">
        <header className="usa-banner__header">
          <div className="usa-banner__inner">
            <div className="grid-col-auto">
              <img className="usa-banner__header-flag" src={usFlagSmall} alt="U.S. flag" />
            </div>
            <div className="grid-col-fill tablet:grid-col-auto">
              <p className="usa-banner__header-text">
                An official website of the United States government
              </p>
              <p className="usa-banner__header-action" aria-hidden="true">
                Here’s how you know
              </p>
            </div>
            <button
              className="usa-accordion__button usa-banner__button"
              aria-expanded="false"
              aria-controls="gov-banner-default"
            >
              <span className="usa-banner__button-text">Here’s how you know</span>
            </button>
          </div>
        </header>
        <div
          className="usa-banner__content usa-accordion__content"
          id="gov-banner-default"
          hidden={!isExpanded}
        >
          <div className="grid-row grid-gap-lg">
            <div className="usa-banner__guidance tablet:grid-col-6">
              <img
                className="usa-banner__icon usa-media-block__img"
                src={dotGovIcon}
                role="img"
                alt=""
                aria-hidden="true"
              />
              <div className="usa-media-block__body">
                <p>
                  <strong> Official websites use .{type} </strong>
                  <br />A <strong>.{type}</strong> website belongs to an official{' '}
                  {BannerTypeFull[type]} organization in the United States.
                </p>
              </div>
            </div>
            <div className="usa-banner__guidance tablet:grid-col-6">
              <img
                className="usa-banner__icon usa-media-block__img"
                src={httpsIcon}
                role="img"
                alt=""
                aria-hidden="true"
              />
              <div className="usa-media-block__body">
                <p>
                  <strong> Secure .gov websites use HTTPS </strong>
                  <br />A <strong>lock</strong> (
                  <span className="icon-lock">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="52"
                      height="64"
                      viewBox="0 0 52 64"
                      className="usa-banner__lock-image"
                      role="img"
                      aria-labelledby="banner-lock-title-default banner-lock-description-default"
                      focusable="false"
                    >
                      <title id="banner-lock-title-default">Lock</title>
                      <desc id="banner-lock-description-default">A locked padlock</desc>
                      <path
                        fill="#000000"
                        fillRule="evenodd"
                        d="M26 0c10.493 0 19 8.507 19 19v9h3a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V32a4 4 0 0 1 4-4h3v-9C7 8.507 15.507 0 26 0zm0 8c-5.979 0-10.843 4.77-10.996 10.712L15 19v9h22v-9c0-6.075-4.925-11-11-11z"
                      />
                    </svg>
                  </span>
                  ) or <strong>https://</strong> means you’ve safely connected to the .{type}{' '}
                  website. Share sensitive information only on official, secure websites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
