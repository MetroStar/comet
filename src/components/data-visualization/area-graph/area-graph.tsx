import React from "react";
import { VictoryChart, VictoryArea } from "victory";
import ChartProps from "../chart/chart";

export interface AreaGraphProps {
  chart: ChartProps;
  colors?: string[];
  smooth?: boolean;
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
          interpolation={props.smooth && props.smooth ? "natural" : undefined}
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
