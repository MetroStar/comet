import { TextArea } from './text-area';
import figma from '@figma/code-connect';

figma.connect(
  TextArea,
  'https://www.figma.com/design/U58Pbb84dLaZfvFvdtGVdT/Comet-UI-Kit?node-id=361-4371',
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
    },
    example: ({ validationStatus, errors, disabled }) => {
      return (
        <TextArea
          id="text-area"
          label="Text input label"
          validationStatus={validationStatus}
          errors={errors}
          disabled={disabled}
        />
      );
    },
  },
);
