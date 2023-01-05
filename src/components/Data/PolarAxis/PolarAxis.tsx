import React from "react";
import { VictoryChart, VictoryPolarAxis, VictoryLine } from "victory";
import ChartProps from "../Chart/Chart";

export interface PolarAxisProps {
  chart: ChartProps;
  colors?: string[];
  ticks?: number[];
  data: Array<
    Array<{
      x: number;
      y: number;
    }>
  >;
}

const PolarAxis: React.FC<PolarAxisProps> = (props: PolarAxisProps) => {
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
      {props.data.map((d, i) => {
        const color = props.colors
          ? props.colors[i]
            ? props.colors[i]
            : props.colors[0]
          : "#0d7ea2";

        return (
          <VictoryLine
            key={`line-${i}`}
            style={{
              data: {
                stroke: color,
              },
            }}
            data={d}
            animate={{
              duration: 2000,
              onLoad: { duration: 1000 },
            }}
          />
        );
      })}
    </VictoryChart>
  );
};

export default PolarAxis;
