import { RadioButton, RadioButtonGroup } from './radio-button';
import figma from '@figma/code-connect';

figma.connect(
  RadioButton,
  'https://www.figma.com/design/U58Pbb84dLaZfvFvdtGVdT/Comet-UI-Kit?node-id=361-3408',
  {
    props: {
      isTile: figma.enum('type', {
        tile: true,
        default: false,
      }),
      checked: figma.enum('state', {
        checked: true,
        'disabled checked': true,
        unchecked: false,
        'disabled unchecked': false,
      }),
      label: figma.string('value'),
      disabled: figma.enum('state', {
        checked: false,
        'disabled checked': true,
        unchecked: false,
        'disabled unchecked': true,
      }),
    },
    example: ({ checked, label, isTile, disabled }) => {
      return (
        <RadioButton
          id="radio-button"
          label={label}
          defaultChecked={checked}
          isTile={isTile}
          disabled={disabled}
        />
      );
    },
  },
);

figma.connect(
  RadioButtonGroup,
  'https://www.figma.com/design/U58Pbb84dLaZfvFvdtGVdT/Comet-UI-Kit?node-id=361-4085',
  {
    props: {
      areTiles: figma.enum('type', {
        tile: true,
        default: false,
      }),
    },
    example: ({ areTiles }) => {
      return (
        <RadioButtonGroup
          id="radio-button-group"
          name="radio-button-group"
          label="Select any historical figure"
          areTiles={areTiles}
          data={[
            {
              defaultChecked: true,
              label: 'Sojourner Truth',
              value: 'Sojourner Truth',
            },
            {
              defaultChecked: false,
              label: 'Frederick Douglass',
              value: 'Frederick Douglass',
            },
            {
              defaultChecked: false,
              label: 'Booker T. Washington',
              value: 'Booker T. Washington',
            },
            {
              defaultChecked: false,
              label: 'George Washington Carver',
              value: 'George Washington Carver',
            },
          ]}
        />
      );
    },
  },
);
