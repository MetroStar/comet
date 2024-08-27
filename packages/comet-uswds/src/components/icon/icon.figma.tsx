import { Icon } from './icon';
import figma from '@figma/code-connect';

figma.connect(
  Icon,
  'https://www.figma.com/design/U58Pbb84dLaZfvFvdtGVdT/Comet-UI-Kit?node-id=15-38',
  {
    props: {
      size: figma.enum('Size', {
        '3': 'size-3',
        '4': 'size-4',
        '5': 'size-5',
        '6': 'size-6',
        '7': 'size-7',
        '8': 'size-8',
        '9': 'size-9',
      }),
    },
    example: ({ size }) => <Icon id="icon" size={size} type="accessibility_new" />,
  },
);
