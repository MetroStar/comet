import React from "react";
import { VictoryChart, VictoryArea } from "victory";
import ChartProps from "../Chart/Chart";

export interface AreaGraphProps {
  chart: ChartProps;
  colors?: string[];
  data: Array<
    Array<{
      x: number;
      y: number;
    }>
  >;
}

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
                : "#0d7ea2",
            },
          }}
          data={d}
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
