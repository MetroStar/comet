import PolarAxis from './polar-axis';
import figma from '@figma/code-connect';

figma.connect(
  PolarAxis,
  'https://www.figma.com/design/U58Pbb84dLaZfvFvdtGVdT/Comet-UI-Kit?node-id=562-10809',
  {
    props: {},
    example: () => {
      const chart = {
        title: 'Polar Axis',
        width: 400,
        height: 400,
      };
      const data = [1, 3, 5, 1, 2, 1, 5];
      return <PolarAxis chart={chart} color="#0d7ea2" data={data} />;
    },
  },
);
