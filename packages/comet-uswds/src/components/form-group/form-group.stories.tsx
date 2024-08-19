import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { FormGroup, FormGroupProps } from './form-group';
import { TextInput, Label, HelperText, ErrorMessages } from '../..';

const meta: Meta<typeof FormGroup> = {
  title: 'USWDS/Forms/Form Group',
  component: FormGroup,
};
export default meta;

const Template: StoryFn<typeof FormGroup> = (args: FormGroupProps) => (
  <div className="padding-left-1">
    <FormGroup id={args.id} errors={args.errors}>
      <Label htmlFor="input1">Name</Label>
      <HelperText>Enter your full name</HelperText>
      <ErrorMessages errors={args.errors} />
      <TextInput id="input1" name="input1" />
    </FormGroup>
  </div>
);

export const Standard = Template.bind({});
Standard.args = {
  id: 'form-group-1',
};

export const WithErrors = Template.bind({});
WithErrors.args = {
  id: 'form-group-2',
  errors: 'some error',
};
