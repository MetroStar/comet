import React from "react";
import { VictoryChart, VictoryBar, VictoryPolarAxis } from "victory";
import ChartProps from "../Chart/Chart";

export interface RadialProps {
  chart: ChartProps;
  color?: string;
  ticks?: number[];
  data: number[];
}

const Radial: React.FC<RadialProps> = (props: RadialProps) => {
  return (
    <VictoryChart {...props.chart} polar>
      <VictoryPolarAxis
        dependentAxis
        style={{
          axis: { stroke: "none" },
          tickLabels: { fill: "none" },
          grid: { stroke: "grey", strokeDasharray: "4, 8" },
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

export default Radial;
