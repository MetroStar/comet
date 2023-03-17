import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import RadioButton, { RadioButtonData, RadioButtonGroup } from './radio-button';

describe('RadioButton', () => {
  const defaultId = 'radio-button1';
  const defaultGroupId = 'radio-button-group1';
  const radioButtonName = 'lorem-radio-button';
  const loremWords = ['Lorem', 'Ipsum', 'Dolor', 'Sit'];
  it('should render a standard radio button successfully', () => {
    const { baseElement } = render(
      <RadioButton id={defaultId} name={radioButtonName} label="Lorem" value="lorem" />,
    );
    expect(baseElement).toBeTruthy();
    const radioButtonInput = baseElement.querySelector('.usa-radio__input') as HTMLInputElement;
    expect(radioButtonInput.checked).toBeFalsy();
  });

  it('should render a standard checked radio button successfully', () => {
    const { baseElement } = render(
      <RadioButton
        id={defaultId}
        name={radioButtonName}
        label="Lorem"
        value="lorem"
        checked={true}
      />,
    );
    expect(baseElement).toBeTruthy();
    const radioButtonInput = baseElement.querySelector('.usa-radio__input') as HTMLInputElement;
    expect(radioButtonInput.checked).toBeTruthy();
  });

  it('should render a tile radio button successfully', () => {
    const { baseElement } = render(
      <RadioButton
        id={defaultId}
        name={radioButtonName}
        label="Lorem"
        value="lorem"
        isTile={true}
      />,
    );
    expect(baseElement).toBeTruthy();
    expect(baseElement.querySelector('.usa-radio__input--tile')).toBeTruthy();
  });

  it('should trigger change event when radio button checked', () => {
    const onCheck = jest.fn();
    const { baseElement } = render(
      <RadioButton
        id={defaultId}
        name={radioButtonName}
        label="Lorem"
        value="lorem"
        onChange={onCheck}
      />,
    );
    expect(baseElement).toBeTruthy();
    const radioButtonInput = baseElement.querySelector('.usa-radio__input') as HTMLInputElement;
    expect(radioButtonInput.checked).toBeFalsy();
    expect(onCheck).toBeCalledTimes(0);
    fireEvent.click(radioButtonInput);
    expect(radioButtonInput.checked).toBeTruthy();
    expect(onCheck).toBeCalledTimes(1);
  });

  it('should trigger click event when radio button checked', () => {
    const onClick = jest.fn();
    const { baseElement } = render(
      <RadioButton
        id={defaultId}
        name={radioButtonName}
        label="Lorem"
        value="lorem"
        onClick={onClick}
      />,
    );
    expect(baseElement).toBeTruthy();
    const radioButtonInput = baseElement.querySelector('.usa-radio__input') as HTMLInputElement;
    expect(radioButtonInput.checked).toBeFalsy();
    expect(onClick).toBeCalledTimes(0);
    fireEvent.click(radioButtonInput);
    expect(radioButtonInput.checked).toBeTruthy();
    expect(onClick).toBeCalledTimes(1);
  });

  it('should render a standard radio button group successfully', () => {
    const { baseElement } = render(
      <RadioButtonGroup
        id={defaultGroupId}
        name={radioButtonName}
        data={loremWords.map((word, wordIndex) => {
          return {
            label: word,
            value: word.toLowerCase(),
            checked: wordIndex === 0,
          } as RadioButtonData;
        })}
      />,
    );
    expect(baseElement).toBeTruthy();
    const radioButtonInputs = baseElement.querySelectorAll(
      '.usa-radio__input',
    ) as NodeListOf<HTMLInputElement>;
    radioButtonInputs.forEach((radioButtonInput, index) => {
      if (index === 0) expect(radioButtonInput.checked).toBeTruthy();
      else expect(radioButtonInput.checked).toBeFalsy();
    });
  });

  it('should render a tiled radio button group successfully', () => {
    const { baseElement } = render(
      <RadioButtonGroup
        id={defaultGroupId}
        name={radioButtonName}
        data={loremWords.map((word, wordIndex) => {
          return {
            label: word,
            value: word.toLowerCase(),
            checked: wordIndex === 0,
          } as RadioButtonData;
        })}
        areTiles={true}
      />,
    );
    expect(baseElement).toBeTruthy();
    expect(baseElement.querySelectorAll('.usa-radio__input--tile')).toHaveLength(loremWords.length);
  });

  it('should trigger change event when radio button in group checked', () => {
    const onCheck = jest.fn();
    const { baseElement } = render(
      <RadioButtonGroup
        id={defaultGroupId}
        name={radioButtonName}
        data={loremWords.map((word, wordIndex) => {
          return {
            label: word,
            value: word.toLowerCase(),
            checked: wordIndex === 0,
          } as RadioButtonData;
        })}
        onChange={onCheck}
      />,
    );
    expect(baseElement).toBeTruthy();
    const radioButtonInputs = baseElement.querySelectorAll(
      '.usa-radio__input',
    ) as NodeListOf<HTMLInputElement>;

    expect(radioButtonInputs[0].checked).toBeTruthy();
    expect(onCheck).toBeCalledTimes(0);
    fireEvent.click(radioButtonInputs[0]);
    expect(radioButtonInputs[0].checked).toBeTruthy();
    expect(onCheck).toBeCalledTimes(0);

    expect(radioButtonInputs[1].checked).toBeFalsy();
    expect(onCheck).toBeCalledTimes(0);
    fireEvent.click(radioButtonInputs[1]);
    expect(radioButtonInputs[1].checked).toBeTruthy();
    expect(onCheck).toBeCalledTimes(1);
  });

  it('should trigger click event when radio button in group clicked', () => {
    const onClick = jest.fn();
    const { baseElement } = render(
      <RadioButtonGroup
        id={defaultGroupId}
        name={radioButtonName}
        data={loremWords.map((word, wordIndex) => {
          return {
            label: word,
            value: word.toLowerCase(),
            checked: wordIndex === 0,
          } as RadioButtonData;
        })}
        onClick={onClick}
      />,
    );
    expect(baseElement).toBeTruthy();
    const radioButtonInputs = baseElement.querySelectorAll(
      '.usa-radio__input',
    ) as NodeListOf<HTMLInputElement>;

    expect(radioButtonInputs[0].checked).toBeTruthy();
    expect(onClick).toBeCalledTimes(0);
    fireEvent.click(radioButtonInputs[0]);
    expect(radioButtonInputs[0].checked).toBeTruthy();
    expect(onClick).toBeCalledTimes(1);

    expect(radioButtonInputs[1].checked).toBeFalsy();
    expect(onClick).toBeCalledTimes(1);
    fireEvent.click(radioButtonInputs[1]);
    expect(radioButtonInputs[1].checked).toBeTruthy();
    expect(onClick).toBeCalledTimes(2);
  });
});
