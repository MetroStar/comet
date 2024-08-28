import BarGraph from './bar-graph';
import figma from '@figma/code-connect';

figma.connect(
  BarGraph,
  'https://www.figma.com/design/U58Pbb84dLaZfvFvdtGVdT/Comet-UI-Kit?node-id=559-11560',
  {
    props: {
      chart: figma.enum('Type', {
        Default: {
          title: 'Bar graph',
          width: 400,
          height: 300,
        },
        Horizontal: {
          title: 'Bar graph',
          width: 400,
          height: 300,
          horizontal: true,
        },
      }),
    },
    example: ({ chart }) => {
      const data = [
        { x: 'Cat', y: 2 },
        { x: 'Dog', y: 7 },
        { x: 'Fish', y: 3 },
        { x: 'Snake', y: 1 },
        { x: 'Rabbit', y: 2 },
      ];
      return <BarGraph chart={chart} alignment="start" color="#0d7ea2" barRatio={1} data={data} />;
    },
  },
);
