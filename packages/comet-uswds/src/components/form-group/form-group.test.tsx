import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import FormGroup from './form-group';
import TextInput from '../text-input';

describe('FormGroup', () => {
  test('should render with no accessibility violations', async () => {
    const { container } = render(<FormGroup>Some Form</FormGroup>);
    expect(await axe(container)).toHaveNoViolations();
  });

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
});
