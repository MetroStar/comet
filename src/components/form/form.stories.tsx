import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { FormEvent, useState } from "react";
import { Form, FormProps } from "./form";
import { FormGroup, Button, TextInput, Label, ButtonGroup } from "../..";

const meta: ComponentMeta<typeof Form> = {
  title: "Components/Forms/Form",
  component: Form,
};
export default meta;

const FormWrapper: React.FC<FormProps> = (props: FormProps) => {
  const [name, setName] = useState("");
  const [formSubmittedLabel, setFormSubmittedLabel] = useState("");
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (name === "") {
      setFormSubmittedLabel(`Form submitted with no value`);
    } else {
      setFormSubmittedLabel(`Form submitted with: ${name}`);
    }
  };

  return (
    <Form onSubmit={handleSubmit} isLarge={props.isLarge}>
      <FormGroup>
        <Label htmlFor="input1">Name</Label>
        <TextInput
          id="input1"
          name="input1"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormGroup>
      <ButtonGroup>
        <Button id="submit" type="submit">
          Submit
        </Button>
      </ButtonGroup>
      <Label>{formSubmittedLabel}</Label>
    </Form>
  );
};

const Template: ComponentStory<typeof Form> = (args: FormProps) => (
  <FormWrapper {...args} />
);

export const BasicForm = Template.bind({});
