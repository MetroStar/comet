import React from "react";
import ChartProps from "../Chart/Chart";
export interface RadialProps {
    chart: ChartProps;
    color?: string;
    ticks?: number[];
    data: number[];
}
declare const Radial: React.FC<RadialProps>;
export default Radial;
