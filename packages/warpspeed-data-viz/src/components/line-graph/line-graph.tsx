import React from 'react';
import { VictoryChart, VictoryLine } from 'victory';
import ChartProps from '../chart/chart';

export interface LineGraphProps {
  /**
   * An object providing chart specific attributes
   */
  chart: ChartProps;
  /**
   * An string array of color values used to colorize chart sections
   */
  colors?: string[];
  /**
   * Whether or not to display smooth chart lines
   */
  smooth?: boolean;
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
 * Renders a dataset as a single line path.
 */
const LineGraph: React.FC<LineGraphProps> = (props: LineGraphProps) => {
  return (
    <VictoryChart {...props.chart}>
      {props.data.map((d, i) => (
        <VictoryLine
          key={`line-${i}`}
          style={{
            data: {
              stroke: props.colors
                ? props.colors[i]
                  ? props.colors[i]
                  : props.colors[0]
                : '#0d7ea2',
            },
          }}
          data={d}
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 },
          }}
          interpolation={props.smooth && props.smooth ? 'natural' : undefined}
        />
      ))}
    </VictoryChart>
  );
};

export default LineGraph;
