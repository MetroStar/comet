import React from "react";
import ChartProps from "../chart/chart";
export interface AreaGraphProps {
    chart: ChartProps;
    colors?: string[];
    smooth?: boolean;
    data: Array<Array<{
        x: number;
        y: number;
    }>>;
}
declare const AreaGraph: React.FC<AreaGraphProps>;
export default AreaGraph;
