import React from "react";
import ChartProps from "../Chart/Chart";
export interface LineGraphProps {
    chart: ChartProps;
    colors?: string[];
    smooth?: boolean;
    data: Array<Array<{
        x: number;
        y: number;
    }>>;
}
declare const LineGraph: React.FC<LineGraphProps>;
export default LineGraph;
