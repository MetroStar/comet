import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { axe } from 'jest-axe';
import Checkbox, { CheckboxData, CheckboxGroup } from './checkbox';

describe('Checkbox', () => {
  const defaultId = 'checkbox1';
  const defaultGroupId = 'checkbox-group1';
  const checkboxName = 'lorem-checkbox';
  const loremWords = ['Lorem', 'Ipsum', 'Dolor', 'Sit'];

  test('should render with no accessibility violations', async () => {
    const { container } = render(
      <Checkbox id={defaultId} name={checkboxName} label="Lorem" value="lorem" />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  test('should render a standard checkbox successfully', () => {
    const { baseElement } = render(
      <Checkbox id={defaultId} name={checkboxName} label="Lorem" value="lorem" />,
    );
    expect(baseElement).toBeTruthy();
    const checkboxInput = baseElement.querySelector('.usa-checkbox__input') as HTMLInputElement;
    expect(checkboxInput.checked).toBeFalsy();
  });

  test('should render a standard checked checkbox successfully', () => {
    const { baseElement } = render(
      <Checkbox id={defaultId} name={checkboxName} label="Lorem" value="lorem" checked={true} />,
    );
    expect(baseElement).toBeTruthy();
    const checkboxInput = baseElement.querySelector('.usa-checkbox__input') as HTMLInputElement;
    expect(checkboxInput.checked).toBeTruthy();
  });

  test('should render a tile checkbox successfully', () => {
    const { baseElement } = render(
      <Checkbox id={defaultId} name={checkboxName} label="Lorem" value="lorem" isTile={true} />,
    );
    expect(baseElement).toBeTruthy();
    expect(baseElement.querySelector('.usa-checkbox__input--tile')).toBeTruthy();
  });

  test('should trigger change event when checkbox checked', () => {
    const onCheck = vi.fn();
    const { baseElement } = render(
      <Checkbox
        id={defaultId}
        name={checkboxName}
        label="Lorem"
        value="lorem"
        onChange={onCheck}
      />,
    );
    expect(baseElement).toBeTruthy();
    const checkboxInput = baseElement.querySelector('.usa-checkbox__input') as HTMLInputElement;
    expect(checkboxInput.checked).toBeFalsy();
    expect(onCheck).toBeCalledTimes(0);
    fireEvent.click(checkboxInput);
    expect(checkboxInput.checked).toBeTruthy();
    expect(onCheck).toBeCalledTimes(1);
  });

  test('should trigger click event when checkbox checked', () => {
    const onClick = vi.fn();
    const { baseElement } = render(
      <Checkbox id={defaultId} name={checkboxName} label="Lorem" value="lorem" onClick={onClick} />,
    );
    expect(baseElement).toBeTruthy();
    const checkboxInput = baseElement.querySelector('.usa-checkbox__input') as HTMLInputElement;
    expect(checkboxInput.checked).toBeFalsy();
    expect(onClick).toBeCalledTimes(0);
    fireEvent.click(checkboxInput);
    expect(checkboxInput.checked).toBeTruthy();
    expect(onClick).toBeCalledTimes(1);
  });

  test('should render a standard checkbox group successfully', () => {
    const { baseElement } = render(
      <CheckboxGroup
        id={defaultGroupId}
        name={checkboxName}
        data={loremWords.map((word, wordIndex) => {
          return {
            label: word,
            value: word.toLowerCase(),
            checked: wordIndex === 0,
          } as CheckboxData;
        })}
      />,
    );
    expect(baseElement).toBeTruthy();
    const checkboxInputs = baseElement.querySelectorAll('.usa-checkbox__input');
    const inputs = Array.from(checkboxInputs) as HTMLInputElement[];
    inputs.forEach((checkboxInput, index) => {
      if (index === 0) expect(checkboxInput.checked).toBeTruthy();
      else expect(checkboxInput.checked).toBeFalsy();
    });
  });

  test('should render a tiled checkbox group successfully', () => {
    const { baseElement } = render(
      <CheckboxGroup
        id={defaultGroupId}
        name={checkboxName}
        data={loremWords.map((word, wordIndex) => {
          return {
            label: word,
            value: word.toLowerCase(),
            checked: wordIndex === 0,
          } as CheckboxData;
        })}
        areTiles={true}
      />,
    );
    expect(baseElement).toBeTruthy();
    expect(baseElement.querySelectorAll('.usa-checkbox__input--tile')).toHaveLength(
      loremWords.length,
    );
  });

  test('should trigger change event when checkbox in group checked', () => {
    const onCheck = vi.fn();
    const { baseElement } = render(
      <CheckboxGroup
        id={defaultGroupId}
        name={checkboxName}
        data={loremWords.map((word, wordIndex) => {
          return {
            label: word,
            value: word.toLowerCase(),
            defaultChecked: wordIndex === 0,
          } as CheckboxData;
        })}
        onChange={onCheck}
      />,
    );
    expect(baseElement).toBeTruthy();
    const checkboxInputs = baseElement.querySelectorAll('.usa-checkbox__input');
    const inputs = Array.from(checkboxInputs) as HTMLInputElement[];

    expect(inputs[0].checked).toBeTruthy();
    expect(onCheck).toBeCalledTimes(0);
    fireEvent.click(checkboxInputs[0]);
    expect(inputs[0].checked).toBeFalsy();
    expect(onCheck).toBeCalledTimes(1);

    expect(inputs[1].checked).toBeFalsy();
    expect(onCheck).toBeCalledTimes(1);
    fireEvent.click(checkboxInputs[1]);
    expect(inputs[1].checked).toBeTruthy();
    expect(onCheck).toBeCalledTimes(2);
  });

  test('should trigger click event when checkbox in group clicked', () => {
    const onClick = vi.fn();
    const { baseElement } = render(
      <CheckboxGroup
        id={defaultGroupId}
        name={checkboxName}
        data={loremWords.map((word, wordIndex) => {
          return {
            label: word,
            value: word.toLowerCase(),
            defaultChecked: wordIndex === 0,
          } as CheckboxData;
        })}
        onClick={onClick}
      />,
    );
    expect(baseElement).toBeTruthy();
    const checkboxInputs = baseElement.querySelectorAll('.usa-checkbox__input');
    const inputs = Array.from(checkboxInputs) as HTMLInputElement[];

    expect(inputs[0].checked).toBeTruthy();
    expect(onClick).toBeCalledTimes(0);
    fireEvent.click(checkboxInputs[0]);
    expect(inputs[0].checked).toBeFalsy();
    expect(onClick).toBeCalledTimes(1);

    expect(inputs[1].checked).toBeFalsy();
    expect(onClick).toBeCalledTimes(1);
    fireEvent.click(checkboxInputs[1]);
    expect(inputs[1].checked).toBeTruthy();
    expect(onClick).toBeCalledTimes(2);
  });
});
