import { TextInput } from './text-input';
import figma from '@figma/code-connect';

figma.connect(
  TextInput,
  'https://www.figma.com/design/U58Pbb84dLaZfvFvdtGVdT/Comet-UI-Kit?node-id=209-1376',
  {
    props: {
      validationStatus: figma.enum('State', {
        Error: 'error',
        Success: 'success',
      }),
      errors: figma.enum('State', {
        Error: 'Helpful error message',
        Success: undefined,
        Default: undefined,
      }),
      disabled: figma.enum('State', {
        Default: false,
        Disabled: true,
      }),
      mask: figma.enum('Type', {
        'Input mask': 'ssn',
      }),
    },
    example: ({ validationStatus, errors, mask, disabled }) => {
      return (
        <TextInput
          id="text-input"
          label="Text input label"
          validationStatus={validationStatus}
          errors={errors}
          mask={mask}
          disabled={disabled}
        />
      );
    },
  },
);
