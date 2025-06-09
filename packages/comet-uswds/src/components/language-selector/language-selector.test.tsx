import { render, waitFor } from '@testing-library/react';
import LanguageSelector from './language-selector';

describe('LanguageSelector', () => {
  test('should render a default language selector', async () => {
    const { container } = render(
      <LanguageSelector
        id="selector"
        items={[
          { label: 'English', attr: 'en' },
          { label: 'Español', attr: 'es' },
        ]}
      />,
    );
    expect(container.querySelector('#selector')).toHaveClass('usa-language-container');
    expect(container.querySelector('#selector button')).toHaveTextContent('English');
  });

  test('should render a language selector with 3 options', async () => {
    const { container } = render(
      <LanguageSelector
        id="selector"
        items={[
          { label: 'English', attr: 'en' },
          { label: 'Español', attr: 'es' },
          { label: 'Français', attr: 'fr' },
        ]}
      />,
    );
    expect(container.querySelector('#selector')).toHaveClass('usa-language-container');
    expect(container.querySelector('#selector button')).toHaveTextContent('Languages');
  });

  test('should render an unstyled language selector', async () => {
    const { container } = render(
      <LanguageSelector
        id="selector"
        items={[{ label: 'English', attr: 'en' }]}
        variant="unstyled"
      />,
    );
    expect(container.querySelector('#selector')).toHaveClass('usa-language-container');
    expect(container.querySelector('button')).toHaveClass('usa-button--unstyled');
  });

  test('should render a small language selector', async () => {
    const { container } = render(
      <LanguageSelector id="selector" items={[{ label: 'English', attr: 'en' }]} size="small" />,
    );
    expect(container.querySelector('#selector')).toHaveClass('usa-language-container');
    expect(container.querySelector('#selector')).toHaveClass('usa-language--small');
  });

  test('should render a language selector with a custom onChange handler for default items', async () => {
    const handleChange = vi.fn();
    const { container } = render(
      <LanguageSelector
        id="selector"
        items={[
          { label: 'English', attr: 'en', onChange: handleChange },
          { label: 'Español', attr: 'es', onChange: handleChange },
        ]}
      />,
    );
    const button = container.querySelector('button');
    if (button) {
      button.click();
      await waitFor(async () => {
        expect(handleChange).toHaveBeenCalledTimes(1);
      });

      button.click();
      await waitFor(async () => {
        expect(handleChange).toHaveBeenCalledTimes(2);
      });

      button.click();
      await waitFor(async () => {
        expect(handleChange).toHaveBeenCalledTimes(3);
      });
    }
  });

  test('should render a language selector with a custom onChange handler for selector with 3 items', async () => {
    const handleChange = vi.fn();
    const { container } = render(
      <LanguageSelector
        id="selector"
        items={[
          { label: 'English', attr: 'en', onChange: handleChange },
          { label: 'Español', localLabel: 'Spanish', attr: 'es', onChange: handleChange },
          { label: 'Français', localLabel: 'French', attr: 'fr', onChange: handleChange },
        ]}
      />,
    );
    const button = container.querySelector('button');
    if (button) {
      button.click();
      await waitFor(async () => {
        const anchor = container.querySelector('a');
        if (anchor) {
          anchor.click();
          await waitFor(async () => {
            expect(handleChange).toHaveBeenCalledTimes(1);
          });
        }
      });
    }
  });
});
