import { ComboBox } from './combo-box';
import figma from '@figma/code-connect';

figma.connect(
  ComboBox,
  'https://www.figma.com/design/U58Pbb84dLaZfvFvdtGVdT/Comet-UI-Kit?node-id=239-2833',
  {
    props: {
      errors: figma.enum('state', {
        error: 'Helpful error message',
        default: undefined,
      }),
      defaultValue: figma.enum('state', {
        'option selected': 'apple',
        default: undefined,
      }),
      disabled: figma.enum('state', {
        Default: false,
        Disabled: true,
      }),
    },
    example: ({ defaultValue, errors, disabled }) => {
      return (
        <ComboBox
          id="combo-box"
          label="Select your desired fruit"
          defaultValue={defaultValue}
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
