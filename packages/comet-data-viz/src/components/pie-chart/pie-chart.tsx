import React, { useEffect, useRef } from 'react';
import { VictoryPie } from 'victory';

export interface PieChartProps {
  /**
   * Applies a title attribute to the outer svg element.
   */
  title: string;
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
   * A number of pixels between the center of the chart and the inner edge of a donut chart
   */
  innerRadius?: number;
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
  // Ensures the pie chart svg element has an accessibile label
  const chartRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const wrapperElement = chartRef.current;
    wrapperElement?.querySelector('svg')?.setAttribute('title', props.title);
  });

  return (
    <div ref={chartRef}>
      <VictoryPie
        colorScale={props.colors}
        data={props.data}
        innerRadius={props.innerRadius}
        animate={{
          duration: 2000,
          onLoad: { duration: 1000 },
        }}
      />
    </div>
  );
};

export default PieChart;
