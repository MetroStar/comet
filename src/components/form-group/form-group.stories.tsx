import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FormGroup, FormGroupProps } from '../form-group/form-group';
import { TextInput, Label } from '../..';

const meta: ComponentMeta<typeof FormGroup> = {
  title: 'Components/Forms/Form Group',
  component: FormGroup,
};
export default meta;

const Template: ComponentStory<typeof FormGroup> = (args: FormGroupProps) => (
  <div className="padding-left-1">
    <FormGroup id={args.id} errors={args.errors}>
      <Label htmlFor="input1">Name</Label>
      <TextInput id="input1" name="input1" />
    </FormGroup>
  </div>
);

export const Standard = Template.bind({});
Standard.args = {
  id: 'form-group-1',
  errors: [],
};

export const WithErrors = Template.bind({});
WithErrors.args = {
  id: 'form-group-2',
  errors: ['some error'],
};
