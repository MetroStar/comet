import React from 'react';
import { BsFacebook, BsTwitter, BsYoutube, BsInstagram } from 'react-icons/bs';

export type Navigate = (path: string) => void;

export interface FooterProps {
  /**
   * An array of navigation items
   */
  links?: Array<{
    label: string;
    path: string;
  }>;
  /**
   * Custom callback for navigation change
   */
  onNavigate?: Navigate;
  /**
   * A text value to display next to the logo
   */
  logoText?: string;
  /**
   * The URL to the logo
   */
  logoSrc?: string;
  /**
   * A text message to display with the contact information
   */
  contactMessage?: string;
  /**
   * Contact email to display
   */
  email?: string;
  /**
   * Contact phone number to display
   */
  phone?: string;
  /**
   * An object of URLs to link to socials
   */
  socials?: {
    facebook?: string;
    twitter?: string;
    youtube?: string;
    instagram?: string;
  };
}

/**
 * A footer serves site visitors who arrive at the bottom of a page without finding what they want.
 */
export const Footer = ({
  links,
  onNavigate = (path: string): void => {},
  logoText,
  logoSrc,
  contactMessage,
  email,
  phone,
  socials,
}: FooterProps): React.ReactElement => {
  return (
    <footer className="usa-footer" id="footer" data-testid="footer">
      <div className="grid-container usa-footer__return-to-top">
        <span
          style={{
            userSelect: 'none',
            cursor: 'pointer',
          }}
          data-testid="scroll-top"
          onClick={() => window.scrollTo(0, 0)}
        >
          Return to top
        </span>
      </div>
      <div className="usa-footer__primary-section">
        <nav className="usa-footer__nav" aria-label="Footer navigation">
          <ul className="grid-row grid-gap">
            {links?.map((e, i) => (
              <li
                className={`
                  mobile-lg:grid-col-4
                  desktop:grid-col-auto
                  usa-footer__primary-content
                `}
                key={`footer-link-${i}`}
              >
                <a
                  className="usa-footer__primary-link"
                  data-testid="footer-link"
                  onClick={(event) => {
                    event.preventDefault();
                    onNavigate(e.path);
                  }}
                >
                  {e.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="usa-footer__secondary-section">
        <div className="grid-container">
          <div className="grid-row grid-gap">
            <div
              className="
            usa-footer__logo
            grid-row
            mobile-lg:grid-col-6 mobile-lg:grid-gap-2
          "
            >
              <div className="mobile-lg:grid-col-auto">
                <img className="usa-footer__logo-img" src={logoSrc} alt="" />
              </div>
              <div className="mobile-lg:grid-col-auto">
                <p className="usa-footer__logo-heading">{logoText}</p>
              </div>
            </div>
            <div className="usa-footer__contact-links mobile-lg:grid-col-6">
              <div className="usa-footer__social-links grid-row grid-gap-1">
                {socials?.facebook ? (
                  <div className="grid-col-auto">
                    <a className="usa-social-link" href={socials.facebook}>
                      <div className="usa-social-link__icon" style={{ padding: '10%' }}>
                        <BsFacebook style={{ width: '100%', height: '100%' }} title="Facebook" />
                      </div>
                    </a>
                  </div>
                ) : (
                  <></>
                )}
                {socials?.twitter ? (
                  <div className="grid-col-auto">
                    <a className="usa-social-link" href={socials.twitter}>
                      <div className="usa-social-link__icon" style={{ padding: '10%' }}>
                        <BsTwitter style={{ width: '100%', height: '100%' }} title="Twitter" />
                      </div>
                    </a>
                  </div>
                ) : (
                  <></>
                )}

                {socials?.youtube ? (
                  <div className="grid-col-auto">
                    <a className="usa-social-link" href={socials.youtube}>
                      <div className="usa-social-link__icon" style={{ padding: '10%' }}>
                        <BsYoutube style={{ width: '100%', height: '100%' }} title="YouTube" />
                      </div>
                    </a>
                  </div>
                ) : (
                  <></>
                )}

                {socials?.instagram ? (
                  <div className="grid-col-auto">
                    <a className="usa-social-link" href={socials.instagram}>
                      <div className="usa-social-link__icon" style={{ padding: '10%' }}>
                        <BsInstagram style={{ width: '100%', height: '100%' }} title="Instagram" />
                      </div>
                    </a>
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <p className="usa-footer__contact-heading">{contactMessage ?? <></>}</p>
              <address className="usa-footer__address">
                <div className="usa-footer__contact-info grid-row grid-gap">
                  <div className="grid-col-auto">
                    <a href="tel:1-800-555-5555">{phone ?? <></>}</a>
                  </div>
                  <div className="grid-col-auto">
                    <a href="mailto:info@agency.gov">{email ?? <></>}</a>
                  </div>
                </div>
              </address>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
