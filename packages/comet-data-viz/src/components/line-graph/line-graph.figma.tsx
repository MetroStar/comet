import LineGraph from './line-graph';
import figma from '@figma/code-connect';

figma.connect(
  LineGraph,
  'https://www.figma.com/design/U58Pbb84dLaZfvFvdtGVdT/Comet-UI-Kit?node-id=559-11027',
  {
    props: {
      smooth: figma.boolean('Smooth?'),
    },
    example: ({ smooth }) => {
      const chart = {
        title: 'Line graph',
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
      return <LineGraph chart={chart} colors={colors} data={data} smooth={smooth} />;
    },
  },
);
