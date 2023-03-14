import React from "react";
import { VictoryBarAlignmentType } from "victory";
import ChartProps from "../chart/chart";
export interface BarGraphProps {
    chart: ChartProps;
    color?: string;
    alignment?: VictoryBarAlignmentType;
    barRatio?: number;
    data: number[];
}
declare const BarGraph: React.FC<BarGraphProps>;
export default BarGraph;
