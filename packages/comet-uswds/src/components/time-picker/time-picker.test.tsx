import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import userEvent from '@testing-library/user-event';
import TimePicker from './time-picker';

describe('TimePicker', () => {
  const defaultId = 'input1';
  const defaultName = 'input-name';

  test('should render with no accessibility violations', async () => {
    const { container } = render(
      <TimePicker id={defaultId} name={defaultName} label="Pick time" />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  test('should render successfully', () => {
    const { baseElement } = render(
      <TimePicker id={defaultId} name={defaultName} label="Pick time" />,
    );
    expect(baseElement).toBeTruthy();
  });

  test('changing the value should trigger onChanged event handler', async () => {
    const onChange = vi.fn();
    const { baseElement } = render(
      <TimePicker id={defaultId} name={defaultName} label="Pick time" onChange={onChange} />,
    );
    const input = baseElement.querySelector('.usa-combo-box__input') as HTMLInputElement;

    expect(onChange).toHaveBeenCalledTimes(0);
    await userEvent.click(baseElement.querySelector('.usa-combo-box__toggle-list') as Element);
    await userEvent.click(baseElement.querySelector('li[data-value="00:00"]') as Element);
    expect(onChange).toHaveBeenCalledTimes(1);

    expect(input.value).toBe('12:00am');
  });

  test('should render uswds attributes when passed in', () => {
    const { baseElement } = render(
      <TimePicker
        id={defaultId}
        name={defaultName}
        label="Pick time"
        filter=".*{{query}}.*"
        minTime="9:00am"
        maxTime="5:00pm"
        step={60}
      />,
    );

    const timePickerElement = baseElement.querySelector('.usa-time-picker') as HTMLElement;

    expect(timePickerElement.dataset.minTime).toBe('9:00am');
    expect(timePickerElement.dataset.maxTime).toBe('5:00pm');
    expect(timePickerElement.dataset.step).toBe('60');
  });
});
