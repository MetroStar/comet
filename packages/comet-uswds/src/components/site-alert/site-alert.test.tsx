import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import SiteAlert from './site-alert';

describe('SiteAlert', () => {
  test('should render with no accessibility violations', async () => {
    const { container } = render(
      <SiteAlert id="alert1" heading="test">
        test alert
      </SiteAlert>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
  it('should render a default site alert', () => {
    const { baseElement } = render(
      <SiteAlert id="alert1" heading="test">
        test alert
      </SiteAlert>,
    );
    expect(baseElement).toBeTruthy();
    expect(baseElement.querySelector('.usa-site-alert')).toBeTruthy();
  });
  it('should render an info site alert', () => {
    const { baseElement } = render(
      <SiteAlert id="alert2" heading="test" type="Info">
        test alert
      </SiteAlert>,
    );
    expect(baseElement).toBeTruthy();
    expect(baseElement.querySelector('.usa-site-alert--info')).toBeTruthy();
  });
  it('should render an emergency site alert', () => {
    const { baseElement } = render(
      <SiteAlert id="alert3" heading="test" type="Emergency">
        test alert
      </SiteAlert>,
    );
    expect(baseElement).toBeTruthy();
    expect(baseElement.querySelector('.usa-site-alert--emergency')).toBeTruthy();
  });
  it('should render a slim site alert', () => {
    const { baseElement } = render(
      <SiteAlert id="alert4" slim={true}>
        test alert
      </SiteAlert>,
    );
    expect(baseElement).toBeTruthy();
    expect(baseElement.querySelector('.usa-site-alert--slim')).toBeTruthy();
  });
  it('should render an site alert with no icon', () => {
    const { baseElement } = render(
      <SiteAlert id="alert5" noIcon={true}>
        test alert
      </SiteAlert>,
    );
    expect(baseElement).toBeTruthy();
    expect(baseElement.querySelector('.usa-site-alert--no-icon')).toBeTruthy();
  });
});
