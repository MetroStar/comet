import React from 'react';
import { VictoryArea, VictoryChart, VictoryStack } from 'victory';
import ChartProps from '../chart/chart';

export interface StackGraphProps {
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
 * Renders a given set of children in a stacked layout.
 */
const StackGraph: React.FC<StackGraphProps> = (props: StackGraphProps) => {
  return (
    <VictoryChart {...props.chart}>
      <VictoryStack>
        {props.data.map((d, i) => (
          <VictoryArea
            key={`stack-${i}`}
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
      </VictoryStack>
    </VictoryChart>
  );
};

export default StackGraph;
