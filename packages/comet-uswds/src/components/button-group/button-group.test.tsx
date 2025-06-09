import { render } from '@testing-library/react';
import { Button } from '../button/button';
import ButtonGroup from './button-group';

describe('ButtonGroup', () => {
  describe('Standard', () => {
    test('should render successfully', () => {
      const { baseElement } = render(<ButtonGroup>Some button</ButtonGroup>);
      expect(baseElement).toBeTruthy();
    });

    test('should render a button group with 1 button successfully', () => {
      const { baseElement } = render(
        <ButtonGroup>
          <Button id="button1">Button 1</Button>
        </ButtonGroup>,
      );
      const buttonGroup = baseElement.querySelector('.usa-button-group');
      const buttonGroupitems = baseElement.querySelectorAll('.usa-button-group__item');
      expect(buttonGroup).toBeTruthy();
      expect(buttonGroupitems).toHaveLength(1);
    });

    test('should render a button group with multiple buttons successfully', () => {
      const { baseElement } = render(
        <ButtonGroup>
          <Button id="button1">Button 1</Button>
          <Button id="button2">Button 2</Button>
        </ButtonGroup>,
      );
      const buttonGroup = baseElement.querySelector('.usa-button-group');
      const buttonGroupitems = baseElement.querySelectorAll('.usa-button-group__item');
      expect(buttonGroup).toBeTruthy();
      expect(buttonGroupitems).toHaveLength(2);
    });
  });

  describe('Segmented', () => {
    test('should render a button group with segmented buttons successfully', async () => {
      const { baseElement } = render(
        <ButtonGroup type="segmented">
          <Button id="button1">Button 1</Button>
          <Button id="button2">Button 2</Button>
        </ButtonGroup>,
      );
      const buttonGroup = baseElement.querySelector(
        '.usa-button-group.usa-button-group--segmented',
      );
      expect(buttonGroup).toBeTruthy();
    });
  });
});
