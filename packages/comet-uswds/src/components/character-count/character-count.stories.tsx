import React from 'react';
import { Meta } from '@storybook/react-vite';
import { Form, TextInput, TextArea } from '../..';
import { CharacterCount, CharacterCountContainer, CharacterCountProps } from './character-count';

const meta: Meta<typeof CharacterCount> = {
  title: 'USWDS/Forms/Character Count',
  component: CharacterCount,
  argTypes: {
    id: { required: true },
  },
};
export default meta;

export const InputExample = {
  args: {
    id: 'character-count-1',
  },
  render: (args: CharacterCountProps) => (
    <Form id="form-1">
      <CharacterCountContainer id={args.id}>
        <TextInput
          id="with-hint-input"
          className="usa-character-count__field"
          maxLength={25}
          name="with-hint-input"
          label="Text input"
          helperText="This is an input with a character counter."
        />
        <CharacterCount id="with-hint-input-info">You can enter up to 25 characters</CharacterCount>
      </CharacterCountContainer>
    </Form>
  ),
};

export const TextAreaExample = {
  args: {
    id: 'character-count-2',
  },
  render: (args: CharacterCountProps) => (
    <Form id="form-2">
      <CharacterCountContainer id={args.id}>
        <TextArea
          id="with-hint-textarea"
          maxLength={50}
          rows={5}
          className="usa-character-count__field"
          label="Textarea"
          helperText="This is a textarea with a character counter."
        />
        <CharacterCount id="with-hint-textarea-info">
          You can enter up to 50 characters
        </CharacterCount>
      </CharacterCountContainer>
    </Form>
  ),
};
