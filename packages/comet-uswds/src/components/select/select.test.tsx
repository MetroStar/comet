import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import userEvent from '@testing-library/user-event';
import Select, { SelectOption, SelectOptionProps } from './select';

describe('Select', () => {
  const defaultId = 'select-1';
  const defaultName = 'select-name';
  const loremWords = ['Lorem', 'Ipsum', 'Dolor', 'Sit'];
  const options = loremWords.map((word) => {
    return { value: word.toLowerCase(), label: word } as SelectOptionProps;
  });

  test('should render with no accessibility violations', async () => {
    const { container } = render(
      <Select id={defaultId} name={defaultName} options={options} aria-label="dropdown" />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  test('should render a default select successfully', () => {
    const { baseElement } = render(<Select id={defaultId} name={defaultName} options={options} />);
    expect(baseElement).toBeTruthy();
  });

  test('should render a default select with 5 options', () => {
    const { baseElement } = render(<Select id={defaultId} name={defaultName} options={options} />);
    expect(baseElement.querySelectorAll('option')).toHaveLength(5);
  });

  test('should render a select without default option', () => {
    const { baseElement } = render(
      <Select id={defaultId} name={defaultName} options={options} defaultOption={null} />,
    );
    expect(baseElement).toBeTruthy();
    expect(baseElement.querySelectorAll('option')).toHaveLength(4);
  });

  test('should render a select with the first real option selected', () => {
    const { baseElement } = render(
      <Select
        id={defaultId}
        name={defaultName}
        defaultValue={options[0].value}
        options={options}
      />,
    );
    expect(baseElement).toBeTruthy();
    expect(baseElement.querySelector('option:checked')?.getAttribute('value')).toEqual(
      options[0].value,
    );
  });

  test('should change selected option to first real option', async () => {
    const { baseElement } = render(<Select id={defaultId} name={defaultName} options={options} />);
    const selectElement = baseElement.querySelector('select') as HTMLSelectElement;
    await userEvent.selectOptions(selectElement, options[0].value as string);
    expect(baseElement.querySelector('option:checked')?.getAttribute('value')).toEqual(
      options[0].value,
    );
  });

  test('changing option should trigger onChanged event handler', async () => {
    const onChange = vi.fn();
    const { baseElement } = render(
      <Select id={defaultId} name={defaultName} options={options} onChange={onChange} />,
    );
    const selectElement = baseElement.querySelector('select') as HTMLSelectElement;
    expect(onChange).toHaveBeenCalledTimes(0);
    await userEvent.selectOptions(selectElement, options[0].value as string);
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  test('should render a select with children successfully', () => {
    const { baseElement } = render(
      <Select id={defaultId} name={defaultName}>
        <SelectOption value="1" label="Item 1" />
        <SelectOption value="2" label="Item 2" />
        <SelectOption value="3" label="Item 3" />
      </Select>,
    );
    expect(baseElement).toBeTruthy();
  });

  test('should not render when no items or children are provided', () => {
    const { container } = render(<Select id="select" />);
    expect(container.querySelector('#select')).toBeFalsy();
  });
});
