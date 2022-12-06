import React from "react";
import { VictoryChart, VictoryLine } from "victory";
import ChartProps from "../Chart/Chart";

export interface LineGraphProps {
  chart: ChartProps;
  color?: string;
  data: Array<{
    x: number;
    y: number;
  }>;
}

const LineGraph: React.FC<LineGraphProps> = (props: LineGraphProps) => {
  return (
    <VictoryChart {...props.chart}>
      <VictoryLine
        style={{
          data: { stroke: props.color },
        }}
        data={props.data}
      />
    </VictoryChart>
  );
};

export default LineGraph;
