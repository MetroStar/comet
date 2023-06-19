import React from 'react';
import { VictoryChart, VictoryBar } from 'victory';
import ChartProps from '../chart/chart';

export interface BarGraphProps {
  /**
   * An object providing chart specific attributes
   */
  chart: ChartProps;
  /**
   * An string value used to colorize chart sections
   */
  color?: string;
  /**
   * A string value indicating how to justify chart data
   */
  alignment?: 'start' | 'middle' | 'end';
  /**
   * A number value indicating the width ratio of the bar to display
   */
  barRatio?: number;
  /**
   * An array of data values
   */
  data: number[];
}

/**
 * Renders a dataset as series of bars.
 */
const BarGraph: React.FC<BarGraphProps> = (props: BarGraphProps) => {
  return (
    <VictoryChart {...props.chart}>
      <VictoryBar
        style={{ data: { fill: props.color } }}
        alignment={props.alignment}
        barRatio={props.barRatio}
        data={props.data}
        animate={{
          duration: 2000,
          onLoad: { duration: 1000 },
        }}
      />
    </VictoryChart>
  );
};

export default BarGraph;
