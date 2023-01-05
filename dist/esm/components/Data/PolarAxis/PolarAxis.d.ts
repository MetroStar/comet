import React from "react";
import ChartProps from "../Chart/Chart";
export interface PolarAxisProps {
    chart: ChartProps;
    colors?: string[];
    ticks?: number[];
    data: Array<Array<{
        x: number;
        y: number;
    }>>;
}
declare const PolarAxis: React.FC<PolarAxisProps>;
export default PolarAxis;
