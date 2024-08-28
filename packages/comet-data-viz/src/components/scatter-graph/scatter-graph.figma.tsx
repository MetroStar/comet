import ScatterGraph from './scatter-graph';
import figma from '@figma/code-connect';

figma.connect(
  ScatterGraph,
  'https://www.figma.com/design/U58Pbb84dLaZfvFvdtGVdT/Comet-UI-Kit?node-id=562-10867',
  {
    props: {},
    example: () => {
      const chart = {
        title: 'Scatter graph',
        width: 400,
        height: 400,
      };
      const colors = ['#0d7ea2', '#cd425b'];
      const data = [
        [
          { x: 0, y: 3 },
          { x: 1, y: 9 },
          { x: 2, y: 5 },
          { x: 3, y: 12 },
        ],
        [
          { x: 0, y: 1 },
          { x: 1, y: 2 },
          { x: 2, y: 7 },
          { x: 3, y: 2 },
        ],
      ];
      return <ScatterGraph chart={chart} colors={colors} size={7} data={data} />;
    },
  },
);
