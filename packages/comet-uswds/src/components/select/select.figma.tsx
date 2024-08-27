import { Select } from './select';
import figma from '@figma/code-connect';

figma.connect(
  Select,
  'https://www.figma.com/design/U58Pbb84dLaZfvFvdtGVdT/Comet-UI-Kit?node-id=352-2114',
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
        <Select
          id="select"
          label="Select label"
          errors={errors}
          disabled={disabled}
          options={[
            {
              label: 'Apple',
              value: 'apple',
            },
            {
              label: 'Apricot',
              value: 'apricot',
            },
            {
              label: 'Avocado',
              value: 'avocado',
            },
            {
              label: 'Banana',
              value: 'banana',
            },
            {
              label: 'Blackberry',
              value: 'blackberry',
            },
          ]}
        />
      );
    },
  },
);
