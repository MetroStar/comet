import Button from '../button';
import { Tooltip } from './tooltip';
import figma from '@figma/code-connect';

figma.connect(
  Tooltip,
  'https://www.figma.com/design/U58Pbb84dLaZfvFvdtGVdT/Comet-UI-Kit?node-id=557-10788',
  {
    props: {
      position: figma.enum('Direction', {
        Top: 'top',
        Bottom: 'bottom',
        Left: 'left',
        Right: 'right',
      }),
    },
    example: ({ position }) => (
      <Tooltip label="Tooltip" position={position}>
        <Button id="button">Button with a tooltip</Button>
      </Tooltip>
    ),
  },
);
