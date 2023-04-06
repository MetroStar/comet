import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Form, FormGroup, Label, TextInput, TextArea } from '../..';
import { CharacterCount, CharacterCountContainer, CharacterCountProps } from './character-count';

const meta: Meta<typeof CharacterCount> = {
  title: 'Components/Forms/Character Count',
  component: CharacterCount,
  argTypes: {
    id: { requred: true },
  },
};
export default meta;

const Template: StoryFn<typeof CharacterCount> = (args: CharacterCountProps) => (
  <Form>
    <CharacterCountContainer id={args.id}>
      <FormGroup>
        <Label htmlFor="with-hint-input">Text input</Label>
        <span id="with-hint-input-hint" className="usa-hint">
          This is an input with a character counter.
        </span>
        <TextInput
          id="with-hint-input"
          className="usa-character-count__field"
          maxLength={25}
          name="with-hint-input"
          aria-describedby="with-hint-input-info with-hint-input-hint"
        />
      </FormGroup>
      <CharacterCount id="with-hint-input-info">You can enter up to 25 characters</CharacterCount>
    </CharacterCountContainer>
  </Form>
);

export const InputExample = Template.bind({});
InputExample.args = {
  id: 'character-count-1',
};

const TextAreaTemplate: StoryFn<typeof CharacterCount> = (args: CharacterCountProps) => (
  <Form>
    <CharacterCountContainer id={args.id}>
      <FormGroup>
        <Label htmlFor="with-hint-textarea">Textarea</Label>
        <span id="with-hint-textarea-hint" className="usa-hint">
          This is a textarea with a character counter.
        </span>
        <TextArea
          id="with-hint-textarea"
          maxLength={50}
          rows={5}
          className="usa-character-count__field"
          name="with-hint-textarea"
          aria-describedby="with-hint-textarea-info with-hint-textarea-hint"
        />
      </FormGroup>
      <CharacterCount id="with-hint-textarea-info">
        You can enter up to 50 characters
      </CharacterCount>
    </CharacterCountContainer>
  </Form>
);

export const TextAreaExample = TextAreaTemplate.bind({});
TextAreaExample.args = {
  id: 'character-count-2',
};
