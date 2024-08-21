import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import userEvent from '@testing-library/user-event';
import ComboBox, { ComboBoxOptionProps } from './combo-box';

describe('ComboBox', () => {
  const defaultId = 'combo-box1';
  const defaultName = 'combo-box-name';
  const loremWords = ['Lorem', 'Ipsum', 'Dolor', 'Sit'];
  const options = loremWords.map((word) => {
    return { value: word.toLowerCase(), label: word } as ComboBoxOptionProps;
  });

  test('should render with no accessibility violations', async () => {
    const { container } = render(
      <ComboBox id={defaultId} name={defaultName} options={options} label="Pick option" />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  test('should render a default combo box successfully', () => {
    const { baseElement } = render(
      <ComboBox id={defaultId} name={defaultName} options={options} label="Pick option" />,
    );
    expect(baseElement).toBeTruthy();
    expect(baseElement.querySelector('.usa-combo-box__input')).toBeTruthy();
  });

  test('should render a default combo box with 4 options', async () => {
    const { baseElement } = render(
      <ComboBox id={defaultId} name={defaultName} options={options} label="Pick option" />,
    );
    await userEvent.click(baseElement.querySelector('.usa-combo-box__toggle-list') as Element);
    expect(baseElement.querySelectorAll('.usa-combo-box__list li')).toHaveLength(4);
  });

  test('should render a combo box with the first real option selected', () => {
    const { baseElement } = render(
      <ComboBox
        id={defaultId}
        name={defaultName}
        defaultValue={options[0].value}
        options={options}
        label="Pick option"
      />,
    );
    expect(baseElement).toBeTruthy();
    expect(baseElement.querySelector('option:checked')?.getAttribute('value')).toEqual(
      options[0].value,
    );
  });

  test('should change selected option to first real option', async () => {
    const { baseElement } = render(
      <ComboBox id={defaultId} name={defaultName} options={options} label="Pick option" />,
    );
    await userEvent.click(baseElement.querySelector('.usa-combo-box__toggle-list') as Element);
    await userEvent.click(baseElement.querySelector('.usa-combo-box__list li') as Element);
    expect(baseElement.querySelector('option:checked')?.getAttribute('value')).toEqual(
      options[0].value,
    );
  });

  test('should show a placeholder on the combo box', () => {
    const { baseElement } = render(
      <ComboBox
        id={defaultId}
        name={defaultName}
        options={options}
        placeholder="- select option -"
        label="Pick option"
      />,
    );

    expect(baseElement.querySelector('.usa-combo-box__input')?.getAttribute('placeholder')).toEqual(
      '- select option -',
    );
  });

  test('changing option should trigger onChanged event handler', async () => {
    const onChange = vi.fn();
    const { baseElement } = render(
      <ComboBox
        id={defaultId}
        name={defaultName}
        options={options}
        onChange={onChange}
        label="Pick option"
      />,
    );
    expect(onChange).toHaveBeenCalledTimes(0);
    await userEvent.click(baseElement.querySelector('.usa-combo-box__toggle-list') as Element);
    await userEvent.click(baseElement.querySelector('.usa-combo-box__list li') as Element);
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
