import { Checkbox, CheckboxGroup } from './checkbox';
import figma from '@figma/code-connect';

figma.connect(
  Checkbox,
  'https://www.figma.com/design/U58Pbb84dLaZfvFvdtGVdT/Comet-UI-Kit?node-id=358-1657',
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
      label: figma.string('Value'),
      disabled: figma.enum('state', {
        checked: false,
        'disabled checked': true,
        unchecked: false,
        'disabled unchecked': true,
      }),
    },
    example: ({ checked, label, isTile, disabled }) => {
      return (
        <Checkbox
          id="checkbox"
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
  CheckboxGroup,
  'https://www.figma.com/design/U58Pbb84dLaZfvFvdtGVdT/Comet-UI-Kit?node-id=360-1699',
  {
    props: {
      areTiles: figma.enum('type', {
        tile: true,
        default: false,
      }),
    },
    example: ({ areTiles }) => {
      return (
        <CheckboxGroup
          id="checkbox-group"
          name="checkbox-group"
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
