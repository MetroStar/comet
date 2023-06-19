import React from 'react';
import { VictoryChart, VictoryBar, VictoryPolarAxis } from 'victory';
import ChartProps from '../chart/chart';

export interface PolarAxisProps {
  /**
   * An object providing chart specific attributes
   */
  chart: ChartProps;
  /**
   * An string array of color values used to colorize chart sections
   */
  color?: string;
  /**
   * An number array of labels for the chart
   */
  ticks?: number[];
  /**
   * An array of data values
   */
  data: number[];
}

/**
 * Renders a single axis polar axis chart with fill.
 */
const PolarAxis: React.FC<PolarAxisProps> = (props: PolarAxisProps) => {
  return (
    <VictoryChart {...props.chart} polar>
      <VictoryPolarAxis
        dependentAxis
        style={{
          axis: { stroke: 'none' },
          tickLabels: { fill: 'none' },
          grid: { stroke: 'grey', strokeDasharray: '4, 8' },
        }}
      />
      <VictoryPolarAxis tickValues={props.ticks} />
      <VictoryBar
        style={{ data: { fill: props.color } }}
        data={props.data}
        animate={{
          duration: 2000,
          onLoad: { duration: 1000 },
        }}
      />
    </VictoryChart>
  );
};

export default PolarAxis;
