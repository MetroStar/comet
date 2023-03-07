import React from "react";
import { VictoryChart, VictoryBar, VictoryBarAlignmentType } from "victory";
import ChartProps from "../chart/chart";

export interface BarGraphProps {
  chart: ChartProps;
  color?: string;
  alignment?: VictoryBarAlignmentType;
  barRatio?: number;
  data: number[];
}

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
