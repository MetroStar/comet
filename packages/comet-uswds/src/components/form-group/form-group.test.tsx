import { render } from '@testing-library/react';
import FormGroup from './form-group';
import TextInput from '../text-input';
import React from 'react';

describe('FormGroup', () => {
  test('should render successfully', () => {
    const { baseElement } = render(<FormGroup>Some Form</FormGroup>);
    expect(baseElement).toBeTruthy();
  });

  test('should render a standard form group successfully', () => {
    const { baseElement } = render(<FormGroup>Some Form</FormGroup>);
    const formGroup = baseElement.querySelector('.usa-form-group');
    expect(formGroup).toBeTruthy();
  });

  test('should render a form group for a fieldContol', () => {
    const { baseElement } = render(<FormGroup fieldControl={<></>} />);
    const formGroup = baseElement.querySelector('.usa-form-group');
    expect(formGroup).toBeTruthy();
  });

  test('should render empty when invalid fieldElement', () => {
    const { baseElement } = render(<FormGroup fieldControl={3} />);
    expect(baseElement).toBeTruthy();
  });

  test('should not render form group when no children or fieldControls provided', () => {
    const { baseElement } = render(<FormGroup />);
    const formGroup = baseElement.querySelector('.usa-form-group');
    expect(formGroup).toBeFalsy();
  });

  test('should render with form group props', () => {
    const { baseElement } = render(
      <FormGroup
        id="form-group-1"
        fieldControl={<TextInput id="text-input-1" name="text-input-1" />}
        required
        label="label"
        helperText="helper text"
        errors="errors"
        validationStatus="error"
      />,
    );
    const formGroup = baseElement.querySelector('.usa-form-group');
    expect(formGroup).toBeTruthy();
  });

  test('should render multiple form groups successfully', () => {
    const { baseElement } = render(
      <>
        <FormGroup>Group 1</FormGroup>
        <FormGroup>Group 2</FormGroup>
      </>,
    );
    const formGroup = baseElement.querySelectorAll('.usa-form-group');
    expect(formGroup).toHaveLength(2);
  });

  test('should render a standard form group with errors successfully', () => {
    const errors: string[] = ['error1'];
    const { baseElement } = render(<FormGroup errors={errors}>Some Form</FormGroup>);
    const formGroup = baseElement.querySelector('.usa-form-group--error');
    expect(formGroup).toBeTruthy();
  });

  test('should extract fieldControlId from children when fieldControl has usa-combo-box class', () => {
    const mockChild = <input id="child-input" />;
    const mockFieldControl = <div className="usa-combo-box">{mockChild}</div>;

    const { baseElement } = render(
      <FormGroup id="form-group-1" fieldControl={mockFieldControl} label="Test Label" />,
    );

    const label = baseElement.querySelector('label');
    expect(label).toHaveAttribute('for', 'child-input');
  });

  test('should extract fieldControlId from children when fieldControl has usa-time-picker class', () => {
    const mockChild = <input id="time-input" />;
    const mockFieldControl = <div className="usa-time-picker">{mockChild}</div>;

    const { baseElement } = render(
      <FormGroup id="form-group-1" fieldControl={mockFieldControl} label="Test Label" />,
    );

    const label = baseElement.querySelector('label');
    expect(label).toHaveAttribute('for', 'time-input');
  });

  test('should extract fieldControlId from children when fieldControl has usa-date-picker class', () => {
    const mockChild = <input id="date-input" />;
    const mockFieldControl = <div className="usa-date-picker">{mockChild}</div>;

    const { baseElement } = render(
      <FormGroup id="form-group-1" fieldControl={mockFieldControl} label="Test Label" />,
    );

    const label = baseElement.querySelector('label');
    expect(label).toHaveAttribute('for', 'date-input');
  });

  test('should handle fieldControl with special class but children without id', () => {
    const mockChild = <input name="no-id-input" />;
    const mockFieldControl = <div className="usa-combo-box">{mockChild}</div>;

    const { baseElement } = render(
      <FormGroup id="form-group-1" fieldControl={mockFieldControl} label="Test Label" />,
    );

    const label = baseElement.querySelector('label');
    // Should not have for attribute when child has no id
    expect(label).not.toHaveAttribute('for');
  });

  test('should handle fieldControl with special class but children is not a valid React element', () => {
    const mockFieldControl = (
      <div className="usa-combo-box">{'just a string, not a React element'}</div>
    );

    const { baseElement } = render(
      <FormGroup id="form-group-1" fieldControl={mockFieldControl} label="Test Label" />,
    );

    const label = baseElement.querySelector('label');
    // Should not have for attribute when children is not a valid React element
    expect(label).not.toHaveAttribute('for');
  });

  test('should add aria-describedby when fieldControl does not have special wrapper classes', () => {
    const mockFieldControl = <input id="regular-input" name="regular-input" />;

    const { baseElement } = render(
      <FormGroup
        id="form-group-1"
        fieldControl={mockFieldControl}
        label="Test Label"
        helperText="Helper text"
      />,
    );

    const input = baseElement.querySelector('input');
    expect(input).toHaveAttribute('aria-describedby', 'form-group-1-helper-text');

    const label = baseElement.querySelector('label');
    expect(label).toHaveAttribute('for', 'regular-input');
  });

  test('should handle fieldControl with no className', () => {
    const mockFieldControl = <input id="no-class-input" />;

    const { baseElement } = render(
      <FormGroup
        id="form-group-1"
        fieldControl={mockFieldControl}
        label="Test Label"
        helperText="Helper text"
      />,
    );

    const input = baseElement.querySelector('input');
    expect(input).toHaveAttribute('aria-describedby', 'form-group-1-helper-text');

    const label = baseElement.querySelector('label');
    expect(label).toHaveAttribute('for', 'no-class-input');
  });
});
