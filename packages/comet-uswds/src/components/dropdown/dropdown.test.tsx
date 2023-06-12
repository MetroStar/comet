import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import userEvent from '@testing-library/user-event';
import Dropdown, { DropdownOption } from './dropdown';

describe('Dropdown', () => {
  const defaultId = 'dropdown1';
  const defaultName = 'dropdown-name';
  const loremWords = ['Lorem', 'Ipsum', 'Dolor', 'Sit'];
  const options = loremWords.map((word) => {
    return { value: word.toLowerCase(), label: word } as DropdownOption;
  });

  test('should render with no accessibility violations', async () => {
    const { container } = render(
      <Dropdown id={defaultId} name={defaultName} options={options} aria-label="dropdown" />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  test('should render a default dropdown successfully', () => {
    const { baseElement } = render(
      <Dropdown id={defaultId} name={defaultName} options={options} />,
    );
    expect(baseElement).toBeTruthy();
  });

  test('should render a default dropdown with 5 options', () => {
    const { baseElement } = render(
      <Dropdown id={defaultId} name={defaultName} options={options} />,
    );
    expect(baseElement.querySelectorAll('option')).toHaveLength(5);
  });

  test('should render a dropdown without default option', () => {
    const { baseElement } = render(
      <Dropdown id={defaultId} name={defaultName} options={options} defaultOption={null} />,
    );
    expect(baseElement).toBeTruthy();
    expect(baseElement.querySelectorAll('option')).toHaveLength(4);
  });

  test('should render a dropdown with the first real option selected', () => {
    const { baseElement } = render(
      <Dropdown
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
    const { baseElement } = render(
      <Dropdown id={defaultId} name={defaultName} options={options} />,
    );
    const selectElement = baseElement.querySelector('select') as HTMLSelectElement;
    await userEvent.selectOptions(selectElement, options[0].value as string);
    expect(baseElement.querySelector('option:checked')?.getAttribute('value')).toEqual(
      options[0].value,
    );
  });

  test('changing option should trigger onChanged event handler', async () => {
    const onChange = jest.fn();
    const { baseElement } = render(
      <Dropdown id={defaultId} name={defaultName} options={options} onChange={onChange} />,
    );
    const selectElement = baseElement.querySelector('select') as HTMLSelectElement;
    expect(onChange).toHaveBeenCalledTimes(0);
    await userEvent.selectOptions(selectElement, options[0].value as string);
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
