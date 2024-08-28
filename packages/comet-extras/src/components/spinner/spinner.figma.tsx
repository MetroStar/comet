import { Spinner } from './spinner';
import figma from '@figma/code-connect';

figma.connect(
  Spinner,
  'https://www.figma.com/design/U58Pbb84dLaZfvFvdtGVdT/Comet-UI-Kit?node-id=597-11291',
  {
    props: {
      type: figma.enum('Type', {
        Small: 'small',
        Large: 'large',
      }),
    },
    example: ({ type }) => <Spinner id="spinner" type={type} loadingText="Loading..." />,
  },
);
