import { TimePicker } from './time-picker';
import figma from '@figma/code-connect';

figma.connect(
  TimePicker,
  'https://www.figma.com/design/U58Pbb84dLaZfvFvdtGVdT/Comet-UI-Kit?node-id=363-6121',
  {
    props: {
      errors: figma.enum('state', {
        error: 'Helpful error message',
        default: undefined,
      }),
      disabled: figma.enum('state', {
        default: false,
        disabled: true,
      }),
    },
    example: ({ errors, disabled }) => {
      return (
        <TimePicker
          id="time-picker"
          label="Appointment Time"
          helperText="hh:mm"
          errors={errors}
          disabled={disabled}
        />
      );
    },
  },
);
