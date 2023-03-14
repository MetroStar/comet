import React from "react";
import ChartProps from "../chart/chart";
export interface RadialProps {
    chart: ChartProps;
    color?: string;
    ticks?: number[];
    data: number[];
}
declare const Radial: React.FC<RadialProps>;
export default Radial;
