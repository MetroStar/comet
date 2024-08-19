import { Meta, StoryFn } from '@storybook/react';
import React, { FormEvent, useState } from 'react';
import { Form, FormProps } from './form';
import { Alert, Button, TextInput } from '../..';

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
  const [isValid, setIsValid] = useState(false);

  const validateName = (): boolean => {
    if (name === '') {
      setNameError('This field is required');
      return false;
    } else {
      setNameError('');
      return true;
    }
  };

  const validateEmail = (): boolean => {
    if (email === '') {
      setEmailError('This field is required');
      return false;
    } else {
      setEmailError('');
      return true;
    }
  };

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    if (!isNameValid || !isEmailValid) {
      setIsValid(false);
    } else {
      setIsValid(true);
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
      {isValid ? (
        <div className="margin-top-4">
          <Alert id="form-submission-data" type="info">
            <strong>Form Submitted Successfully!</strong>
            <div>Name: {name}</div>
            <div>Email: {email}</div>
            <div>Phone: {phone}</div>
          </Alert>
        </div>
      ) : (
        <></>
      )}
    </Form>
  );
};

const WrapperTemplate: StoryFn<typeof FormWrapper> = () => <FormWrapper />;

export const ContactForm = WrapperTemplate.bind({});
