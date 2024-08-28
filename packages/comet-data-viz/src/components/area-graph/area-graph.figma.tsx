import AreaGraph from './area-graph';
import figma from '@figma/code-connect';

figma.connect(
  AreaGraph,
  'https://www.figma.com/design/U58Pbb84dLaZfvFvdtGVdT/Comet-UI-Kit?node-id=559-11396',
  {
    props: {
      smooth: figma.boolean('Smooth?'),
    },
    example: ({ smooth }) => {
      const chart = {
        height: 400,
        title: 'Area graph',
        width: 600,
      };
      const colors = ['#0d7ea2', '#cd425b'];
      const data = [
        [
          { x: 0, y: 3 },
          { x: 1, y: 9 },
          { x: 2, y: 5 },
          { x: 3, y: 12 },
          { x: 4, y: 6 },
          { x: 5, y: 10 },
        ],
        [
          { x: 0, y: 1 },
          { x: 1, y: 4 },
          { x: 2, y: 7 },
          { x: 3, y: 2 },
          { x: 4, y: 5 },
          { x: 5, y: 7 },
        ],
      ];
      return <AreaGraph chart={chart} colors={colors} smooth={smooth} data={data} />;
    },
  },
);
