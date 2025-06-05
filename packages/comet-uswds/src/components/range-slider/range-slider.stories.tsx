import React from 'react';
import { Meta } from '@storybook/react-vite';
import { RangeSlider, RangeSliderProps } from './range-slider';

const meta: Meta<typeof RangeSlider> = {
  title: 'USWDS/Forms/Range Slider',
  component: RangeSlider,
  argTypes: {
    id: { required: true },
    name: { required: true },
    required: { control: 'boolean' },
  },
};
export default meta;

export const Standard = {
  args: {
    id: 'range-slider-1',
    name: 'range-slider-1',
    required: false,
    label: 'Range Slider',
    helperText: 'Select a value using the slider',
    minValue: '0',
    maxValue: '100',
    step: '10',
  },
  render: (args: RangeSliderProps) => (
    <RangeSlider
      id={args.id}
      name={args.name}
      required={args.required}
      label={args.label}
      helperText={args.helperText}
      defaultValue={args.defaultValue}
      minValue={args.minValue}
      maxValue={args.maxValue}
      step={args.step}
    />
  ),
};

export const DefaultValue = {
  args: {
    id: 'range-slider-2',
    name: 'range-slider-2',
    required: false,
    label: 'Range Slider',
    helperText: 'Select a value using the slider',
    minValue: '0',
    maxValue: '100',
    step: '5',
    defaultValue: '20',
  },
  render: (args: RangeSliderProps) => (
    <RangeSlider
      id={args.id}
      name={args.name}
      required={args.required}
      label={args.label}
      helperText={args.helperText}
      defaultValue={args.defaultValue}
      minValue={args.minValue}
      maxValue={args.maxValue}
      step={args.step}
    />
  ),
};
