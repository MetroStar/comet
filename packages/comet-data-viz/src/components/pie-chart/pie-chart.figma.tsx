import PieChart from './pie-chart';
import figma from '@figma/code-connect';

figma.connect(
  PieChart,
  'https://www.figma.com/design/U58Pbb84dLaZfvFvdtGVdT/Comet-UI-Kit?node-id=559-11297',
  {
    props: {
      innerRadius: figma.enum('Type', {
        Default: 0,
        'Donut chart': 100,
      }),
    },
    example: ({ innerRadius }) => {
      const data = [
        { x: 'Cat', y: 2 },
        { x: 'Dog', y: 7 },
        { x: 'Fish', y: 3 },
        { x: 'Snake', y: 1 },
        { x: 'Rabbit', y: 2 },
      ];
      return (
        <PieChart
          title="Pie Chart"
          height={400}
          width={400}
          colors="warm"
          data={data}
          innerRadius={innerRadius}
        />
      );
    },
  },
);
