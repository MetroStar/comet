import { Meta, StoryFn } from '@storybook/react';
import React, { FormEvent, useState } from 'react';
import { Form, FormProps } from './form';
import { Button, TextInput } from '../..';

const meta: Meta<typeof Form> = {
  title: 'USWDS/Forms/Form',
  component: Form,
};
export default meta;

const Template: StoryFn<typeof Form> = (args: FormProps) => (
  <Form {...args} className="width-tablet">
    <TextInput
      id="text-input-1"
      name="text-input-1"
      label="Text Input"
      helperText="Enter your text"
    />
  </Form>
);

export const Standard = Template.bind({
  id: 'basic-form',
  isLarge: false,
});

const FormWrapper: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [formSubmittedLabel, setFormSubmittedLabel] = useState('');

  const validateName = (): void => {
    if (name === '') {
      setNameError('This field is required');
    } else {
      setNameError('');
    }
  };

  const validateEmail = (): void => {
    if (email === '') {
      setEmailError('This field is required');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    validateName();
    validateEmail();
    if (name === '' || email === '') {
      setFormSubmittedLabel('Form submission failed!');
    } else {
      setFormSubmittedLabel(`Form submitted successfully with Name: ${name}`);
    }
  };

  return (
    <Form id="contact-form" onSubmit={handleSubmit} className="width-tablet padding-left-1">
      <TextInput
        id="name"
        name="name"
        required
        label="Name"
        helperText="Enter your full name (first and last)"
        errors={nameError}
        validationStatus={nameError ? 'error' : undefined}
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          validateName();
        }}
      />
      <TextInput
        id="email"
        name="email"
        required
        label="Email Address"
        helperText="Enter your email address"
        errors={emailError}
        validationStatus={emailError ? 'error' : undefined}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          validateEmail();
        }}
      />
      <TextInput
        id="phone"
        name="phone"
        label="Phone Number"
        helperText="Enter your phone number"
        mask="phone_number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <Button id="submit" type="submit">
        Submit
      </Button>
      <span className="text-error padding-left-2 padding-top-1">{formSubmittedLabel}</span>
    </Form>
  );
};

const WrapperTemplate: StoryFn<typeof FormWrapper> = () => <FormWrapper />;

export const ContactForm = WrapperTemplate.bind({});
