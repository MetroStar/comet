import TextInput from '../text-input';
import { CharacterCount, CharacterCountContainer } from './character-count';
import figma from '@figma/code-connect';

figma.connect(
  CharacterCount,
  'https://www.figma.com/design/U58Pbb84dLaZfvFvdtGVdT/Comet-UI-Kit?node-id=207-1237',
  {
    props: {
      body: figma.boolean('Over limit?', {
        true: '4 characters over limit',
        false: '25 characters allowed',
      }),
    },
    example: ({ body }) => {
      return (
        <CharacterCountContainer id="character-count-1">
          <TextInput
            className="usa-character-count__field"
            helperText="This is an input with a character counter."
            id="with-hint-input"
            label="Text input"
            maxLength={25}
            name="with-hint-input"
          />
          <CharacterCount id="with-hint-input-info">{body}</CharacterCount>
        </CharacterCountContainer>
      );
    },
  },
);
