import { Meta, StoryFn } from '@storybook/react';
import React, { FormEvent, useState } from 'react';
import { Form, FormProps } from './form';
import { Alert, Button, Select, TextInput } from '../..';

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
  const [gender, setGender] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isValid, setIsValid] = useState(false);

  const validateName = (value: string): boolean => {
    if (value === '') {
      setNameError('This field is required');
      return false;
    } else {
      setNameError('');
      return true;
    }
  };

  const validateEmail = (value: string): boolean => {
    if (value === '') {
      setEmailError('This field is required');
      return false;
    } else {
      setEmailError('');
      return true;
    }
  };

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    const isNameValid = validateName(name);
    const isEmailValid = validateEmail(email);
    if (!isNameValid || !isEmailValid) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };

  return (
    <Form id="contact-form" onSubmit={handleSubmit} className="width-tablet">
      <TextInput
        id="name"
        name="name"
        required
        label="Name"
        helperText="Enter your full name (first and last)"
        errors={nameError}
        validationStatus={nameError ? 'error' : undefined}
        onChange={(e) => {
          setName(e.target.value);
          validateName(e.target.value);
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
        onChange={(e) => {
          setEmail(e.target.value);
          validateEmail(e.target.value);
        }}
      />
      <TextInput
        id="phone"
        name="phone"
        label="Phone Number"
        helperText="Enter your phone number"
        mask="phone_number"
        onChange={(e) => setPhone(e.target.value)}
      />
      <Select
        id="gender"
        name="gender"
        options={[
          { value: 'male', label: 'Male' },
          { value: 'female', label: 'Female' },
          { value: 'undeclared', label: 'Undeclared' },
        ]}
        label="Gender"
        helperText="Select from the list below"
        onChange={(e) => setGender(e.target.value)}
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
            <div>Gender: {gender}</div>
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
