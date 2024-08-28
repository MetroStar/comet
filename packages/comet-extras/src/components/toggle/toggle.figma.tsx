import { Toggle } from './toggle';
import figma from '@figma/code-connect';

figma.connect(
  Toggle,
  'https://www.figma.com/design/U58Pbb84dLaZfvFvdtGVdT/Comet-UI-Kit?node-id=597-11444',
  {
    props: {
      checked: figma.boolean('Checked?'),
    },
    example: ({ checked }) => <Toggle id="toggle" name="toggle" label="Toggle" checked={checked} />,
  },
);
