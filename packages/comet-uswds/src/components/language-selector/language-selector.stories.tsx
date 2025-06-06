import React from 'react';
import { Meta } from '@storybook/react-vite';
import { LanguageSelector } from '../../index';
import { LanguageSelectorProps } from './language-selector';

const meta: Meta<typeof LanguageSelector> = {
  title: 'USWDS/Language Selector',
  component: LanguageSelector,
  argTypes: {
    id: { required: true },
    variant: { control: { type: 'select', options: ['default', 'unstyled'] } },
    size: { control: { type: 'select', options: ['default', 'small'] } },
  },
};
export default meta;

const handleChange = (attr: string) => {
  // eslint-disable-next-line no-console
  console.log(`${attr} selected`);
};

export const Default = {
  args: {
    id: 'selector-1',
    items: [
      { label: 'English', attr: 'en', onChange: () => handleChange('en') },
      { label: 'Español', attr: 'es', onChange: () => handleChange('es') },
    ],
    variant: 'default',
    size: 'default',
  },
  render: (args: LanguageSelectorProps) => <LanguageSelector {...args} />,
};

export const ThreeOrMore = {
  args: {
    id: 'selector-2',
    items: [
      { label: 'English', attr: 'en', onChange: () => handleChange('en') },
      {
        label: 'Español',
        localLabel: 'Spanish',
        attr: 'es',
        onChange: () => handleChange('es'),
      },
      {
        label: 'Français',
        localLabel: 'French',
        attr: 'fr',
        onChange: () => handleChange('fr'),
      },
    ],
    variant: 'default',
    size: 'small',
  },
  render: (args: LanguageSelectorProps) => <LanguageSelector {...args} />,
};
