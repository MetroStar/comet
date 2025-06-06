import React from 'react';
import { Meta } from '@storybook/react-vite';
import { FormGroup, FormGroupProps } from './form-group';
import { TextInput, Label, HelperText, ErrorMessages } from '../..';

const meta: Meta<typeof FormGroup> = {
  title: 'USWDS/Forms/Form Group',
  component: FormGroup,
};
export default meta;

export const Standard = {
  args: {
    id: 'form-group-1',
  },
  render: (args: FormGroupProps) => (
    <FormGroup id={args.id} errors={args.errors}>
      <Label htmlFor="input1">Name</Label>
      <HelperText>Enter your full name</HelperText>
      <ErrorMessages errors={args.errors} />
      <TextInput id="input1" name="input1" />
    </FormGroup>
  ),
};

export const WithErrors = {
  args: {
    id: 'form-group-2',
    errors: 'some error',
  },
  render: (args: FormGroupProps) => (
    <FormGroup id={args.id} errors={args.errors}>
      <Label htmlFor="input1">Name</Label>
      <HelperText>Enter your full name</HelperText>
      <ErrorMessages errors={args.errors} />
      <TextInput id="input1" name="input1" />
    </FormGroup>
  ),
};
