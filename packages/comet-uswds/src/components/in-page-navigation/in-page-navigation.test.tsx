import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import InPageNavigation from './in-page-navigation';

describe('InPageNavigation', () => {
  beforeEach(() => {
    // IntersectionObserver isn't available in test environment
    const mockIntersectionObserver = vi.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;
  });

  test('should render with no accessibility violations', async () => {
    const { container } = render(
      <InPageNavigation
        id="nav"
        pageTitle="Page Title"
        items={[{ heading: 'Heading 1', content: 'Content 1', headingType: 'h2' }]}
      />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  test('should render a default in-page navigation', async () => {
    const { container } = render(
      <InPageNavigation
        id="nav"
        pageTitle="Page Title"
        items={[
          { heading: 'Heading 1', content: 'Content 1', headingType: 'h2' },
          { heading: 'Heading 2', content: 'Content 2', headingType: 'h2' },
        ]}
      />,
    );
    expect(container.querySelector('#nav')).toHaveClass('usa-in-page-nav-container');
  });

  test('should render with custom titles', async () => {
    const { container } = render(
      <InPageNavigation
        id="nav"
        pageTitle="Page Title"
        navTitle="Navigation Title"
        items={[
          { heading: 'Heading 1', content: 'Content 1', headingType: 'h2' },
          { heading: 'Heading 2', content: 'Content 2', headingType: 'h2' },
        ]}
      />,
    );
    expect(container.querySelector('#nav')).toHaveClass('usa-in-page-nav-container');
    expect(container.querySelector('.usa-in-page-nav')).toHaveAttribute(
      'data-title-text',
      'Navigation Title',
    );
  });
});
