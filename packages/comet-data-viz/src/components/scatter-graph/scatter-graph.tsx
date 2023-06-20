import React from 'react';
import { VictoryChart, VictoryScatter } from 'victory';
import ChartProps from '../chart/chart';

export interface ScatterGraphProps {
  /**
   * An object providing chart specific attributes
   */
  chart: ChartProps;
  /**
   * Determines how to scale each data point
   */
  size?: number;
  /**
   * An string array of color values used to colorize chart sections
   */
  colors?: string[];
  /**
   * An array of data points
   */
  data: Array<
    Array<{
      x: number;
      y: number;
    }>
  >;
}

/**
 * Renders a dataset as a series of points.
 */
const ScatterGraph: React.FC<ScatterGraphProps> = (props: ScatterGraphProps) => {
  return (
    <VictoryChart {...props.chart}>
      {props.data.map((d, i) => (
        <VictoryScatter
          key={`scatter-${i}`}
          data={d}
          size={props.size}
          style={{
            data: {
              fill: props.colors
                ? props.colors[i]
                  ? props.colors[i]
                  : props.colors[0]
                : '#0d7ea2',
            },
          }}
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 },
          }}
        />
      ))}
    </VictoryChart>
  );
};

export default ScatterGraph;
