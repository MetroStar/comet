import { DatePicker } from './date-picker';
import figma from '@figma/code-connect';

figma.connect(
  DatePicker,
  'https://www.figma.com/design/U58Pbb84dLaZfvFvdtGVdT/Comet-UI-Kit?node-id=260-4719',
  {
    props: {
      disabled: figma.enum('state', {
        default: false,
        disabled: true,
      }),
    },
    example: ({ disabled }) => {
      return <DatePicker id="date-picker" label="Select a date" disabled={disabled} />;
    },
  },
);
