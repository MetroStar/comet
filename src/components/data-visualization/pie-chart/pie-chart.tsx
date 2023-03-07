import React from "react";
import { VictoryPie } from "victory";

export interface PieChartProps {
  colors?: string[];
  angle?: {
    start: number;
    end: number;
  };
  data: Array<{
    x: string;
    y: number;
  }>;
}

const PieChart: React.FC<PieChartProps> = (props: PieChartProps) => {
  return (
    <VictoryPie
      colorScale={props.colors}
      data={props.data}
      animate={{
        duration: 2000,
        onLoad: { duration: 1000 },
      }}
      startAngle={props.angle?.start}
      endAngle={props.angle?.end}
    />
  );
};

export default PieChart;
