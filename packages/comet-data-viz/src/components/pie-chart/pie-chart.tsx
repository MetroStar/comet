import React from 'react';
import { VictoryPie } from 'victory';

export interface PieChartProps {
  /**
   * An string color scale or array of hex values used to colorize chart sections
   */
  colors?:
    | 'grayscale'
    | 'qualitative'
    | 'heatmap'
    | 'warm'
    | 'cool'
    | 'red'
    | 'green'
    | 'blue'
    | string[];
  /**
   * An array of data values
   */
  data: Array<{
    x: string;
    y: number;
  }>;
}

/**
 * Renders a dataset as a pie chart.
 */
const PieChart: React.FC<PieChartProps> = (props: PieChartProps) => {
  return (
    <VictoryPie
      colorScale={props.colors}
      data={props.data}
      animate={{
        duration: 2000,
        onLoad: { duration: 1000 },
      }}
    />
  );
};

export default PieChart;
