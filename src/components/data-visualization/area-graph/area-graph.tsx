import React from 'react';
import { VictoryChart, VictoryArea } from 'victory';
import ChartProps from '../chart/chart';

export interface AreaGraphProps {
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
 * Renders a dataset as a single area path.
 */
const AreaGraph: React.FC<AreaGraphProps> = (props: AreaGraphProps) => {
  return (
    <VictoryChart {...props.chart}>
      {props.data.map((d, i) => (
        <VictoryArea
          key={`area-${i}`}
          style={{
            data: {
              fill: props.colors
                ? props.colors[i]
                  ? props.colors[i]
                  : props.colors[0]
                : '#0d7ea2',
            },
          }}
          data={d}
          interpolation={props.smooth && props.smooth ? 'natural' : undefined}
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 },
          }}
        />
      ))}
    </VictoryChart>
  );
};

export default AreaGraph;
